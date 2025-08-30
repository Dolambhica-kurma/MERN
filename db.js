

const e = require('express');
const  { MongoClient } = require('mongodb');
let db ;
let client;
async function connectDB(){
    if (db){
         return db;
    }
    try{
        const url = "mongodb://localhost:27017";
        const dbName="registrationForm";
        if(!url || !dbName){
            throw new Error("Database URL or name is not defined");
        }
        client = new MongoClient(url);
        await client.connect();
        const db = client.db("students");
        console.log("Connected to mongodb");
        return db;
    }
    catch (error){
        console.error("Failed to connect to Mongodb",error );
        process.exit(1);
    }
}
process.on("SIGINT",async ()=>{
    if  (client){
        await client.close();
        console.log("MongoDB connection closed");
        process.exit(0);
}

});
module.exports = connectDB;
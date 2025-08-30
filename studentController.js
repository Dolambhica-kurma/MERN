const { ObjectId } = require("mongodb");
const connectDB = require("../config/db");

async function getAllStudents(req, res) {
  try {
    const db = await connectDB();

    // REPLACE "student" WITH CORRECT COLLECTION NAME
    const students = await db.collection("studentDB").find({}).toArray();
    
    res.json({
      total : students.length,
      students,
    });
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getAllStudents,
};

import {TextField, Button} from '@mui/material'
import {useState} from 'react';

function RegistrationForm(){
    const [fullname, setFullName] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        if(!fullname){
            alert("PLEASE FIL THE REQUIRED FORM");
            return 
        }
        alert("Successfully submitted: \n" + fullname + "\n phoneNumber: " + PhoneNumber);
        setFullname('');
        setPhoneNumber('');
        setEmail('');
    }

    function handleReset(){
        setFullName('');
    }

     
    return (
        <div>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <TextField
                    label = "Full Name"
                    value = {fullname}
                    onChange = { (e) => setFullName(e.target.value)}
                    required
                    fullWidth
                    margin="normal">
                    </TextField>


                    <TextField
                    label = "Phone Number"
                    value = {PhoneNumber}
                    onChange = { (e) => setPhoneNumber(e.target.value)}
                    required
                    fullWidth
                    margin="normal">
                    </TextField>

                    <TextField
                    label = "Email"
                    value = {email}
                    onChange = { (e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal">
                    </TextField>
                    
                    

                    <Button
                        type = "submit"
                        variant = "contained"            
                        color = "primary"
                    >Submit</Button>

                    

                    <Button
                        type = "reset"
                        variant = "contained"
                        color = "secondary"
                    >Reset</Button>





                
            </form>

        </div>
    );
}

export default RegistrationForm;
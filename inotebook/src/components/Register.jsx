import React from "react";
import { Input, Stack } from "@chakra-ui/react";
import { Button} from '@chakra-ui/react';
import { useState } from "react";

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = async () => {
  
        const payload = {
            name,
            email,
            pass,
            age
        }
        console.log(payload);
      fetch('http://localhost:8080/users/register', {
            method: "POST",
            body: JSON.stringify(payload),
            headers : {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
 
  return (
    <div style = {{width: "60%", margin: "50px auto"}}>
  
      <Stack spacing={3}>
        <Input variant="filled" placeholder="Name" value = {name} onChange = {(e) => setName(e.target.value)}/>
        <Input variant="filled" placeholder="Email" value = {email} onChange = {(e) => setEmail(e.target.value)}/>
        <Input variant="filled" placeholder="Password" value = {pass} onChange = {(e) => setPass(e.target.value)}/>
        <Input variant="filled" placeholder="age" value = {age} onChange = {(e) => setAge(e.target.value)}/>
        <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
    </div>
  );
}

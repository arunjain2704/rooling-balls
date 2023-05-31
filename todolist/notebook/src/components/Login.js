import React, { useState } from 'react'
import {useNavigate}from'react-router'
const Login = () => {
 const[credentials,setCredentials]=useState({email:"",password:""});
let history=useNavigate();

 const handlesubmit=async (e)=>{
   e.preventDefault();
   const response = await fetch(`http://localhost:3005/login`,{
    method: "POST", 
   headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({email:credentials.email,password:credentials.password})

});
const json =await response.json();
console.log(json);
if(json.success)
{
localStorage.setItem('token',json.authtoken);
history("/home");
}
else{
    alert("invalid");
}
}


const on = (e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value,})
  }

return (
    <>
   
   <form  onSubmit={handlesubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={on} value={credentials.email} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={on} value={credentials.password} aria-describedby="emailHelp"/>
  </div>
  <button type=" submit" className="btn btn-primary">Submit</button>
</form>

    </>
  )
}

export default Login

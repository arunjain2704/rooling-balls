import React, { useState } from 'react'
import {useNavigate}from'react-router'
const Signup = () => {
  const[credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
  let history=useNavigate();

  
 const handlesubmit=async (e)=>{
  e.preventDefault();
 const {name,email,password}=credentials;
  const response = await fetch(`http://localhost:3005/empdata`,{

 
  method: "POST", 
  headers:{
     "Content-Type":"application/json"
   },
   body: JSON.stringify({name,email,password})

});
const json =await response.json();
console.log(json);

localStorage.setItem('token',json.authtoken);
history("/home");


 }

const on = (e)=>{
   setCredentials({ ...credentials, [e.target.name]: e.target.value,})
 }
  
  
  return (
    <>
   <div className='container'>
     <form  onSubmit={handlesubmit}>
  
     <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' onChange={on} value={credentials.name} aria-describedby="emailHelp"/>
  </div>
  
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' onChange={on} value={credentials.email} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' onChange={on} value={credentials.password} aria-describedby="emailHelp"/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={on} value={credentials.cpassword} aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
 </div>
    </>
  )
}

export default Signup

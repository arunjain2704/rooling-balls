 import React from 'react'
import { Link   } from 'react-router-dom'
import {useNavigate}from'react-router'
import "./navbar.css"  
export const Navbar = () => {
    let history=useNavigate();
  const handlelogout=()=>{
 
        localStorage.removeItem('token');
        history("/login");
   }
  
  return (
     <nav className="navbar navbar-expand-lg bg-body-tertiary"  >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home" id='color'>Notebook</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home" id='color'>Home</Link>
          </li>
        
          
        
        </ul>
       
          {!localStorage.getItem('token')?
        <form  form className='d-flex'>
          <Link className="btn btn-outline-primary mx-1"  to="/login"  role='button'>login</Link>
          <Link className="btn btn-outline-primary mx-1 "  to="/signup"  role='button'>  Signup</Link>
            </form>:<button onClick={handlelogout} className='btn.btn-primary'>Logout</button>}
      
      </div>
    </div>
  </nav>     
  
  
  
  
  )
 }
 

 
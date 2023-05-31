import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import "./addnote.css"
  




const AddNote = () => {
   const context= useContext(noteContext);
   const {notes,addNote} =context;

const[note,setNote]=useState({title:"",description:"",tag:"default"})

    const handleClick=(e)=>{
        e.preventDefault();

     addNote(note.title,note.description,note.tag); 

    }
    const onChange=(e)=>{
    
    setNote({...note,[e.target.name]: e.target.value})
        
    }
    return (
   
   
   
   <div>
       <h2>ADD NOTE</h2>
       <form>
   <div className="mb-3">
    <label htmlFor="title" className="form-label" id='tit'>Title</label>
    <input type="text" className="form-control" name ="title" aria-describedby="emailHelp" onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="description" className="form-label" id='tit'>Description</label>
    <input type="text" className="form-control" id="description" name="description" onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="tag" className="form-label" id='tit'>Tag</label>
    <input type="text" className="form-control" id="tag" name="tag"onChange={onChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
    
    </div>
  )
}

export default AddNote;

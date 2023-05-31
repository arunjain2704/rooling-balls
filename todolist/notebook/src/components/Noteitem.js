import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"
import"./noteitem.css"
 const Noteitem = (props) => {
  const context=useContext(noteContext);
  const {note,updateNote}=props;

 const {deleteNote}=context;
    return (
    <div className='col-md-3' >
    <div className="card">
  
  <div className="card-body" id='card'>
    <h5 className="card-title" id='title'><span>Title--</span>{note.title}</h5>
    <p className="card-text" id='title'><span>Description--</span>{note.description}</p>
    <p className="card-text" id='title'><span>Tag--</span>{note.tag}</p>
   <button style={{margin: "3px",fontWeight:"bolder",color:"#35e8ca",backgroundColor:'black'}} onClick={()=>{updateNote(note)}}>upd</button>   <button style={{margin: "3px",fontWeight:"bolder",color:"red",backgroundColor:"black"}} onClick={()=>{deleteNote(note._id)}}>del</button>
 
  </div>
</div>
    </div>
  )
}

export default Noteitem

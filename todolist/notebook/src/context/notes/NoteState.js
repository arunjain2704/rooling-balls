
import React, { useState } from "react";
import NoteContext from "./noteContext";



const NoteState=(props)=>{ 

   const host="http://localhost:3005"
    
   
const notesInitial=[]

const [notes,setNotes] = useState(notesInitial)
//get all note
const getNotes= async ()=>{
  const response = await fetch(`${host}/fetchallnotes`, {
    method:'POST', 

    headers: {
      "Content-Type": "application/json",
       "auth-token": localStorage.getItem('token')

    }
  });

 const json=await response.json()
  console.log(json);
 setNotes(json);
}


//ADD NOTE 

const addNote= async (title,description,tag)=>{
  const response = await fetch(`${host}/addnote`, {
    method: "POST", 

    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')    },

    body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
  });

 const  json =await  response.json();
console.log(json);

  console.log("ADDIng new note" );
  const note= {
    "_id": "641eb5e73a9acd075930bf7f",
        "user": "641d98119801accdbea03d4b",
    "title": title,
    "description": description,
    "tag": tag,
    "__v": 0
  };
setNotes(notes.concat(note))
}

//delete note
const deleteNote = async (id)=>{
  const response = await fetch(`${host}/deletenote/${id}`, {
    method: "DELETE", 

    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')    },
  });
  const json =response.json(); // parses JSON response into native JavaScript objects

 console.log(json);

  console.log("delete"+id);
const newNotes=notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)

}



//edit note

const editNote = async (id,title,description,tag)=>{


  const response = await fetch(`${host}/updatenote/${id}`,{
    method: "PUT", 

    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')    },
 
    body: JSON.stringify(title,description,tag), // body data type must match "Content-Type" header
  });
  const json =response.json(); // parses JSON response into native JavaScript objects
console.log(json)
           //api call
let newNotes=JSON.parse(JSON.stringify(notes))

  for(let index=0;index<notes.length;index++)
{
const element=notes[index];
if(element._id===id)
{
  newNotes[index].title=title;
  newNotes[index].description=description;
  newNotes[index].tag=tag;
}
break;
}
    setNotes(newNotes);
}

return(

 <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}> {/*value mai vo likha jo hum br br use krna chchte */}
 {props.children}

</NoteContext.Provider>

)

}


export default NoteState;
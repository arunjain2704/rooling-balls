import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import {useNavigate}from'react-router'
const Notes = () => {
  let history=useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes,editNote } = context;
  const ref = useRef(null);
  const refClose=useRef(null)
  const [note, setNote] = useState({
    id:"" ,
    etitle: "",
    edescription: "",
    etag: "default",
  });

  useEffect(() => {
   if(localStorage.getItem('token'))
   {    
   getNotes();
   }
  }, []);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id:currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

 
  const handleClick = (e) => {
    console.log("updating ", note);
    editNote(note.id,note.etitle,note.edescription,note.etag)  
    refClose.current.click();
   
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote/>

      <button
        style={{ display: "none" }}
        ref={ref}
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                EDIT NOTE
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    value={note.title}
                    onChange={onChange}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.description}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.tag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
             
                data-bs-dismiss="modal"
               ref={refClose}
             >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                update note
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" container row my-3">
       
       {notes.length===0 && 'no notes to display'}
        {notes.map((note) => {
       return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;

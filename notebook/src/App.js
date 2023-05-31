
import './App.css';
import React from 'react';

function App() {
 
 let myobj={
     border:"2px solid red",
     height:"200px"
    }
 let mypara={
   width:"300px",
  border:"2px solid blue",
 backgroundColor:"lightgreen",
  height:"150px",
padding:"auto" 
}
 
  return (
     <>
    <div style={myobj}>
  
    <p style={mypara}> this is a one </p>
    {/* <p style={mypara}>  this is a two</p>
    <p style={mypara}>  this is a three</p> */}
   
    </div>
  
  
    </>
  );
}

export default App;

import React from 'react'
import  {useState} from 'react'
function Clock() {
    let newtime=new Date().toLocaleTimeString();
   
    let [ctime,setime]=useState(newtime);
  
   let change=()=>{
    let newtime=new Date().toLocaleTimeString();
      setime(newtime);
   };
  
    return (
      <div>
      <p>{ctime}</p>
       <button onClick={change}>gettime</button>    
      </div>
    );
}

export default Clock

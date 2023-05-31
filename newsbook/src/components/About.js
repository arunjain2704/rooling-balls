
import React from 'react'

export default function About() {
  
let btn={
      
    main:{
    backgroundColor : "red",
     color:"black",
     display:"flex",
   listStyle: 'none',
    padding:"10px",
    }
}
  
 return (
   <div>
  <nav>
     <ul style={btn.main}>
           <li style={btn.main}>home</li>
           <li style={btn.main}> about</li>
           <li style={btn.main}> contact</li>    
            <li style={btn.main}>phone  </li>
    </ul>    
   </nav>   
 

    </div>
  )
}

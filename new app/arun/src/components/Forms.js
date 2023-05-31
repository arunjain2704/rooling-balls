import React ,{useState} from 'react'

function Forms() {
   
    let [fullname,setfullname]=useState({
      
        fname:'',
        lname:'',
    });
   
    let name1 = {};
     
    let onsubmit=(event)=>{
       event.preventDefault();
             
       let value=event.target.value;
       let name=event.target.name;

       console.log(fullname)
      
        
      if(name==='fname')
       {
         name1 = {  
            fname:value,
            lname:fullname.lname,
           };
       }
   
     else {
        name1 = {  
            fname:fullname.fname,
            lname:value,
           };

     }
     setfullname(name1);
    
   
        }
       
       
       let inputevent =(event)=>
         {
                
            //    console.log(event.target.value);
            //     console.log(event.target.name);
              setfullname(event.target.value);
            //    let name=event.target.name;
  
            //    console.log(fullname)
              
                
            //   if(name==='fname')
            //    {
            //      name1 = {  
            //         fname:value,
            //         lname:fullname.lname,
            //        };
            //    }
           
            //  else {
            //     name1 = {  
            //         fname:fullname.fname,
            //         lname:value,
            //        };

            //  }
            //  setfullname(name1);
            
   }
   

    
    
    return ( 
    
       <div> 
      <h1>form {fullname.fname} {fullname.lname}</h1>
        <form onSubmit={onsubmit} >
      <input type="text" name='fname' placeholder='enter your name' onChange={inputevent} value={fullname.fname} />
      <input type="text"  name='lname' placeholder='enter your lastname' onChange={inputevent} value={fullname.lname}/>
    
    <button>click</button>
       </form>
    </div>
 
    )
}

export default Forms

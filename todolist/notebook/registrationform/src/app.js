const  express= require("express");
var cors = require('cors')
const app=express();
let port=3005;

app.use(cors());
const{body,validationResult}=require('express-validator');
const empCollection=require('./model/model');
const notesCollection=require('./model/notes');
const bcrypt =require('bcryptjs');
var jwt=require('jsonwebtoken');
const JWT_SECRET="arunisgood";
var fetchuser=require('../middleware/fetchuser')
//db connect  
require('./db/db'); 
 

app.use(express.json());   
 


app.post('/empdata',[
   body('name','enter valid name').isLength({min:3}),
   body('email','enter valid email').isEmail(),
   body('password','enter valid password').isLength({min:5}),
], async (req,res)=>{
 try{
    let success=false;
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
    
   let user= await empCollection.findOne({email:req.body.email});
  
    
   // check user is exist or not 
    if(user)
    {
return res.status(404).send({ success,error:"user already exists"});

    }
   
    // agar unique user hai to ye save krdegaa
    else{
    const salt=  await bcrypt.genSalt(10);
     const secPass= await bcrypt.hash(req.body.password,salt);

   user = await empCollection.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data={
      user:{
         id:user.id
      }
    }
   //  console.log(user)
    const authtoken=jwt.sign(data,JWT_SECRET);
     success=true;
    res.json({ success,authtoken})
    console.log(authtoken);
   }
  
   }
catch(error){
    res.send(error);
 }

})

//    login validation process

app.post('/login', [
   body('email','enter valid email').isEmail(),
   body('password','password cannot blank').exists(),//passowrd blank ni hoga
],async(req,res)=>{
 
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }
   const {email,password}=req.body;
    console.log(email);
    console.log(password);
    try{
     let user= await empCollection.findOne({email});
      console.log(user);
    if(!user)
   {
      success=false;
      return res.status(400).json({ success,errors: "sorry login with perfect email"});

  } 
    
    const passwordCompare=  await bcrypt.compare(password,user.password); 
if(!passwordCompare) 
{
   return res.status(400).json({ errors: "sorry login with perfect password "});
}
 else{
  console.log("yessssssssssssssss");
 
const data={
   user:{
      id:user.id
   }
}
 const authtoken=jwt.sign(data,JWT_SECRET);
  success=true;
 res.json({success,authtoken})
 console.log(authtoken);

 }
}catch(error){

     console.log("error occured in login page");

    }



   })

app.get('/getuser',fetchuser, async (req,res)=>{
 try{
const userId=req.user.id;
const user= await empCollection.findById(userId).select("-password");
 console.log(user);
 res.send(user);


 
 }catch(error){

   console.log("error occured in getuser page");

  }


})



//fetching notess of authorised userr


app.post('/fetchallnotes',fetchuser,async (req,res)=>{

const notes= await notesCollection.find({user:req.user.id});
res.json(notes);
})

// add notess here 

app.post('/addnote',[
 body('title','enter title').isLength({min:3}),
body('description','enter description').isLength({min:5}),
], fetchuser,async (req,res)=>{
console.log("in ");
   try{
    
      const {title,description,tag}=req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
     const note=new notesCollection({
      title,description,tag,user:req.user.id

     })
     const saveNote=await note.save();
     res.json(saveNote);
       
      }
      catch(error)
      {


      }   


})


//update the noteee with authorisedd user

app.put('/updatenote/:id', fetchuser,async (req,res)=>{
 const{title,description,tag}=req.body;
 
  const newNote={};

 if(title){
newNote.title=title;
}

if(description){
   newNote.description=title;
   }
  
 if(tag){
   newNote.tag=tag;
   }

let note= await notesCollection.findById(req.params.id);
if(!note)
{
return res.send("not found ");

}
if(note.user.toString()!==req.user.id)
{
 return res.send("not allowed");

}

note =await notesCollection.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
res.json({note});
})


app.delete('/deletenote/:id', fetchuser,async (req,res)=>{
try{
   const{title,description,tag}=req.body;
   let note= await notesCollection.findById(req.params.id);
   if(!note)
   {
   return res.send("not found ");
   
   } 

   if(note.user.toString()!==req.user.id)
   {
    return res.send("not allowed");
   
   }
   note =await notesCollection.findByIdAndDelete(req.params.id);
   res.json("delete"); 
}
catch(error)
{
   console.log("error is occc");
}
})



app.listen(port,()=>{

console.log(`the port is listenting at ${port}`)

})
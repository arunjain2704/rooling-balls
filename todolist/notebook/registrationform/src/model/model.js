const mongoose=require("mongoose");
const empSchema= new mongoose.Schema({
  name:{
    type:String,
     required:true,
    },
  
  email:{
    type:String,
      unique:true,
      required:true,
    },
    password:{
        type:String,
        required:true,
   
      }
});



const empCollection= new mongoose.model('empcollection',empSchema);
// empCollection.createIndexes(); //data base mai sari entry unique rhngi agar same ayi to vo error send krdega
module.exports=empCollection;
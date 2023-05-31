const mongoose=require("mongoose");
const notesSchema= new mongoose.Schema({

  //jo jo particular user login krega uski id yha ajygi jiise hum ushi ke notes dikhayenge
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'empcollection'
  },

    title:{
    type:String,
    required:true,
    },
    description:{
        type:String,
        required:true,
   
      },
      tag:{
        type:String,
        required:true,
   
      }
 });



const notesCollection= new mongoose.model('notescollection',notesSchema);
module.exports=notesCollection;
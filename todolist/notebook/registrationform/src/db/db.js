const mongoose=require("mongoose"); 
mongoose.connect('mongodb://127.0.0.1:27017/registerer')  // data is sotredd
.then(()=>{

console.log('connect with monogo db')

})
.catch((error)=>{

console.log(error);

})
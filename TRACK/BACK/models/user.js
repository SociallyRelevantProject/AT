const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})

mongoose.model("user",userschema);
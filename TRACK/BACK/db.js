require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URL).then(
    ()=>{
        console.log('connected to db');
    }
)
.catch((err)=>{
    console.log('could not connect to db'+err);
})
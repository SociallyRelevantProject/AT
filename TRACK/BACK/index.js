const express=require('express');

const port=4000;
const app=express();
const bodyparser=require('body-parser');
require('./db');
require('./models/user');
app.use(bodyparser.json());

app.get('/',(req,res)=>{
    res.send("hello");
})

// app.post('/login',(req,res)=>{
//     res.send('post');
// })

app.listen(port,()=>{
    console.log('running server');
})
const express = require('express');
const path = require('path');

const app=express();

app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"./public/index.html"))
// })
app.get('err',(req,res)=>{
    console.log(error);
})






app.listen(5005,()=>{
    console.log("Listening to the port");
})
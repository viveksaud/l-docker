const express = require('express');

const app=express();

app.get('/', (req,res)=>{
res.send("om namo narayan");
})

app.listen(4000, ()=>{
    console.log("server is running on prot 4000");
})
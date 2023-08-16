const express = require('express')
const cors = require('cors')
const conn = require('./server/conn')

const app = express()
const port = '5000'

conn.connect((err)=>{
    if(err){
        console.log("Something went wrong " + err);
    }  
    console.log("Connecting mysql successfully !");
})

app.listen(port,()=>{
    console.log(`Server is started now in port ${port}  `);
})
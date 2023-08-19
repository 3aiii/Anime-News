const express = require('express')
const cors = require('cors')
const conn = require('./server/conn')
const user = require('./routes/user')

const app = express()
const port = '5000'

app.use(express.json())
app.use(cors())

conn.connect((err)=>{
    if(err){
        console.log("Something went wrong " + err);
    }else{
        console.log("Connecting mysql successfully !");
    }
})

app.listen(port,()=>{
    console.log(`Server is started now in port ${port}  `);
})

app.use('/api/user',user)
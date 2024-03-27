const express = require("express");
require("dotenv").config()
const db = require("./src/config/db")

//port number in env file
const port = process.env.PORT
const app = express();

//middleware
app.use(express.json());

//database connection 
db.once('open',()=> console.log("connected"))
db.on('error',(err)=>console.log("error"+err))


app.listen(port,()=>{
    console.log(`Server Listening at ${port} `)
})
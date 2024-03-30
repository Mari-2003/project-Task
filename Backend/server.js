const express = require("express");
const bodyParser = require('body-parser')
require("dotenv").config()
const db = require("./src/config/db");
const Router = require('./src/routes/userRoutes') 
const cors = require('cors');
//port number in env file
const port = process.env.PORT
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    })
)

//database connection 
db.once('open',()=> console.log("connected"))
db.on('error',(err)=>console.log("error"+err))


//routes 
app.use('/api/v1',Router)


app.listen(port,()=>{
    console.log(`Server Listening at ${port} `)
})
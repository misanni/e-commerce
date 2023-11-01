const express = require("express")
require('express-async-errors'); 
const session = require("express-session")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const dotenv= require("dotenv")
const app = express();
dotenv.config();


app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const NotFoundError =require("./errors/not-found");

app.get('/', (req,res)=>{
    res.send("Welcome to my E-commerce Project😜")
})

app.all('*', async (req, res) => {
    res.status(404).json({message:"Route not found"})
  });
  
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT} `)
})
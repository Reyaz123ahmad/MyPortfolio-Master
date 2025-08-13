const express=require('express');
const app =express();
const dbConnect=require('./config/database');
const cors=require('cors');
dbConnect();
//load config from .env file
require('dotenv').config();
const PORT=process.env.PORT || 4000;

//middleware to parse json request body
app.use(cors());
app.use(express.json());

//import router fro TODO API

const formRouter=require('./routes/form')


// mount the todo API routes
app.use("/api/v1",formRouter)    
app.listen(PORT,()=>{
    console.log('app started at 3000 port')
});
app.get('/',(req,res)=>{
    console.log('this is home route')
    res.send('you are reach at home route successfully')
})


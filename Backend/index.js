const express=require("express")
const app=express();
const mongoose=require("mongoose")
const mongodb=require("mongodb");
const dotenv=require("dotenv");

const connection=require("../Backend/config/db");

dotenv.config();


connection();



const PORT = process.env.port || 9000;


app.listen(process.env.PORT, ()=>{
    console.log("server is On");

})
    

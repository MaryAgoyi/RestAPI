import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/user.js"
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT =5000;



mongoose.connect('mongodb://localhost:27017/contactAPI').
//mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser:true, useUnifiedTopology:true}).
then(()=>{
    console.log("successfully connected to database");
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.get("/", (req, res) =>{

res.send("Welcome to study scrapper API");
});

app.use("/user", userRouter);



app.listen(PORT, () =>{
console.log(`server started on ${PORT}`)
});
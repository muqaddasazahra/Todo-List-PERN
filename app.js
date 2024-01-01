import express from "express";
import cors from "cors";
import connectDB from "./Database/config.js";
import init from "./Database/init.js";

const app=express();
app.use(cors());
app.use(express.json());

app.listen(5000, ()=>
{
    console.log("Server started on port 5000");
});

connectDB();
init();
import express, { urlencoded } from "express";
import cors from "cors";

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended:true}));

// add for routes


server.listen(5000,()=>{
    console.log("Server is starting")
})
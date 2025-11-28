import express, {type Express, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/dbConfig.js";
import router from "./routes/AlbumRoutes.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended: true}));

// custom routes paths
server.use('/api/v1/albums',router)

server.listen(5000, () => {
    console.log("Server is starting port 5000");
})

connectDB();
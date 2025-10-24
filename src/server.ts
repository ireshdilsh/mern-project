import express, {type Express, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import articleRoutes from "./routes/articleRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended: true}));

// add for routes
server.use('/api/v1/user', userRoutes)
server.use('/api/v1/article', articleRoutes)
server.use('/api/v1/comment', commentRoutes)

server.listen(5000, () => {
    console.log("Server is starting port 5000");
})

connectDB();
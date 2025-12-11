import express, {type Express, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/dbConfig.js";
import {article_router} from "./routes/article.route.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended: true}));

// custom routes paths
server.use('/api/v1/articles',article_router)

server.listen(5000, () => {
    console.log("Server is starting port 5000");
})

connectDB();
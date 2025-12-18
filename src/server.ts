import express, {type Express, urlencoded} from "express";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/dbConfig.js";
import {article_router} from "./routes/article.route.js";
import { commentRouter } from "./routes/comment.route.js";
import { user_router } from "./routes/user.route.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(express.urlencoded({extended: true}));

// custom routes paths
server.use('/api/v1/articles',article_router)
server.use('/api/v1/comments',commentRouter);
server.use('/api/v1/users',user_router);

server.listen(5000, () => {
    console.log("Server is starting port 5000");
})

connectDB();
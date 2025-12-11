import express from "express";
import {
    getAllSavedArticles,
    getArticleById,
    saveArticle,
    saveArticleWithImage, searchArticle
} from "../controller/article.controller.js";
import { upload } from "../middleware/upload.js";

export const article_router = express.Router();

article_router.post('/create/article',saveArticle)
article_router.get('/get/all/articles',getAllSavedArticles)
article_router.get('/get/article/by/:id',getArticleById)
article_router.post('/create/article/with/image', upload.single('file'), saveArticleWithImage)
article_router.get('/find/article/:search',searchArticle)
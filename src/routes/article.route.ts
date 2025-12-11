import express from "express";
import {getAllSavedArticles, getArticleById, saveArticle} from "../controller/article.controller.js";

export const article_router = express.Router();

article_router.post('/create/article',saveArticle)
article_router.get('/get/all/articles',getAllSavedArticles)
article_router.get('/get/article/by/:id',getArticleById)
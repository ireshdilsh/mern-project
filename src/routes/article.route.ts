import express from "express";
import {getAllSavedArticles, saveArticle} from "../controller/article.controller.js";

export const article_router = express.Router();

article_router.post('/create/article',saveArticle)
article_router.get('/get/all/articles',getAllSavedArticles)

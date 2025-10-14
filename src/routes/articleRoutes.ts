import express  from "express";
import { createArticle, getArticleById, getArticles } from "../controller/articleController.js";
const router = express.Router();

router.post("/publish/new/article",createArticle)
router.get("/get/all/published/articles",getArticles)
router.get("/get/article/:id",getArticleById)

export default router;
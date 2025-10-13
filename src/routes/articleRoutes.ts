import express  from "express";
import { createArticle, getArticles } from "../controller/articleController.js";
const router = express.Router();

router.post("/publish/new/article",createArticle)
router.get("/get/all/published/articles",getArticles)

export default router;
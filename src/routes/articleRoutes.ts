import express from "express";
import { 
    createArticle, 
    getArticles, 
    getArticleById, 
    updateArticle, 
    deleteArticle 
} from "../controller/articleController.js";

const router = express.Router();

// Create new article with Base64 image and reading time
router.post("/publish/new/article", createArticle);

// Get all articles (sorted by newest first)
router.get("/get/all/published/articles", getArticles);

// Get single article by ID
router.get("/get/article/:id", getArticleById);

// Update article (can update title, content, name, and image)
router.put("/update/article/:id", updateArticle);

// Delete article by ID
router.delete("/delete/article/:id", deleteArticle);

export default router;
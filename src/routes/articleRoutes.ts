import express from "express";
import {
    createArticle,
    getArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    incrementViewCount,
    incrementLikeCount,
    decrementLikeCount,
    getArticlesByEmail
} from "../controller/articleController.js";

const router = express.Router();

router.post("/publish/new/article", createArticle);
router.get("/get/all/published/articles", getArticles);
router.get("/get/article/:id", getArticleById);
router.put("/update/article/:id", updateArticle);
router.delete("/delete/article/:id", deleteArticle);
router.put("/increment/view/:id", incrementViewCount);
router.put("/increment/like/:id", incrementLikeCount);
router.put("/decrement/like/:id", decrementLikeCount);
router.get("/get/articles/by/email/is/:email", getArticlesByEmail);

export default router;

// https://uncutmasti.com/aamras-2025-funtyy-hindi-xxx-web-series-episode-1
// https://uncutmasti.com/bandh-darwaza-2025-ullu-hindi-xxx-web-series-episode-2
// https://uncutjalwa.net/9redmovies-video-baaz-epsiode-7-hindi-porn-web-series/
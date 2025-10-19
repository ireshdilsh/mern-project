import express from "express";
import { 
    createArticle, 
    getArticles, 
    getArticleById, 
    updateArticle, 
    deleteArticle,
    incrementViewCount,
    incrementLikeCount,
    decrementLikeCount
} from "../controller/articleController.js";

const router = express.Router();

router.post("/publish/new/article", createArticle);
router.get("/get/all/published/articles", getArticles);
router.get("/get/article/:id", getArticleById);
router.put("/update/article/:id", updateArticle);
router.delete("/delete/article/:id", deleteArticle);
router.patch("/increment/view/:id", incrementViewCount);
router.patch("/increment/like/:id", incrementLikeCount);
router.patch("/decrement/like/:id", decrementLikeCount);

export default router;
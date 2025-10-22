import express from "express";
import {
    createComment,
    getCommentsByArticleId,
    getCommentById,
    getCommentCount
} from "../controller/commentController.js";

const router = express.Router();

router.post("/add/comment", createComment);
router.get("/get/comments/article/:articleId", getCommentsByArticleId);
router.get("/get/comment/:id", getCommentById);
router.get("/get/comment/count/:articleId", getCommentCount);

export default router;

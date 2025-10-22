import express from "express";
import {
    createComment,
    getCommentsByArticleId,
    getCommentById,
    getCommentCount
} from "../controller/commentController.js";

const router = express.Router();

// Create a new comment
router.post("/add/comment", createComment);

// Get all comments for a specific article
router.get("/get/comments/article/:articleId", getCommentsByArticleId);

// Get single comment by ID
router.get("/get/comment/:id", getCommentById);

// Get comment count for an article
router.get("/get/comment/count/:articleId", getCommentCount);

export default router;

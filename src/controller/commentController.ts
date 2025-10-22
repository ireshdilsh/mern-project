import { Comment } from "../model/commentModel.js";
import { Article } from "../model/articleModel.js";

// Create a new comment
export const createComment = async (req: any, res: any) => {
    try {
        const { articleId, userName, userEmail, comment } = req.body;

        // Validate required fields
        if (!articleId || !userName || !userEmail || !comment) {
            return res.status(400).json({
                message: "Article ID, user name, user email, and comment are required fields"
            });
        }

        // Validate email format
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(userEmail)) {
            return res.status(400).json({
                message: "Please provide a valid email address"
            });
        }

        // Check if article exists
        const article = await Article.findById(articleId);
        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            });
        }

        // Create new comment
        const newComment = new Comment({
            articleId,
            userName,
            userEmail,
            comment,
            date: new Date()
        });

        await newComment.save();

        res.status(201).json({
            message: "Comment added successfully",
            comment: newComment
        });
    } catch (error) {
        console.error("Error creating comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get all comments for a specific article
export const getCommentsByArticleId = async (req: any, res: any) => {
    try {
        const { articleId } = req.params;

        // Check if article exists
        const article = await Article.findById(articleId);
        if (!article) {
            return res.status(404).json({
                message: "Article not found"
            });
        }

        // Get all comments for this article, sorted by newest first
        const comments = await Comment.find({ articleId }).sort({ date: -1 });

        res.status(200).json({
            message: "Comments retrieved successfully",
            count: comments.length,
            comments
        });
    } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get a single comment by ID
export const getCommentById = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        const comment = await Comment.findById(id);
        if (!comment) {
            return res.status(404).json({
                message: "Comment not found"
            });
        }

        res.status(200).json({
            message: "Comment retrieved successfully",
            comment
        });
    } catch (error) {
        console.error("Error fetching comment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get comment count for an article
export const getCommentCount = async (req: any, res: any) => {
    try {
        const { articleId } = req.params;

        const count = await Comment.countDocuments({ articleId });

        res.status(200).json({
            message: "Comment count retrieved successfully",
            articleId,
            count
        });
    } catch (error) {
        console.error("Error getting comment count:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

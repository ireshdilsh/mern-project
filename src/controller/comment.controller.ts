import { type Request, type Response } from "express";
import { Comment } from "../model/comments.js";

export const addNewComment = async (req: Request, res: Response) => {
     try {
          const { article_id, name, comment } = req.body;

          if (!article_id || !name || !comment) {
               return res.status(400).json({ message: "Missing required fields" });
          }

          const newComment = await Comment.create({ article_id, name, comment });
          return res.status(201).json({ message: "Comment added successfully", newComment });
     } catch (error) {
          console.error("Error adding comment", error);
          return res.status(500).json({ message: "Error adding comment" });
     }
};

export const getCommentsByArticleId = async (req: Request, res: Response) => {
     try {
          const { article_id } = req.params;
          const comments = await Comment.find({ article_id });
          return res.status(200).json({ comments });
     } catch (error) {
          console.error("Error retrieving comments", error);
          return res.status(500).json({ message: "Error retrieving comments" });
     }
};
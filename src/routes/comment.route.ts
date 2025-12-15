import express from 'express';
import { addNewComment, getCommentsByArticleId } from '../controller/comment.controller.js';

export const commentRouter = express.Router();

commentRouter.post('/add/new/comment',addNewComment)
commentRouter.get('/get/comments/by/article/:article_id',getCommentsByArticleId)
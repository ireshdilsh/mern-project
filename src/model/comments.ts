import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
     article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
     name: { type: String, required: true },
     content: { type: String, required: true },
     createdAt: { type: Date, default: Date.now }
})

export const Comment = mongoose.model("Comment", commentSchema);
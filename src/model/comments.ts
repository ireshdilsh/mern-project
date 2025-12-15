import mongoose from "mongoose";

interface IComment extends mongoose.Document {
    _id: mongoose.Types.ObjectId,
    article_id: mongoose.Types.ObjectId,
    name: String,
    content: String,
    createdAt: Date
}

const commentSchema = new mongoose.Schema({
     article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Article', required: true },
     name: { type: String, required: true },
     content: { type: String, required: true },
     createdAt: { type: Date, default: Date.now }
})

export const Comment = mongoose.model<IComment>("Comment", commentSchema);
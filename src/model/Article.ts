import mongoose from "mongoose";

interface IArticle extends mongoose.Document{
    _id: mongoose.Types.ObjectId
    title: string
    content: string
    tags: string[]
    imageURL: string
    author: mongoose.Types.ObjectId
    createdAt?: Date
    updatedAt?: Date
}

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String] },
    imageURL: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
},{timestamps: true})

export const Article = mongoose.model<IArticle>("Article", articleSchema);
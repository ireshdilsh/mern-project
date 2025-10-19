import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    readingTime: {
        type: Number, // Estimated reading time in minutes
        required: false,
        default: 0
    },
    viewCount: {
        type: Number,
        required: false,
        default: 0
    },
    likeCount: {
        type: Number,
        required: false,
        default: 0
    },
    disLikeCount: {
        type: Number,
        required: false,
        default: 0
    }
});

export const Article = mongoose.model("Article", articleSchema); 
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
    image: {
        type: String, // Base64 encoded image string
        required: false,
        default: null
    },
    imageType: {
        type: String, // MIME type (e.g., 'image/jpeg', 'image/png')
        required: false,
        default: null
    },
    readingTime: {
        type: Number, // Estimated reading time in minutes
        required: false,
        default: 0
    }
});

export const Article = mongoose.model("Article", articleSchema); 
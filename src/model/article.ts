import mongoose from "mongoose";

interface IArticle extends mongoose.Document{
    _id: mongoose.Types.ObjectId,
    email: String,
    name: String,
    title: String,
    content: String,
    reading_time: number,
    imageURL: string
}

const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true
    },
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    reading_time:{
        type:Number,
        required:true
    },
    imageURL: {
        type: String,
        required:false
    }
},{timestamps:true})

export const Article = mongoose.model<IArticle>("Article", articleSchema);
import { Article } from "../model/articleModel.js"

export const createArticle = async (req: any, res: any) => {
    try {
        const {title,content,name,date} = req.body;
        const newArticle = new Article({title,content,name,date});
        await newArticle.save();
        res.status(201).json({ message: "Article created", article: newArticle });
    } catch (error) {
        console.log("Something Went Wrong in Article Created Method ",error)
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getArticles = async (req: any, res: any) => {
    try {
        const articles = await Article.find();
        res.status(200).json({message:"All Published Articles Here! ",articles})
    } catch (error) {
        console.log("Cannot fetch articles. ",error)
        res.status(500).json({ message: "Internal server error" });
    }
}
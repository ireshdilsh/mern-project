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
        res.status(200).json({message:"Articles retrieved successfully",articles})
    } catch (error) {
        console.log("Cannot fetch articles. ",error)
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getArticleById = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const selectedArticle = await Article.findById(id);
        if (!selectedArticle) {
            return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({ message: "Article retrieved successfully", article: selectedArticle });
    } catch (error) {
        console.log("Cannot fetch article by ID. ",error)
        res.status(500).json({ message: "Internal server error" });
    }
}
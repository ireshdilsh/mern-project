import {Article} from "../model/article.js";

export const saveArticle = async (req: any, res: any) => {
    try {
        const { email, name, title, content } = req.body;
        const reading_time = Math.ceil(content.split(" ").length / 25); // Assuming average reading speed of 200 WPM

        const newArticle = new Article({
            email,
            name,
            title,
            content,
            reading_time
        });

        await newArticle.save();

        res.status(201).json({ message: "Article saved successfully", article: newArticle });
    } catch (error) {
        res.status(500).json({ message: "Error saving article", error });
    }
}

export const getAllSavedArticles = async (req: any, res: any) => {
    try {
        const allArticles = await Article.find();
        res.status(200).json({ articles: allArticles });
    }catch (e) {
        res.status(500).json({ message: "Error retrieving articles", error: e });
    }
}
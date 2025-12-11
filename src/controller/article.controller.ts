import {Article} from "../model/article.js";
import cloudinary from "../config/cloudinary.js"

export const saveArticle = async (req: any, res: any) => {
    try {
        const { email, name, title, content } = req.body;
        const reading_time = Math.ceil(content.split(" ").length / 25); // Assuming average reading speed of 200 WPM
        const newArticle = new Article({
            email,
            name,
            title,
            content,
            reading_time,
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

export const getArticleById = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        const article = await Article.findById(id);
        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({ article });
    }catch (e) {
        res.status(500).json({ message: "Error retrieving article", error: e });
    }
}

export const saveArticleWithImage = async (req: any, res: any) => {
    try {
        const { email, name, title, content } = req.body;
        const reading_time = Math.ceil(content.split(" ").length / 25);
        let imageURL = "";

        // Define result outside
        let uploadResult: any = null;

        if (req.file) {
            uploadResult = await new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "posts" },
                    (error: any, result: any) => {
                        if (error) {
                            console.error("Cloudinary error:", error);
                            return reject(error);
                        }
                        resolve(result);
                    }
                );
                uploadStream.end(req.file.buffer);
            });

            imageURL = uploadResult.secure_url;  // ✔ Now safe
        }

        const newArticle = new Article({
            email,
            name,
            title,
            content,
            reading_time,
            imageURL,
        });

        await newArticle.save();

        res.status(201).json({
            message: "Article saved successfully",
            article: newArticle,
        });
    } catch (e) {
        console.error("SAVE ARTICLE ERROR:", e); // Add this for debugging
        res.status(500).json({
            message: "Error saving article with image",
            error: e,
        });
    }
};

import { Article } from "../model/articleModel.js";

const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 40; // Average reading speed
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime < 1 ? 1 : readingTime; // Minimum 1 minute
};

export const createArticle = async (req: any, res: any) => {
    try {
        const { title, content, name, email, date } = req.body;

        // Validate required fields
        if (!title || !content || !name || !email) {
            return res.status(400).json({
                message: "Title, content, name, and email are required fields"
            });
        }

        // Validate email format
        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Please provide a valid email address"
            });
        }

        // Calculate reading time
        const readingTime = calculateReadingTime(content);

        const newArticle = new Article({
            title,
            content,
            name,
            email,
            date: date || new Date(),
            readingTime: readingTime
        });

        await newArticle.save();
        res.status(201).json({
            message: "Article created successfully",
            article: newArticle
        });
    } catch (error) {
        console.log("Something Went Wrong in Article Created Method ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getArticles = async (req: any, res: any) => {
    try {
        const articles = await Article.find().sort({ date: -1 }); // Sort by newest first
        res.status(200).json({
            message: "Articles retrieved successfully",
            count: articles.length,
            articles
        });
    } catch (error) {
        console.log("Cannot fetch articles. ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getArticleById = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({
            message: "Article retrieved successfully",
            article
        });
    } catch (error) {
        console.log("Cannot fetch article. ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const updateArticle = async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { title, content, name, email } = req.body;

        // Find the existing article
        const existingArticle = await Article.findById(id);
        if (!existingArticle) {
            return res.status(404).json({ message: "Article not found" });
        }

        // Validate email format if provided
        if (email) {
            const emailRegex = /^\S+@\S+\.\S+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    message: "Please provide a valid email address"
                });
            }
        }

        // Recalculate reading time if content is updated
        const updatedContent = content || existingArticle.content;
        const readingTime = calculateReadingTime(updatedContent);

        // Update article
        const updatedArticle = await Article.findByIdAndUpdate(
            id,
            {
                title: title || existingArticle.title,
                content: updatedContent,
                name: name || existingArticle.name,
                email: email || existingArticle.email,
                readingTime: readingTime
            },
            { new: true } // Return the updated document
        );

        res.status(200).json({
            message: "Article updated successfully",
            article: updatedArticle
        });
    } catch (error) {
        console.log("Error updating article: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteArticle = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        // Find and delete the article
        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({
            message: "Article deleted successfully",
            deletedArticle: {
                id: article._id,
                title: article.title
            }
        });
    } catch (error) {
        console.log("Error deleting article: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const incrementViewCount = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        // Find and increment view count
        const article = await Article.findByIdAndUpdate(
            id,
            { $inc: { viewCount: 1 } }, // Increment viewCount by 1
            { new: true } // Return the updated document
        );

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({
            message: "View count incremented successfully",
            viewCount: article.viewCount,
            article
        });
    } catch (error) {
        console.log("Error incrementing view count: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const incrementLikeCount = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        // Find and increment like count
        const article = await Article.findByIdAndUpdate(
            id,
            { $inc: { likeCount: 1 } }, // Increment likeCount by 1
            { new: true } // Return the updated document
        );

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({
            message: "Like count incremented successfully",
            likeCount: article.likeCount,
            article
        });
    } catch (error) {
        console.log("Error incrementing like count: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const decrementLikeCount = async (req: any, res: any) => {
    try {
        const { id } = req.params;

        // Find the article first to check if likeCount is greater than 0
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        // Only decrement if likeCount is greater than 0
        if (article.likeCount && article.likeCount > 0) {
            const updatedArticle = await Article.findByIdAndUpdate(
                id,
                { $inc: { likeCount: -1 } }, // Decrement likeCount by 1
                { new: true } // Return the updated document
            );

            res.status(200).json({
                message: "Like count decremented successfully",
                likeCount: updatedArticle?.likeCount,
                article: updatedArticle
            });
        } else {
            res.status(200).json({
                message: "Like count is already 0",
                likeCount: article.likeCount,
                article
            });
        }
    } catch (error) {
        console.log("Error decrementing like count: ", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

import { Article } from "../model/articleModel.js";

// Helper function to calculate reading time (average reading speed: 200-250 words per minute)
const calculateReadingTime = (content: string): number => {
    const wordsPerMinute = 225; // Average reading speed
    const wordCount = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime < 1 ? 1 : readingTime; // Minimum 1 minute
};

// Helper function to validate Base64 image
const isValidBase64Image = (base64String: string): boolean => {
    const base64Regex = /^data:image\/(jpeg|jpg|png|gif|webp|bmp|svg\+xml);base64,/i;
    return base64Regex.test(base64String);
};

// Helper function to get image type from Base64 string
const getImageTypeFromBase64 = (base64String: string): string | null => {
    const match = base64String.match(/^data:image\/([a-zA-Z+]+);base64,/i);
    return match ? `image/${match[1]}` : null;
};

export const createArticle = async (req: any, res: any) => {
    try {
        const { title, content, name, email, date, image } = req.body;

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

        let imageData = null;
        let imageType = null;

        // Process image if provided
        if (image) {
            if (isValidBase64Image(image)) {
                imageData = image;
                imageType = getImageTypeFromBase64(image);
            } else {
                return res.status(400).json({
                    message: "Invalid image format. Please provide a valid Base64 encoded image (JPEG, PNG, GIF, WebP, BMP, or SVG)."
                });
            }
        }

        // Calculate reading time
        const readingTime = calculateReadingTime(content);

        const newArticle = new Article({
            title,
            content,
            name,
            email,
            date: date || new Date(),
            image: imageData,
            imageType: imageType,
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
        const { title, content, name, email, image } = req.body;

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

        let imageData = existingArticle.image;
        let imageType = existingArticle.imageType;

        // Process image if provided
        if (image !== undefined) {
            if (image === null || image === "") {
                // Remove the image
                imageData = null;
                imageType = null;
            } else if (isValidBase64Image(image)) {
                imageData = image;
                imageType = getImageTypeFromBase64(image);
            } else {
                return res.status(400).json({
                    message: "Invalid image format. Please provide a valid Base64 encoded image."
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
                image: imageData,
                imageType: imageType,
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

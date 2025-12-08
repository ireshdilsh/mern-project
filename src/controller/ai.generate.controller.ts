import { GoogleGenAI } from "@google/genai";
import * as fs from "node:fs";

export const gnerateAiImage = async (req: any, res: any) => {
    try {
        const ai = new GoogleGenAI({});

        const prompt = req.body.prompt;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image",
            contents: prompt,
        });
        for (const part of response.candidates[0].content.parts) {
            if (part.text) {
                console.log(part.text);
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                const buffer = Buffer.from(imageData, "base64");
                fs.writeFileSync("gemini-native-image.png", buffer);
                console.log("Image saved as gemini-native-image.png");
            }
        }

    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ message: "Error generating image", error });
    }
}

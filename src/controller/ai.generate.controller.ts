import Bytez from "bytez.js"

export const gnerateAiImage = async (req: any, res: any) => {

    const prompt = req.body.prompt;

    try {
        const key = "f669d32c7b681ebb403eaf797932f835"
        const sdk = new Bytez(key)

        // choose stable-diffusion-xl-base-1.0
        const model = sdk.model("stabilityai/stable-diffusion-xl-base-1.0")

        // send input to model
        const { error, output } = await model.run({prompt: prompt})

        console.log({ error, output });
    } catch (error) {
        console.error("Error generating image:", error);
        res.status(500).json({ message: "Error generating image", error });
    }
}

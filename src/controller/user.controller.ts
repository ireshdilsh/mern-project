import { User } from "../model/user.js";

export const saveUser = async (res: any, req: any) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        return res.status(201).send({ message: "User saved successfully", newUser })
    } catch (e) {
        return res.status(400).send({ message: "Error saving user", error: e })
    }
}


export const loginUser = async (res: any, req: any) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (user) {
            return res.status(200).send({ message: "User logged in successfully", user })
        }
        return null
    } catch (error) {
        return res.status(400).send({ message: "Error logging in user", error: error })
    }
}
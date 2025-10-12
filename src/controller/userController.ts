import { User } from "../model/userModel.js";

export const saveUser = async (req:any, res:any) => {
    try {
        const { email, password } = req.body;
        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: "User created", user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getUsers = async (req:any, res:any) => {
    try {
        const users = await User.find();
        res.status(200).json({message:"Users retrieved successfully", users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
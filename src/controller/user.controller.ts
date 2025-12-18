import { User } from "../model/user.js";

export const saveUser = async(res:any,req:any) => {
    try {
        const {name,email,password} = req.body;
        const newUser = new User({name,email,password});
        await newUser.save();
        return res.status(201).send({message:"User saved successfully",newUser})
    }catch (e) {
        return res.status(400).send({message:"Error saving user",error:e})
    }
}

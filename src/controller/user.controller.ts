import { User } from "../model/user.js";

export const saveUser = (res:any,req:any) => {
    try {
        const {name,email} = req.body;
        const newUser = new User({name,email});
        newUser.save();
        res.status(201).send({message:"User saved successfully",newUser})
    }catch (e) {
        res.status(400).send({message:"Error saving user",error:e})
    }
}

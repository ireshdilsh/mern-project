import mongoose from "mongoose";

interface IUser extends mongoose.Document {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    password: string;
}

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true } 
    },
    { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);

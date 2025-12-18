import mongoose from "mongoose";

interface IUser extends mongoose.Document{
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    password:string
}

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:false}
})

export const User = mongoose.model<IUser>("User", userSchema);
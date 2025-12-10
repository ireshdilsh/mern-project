import {type Request, type Response} from "express";
import cloudinary from "../config/cloudinary.js";
import {Article} from "../model/Article.js";

export const publishedNewArticle = async (res:Response,req:Request) =>{
    try{
        const {title , Content} = req.body
        let imageUrl = ""

        if (req.file) {
            const result: any = await new Promise((resole, reject) => {
                const upload_stream = cloudinary.uploader.upload_stream(
                    {folder: "posts"},
                    (error, result) => {
                        if (error) {
                            console.error(error)
                            return reject(error)
                        }
                        resole(result) // success return
                    }
                )
                upload_stream.end(req.file?.buffer)
            })
            imageUrl = result.secure_url
        }

        const newArticle = new Article({
            title,
            Content,
            imageUrl
        })
        await newArticle.save()
        res.status(200).json({message:"Article Created",data:newArticle})

    }catch(err){
        console.error(err)
        res.status(400).json({messae:"Something Went Wrong"})
    }
}
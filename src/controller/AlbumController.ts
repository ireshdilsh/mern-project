import {Album} from "../model/Album.js";

export const createNewAlbum = async (req: any, res: any) => {
    try {
        const {title} = req.body;
        const newAlbum = new Album({title});
        await newAlbum.save();
        res.status(200).json({message: "Album created successfully"});
    } catch (e) {
        console.error(e);
        res.status(400).json({message: "Something Went Wrong"});
    }
}

export const getAllAlbums = async (req: any, res: any) => {
    try {
        const allAlbums = await Album.find();
        res.status(200).json({message: "Success", albums: allAlbums});
    } catch (e) {
        console.error(e);
        res.status(400).json({message: "Something Went Wrong"});
    }
}

export const deleteAlbum = async (req: any, res: any) => {
    try {
        const {id} = req.params;
        await Album.findByIdAndDelete(id);
        res.status(200).json({message: "Album deleted successfully",id});
    }catch (e) {
        console.error(e);
        res.status(400).json({message: "Something Went Wrong"});
    }
}
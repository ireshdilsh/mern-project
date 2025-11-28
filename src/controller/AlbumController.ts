import {Album} from "../model/Album.js";

export const createNewAlbum = (req:any,res:any) => {
    const {title} = req.body;

    const newAlbum = new Album({title});

    newAlbum.save()
    .then((album) => {
        res.status(201).json(album);
    })
    .catch((error) => {
        res.status(500).json({error: "Error creating album"});
    });
}
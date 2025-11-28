import express from "express";
import {createNewAlbum} from "../controller/AlbumController.js";

const router = express.Router();

// Define album-related routes here
router.post('/create/new/album',createNewAlbum)


export default router;
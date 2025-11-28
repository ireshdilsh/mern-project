import express from "express";
import {createNewAlbum, getAllAlbums} from "../controller/AlbumController.js";

const router = express.Router();

// Define album-related routes here
router.post('/create/new/album',createNewAlbum)
router.get('/get/all/albums',getAllAlbums)

export default router;
import express from "express";
import { generateAiImage } from "../controller/ai.generate.controller.js";

const router = express.Router();

router.post("/ai",generateAiImage)

export default router;
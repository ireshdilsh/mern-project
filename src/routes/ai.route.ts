import express from "express";
import { gnerateAiImage } from "../controller/ai.generate.controller.js";

const router = express.Router();

router.post("/ai",gnerateAiImage)

export default router;
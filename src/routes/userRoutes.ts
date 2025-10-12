import expess from "express";
import { saveUser } from "../controller/userController.js";

const router = expess.Router();

// define routes here
router.post('/save/user/with/email/and/password',saveUser)

export default router;
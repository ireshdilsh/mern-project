import expess from "express";
import { getUsers, saveUser } from "../controller/userController.js";

const router = expess.Router();

// define routes here
router.post('/save/user/with/email/and/password',saveUser)
router.get('/get/all/registration/users/with/email/and/password',getUsers)

export default router;
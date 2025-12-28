import express from 'express'
import { loginUser, saveUser } from '../controller/user.controller.js';

export const user_router = express.Router();

user_router.post('/save/user',saveUser)
user_router.post('/auth/user', loginUser)
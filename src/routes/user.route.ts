import express from 'express'
import { saveUser } from '../controller/user.controller.js';

export const user_router = express.Router();

user_router.post('/save/user',saveUser)
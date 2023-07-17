import express from 'express';
import { router as userRouter } from './components/users/route.js';
import { router as postRouter } from './components/posts/route.js';

export const router = express.Router();

router.use('/user', userRouter);
router.use('/post', postRouter);

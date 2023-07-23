import express from 'express';
import userRouter from '../domains/root/users/route.js';
import postRouter from '../domains/root/posts/route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/post', postRouter);

export default router;

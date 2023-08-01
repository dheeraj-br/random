import express from 'express';
import userRouter from '../src/root/users/route.js';
import postRouter from '../src/root/posts/route.js';

const router = express.Router();

router.use('/user', userRouter);
router.use('/post', postRouter);

export default router;

import express from 'express';
import apiRouter from '../domains/api/route.js';

const router = express.Router();

router.use('/serve', apiRouter);

export default router;

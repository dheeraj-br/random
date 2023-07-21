import express from 'express';
import { router as apiRouter } from '../domains/api/route.js';

export const router = express.Router();

router.use('/serve', apiRouter);

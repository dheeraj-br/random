import express from 'express';
import { router as docRouter } from '../domains/doc/route.js';

export const router = express.Router();

router.use('/info', docRouter);

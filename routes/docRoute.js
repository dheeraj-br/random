import express from 'express';
import docRouter from '../domains/doc/route.js';

const router = express.Router();

router.use('/info', docRouter);

export default router;

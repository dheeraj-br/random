import express from 'express';
import wildcardRouter from '../domains/wildcard/route.js';

const router = express.Router();

router.use('/any-subdomain', wildcardRouter);

export default router;

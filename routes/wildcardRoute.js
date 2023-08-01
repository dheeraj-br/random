import express from 'express';
import wildcardRouter from '../src/wildcard/route.js';

const router = express.Router();

router.use('/any-subdomain', wildcardRouter);

export default router;

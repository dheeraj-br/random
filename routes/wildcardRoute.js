import express from 'express';
import { router as wildcardRouter } from '../domains/wildcard/route.js';

export const router = express.Router();

router.use('/any-subdomain', wildcardRouter);

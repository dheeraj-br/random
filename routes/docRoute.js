import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { readFile } from 'node:fs/promises';
import docRouter from '../domains/doc/route.js';

const fileUrl = new URL('../swagger.json', import.meta.url);
const swaggerDoc = JSON.parse(await readFile(fileUrl, 'utf8'));

const router = express.Router();
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDoc));
router.use('/info', docRouter);

export default router;

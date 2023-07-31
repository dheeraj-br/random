import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import docRouter from '../domains/doc/route.js';

/* 
 Alternate way to define openApi specs without annotations
 import { readFile } from 'node:fs/promises';

 const fileUrl = new URL('../swagger.json', import.meta.url);
 const swaggerDoc = JSON.parse(await readFile(fileUrl, 'utf8'));

 router.use('/', swaggerUi.serve);
 router.get('/', swaggerUi.setup(openApiSpecification));
*/

const jsDocOptions = {
    definition: {
        openapi: '3.1.0',
        info: {
            title: 'api documentation',
            version: '1.0.0',
        },
    },
    apis: [path.join(process.cwd(), '/domains/**/*.js')],
};

const openApiSpecification = swaggerJSDoc(jsDocOptions);

const router = express.Router();
router.use('/', swaggerUi.serve);
router.get(
    '/',
    swaggerUi.setup(openApiSpecification, {
        explorer: true,
        swaggerOptions: {
            displayRequestDuration: true,
        },
    }),
);
router.use('/info', docRouter);

export default router;

import express from 'express';
import { router } from './route.js';

const PORT = process.env.PORT || 3000;

let app = express();

app.use('/', router);

app.listen(PORT);

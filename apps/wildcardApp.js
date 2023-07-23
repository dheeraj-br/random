import express from 'express';
import router from '../routes/wildcardRoute.js';
import { globalErrorHandler, pageNotFoundHandler } from '../errorHandler.js';

const wildcard = express();
wildcard.set('view engine', 'pug');
wildcard.set('views', './views/pug');
wildcard.use('/', router);
wildcard.all('*', pageNotFoundHandler);
wildcard.use(globalErrorHandler);

export default wildcard;

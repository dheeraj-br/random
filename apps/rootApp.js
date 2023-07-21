import express from 'express';
import { router } from '../routes/route.js';
import { globalErrorHandler, pageNotFoundHandler } from '../errorHandler.js';
import { engine } from 'express-handlebars';

export const root = express();
root.engine('handlebars', engine({ defaultLayout: false }));
root.set('view engine', 'handlebars');
root.set('views', './views/e-handlebars');
root.use('/', router);
root.all('*', pageNotFoundHandler);
root.use(globalErrorHandler);

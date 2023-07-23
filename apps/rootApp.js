import express from 'express';
import { engine } from 'express-handlebars';
import router from '../routes/route.js';
import { globalErrorHandler, pageNotFoundHandler } from '../errorHandler.js';

const root = express();
root.engine('handlebars', engine({ defaultLayout: false }));
root.set('view engine', 'handlebars');
root.set('views', './views/e-handlebars');
root.use('/', router);
root.all('*', pageNotFoundHandler);
root.use(globalErrorHandler);

export default root;

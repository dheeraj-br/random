import express from 'express';
import vhost from 'vhost';
import { router } from './route.js';
import { router as apiRouter } from './components/api/route.js';
import { router as docRouter } from './components/doc/route.js';
import { globalErrorHandler, pageNotFoundHandler } from './errorHandler.js';

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  process.exit(1);
});

let app = express();

// adding subdomains and root domain to app
let doc = express();
app.use(vhost('doc.local', doc));
doc.use('/', docRouter);
doc.all('*', pageNotFoundHandler);
doc.use(globalErrorHandler);

let api = express();
app.use(vhost('api.local', api));
api.use('/', apiRouter);
api.all('*', pageNotFoundHandler);
api.use(globalErrorHandler);

let rootDomain = express();
app.use(vhost('local', rootDomain));
rootDomain.use('/', router);
rootDomain.all('*', pageNotFoundHandler);
rootDomain.use(globalErrorHandler);

// starting server and listening on PORT
const server = app.listen(PORT);

process.on('unhandledRejection', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  server.close(() => {
    process.exit(1);
  });
});

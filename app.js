import express from 'express';
import { router } from './route.js';
import { globalErrorHandler, pageNotFoundHandler } from './errorHandler.js';

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  process.exit(1);
});

let app = express();

app.use('/', router);

app.all('*', pageNotFoundHandler);

app.use(globalErrorHandler);

const server = app.listen(PORT);

process.on('unhandledRejection', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  server.close(() => {
    process.exit(1);
  });
});

import express from 'express';
import { router } from './route.js';
import { globalErrorHandler, pageNotFoundHandler } from './errorHandler.js';

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (error) => {
  // log errors and stack trace
  console.log(error);
  // gracefully shutdown
  //
});

process.on('unhandledRejection', (error) => {
  // log errors and stack trace
  console.log(error);
  // gracefully shutdown
  //
});

let app = express();

app.use('/', router);

app.all('*', pageNotFoundHandler);

app.use(globalErrorHandler);

app.listen(PORT);

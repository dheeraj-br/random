import express from 'express';
import vhost from 'vhost';
import { doc } from './docApp.js';
import { api } from './apiApp.js';
import { wildcard } from './wildcardApp.js';
import { root } from './rootApp.js';

const PORT = process.env.PORT || 3000;

process.on('uncaughtException', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  process.exit(1);
});

let app = express();
app.use(express.static('public'));

// adding subdomains and root domain to app
app.use(vhost('doc.local', doc));

app.use(vhost('api.local', api));

app.use(vhost('*.localhost', wildcard));

app.use(vhost('local', root));

// starting server and listening on PORT
const server = app.listen(PORT);

process.on('unhandledRejection', (error) => {
  console.log(error); // TODO: use logger instead of console statement
  // TODO: gracefully shutdown
  server.close(() => {
    process.exit(1);
  });
});

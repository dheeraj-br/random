import express from 'express';
import vhost from 'vhost';
import config from '../config/index.js';
import doc from './docApp.js';
import api from './apiApp.js';
import wildcard from './wildcardApp.js';
import root from './rootApp.js';

process.on('uncaughtException', (error) => {
    console.log('custom uncaughtException', error); // TODO: use logger instead of console statement
    // TODO: gracefully shutdown
    process.exit(1);
});

const app = express();

app.use(express.static('public'));

// adding subdomains and root domain to app
const { API, DOC, ROOT, WILDCARD } = JSON.parse(config.DOMAIN);

app.use(vhost(API, api));

app.use(vhost(DOC, doc));

app.use(vhost(ROOT, root));

app.use(vhost(WILDCARD, wildcard));

// starting server and listening on PORT
const server = app.listen(config.PORT); // TODO: needs error handling and info, EH already present?? on uncaughtException handles this.

process.on('unhandledRejection', (error) => {
    console.log('custom unhandledRejection', error); // TODO: use logger instead of console statement
    // TODO: gracefully shutdown
    server.close(() => {
        process.exit(1);
    });
});

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

const { API, DOC, ROOT, WILDCARD } = JSON.parse(config.DOMAIN);

/* NOTE:
 * doc domain serves swagger doc from root domain
 * since there is an index.html file in the public folder, it would override swagger doc by order of appearance
 * hence routes need to be loaded before creating public folder to avoid overriding

 * but this causes broken reference links in views rendered by doc domain's routes,
 * since doc domain interprets file reference to public folder as a route.
 * to avoid such broken reference links, static folder reference need to be created inside doc domain as well
 * the root route get defined first and then the public folder. this allows route to supersede index.html
 * doc domain is now configured to have a root route and also a public static folder. 
 */
app.use(vhost(DOC, doc));

app.use(express.static('public'));

app.use(vhost(API, api));

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

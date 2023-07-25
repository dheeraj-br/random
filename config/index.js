import dotenv from 'dotenv';
import path from 'path';
import fileAndDirNames from '../util/util.js';

dotenv.config({
    path: path.resolve(
        fileAndDirNames(import.meta.url).__dirname,
        `../env/.env.${process.env.NODE_ENV}`,
    ),
    debug: process.env.NODE_ENV, // TODO: enable debugging for env variables
});

const config = {
    PORT: process.env.PORT,
    DOMAIN: process.env.DOMAIN,
};

export default config;

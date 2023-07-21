import express from 'express';
import { getById, list, subdomain } from './controller.js';

export const router = express.Router();

router.get('/list', list);
router.get('/:id', getById);
router.get('/', subdomain);

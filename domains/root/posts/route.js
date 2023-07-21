import express from 'express';
import { getById, list } from './controller.js';

export const router = express.Router();

router.get('/list', list);
router.get('/:id', getById);

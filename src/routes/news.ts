import express from 'express';
import NewsController from '../app/controllers/NewsController';

const controller = new NewsController();
const router = express.Router();

router.get('/:slug', controller.detail);
router.get('/', controller.index);

export default router;

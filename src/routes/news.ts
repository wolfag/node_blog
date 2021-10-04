import express from 'express';
import NewsController from '../app/controllers/NewsController';

const controller = new NewsController();
const router = express.Router();

router.use('/:slug', controller.detail);
router.use('/', controller.index);

export default router;

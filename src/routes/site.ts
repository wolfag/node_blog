import express from 'express';
import SiteController from '../app/controllers/SiteController';

const controller = new SiteController();
const router = express.Router();

router.get('/search', controller.search);
router.get('/', controller.index);

export default router;

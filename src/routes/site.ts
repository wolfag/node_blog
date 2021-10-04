import express from 'express'
import SiteController from '../app/controllers/SiteController';

const controller = new SiteController();
const router = express.Router();

router.use('/search', controller.search)
router.use('/', controller.index)

export default router;
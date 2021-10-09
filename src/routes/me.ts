import express from 'express';
import MeController from '../app/controllers/MeController';

const controller = new MeController();
const router = express.Router();

router.get('/courses', controller.course);

export default router;

import express from 'express';
import CourseController from '../app/controllers/CourseController';

const controller = new CourseController();
const router = express.Router();

router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);
router.get('/:slug', controller.detail);

export default router;

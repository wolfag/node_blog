const express = require('express');
const router = express.Router();

const controller = require('../app/controllers/CourseController');

router.get('/create', controller.create);
router.post('/create', controller.store);
router.get('/:id/edit', controller.edit);
router.put('/:id', controller.update);
router.delete('/:id/force', controller.forceDelete);
router.delete('/:id', controller.delete);
router.patch('/:id/restore', controller.restore);
router.get('/:slug', controller.detail);

module.exports = router;

const express = require('express');
const controller = require('../app/controllers/MeController');

const router = express.Router();

router.get('/courses/trash', controller.trash);
router.get('/courses', controller.course);

module.exports = router;

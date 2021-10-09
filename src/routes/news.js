const express = require('express');
const controller = require('../app/controllers/NewsController');

const router = express.Router();

router.get('/:slug', controller.detail);
router.get('/', controller.index);

module.exports = router;

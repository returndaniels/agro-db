
const express = require('express');
const router = express.Router();
const imagekitControllers = require('../controllers/imagekit.controllers');

router.get('/auth', imagekitControllers.auth);

module.exports = router;
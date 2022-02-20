
const express = require('express');
const router = express.Router();
const tractorControllers = require('../controllers/tractors.controllers');

router.get('/', tractorControllers.getTractors);
router.post('/', tractorControllers.createTractor);
router.patch('/', tractorControllers.updateTractor);
router.delete('/', tractorControllers.deleteTractor); 

module.exports = router;
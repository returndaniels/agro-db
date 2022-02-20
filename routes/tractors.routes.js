
const express = require("express");
const router = express.Router();
const tractorControllers = require('../controllers/tractors.controllers');

router.get("/", tractorControllers.getTractors);
router.post('/', tractorControllers.createTractor);
router.patch('/:name', tractorControllers.updateTractor);
router.delete('/:name', tractorControllers.deleteTractor); 

module.exports = router;
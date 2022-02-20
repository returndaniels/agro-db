
const express = require("express");
const router = express.Router();
const tractorControllers = require('../controllers/tractors.controllers');

router.get("/", tractorControllers.getTractors);
router.post('/create', tractorControllers.createTractor);
router.patch('/update/:name', tractorControllers.updateTractor);
router.delete('/delete/:name', tractorControllers.deleteTractor); 

module.exports = router;
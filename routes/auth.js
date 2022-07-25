const express = require("express");
const { model } = require("mongoose");
const authController = require('../controllers/auth');
const flowController = require('../controllers/flow');

const router = express.Router();

router.get('/flowdata', authController.flow);
router.get('/resivourdata', authController.level);
router.get('/:id',flowController.flowid);
module.exports = router;
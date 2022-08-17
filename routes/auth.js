const express = require("express");
const { model } = require("mongoose");
const authController = require('../controllers/auth');
const flowController = require('../controllers/flow');
const logController = require('../controllers/log');

const router = express.Router();

router.get('/flowdata', authController.flow);
router.get('/leveldata', authController.level);
router.get('/flow/:id',flowController.flowid);
router.get('/level/:id', flowController.levelid);
router.get('/log/flow/:id', logController.flowlog);
router.get('/log/level/:id', logController.levellog);
module.exports = router;
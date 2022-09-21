const express = require("express");
const { model } = require("mongoose");
const authController = require('../controllers/auth');
const flowController = require('../controllers/flow');
const logController = require('../controllers/log');
const valveController = require('../controllers/valve');

const router = express.Router();

router.get('/flowdata', authController.flow);
router.get('/leveldata', authController.level);
router.get('/flow/:id',flowController.flowid);
router.get('/level/:id', flowController.levelid);
router.post('/log/flow/:id', logController.flowlog);
router.post('/log/level/:id', logController.levellog);
router.post('/valvedata', valveController.valve);
router.get('/valvelist', valveController.valvelist);
router.post('/specific', valveController.specific);
module.exports = router;
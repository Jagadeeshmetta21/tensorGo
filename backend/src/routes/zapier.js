const express = require('express');
const zapierController = require('../controllers/zapier.controller');

const router = express.Router();

router.post('/trigger', zapierController.triggerAutomation);

module.exports = router;
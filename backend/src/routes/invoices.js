const express = require('express');
const invoiceController = require('../controllers/invoice.controller');

const router = express.Router();

router.get('/', invoiceController.getInvoices);

module.exports = router;
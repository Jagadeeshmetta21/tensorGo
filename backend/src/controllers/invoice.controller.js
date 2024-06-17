const Invoice = require('../models/invoice.model');
const invoiceService = require('../services/invoice.service');

const invoiceController = {
  getInvoices: async (req, res) => {
    try {
      console.log("triggered", req.query)
      // Fetch invoices for the authenticated user
      const userId = req.query.userId; // Assuming you have the user ID from the session or authentication middleware
      console.log(userId, "userid")
      const invoices = await invoiceService.getInvoicesByUserId(userId);
      console.log("post invoice")
      res.json(invoices);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = invoiceController;
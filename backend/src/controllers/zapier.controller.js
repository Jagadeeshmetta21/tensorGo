const axios = require('axios');
const config = require('../config/config');
const invoiceService = require('../services/invoice.service');

const zapierController = {
  triggerAutomation: async (req, res) => {
    try {
      // Fetch past-due invoices for the authenticated user
      const userId = req.query.userId; // Assuming you have the user ID from the session or authentication middleware
      console.log(userId)
      const pastDueInvoices = await invoiceService.getPastDueInvoicesByUserId(userId);

      // Send a POST request to the Zapier webhook URL for each past-due invoice
      for (const invoice of pastDueInvoices) {
        await axios.post(config.zapierWebhookURL, invoice);
      }

      res.status(200).json({ message: 'Zapier automation triggered successfully' });
    } catch (error) {
      console.error('Error triggering Zapier automation:', error);
      res.status(500).json({ error: 'Failed to trigger Zapier automation' });
    }
  },
};

module.exports = zapierController;
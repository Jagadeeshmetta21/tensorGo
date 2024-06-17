const Invoice = require('../models/invoice.model');

const dueInvoices = [
  {
    id: 1,
    amount: 500,
    dueDate: '2023-06-30',
    recipient: 'John Doe',
  },
  {
    id: 2,
    amount: 750,
    dueDate: '2023-07-15',
    recipient: 'Jane Smith',
  },
];

const pastDueInvoice = [
  {
    id: 1,
    amount: 500,
    dueDate: '2023-06-30',
    recipient: 'John Doe',
  },
];

const invoiceService = {
  getInvoicesByUserId: async (userId) => {
    // const invoices = await Invoice.find({ userId });
    console.log("post invoice")
    return dueInvoices;
  },

  getPastDueInvoicesByUserId: async (userId) => {
    const currentDate = new Date();
    // const pastDueInvoices = await Invoice.find({ userId, dueDate: { $lt: currentDate } });
    return pastDueInvoice;
  },
};

module.exports = invoiceService;
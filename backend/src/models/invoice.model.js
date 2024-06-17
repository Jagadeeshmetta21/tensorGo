const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
  recipient: { type: String, required: true },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
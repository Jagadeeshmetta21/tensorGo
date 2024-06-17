import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [usersId, setUserId] = useSearchParams()
  console.log(usersId)
  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      console.log("came here ")
      const response = await axios.get(`http://localhost:5000/api/invoices/?${usersId}`);
      setInvoices(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const triggerAutomation = async () => {
    try {
      await axios.post(`http://localhost:5000/api/zapier/trigger?${usersId}`, { /* Past-due invoice data */ });
      console.log('Automation triggered');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Due Invoices</h2>
      <ul style={{textAlign: 'center', marginTop: '30px'}}>
        {invoices.map((invoice) => (
          <li key={invoice.id} style={{textAlign: 'center', marginTop: '30px', listStyleType:'none'}}>
            <p>Invoice Amount: {invoice.amount}</p>
            <p>Due Date: {invoice.dueDate}</p>
            <p>Recipient: {invoice.recipient}</p>
          </li>
        ))}
      </ul>
      <button onClick={triggerAutomation}>Trigger Automation</button>
    </div>
  );
};

export default InvoiceList;
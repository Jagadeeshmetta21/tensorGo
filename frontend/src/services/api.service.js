import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getInvoices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/invoices`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const triggerAutomation = (); 
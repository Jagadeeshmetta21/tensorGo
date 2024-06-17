import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/invoices" element={<InvoiceList />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

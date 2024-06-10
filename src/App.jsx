import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Catalog from './pages/Catalog/Catalog';
import Clients from './pages/Clients/Clients';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </Router>
  );
}

export default App;
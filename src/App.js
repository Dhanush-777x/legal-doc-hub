// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home';
import LoginPage from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import AddDocs from './Components/AddDocs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-docs" element={<AddDocs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

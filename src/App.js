// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Components/Home';
import LoginPage from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

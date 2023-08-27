import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="/home" element={<Home/>} />

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

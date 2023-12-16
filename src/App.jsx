import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/login';
import Customer from './components/customer';
import Manager from './components/manager';
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customer-dashboard" element={<Customer />} />
        <Route path="/manager-dashboard" element={<Manager />} />
      </Routes>
    </Router>
  );
};

export default App;

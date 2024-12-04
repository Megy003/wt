import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Users from './pages/users';

ReactDOM.render(
  <Router>
    <Routes>
      {/* Domovská stránka */}
      <Route path="/" element={<App />} />
      {/* Stránka Users */}
      <Route path="/users" element={<Users />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
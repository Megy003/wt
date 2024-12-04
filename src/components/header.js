import React, { useState } from 'react';
import '../styles.css';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const adjustFontSize = (action) => {
    // Example: Font size adjustment logic can be added here
    if (action === 'increase') {
      document.body.style.fontSize = 'larger';
    } else if (action === 'decrease') {
      document.body.style.fontSize = 'smaller';
    }
  };

  const toggleContrast = () => {
    // High contrast mode toggle logic
    document.body.classList.toggle('high-contrast');
  };

  const resetSettings = () => {
    document.body.style.fontSize = '';
    document.body.classList.remove('high-contrast');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000' }}>
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="index.html">
          <img src={require('../img/logo.png')} alt="Logo" width="50px" height="50px" className="d-inline-block align-text-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="domov.html">O NÁS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="team.html">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="zaluby.html">ZÁĽUBY</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="kontakt.html">KONTAKT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="zmeny.html">ZMENY</a>
            </li>
          </ul>
          <button className="open-sidebar-btn" onClick={openSidebar}>☰</button>
          {isSidebarOpen && (
            <div className="sidebar">
              <button className="close-sidebar-btn" onClick={closeSidebar}>x</button>
              <button className="btn btn-link nav-link" onClick={() => adjustFontSize('increase')}>A+</button>
              <button className="btn btn-link nav-link" onClick={() => adjustFontSize('decrease')}>A-</button>
              <button className="btn btn-link nav-link" onClick={toggleContrast}>High Contrast</button>
              <button className="btn btn-link nav-link" onClick={resetSettings}>Reset</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

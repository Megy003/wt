import React, { useState } from 'react';

const Footer = () => {
  
return (
<footer className="footer">
    <div className="container">
        <p>&copy; 2024 WT. Všetky práva vyhradené.</p>
        <ul className="footer-links">
            <li><a href="index.html">Hlavná stránka</a></li>
            <li><a href="team.html">Team</a></li>
            <li><a href="zaluby.html">Záľuby</a></li>
            <li><a href="kontakt.html">Kontakt</a></li>
            <li><a href="zmeny.html">Zmeny</a></li>
        </ul>
    </div>
</footer>);
};

export default Footer;
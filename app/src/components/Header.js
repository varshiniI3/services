import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      {/* Main header container */}
      <div className="header-content">
        {/* Container for header content */}
        <div className="header-info">
          Consulting WP<span className="header-bullet"></span>
          New York<span className="header-bullet"></span>
          Services
          {/* Information about the company with bullets */}
        </div>
        <nav className="header-nav">
          {/* Navigation section */}
          <a href="/services" className="header-link">
            Services
            {/* Link to the services page */}
            <div className="header-underline"></div>
            {/* Underline for the link */}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header; // Export the Header component

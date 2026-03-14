import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          Rohith
        </Link>
        
        <div className="nav-actions">
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/#about" className={location.pathname === '/' && location.hash === '#about' ? 'active' : ''} onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={closeMenu}>Projects</Link>
            </li>
            <li>
              <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''} onClick={closeMenu}>Resume</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
            </li>
          </ul>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            <div className="theme-icon">
              {theme === 'light' ? '🌙' : '☀️'}
            </div>
          </button>

          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

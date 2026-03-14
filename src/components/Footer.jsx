import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Rohith. All rights reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/Rohith-E-S" target="_blank" rel="noopener noreferrer" className="">GitHub</a>
          <a href="https://www.linkedin.com/in/rohith-es" target="_blank" rel="noopener noreferrer" className="">LinkedIn</a>
          <a href="https://leetcode.com/u/lB3ShTo4iG" target="_blank" rel="noopener noreferrer" className="">LeetCode</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

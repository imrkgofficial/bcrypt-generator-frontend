import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p className="copyright">
        &copy; {currentYear} <a href="https://www.rkgoyal.com" target="_blank" rel="noopener noreferrer">rkgoyal.com</a>. All rights reserved.
      </p>
      <p className="developer">Developed by Rajat Kumar Goyal</p>
    </footer>
  );
};

export default Footer;
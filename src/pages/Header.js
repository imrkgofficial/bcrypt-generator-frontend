import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
      <header>
        <h1>Bcrypt Generator</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/generate">Generate Hash</Link>
          <Link to="/check">Check Hash</Link>
        </nav>
      </header>
    );
  };
  
  export default Header;
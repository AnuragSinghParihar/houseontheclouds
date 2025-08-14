import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Navbar = () => {
  return (
    <nav>
      <section className="navbar">
        <div className="navbar-left">
          <Link to="/about" className="link-btn">About</Link>
          <Link to="/stay">Stay</Link>
          <Link to="/dine">Dine</Link>
          <a href="#contact">Contact</a>
        </div>
        <div className="navbar-center">
          <div className="logo-box">
            <Link to="/">
              <img src="" alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <Link to="/booking" className="book-btn">Book Here</Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar; 
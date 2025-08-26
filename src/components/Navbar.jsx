import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Landing.css';
import logo from '../assets/IMG_9032.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <section className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={`link-btn ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
          <Link to="/stay" className={location.pathname === '/stay' ? 'active' : ''}>Stay</Link>
          <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        </div>
        <div className="navbar-center">
          <div className="logo-box">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <a href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti" target="_blank" rel="noopener noreferrer" className="book-btn">Book Here</a>
        </div>
      </section>

    </nav>
  );
};

export default Navbar; 
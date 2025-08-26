import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Landing.css';
import logo from '../assets/IMG_9032.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="logo-box mobile-logo">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <button className="close-menu-btn" onClick={toggleMobileMenu}>
              <span>×</span>
            </button>
          </div>
          
          <div className="mobile-menu-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/stay" className={location.pathname === '/stay' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Stay
            </Link>
            <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Gallery
            </Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
          
          <div className="mobile-menu-footer">
            <a href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti" target="_blank" rel="noopener noreferrer" className="book-btn mobile-book-btn">
              Book Here
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
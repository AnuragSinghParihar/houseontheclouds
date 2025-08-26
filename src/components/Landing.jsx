import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Landing.css';
import Backvideo from "../assets/back.mp4"
import logo from "../assets/IMG_9032.jpeg"

const Landing = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="landing-container">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          
        >
          <source src={Backvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <nav>
          <section className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-left">
              <Link to="/">Home</Link>
              <Link to="/about" className="link-btn">About Us</Link>
              <Link to="/stay">Stay</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="navbar-center">
              <div className="logo-box">
                <img src={logo} alt="Logo" />
              </div>
            </div>

            <div className="navbar-right">
              <a href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti" target="_blank" rel="noopener noreferrer" className="book-btn">Book Here</a>
            </div>
          </section>
        </nav>

        <div className='writting'>
          <h6 className='heading-one'>SPITI VALLEY</h6>
          <h2 className='heading-two'>A place to pause, breathe, and belong</h2>
          <h1 className='heading-three'>House on the Clouds</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Landing.css';
// Assets moved to public folder - using direct URLs

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
          preload="metadata"
          onError={(e) => console.error('Background video error:', e.target.error || 'Unknown error')}
        >
          <source src="/videos/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <nav>
          <section className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                          <div className="navbar-left">
                <Link to="/about" className="link-btn">The Journey</Link>
                <Link to="/stay">Accommodation</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
              </div>

            <div className="navbar-center">
              <div className="logo-box">
                <img src="/images/IMG_9032.jpeg" alt="Logo" />
              </div>
            </div>

            <div className="navbar-right">
              <a href="https://live.ipms247.com/booking/book-rooms-houseonthecloudsspiti" target="_blank" rel="noopener noreferrer" className="book-btn">Book Here</a>
            </div>
          </section>
        </nav>

        <div className='writting'>
          <h6 className='heading-one'>SPITI VALLEY</h6>
          <h2 className='heading-two'>A place to pause, breathe and belong</h2>
          <h1 className='heading-three'>House on the Clouds</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;

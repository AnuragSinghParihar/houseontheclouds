import React, { useState, useEffect } from 'react';
import './RoomShowcase.css';
import roomImg1 from '../assets/landing1.JPG';
import roomImg2 from '../assets/landing2.JPG';
import roomImg3 from '../assets/f76b8068-9e57-4e2f-8319-a6c15cb8cd6d copy.JPG';
import roomImg4 from '../assets/94b1a1ab-d592-4a13-8877-f9358ed7605e.JPG';
import experienceImage from '../assets/House on the Clouds is not a hotel — it is an experience. (2).png';
import experienceImage3 from '../assets/House on the Clouds is not a hotel — it is an experience. (3).png';

const RoomShowcase = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="room-showcase">
      <div className="showcase-content">
        {/* First Image - Full Screen Cover */}
        <div className="fullscreen-image-container">
          <img 
            src={experienceImage} 
            alt="House on the Clouds is not a hotel — it is an experience" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
          </div>
        </div>
        
        {/* Second Image - Below the first */}
        <div className="second-image-container">
          <img 
            src={experienceImage3} 
            alt="A beautiful room with a view" 
            className="second-image"
          />
          <div className="second-image-text-overlay">
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;

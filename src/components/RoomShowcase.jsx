import React from 'react';
import './RoomShowcase.css';
// Assets moved to public folder - using direct URLs

const RoomShowcase = () => {
  // Scroll tracking for potential future use
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <section className="room-showcase">
      <div className="showcase-content">
        {/* First Image - Full Screen Cover */}
        <div className="fullscreen-image-container">
          <img 
            src="/images/house-on-the-clouds-experience-2.png" 
            alt="House on the Clouds is not a hotel — it is an experience" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
          </div>
        </div>
        
        {/* Second Image - Below the first */}
        <div className="second-image-container">
          <img 
            src="/images/house-on-the-clouds-experience-3.png" 
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

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
        {/* First Image - Medium size on right side */}
        <div className="fullscreen-image-container">
          <img 
            src="/images/landing1.JPG" 
            alt="House on the Clouds is not a hotel — it is an experience" 
            className="fullscreen-image"
          />
          <div className="image-text-overlay">
            <div className="text-content">
              <p className="combined-text">House on the Clouds is not a hotel — it is an experience. Set amidst quiet landscapes, House on the Clouds invites you to pause and reconnect.</p>
            </div>
          </div>
        </div>
        
        {/* Second Image - Below the first */}
        <div className="second-image-container">
          <img 
            src="/images/94b1a1ab-d592-4a13-8877-f9358ed7605e-copy.JPG" 
            alt="A beautiful room with a view" 
            className="second-image"
          />
        </div>
        
        {/* Text outside the image */}
        <div className="second-text-container">
          <div className="second-text-content">
            <p className="second-combined-text">
              Each room is thoughtfully
              designed inspired by local
              Spiti architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;

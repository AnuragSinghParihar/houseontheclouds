import React, { useState, useEffect } from 'react'
import './OurStory.css'
// Assets moved to public folder - using direct URLs
import Navbar from './Navbar'
import Footer from './Footer'

const OurStory = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/IMG_9462.jpg", "/images/IMG_9520.jpg", "/images/IMG_9444.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <Navbar />
      
      {/* Image Background Section */}
      <div className="ourstory-image-bg">
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Background ${index + 1}`}
              className={`slider-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="ourstory-overlay" />
        <div className="ourstory-content">
          <h1 className="ourstory-title">Our Story</h1>
        </div>
      </div>

      {/* Sustainable Architecture Heading */}
      <div className="sustainable-architecture-section">
        <h2 className="sustainable-architecture-title">Sustainable Architecture</h2>
      </div>

      {/* Video Section */}
      <div className="video-showcase">
        <div className="video-container">
          <div className="video-text-section">
            <h2 className="video-content-title">Mud sourced from valley</h2>
            <p className="video-content-body">
              At House on the Clouds, every wall tells a story of the land. The mud used in our architecture is sourced directly from the valley, in its natural palette of warm earth tones, bringing the mountains into every corner of our home.
            </p>
            <p className="video-content-body">
              Mud walls crafted by Local Hands
            </p>
            <p className="video-content-body">
              Our walls are more than just structures — they are canvases. Local artisans handcraft mud paintings, layering traditional techniques with timeless artistry.
            </p>
          </div>
          <div className="video-section">
            <div className="video-frame">
              <video 
                className="sustainable-video" 
                autoPlay 
                muted 
                loop 
                playsInline
                preload="none"
                onError={(e) => {
                  console.error('Video error:', e.target.error || 'Unknown error');
                  console.error('Video src:', e.target.currentSrc);
                  console.error('Video networkState:', e.target.networkState);
                  // Hide video and show fallback image
                  e.target.style.display = 'none';
                  const fallback = document.createElement('img');
                  fallback.src = '/images/IMG_0307.jpg';
                  fallback.alt = 'Sustainable Architecture';
                  fallback.className = 'sustainable-video-fallback';
                  fallback.style.width = '100%';
                  fallback.style.height = '100%';
                  fallback.style.objectFit = 'cover';
                  e.target.parentNode.appendChild(fallback);
                }}
                onLoadStart={() => console.log('Video loading started')}
                onCanPlay={() => console.log('Video can play')}
                onLoadedData={() => console.log('Video data loaded')}
                onAbort={() => console.log('Video loading aborted')}
                onStalled={() => console.log('Video loading stalled')}
              >
                <source src="/videos/1755973836362340-2.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* Night View Section */}
      <div className="night-view-showcase">
        <div className="night-view-container">
          <div className="night-view-image-section">
            <img src="/images/IMG_0307.jpg" alt="House on the Clouds at Night" className="night-view-image" />
          </div>
          <div className="night-view-text-section">
            <h2 className="night-view-title">A Sanctuary Under the Stars</h2>
            <p className="night-view-description">
              As the sun sets over the majestic Himalayas, our House on the Clouds transforms into a magical sanctuary bathed in moonlight. The warm glow from our windows creates a beacon of comfort against the vast mountain landscape, inviting weary travelers to find rest and rejuvenation.
              <br /><br />
              The traditional decorative elements adorning our entrance, with their vibrant colors and cultural significance, stand as a testament to the rich heritage of Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Gathering Section */}
      <div className="gathering-showcase">
        <div className="gathering-container">
          <div className="gathering-text-section">
            <h2 className="gathering-title">Where Stories Come Alive</h2>
            <p className="gathering-description">
              In our warm and inviting common spaces, guests from around the world gather to share stories, experiences, and moments of connection. The presence of local spiritual leaders and community members creates an atmosphere of cultural exchange and authentic Himalayan hospitality.
              <br /><br />
              Over traditional tea and local delicacies, friendships are forged and memories are made.
            </p>
          </div>
          <div className="gathering-image-section">
            <img src="/images/IMG_0297.JPG" alt="Community Gathering at House on the Clouds" className="gathering-image" />
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="owner-showcase">
        <div className="owner-container">
          <div className="owner-image-section">
            <img src="/images/IMG_0309.jpg" alt="Hotel Owner and Building Owner with Family" className="owner-image" />
          </div>
          <div className="owner-text-section">
            <h2 className="owner-title">Meet Our Family</h2>
            <p className="owner-description">
              At the heart of House on the Clouds is our family – the hotel owner and building owner, who have poured their passion and heritage into creating this mountain sanctuary. Together with their family, they embody the true spirit of Himachali hospitality, ensuring every guest feels like part of our extended family.
              <br /><br />
              The presence of the revered Buddhist monk in our gatherings reflects the deep spiritual connection that guides our approach to hospitality.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OurStory

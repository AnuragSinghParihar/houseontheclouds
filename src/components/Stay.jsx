import React, { useState, useEffect, useRef } from 'react';
import './Stay.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Assets moved to public folder - using direct URLs

const Stay = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Refs for images to apply zoom effect
  const sliderImageRefs = useRef([]);
  const additionalImageRefs = useRef([]);

  const images = [
    "/images/f76b8068-9e57-4e2f-8319-a6c15cb8cd6d.JPG",
    "/images/3ee78e74-61ff-47dd-a0e9-715667b77fb3-copy.JPG",
    "/images/94b1a1ab-d592-4a13-8877-f9358ed7605e-copy.JPG"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Intersection Observer for zoom effect
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('image-zoom-active');
        } else {
          entry.target.classList.remove('image-zoom-active');
        }
      });
    }, observerOptions);

    // Observe all images
    const allImages = [
      ...sliderImageRefs.current,
      ...additionalImageRefs.current
    ].filter(Boolean);

    allImages.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => {
      allImages.forEach((img) => {
        if (img) observer.unobserve(img);
      });
    };
  }, []);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  // Amenities data - currently not used in the component
  // const amenities = [
  //   {
  //     icon: "/images/hotel.png",
  //     title: "Luxury Rooms"
  //   },
  //   {
  //     icon: "/images/view.png",
  //     title: "Panoramic Views"
  //   },
  //   {
  //     icon: "/images/living-room.png",
  //     title: "Cozy Living Spaces"
  //   },
  //   {
  //     icon: "/images/food.png",
  //     title: "Local Cuisine"
  //   }
  // ];

  return (
    <div className="stay-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="accommodation-hero">
        <img 
          src="/images/94b1a1ab-d592-4a13-8877-f9358ed7605e-copy.JPG" 
          alt="House on the Clouds Accommodation" 
          className="hero-background"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Accommodation</h1>
            <p className="hero-subtitle">Your sanctuary above the clouds</p>
            <p className="hero-description">Experience luxury at 13,615 feet in the heart of Spiti Valley</p>
          </div>
        </div>
        <div className="accommodation-text-right">
          <h2 className="accommodation-right-title">Accommodation</h2>
        </div>
      </div>

      {/* Elegant Text Section */}
      <section className="elegant-text-section">
        <div className="elegant-text-container">
          <h2 className="elegant-top-text">STAY WITH US</h2>
          <div className="elegant-separator"></div>
          <h1 className="elegant-bottom-text">Your house above the clouds at 13,500 ft</h1>
        </div>
      </section>

      {/* Additional Image Section */}
      <section className="additional-room-image-section">
        <div className="additional-room-text">
          <p className="room-description-text">
            A serene mountain retreat where elegance meets comfort—this room features large windows that open to breathtaking valley views, a cozy seating corner perfect for slow mornings, and warm wooden interiors that blend modern design with natural charm.
          </p>
        </div>
        <div className="additional-room-image-container">
          <img 
            src="/images/4ee2d515-8c5a-44bf-8232-7b718e4f65ae-copy.JPG" 
            alt="Room with Mountain View" 
            className="additional-room-image"
          />
        </div>
      </section>

      {/* Third Image Section - Centered */}
      <section className="third-image-section">
        <div className="third-image-container">
          <img 
            src="/images/d18b9578-3fb0-4141-a8e3-bfa880cf93ad-copy.JPG" 
            alt="Bedroom with Mountain Views" 
            className="third-room-image"
          />
        </div>
      </section>

      {/* Fourth Image Section - Left Side */}
      <section className="fourth-image-section">
        <div className="fourth-image-container">
          <img 
            src="/images/6491a429-039e-4ab6-8360-c81ea0631878-copy.JPG" 
            alt="Bedroom with Accent Wall" 
            className="fourth-room-image"
          />
        </div>
        <div className="fourth-room-text">
          <p className="fourth-room-description-text">
            Inspired by the natural palette of Spiti, this room blends earthy textures with modern elegance. The handcrafted wall design and warm accents reflect the valley's rugged beauty, while plush bedding and soft tones create a serene retreat in the heart of Chicham.
          </p>
        </div>
      </section>

      {/* Fifth Image Section - Right Side */}
      <section className="fifth-image-section">
        <div className="fifth-room-text">
          <p className="fifth-room-description-text">
            Experience luxury in every detail with our thoughtfully designed bathroom. Featuring modern fixtures, elegant tile work, and a window that frames the stunning mountain landscape, this space combines comfort with the breathtaking views that make House on the Clouds truly special.
          </p>
        </div>
        <div className="fifth-image-container">
          <img 
            src="/images/4e11b3c0-a26a-4894-92e2-e821e57235f0-copy.JPG" 
            alt="Bathroom with Mountain View" 
            className="fifth-room-image"
          />
        </div>
      </section>

      {/* Features Section - Three Column Layout */}
      <section className="features-section">
        <div className="features-left-image">
          <img 
            src="/images/f76b8068-9e57-4e2f-8319-a6c15cb8cd6d.JPG" 
            alt="Bedroom with Mountain Views" 
            className="features-image"
          />
        </div>
        
        <div className="features-text-center">
          <h3 className="features-title">HOUSE ON THE CLOUDS FEATURES</h3>
          <h2 className="features-heading">During your stay you'll experience...</h2>
          <ul className="features-list">
            <li>King-sized beds with premium linens</li>
            <li>Ensuite bathrooms with hot water</li>
            <li>Locally inspired decor & handcrafted details</li>
            <li>Panoramic mountain views</li>
            <li>Heating arrangements for colder months</li>
            <li>Complimentary Wi-Fi (where available)</li>
          </ul>
        </div>
        
        <div className="features-right-image">
          <img 
            src="/images/IMG_0452.jpg" 
            alt="Ornate Copper Teapot" 
            className="features-image"
          />
        </div>
      </section>

      {/* Full Screen Building Image */}
      <section className="fullscreen-building-section">
        <div className="fullscreen-building-container">
          <img 
            src="/images/77643edc-cc76-471b-a531-9add469e9b0e 2.jpg" 
            alt="House on the Clouds Building" 
            className="fullscreen-building-image"
          />
        </div>
      </section>

      {/* Common Area Section */}
      <section className="common-area-section">
        <div className="common-area-header">
          <h2 className="common-area-title">Common Areas</h2>
          <p className="common-area-subtitle">Spaces designed for connection and relaxation</p>
        </div>
        
        <div className="common-area-images">
          <div className="common-area-image-container">
            <img 
              src="/images/landing2.JPG" 
              alt="Lounge Area with Warm Lighting" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/landing1.JPG" 
              alt="Living Room with Mountain Views" 
              className="common-area-image"
            />
          </div>
          
          <div className="common-area-image-container">
            <img 
              src="/images/IMG_0308.jpg" 
              alt="Cozy Common Area" 
              className="common-area-image"
            />
          </div>
        </div>
      </section>

      {/* Hotel Information Section */}
      <section className="hotel-info-section">
        <div className="info-container">
          <h2 className="info-title">Hotel & Room Information</h2>
          <p className="info-subtitle">Information for your stay at House on the Clouds</p>
          
          <div className="info-accordion">
            <div className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => toggleSection('cancellation')}
              >
                <span className="accordion-number">01</span>
                <span className="accordion-title">CANCELLATION & REFUND POLICY</span>
                <span className={`accordion-icon ${activeSection === 'cancellation' ? 'active' : ''}`}>+</span>
              </div>
              <div className={`accordion-content ${activeSection === 'cancellation' ? 'active' : ''}`}>
                <p>The refund timeline typically takes 1 to 7 business days once a guest cancels their reservation.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => toggleSection('payment')}
              >
                <span className="accordion-number">02</span>
                <span className="accordion-title">PAYMENT POLICY</span>
                <span className={`accordion-icon ${activeSection === 'payment' ? 'active' : ''}`}>+</span>
              </div>
              <div className={`accordion-content ${activeSection === 'payment' ? 'active' : ''}`}>
                <p>All bills must be settled upon presentation. Personal cheques are not accepted.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => toggleSection('arrival')}
              >
                <span className="accordion-number">03</span>
                <span className="accordion-title">CHECK-IN & CHECK OUT</span>
                <span className={`accordion-icon ${activeSection === 'arrival' ? 'active' : ''}`}>+</span>
              </div>
              <div className={`accordion-content ${activeSection === 'arrival' ? 'active' : ''}`}>
                <p><strong>Check-In Time:</strong> 12:00 PM<br/>
                <strong>Check-Out Time:</strong> 11:00 AM<br/><br/>
                Early check-in and late check-out can be arranged based on availability. Please inform us of your expected arrival time. We provide airport transfers and can arrange local transportation upon request.</p>
              </div>
            </div>

            <div className="accordion-item">
              <div 
                className="accordion-header"
                onClick={() => toggleSection('rates')}
              >
                <span className="accordion-number">04</span>
                <span className="accordion-title">RATES</span>
                <span className={`accordion-icon ${activeSection === 'rates' ? 'active' : ''}`}>+</span>
              </div>
              <div className={`accordion-content ${activeSection === 'rates' ? 'active' : ''}`}>
                <p>Rates vary by season and room type. Peak season: ₹8,000-15,000 per night. Off-season: ₹6,000-12,000 per night. All rates include breakfast and taxes.</p>
                <p><strong>Important:</strong> Room charges exclude applicable taxes and additional services. Guests are advised to contact the Duty Manager for detailed information.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stay; 
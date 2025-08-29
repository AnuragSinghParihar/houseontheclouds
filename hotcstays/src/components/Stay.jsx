import React, { useState, useEffect, useRef } from 'react';
import './Stay.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Import icons - currently not used
// import hotelIcon from '../assets/hotel.png';
// import viewIcon from '../assets/view.png';
// import livingRoomIcon from '../assets/living-room.png';
// import foodIcon from '../assets/food.png';

// Import slider images
import sliderImage1 from '../assets/f76b8068-9e57-4e2f-8319-a6c15cb8cd6d.JPG';
import sliderImage2 from '../assets/3ee78e74-61ff-47dd-a0e9-715667b77fb3 copy.JPG';
import sliderImage3 from '../assets/94b1a1ab-d592-4a13-8877-f9358ed7605e copy.JPG';

// Import room images
// import stayImage from '../assets/94b1a1ab-d592-4a13-8877-f9358ed7605e copy.JPG';
import image1 from '../assets/3ee78e74-61ff-47dd-a0e9-715667b77fb3 copy.JPG';
import image2 from '../assets/4ee2d515-8c5a-44bf-8232-7b718e4f65ae copy.JPG';
import image3 from '../assets/2d688dd2-d148-4136-954d-9fa65519fc9a copy.JPG';
import image4 from '../assets/4e11b3c0-a26a-4894-92e2-e821e57235f0 copy.JPG';
import image5 from '../assets/6491a429-039e-4ab6-8360-c81ea0631878 copy.JPG';
import image6 from '../assets/25343f9f-29ba-4570-8f4a-7fdb5c733ffa copy.JPG';
// import image7 from '../assets/79341af6-0786-4d30-ac9c-ab5d287571cf copy.JPG';
// import image8 from '../assets/a6ecd3d2-9e62-47b8-a584-c81cc0ad2aa0 copy.JPG';
// import image9 from '../assets/c8029426-b8bb-42a5-87dd-d8e57c16e358 copy.JPG';

const Stay = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Refs for images to apply zoom effect
  const sliderImageRefs = useRef([]);
  const additionalImageRefs = useRef([]);

  const images = [sliderImage1, sliderImage2, sliderImage3];

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
  //     icon: hotelIcon,
  //     title: "Luxury Rooms"
  //   },
  //   {
  //     icon: viewIcon,
  //     title: "Panoramic Views"
  //   },
  //   {
  //     icon: livingRoomIcon,
  //     title: "Cozy Living Spaces"
  //   },
  //   {
  //     icon: foodIcon,
  //     title: "Local Cuisine"
  //   }
  // ];

  return (
    <>
      <Navbar />
      
      {/* Hero Image Slider Section */}
      <div className="stay-hero-slider">
        <div className="image-slider">
          {images.map((image, index) => (
            <img
              key={index}
              ref={(el) => (sliderImageRefs.current[index] = el)}
              src={image}
              alt={`Stay slider image ${index + 1}`}
              className={`slider-image scroll-zoom-image ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="hero-image-overlay">
        </div>
        <div className="hero-slogan">
          <h1 className="hero-main-title">Mountains at your window, peace in your soul.</h1>
        </div>
      </div>
      
      {/* Additional Image Section */}
      <div className="additional-image-section">
        <div className="image-container">
          <img 
            ref={(el) => (additionalImageRefs.current[0] = el)}
            src={image6} 
            alt="Luxury bedroom view" 
            className="additional-image scroll-zoom-image" 
          />
          <img 
            ref={(el) => (additionalImageRefs.current[1] = el)}
            src={image2} 
            alt="Luxury room view" 
            className="additional-image right-shifted scroll-zoom-image" 
          />
          <img 
            ref={(el) => (additionalImageRefs.current[2] = el)}
            src={image1} 
            alt="Luxury bedroom interior" 
            className="additional-image scroll-zoom-image" 
          />
          <img 
            ref={(el) => (additionalImageRefs.current[3] = el)}
            src={image5} 
            alt="Luxury bedroom with striped wall" 
            className="additional-image right-shifted scroll-zoom-image" 
          />
          <img 
            ref={(el) => (additionalImageRefs.current[4] = el)}
            src={image3} 
            alt="Modern bathroom interior" 
            className="additional-image scroll-zoom-image" 
          />
          <img 
            ref={(el) => (additionalImageRefs.current[5] = el)}
            src={image4} 
            alt="Bathroom vanity area" 
            className="additional-image right-shifted scroll-zoom-image" 
          />
        </div>
      </div>
      
      {/* Content Section */}
      <section className="stay-content-section">
        <div className="content-container">
          
          {/* Hotel Information Section */}
          <div className="hotel-info-section">
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
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Stay; 
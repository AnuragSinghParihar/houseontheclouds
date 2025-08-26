import React, { useState } from 'react';
import './Stay.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Import icons
import hotelIcon from '../assets/hotel.png';
import viewIcon from '../assets/view.png';
import livingRoomIcon from '../assets/living-room.png';
import foodIcon from '../assets/food.png';

// Import room images
import stayImage from '../assets/94b1a1ab-d592-4a13-8877-f9358ed7605e copy.JPG';
import image1 from '../assets/3ee78e74-61ff-47dd-a0e9-715667b77fb3 copy.JPG';
import image2 from '../assets/4ee2d515-8c5a-44bf-8232-7b718e4f65ae copy.JPG';
import image3 from '../assets/2d688dd2-d148-4136-954d-9fa65519fc9a copy.JPG';
import image4 from '../assets/4e11b3c0-a26a-4894-92e2-e821e57235f0 copy.JPG';
import image5 from '../assets/6491a429-039e-4ab6-8360-c81ea0631878 copy.JPG';
import image6 from '../assets/25343f9f-29ba-4570-8f4a-7fdb5c733ffa copy.JPG';
import image7 from '../assets/79341af6-0786-4d30-ac9c-ab5d287571cf copy.JPG';
import image8 from '../assets/a6ecd3d2-9e62-47b8-a584-c81cc0ad2aa0 copy.JPG';
import image9 from '../assets/c8029426-b8bb-42a5-87dd-d8e57c16e358 copy.JPG';

const Stay = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const amenities = [
    {
      icon: hotelIcon,
      title: "Luxury Rooms"
    },
    {
      icon: viewIcon,
      title: "Panoramic Views"
    },
    {
      icon: livingRoomIcon,
      title: "Cozy Living Spaces"
    },
    {
      icon: foodIcon,
      title: "Local Cuisine"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Image Section */}
      <div className="stay-hero-image">
        <div className="hero-image-overlay">
        </div>
        <div className="hero-slogan">
          <h1 className="hero-main-title">Mountains at your window, peace in your soul.</h1>
        </div>
      </div>
      
      {/* Content Section */}
      <section className="stay-content-section">
        <div className="content-container">
          
          {/* Image and Slogan Layout */}
          <div className="image-slogan-container">
            <div className="left-image">
              <img src={image2} alt="Mountain view room" className="side-image" />
            </div>
            
            <div className="center-section">
              <h2 className="stay-heading">STAY ABOVE THE CLOUDS</h2>
            </div>
            
            <div className="right-image">
              <img src={image1} alt="Luxury room view" className="side-image" />
            </div>
          </div>

          {/* Amenities Section with Icons */}
          <div className="amenities-section">
            <div className="amenities-container">
              <h2 className="amenities-title">Hotel Amenities & Services</h2>
              <p className="amenities-subtitle">Everything you need for a perfect mountain stay</p>
              
              <div className="amenities-grid">
                {amenities.map((amenity, index) => (
                  <div key={index} className="amenity-card">
                    <div className="amenity-icon">
                      <img src={amenity.icon} alt={amenity.title} />
                    </div>
                    <h3 className="amenity-title">{amenity.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Grid Section */}
          <div className="image-grid-section">
            <div className="image-grid">
              <div className="grid-item">
                <img src={image9} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image4} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image5} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image6} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image7} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image8} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={image3} alt="Hotel room" className="grid-image" />
              </div>
              <div className="grid-item">
                <img src={stayImage} alt="Hotel room" className="grid-image" />
              </div>
            </div>
          </div>

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
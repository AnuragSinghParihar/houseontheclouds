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
    <>
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
      </div>

      {/* Room Showcase */}
      <section className="rooms-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Our Rooms</h2>
            <p>Each room is thoughtfully designed to blend traditional Spiti architecture with modern comfort</p>
          </div>

          <div className="room-grid">
            {/* Room 1 */}
            <div className="room-card">
              <div className="room-image">
                <img src="/images/94b1a1ab-d592-4a13-8877-f9358ed7605e-copy.JPG" alt="Mountain View Room" />
                <div className="room-overlay">
                  <span className="room-price">From ₹8,000</span>
                </div>
              </div>
              <div className="room-details">
                <h3>Mountain View Room</h3>
                <p className="room-description">Wake up to panoramic views of snow-capped peaks and ancient monasteries. This spacious room features large windows that frame the majestic Himalayas.</p>
                <div className="room-features">
                  <span>King Bed</span>
                  <span>Mountain View</span>
                  <span>Ensuite Bathroom</span>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="room-card">
              <div className="room-image">
                <img src="/images/6491a1ab-d592-4a13-8877-f9358ed7605e-copy.JPG" alt="Valley Suite" />
                <div className="room-overlay">
                  <span className="room-price">From ₹12,000</span>
                </div>
              </div>
              <div className="room-details">
                <h3>Valley Suite</h3>
                <p className="room-description">Our most luxurious accommodation with uninterrupted views of the Spiti Valley. Features handcrafted wooden interiors and premium amenities.</p>
                <div className="room-features">
                  <span>King Bed</span>
                  <span>Valley View</span>
                  <span>Premium Amenities</span>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className="room-card">
              <div className="room-image">
                <img src="/images/3ee78e74-61ff-47dd-a0e9-715667b77fb3-copy.JPG" alt="Cloud Chamber" />
                <div className="room-overlay">
                  <span className="room-price">From ₹10,000</span>
                </div>
              </div>
              <div className="room-details">
                <h3>Cloud Chamber</h3>
                <p className="room-description">An intimate retreat where luxury meets altitude. Cozy and comfortable with breathtaking views that change with every passing cloud.</p>
                <div className="room-features">
                  <span>Queen Bed</span>
                  <span>Cloud Views</span>
                  <span>Cozy Interior</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="amenities-section">
        <div className="container">
          <div className="section-header">
            <h2>Room Amenities</h2>
            <p>Everything you need for a comfortable stay in the mountains</p>
          </div>

          <div className="amenities-grid">
            <div className="amenity-item">
              <div className="amenity-icon">🛏️</div>
              <h3>Premium Bedding</h3>
              <p>King-sized beds with high-quality linens and down comforters</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">🚿</div>
              <h3>Ensuite Bathrooms</h3>
              <p>Private bathrooms with hot water and modern amenities</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">🏔️</div>
              <h3>Mountain Views</h3>
              <p>Large windows offering panoramic views of the Himalayas</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">🔥</div>
              <h3>Heating</h3>
              <p>Comfortable heating arrangements for colder months</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">📶</div>
              <h3>Wi-Fi</h3>
              <p>Complimentary Wi-Fi available throughout the property</p>
            </div>
            <div className="amenity-item">
              <div className="amenity-icon">🎨</div>
              <h3>Local Decor</h3>
              <p>Handcrafted details and locally inspired interior design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <div className="container">
          <div className="experience-content">
            <div className="experience-text">
              <h2>Your Mountain Experience</h2>
              <p>At House on the Clouds, every detail is crafted to create an unforgettable mountain retreat. From the moment you wake up to the golden rays painting the peaks, to the peaceful evenings under a blanket of stars, your stay will be nothing short of magical.</p>
              <p>Our rooms are designed as sanctuaries where you can truly connect with the raw beauty of Spiti Valley. Whether you're seeking adventure or tranquility, our accommodation provides the perfect base for your Himalayan journey.</p>
            </div>
            <div className="experience-image">
              <img src="/images/25343f9f-29ba-4570-8f4a-7fdb5c733ffa-copy.JPG" alt="Mountain Experience" />
            </div>
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
    </>
  );
};

export default Stay; 
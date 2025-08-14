import React, { useState } from 'react';
import './Stay.css';
import Navbar from './Navbar';
import Footer from './Footer';
import HotelVideo from '../assets/hotelvideo.mp4';
import roomone from '../assets/roomone.jpg';
import roomtwo from '../assets/roomtwo.jpg';
import imageone from '../assets/imageone.JPG';
import fifthimage from '../assets/fifthimage.JPG';
import IMG_0001 from '../assets/IMG_0001.JPG';
import IMG_0017 from '../assets/IMG_0017.JPG';
import IMG_0018 from '../assets/IMG_0018.JPG';
import IMG_0021 from '../assets/IMG_0021.JPG';
import IMG_0022 from '../assets/IMG_0022.JPG';
import IMG_0023 from '../assets/IMG_0023.JPG';
import IMG_0024 from '../assets/IMG_0024.JPG';
import IMG_0025 from '../assets/IMG_0025.JPG';
import IMG_0026 from '../assets/IMG_0026.JPG';
import IMG_0027 from '../assets/IMG_0027.JPG';
import IMG_0028 from '../assets/IMG_0028.JPG';
import IMG_0029 from '../assets/IMG_0029.JPG';
import IMG_0212 from '../assets/IMG_0212.JPG';
import IMG_0214 from '../assets/IMG_0214.JPG';
import IMG_0216 from '../assets/IMG_0216.JPG';
import IMG_0218 from '../assets/IMG_0218.JPG';
import IMG_0219 from '../assets/IMG_0219.JPG';
import IMG_0289 from '../assets/IMG_0289.JPG';
import IMG_4475 from '../assets/IMG_4475.JPG';

const roomData = [
  {
    id: 1,
    name: 'Dawa (ཟླ་བ་)',
    meaning: 'Moon',
    essence: 'Grace of the night',
    mainImage: roomone,
    images: [roomone, IMG_0001, IMG_0017, IMG_0018],
    description: 'A serene room inspired by the moon, offering tranquility and peace. Experience the gentle glow of moonlight through our panoramic windows.',
    price: 299,
    status: 'Available',
    payment: '30% Advanced',
    guests: 2,
    beds: 1,
    features: ['Mountain View', 'Private Balcony', 'Luxury Bedding', 'En-suite Bathroom']
  },
  {
    id: 2,
    name: 'Sprin (སྤྲིན་)',
    meaning: 'Clouds',
    essence: 'The floating sky',
    mainImage: roomtwo,
    images: [roomtwo, IMG_0021, IMG_0022, IMG_0023],
    description: 'Float above the world in this cloud-inspired sanctuary with breathtaking mountain views and premium amenities.',
    price: 399,
    status: 'Available',
    payment: '30% Advanced',
    guests: 3,
    beds: 2,
    features: ['Panoramic Windows', 'Sitting Area', 'Premium Amenities', 'Mountain Vista']
  },
  {
    id: 3,
    name: 'Yul (ཡུལ་)',
    meaning: 'Village',
    essence: 'The land that holds your spirit',
    mainImage: imageone,
    images: [imageone, IMG_0024, IMG_0025, IMG_0026],
    description: 'Connect with the local culture in this village-inspired room that brings the essence of Spiti Valley to your doorstep.',
    price: 499,
    status: 'Available',
    payment: '30% Advanced',
    guests: 4,
    beds: 2,
    features: ['Cultural Elements', 'Comfortable Seating', 'Local Artwork', 'Village Views']
  },
  {
    id: 4,
    name: 'Riwo (རི་བོ་)',
    meaning: 'Mountain',
    essence: 'The stillness of giants',
    mainImage: fifthimage,
    images: [fifthimage, IMG_0027, IMG_0028, IMG_0029],
    description: 'Feel the power of the mountains in this majestic room designed to capture the grandeur of the Himalayas.',
    price: 599,
    status: 'Available',
    payment: '30% Advanced',
    guests: 3,
    beds: 2,
    features: ['Mountain Views', 'Luxury Furnishings', 'Spacious Layout', 'Premium Bathroom']
  },
  {
    id: 5,
    name: 'Kha (དཀར་པོ་)',
    meaning: 'Snow',
    essence: 'The purity of the highlands',
    mainImage: IMG_0212,
    images: [IMG_0212, IMG_0214, IMG_0216, IMG_0218],
    description: 'Experience the pristine beauty of snow-covered peaks in this elegant room that celebrates the purity of nature.',
    price: 699,
    status: 'Available',
    payment: '30% Advanced',
    guests: 2,
    beds: 1,
    features: ['Snow Views', 'Elegant Design', 'Comfort Features', 'Natural Light']
  },
  {
    id: 6,
    name: 'Namkha (ནམ་མཁའ་)',
    meaning: 'Sky',
    essence: 'Where the clouds drift endlessly',
    mainImage: IMG_0219,
    images: [IMG_0219, IMG_0289, IMG_4475, roomone],
    description: 'Gaze into the endless sky from this elevated room that offers the most spectacular views of the Spiti Valley.',
    price: 799,
    status: 'Available',
    payment: '30% Advanced',
    guests: 3,
    beds: 2,
    features: ['Sky Views', 'Elevated Position', 'Premium Comfort', 'Luxury Amenities']
  },
  {
    id: 7,
    name: 'Kora (བསྐོར་བ་)',
    meaning: 'The Circle',
    essence: 'A place to pause, breathe, and belong',
    mainImage: IMG_0001,
    images: [IMG_0001, IMG_0017, IMG_0018, roomtwo],
    description: 'Complete your journey in this circular room of completion, designed for ultimate relaxation and reflection.',
    price: 899,
    status: 'Available',
    payment: '30% Advanced',
    guests: 4,
    beds: 2,
    features: ['Circular Design', 'Meditation Space', 'Premium Comfort', 'Serene Atmosphere']
  }
];

const Stay = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openRoomModal = (room) => {
    setSelectedRoom(room);
    setCurrentImageIndex(0);
  };

  const closeRoomModal = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedRoom.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedRoom.images.length - 1 : prev - 1
    );
  };

  const handleBookNow = () => {
    window.location.href = '/booking';
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Video Section */}
      <div className="stay-hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={HotelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">Experience Luxury in the Clouds</h1>
          <p className="hero-subtitle">Seven unique rooms, each inspired by the forces of nature</p>
          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">↓</div>
          </div>
        </div>
      </div>

      {/* Rooms Grid Section */}
      <section className="rooms-grid-section">
        <div className="grid-header">
          <h2 className="grid-title">Our Rooms</h2>
          <p className="grid-subtitle">Each room tells a story of the mountains</p>
        </div>
        
        <div className="rooms-grid">
          {roomData.map((room) => (
            <div key={room.id} className="room-card">
              <div className="room-image-section">
                <img src={room.mainImage} alt={room.name} className="room-image" />
              </div>
              
              <div className="room-info-section">
                <div className="room-rating">
                  <div className="stars">★★★★★</div>
                  <span className="reviews">12 Reviews</span>
                </div>
                
                <h3 className="room-title">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                
                <div className="room-price">
                  <span className="price-label">Starts From</span>
                  <div className="price-amount">
                    <span className="currency">$</span>
                    <span className="amount">{room.price}</span>
                    <span className="per-night">/NIGHT</span>
                  </div>
                </div>
                
                <div className="room-details">
                  <div className="detail-item">
                    <span className="detail-label">STATUS:</span>
                    <span className="detail-value">{room.status}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">PAYMENT:</span>
                    <span className="detail-value">{room.payment}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">GUEST:</span>
                    <span className="detail-value">{room.guests}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">BEDS:</span>
                    <span className="detail-value">{room.beds}</span>
                  </div>
                </div>
                
                <div className="room-actions">
                  <button className="book-now-btn" onClick={handleBookNow}>
                    BOOK NOW
                  </button>
                  <button className="more-details-btn" onClick={() => openRoomModal(room)}>
                    MORE DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Room Modal */}
      {selectedRoom && (
        <div className="room-modal-overlay" onClick={closeRoomModal}>
          <div className="room-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeRoomModal}>×</button>
            
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title">{selectedRoom.name}</h2>
                <p className="modal-subtitle">{selectedRoom.meaning} - {selectedRoom.essence}</p>
                <p className="modal-description">{selectedRoom.description}</p>
              </div>
              
              <div className="modal-image-gallery">
                <button className="gallery-nav prev" onClick={prevImage}>‹</button>
                <div className="gallery-image-container">
                  <img 
                    src={selectedRoom.images[currentImageIndex]} 
                    alt={`${selectedRoom.name} - Image ${currentImageIndex + 1}`}
                    className="gallery-image"
                  />
                </div>
                <button className="gallery-nav next" onClick={nextImage}>›</button>
                
                <div className="gallery-thumbnails">
                  {selectedRoom.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <button className="modal-book-btn" onClick={handleBookNow}>
                  Book This Room
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Stay; 
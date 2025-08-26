import React from 'react';
import './RoomShowcase.css';
import roomImg1 from '../assets/landing1.JPG';
import roomImg2 from '../assets/landing2.JPG';

const RoomShowcase = () => {
  return (
    <section className="room-showcase">
      <div className="showcase-content">
        <div className="text-section">
          <h1>
            Experience the perfect blend of <strong>comfort and elegance</strong> in our thoughtfully designed <strong>rooms</strong>.
          </h1>
          <a href="/stay" className="rooms-link">OUR ROOMS</a>
          <div className="small-image-container">
            <img src={roomImg2} alt="fireplace room" className="small-image" />
          </div>
        </div>
        
        <div className="main-image-container">
          <img src={roomImg1} alt="warm room" className="large-image" />
        </div>
      </div>
    </section>
  );
};

export default RoomShowcase;

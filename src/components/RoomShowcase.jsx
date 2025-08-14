import React from 'react';
import './RoomShowcase.css';
import roomImg1 from '../assets/roomone.jpg';
import roomImg2 from '../assets/roomtwo.jpg';

const RoomShowcase = () => {
  return (
    <section className="room-showcase">
      <div className="showcase-text">
        <h1>
          <span>Stay in Timeless</span>
          <br />
          <i>Alpine Elegance</i>
        </h1>
        <p className="subtext">
          Experience the perfect blend of traditional and modern comfort through finely designed rooms.
        </p>
      </div>

      <div className="image-block">
      <img src={roomImg1} alt="warm room" className="sub-image" />
        <img src={roomImg2} alt="fireplace room" className="main-image"  />
        
      </div>
    </section>
  );
};

export default RoomShowcase;

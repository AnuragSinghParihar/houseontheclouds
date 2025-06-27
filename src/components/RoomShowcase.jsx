import React from 'react';
import './RoomShowcase.css';
// import roomImg1 from '../assets/room1.jpg';
// import roomImg2 from '../assets/room2.jpg';

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
        <img src='' alt="fireplace room" className="main-image" />
        <img src='' alt="warm room" className="sub-image" />
      </div>
    </section>
  );
};

export default RoomShowcase;

import React from 'react';
import './About.css';
import HotelVideo from '../assets/hotelvideo.mp4';

const About = () => {
  return (
    <div className="about-video-bg">
      <video className="about-bg-video" autoPlay muted loop playsInline>
        <source src={HotelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="about-overlay" />
      <div className="about-content">
        <h1 className="about-title">Our Story</h1>
        <div className="about-subtitle">More Than a Hotel,<br /><span className="about-heritage">a Heritage of Hospitality</span></div>
      </div>
    </div>
  );
};

export default About; 
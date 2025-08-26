import React from 'react';
import { Link } from 'react-router-dom';
import './HotCLife.css';

const HotCLife = () => {
  return (
    <section className="hotc-section">
      <div className="hotc-container">
        <div className="hotc-text fade-in-left">
          <h2>Ready to Experience Spiti?</h2>
          <p>
            Let's start planning your perfect mountain retreat. Reach out and we'll help you create unforgettable memories in the heart of the Himalayas.
          </p>
          <Link to="/contact" className="hotc-btn">Get In Touch</Link>
        </div>

        <div className="hotc-map fade-in-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5445026284897!2d77.98247847200939!3d32.34439881647555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906a952f92a494f%3A0x1b3c31382fd3f7b5!2sHouse%20on%20the%20Clouds%20Spiti!5e1!3m2!1sen!2sin!4v1755552949588!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="House on the Clouds Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HotCLife;

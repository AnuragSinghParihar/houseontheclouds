import React from 'react';
import './HotCLife.css';

const HotCLife = () => {
  return (
    <section className="hotc-section">
      <div className="hotc-container">
        <div className="hotc-text fade-in-left">
          <h2>The House on the Clouds Life!</h2>
          <p>
          Discover the soul of Himachal with <strong>House on the Clouds</strong> — where every destination is a story waiting to be lived.
          </p>
          <a href="#contact" className="hotc-btn">Send A Query</a>
        </div>

        <div className="hotc-map fade-in-right">
          <iframe
          src='https://maps.app.goo.gl/mZPAHd2hJK3a3cyN6'
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="HotC Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HotCLife;

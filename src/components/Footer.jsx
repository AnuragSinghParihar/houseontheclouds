import React from 'react';
import './Footer.css';

const Landing = () => {
  return (
    <div className="footer-container">
      <header className="logo-header">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1 className="main-title"><i>House on the Clouds</i></h1>
        <p className="location">SPITI VALLEY</p>
        <p className="tagline">
          In the Heart of Spiti<br />
          <em>On the Slopes of Perfection</em>
        </p>
        <div className="footer-underline"></div>
      </header>
      <div className="footer-divider"></div>
      <section className="main-section">
        <div className="left">
          <h2>The Finest Home for Skiers</h2>
          <p><em>A Warm Welcome Awaits</em></p>
        </div>
        <div className="center">
          <p>
            HOUSE ON THE CLOUDS, Chicham village
            172114 
,<br />
           Kaza, Himachal Pradesh, India
          </p>
          <p>
            <strong>HOTEL@HOUSEONTHECLOUDS.AT</strong><br />
            +43 5583 22540
          </p>
        </div>
        <div className="right">
          <p>About,</p>
          <p>Stay,</p>
          <p>Dine,</p>
          <p>Gallery,</p>
          <p>Contact</p>
        </div>
      </section>
      <div className="footer-divider"></div>
      <footer className="footer">
        <p>© 2025 Sporthotel HOUSE ON THE CLOUDS</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Imprint</a>
          <a href="#">Careers</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;

import React from 'react';
import './Landing.css';


const Landing = () => {
  return (
    <>
      <div className="landing-container">
        <video
          className="bg-video"
          autoPlay
          muted
          loop
          
        >
          <source src="https://cdn.back.mp4" type="video/mp4"  />
          Your browser does not support the video tag.
        </video>

        <nav>
          <section className="navbar">
            <div className="navbar-left">
              <a href="#about">About</a>
              <a href="#stay">Stay</a>
              <a href="#dine">Dine</a>
              <a href="#gallery">Gallery</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="navbar-center">
              <div className="logo-box">
                <img src="" alt="Logo" />
              </div>
            </div>

            <div className="navbar-right">
              <button className="book-btn">Book Here</button>
            </div>
          </section>
        </nav>

        <div className='writting'>
          <h6 className='heading-one'>SPITI VALLEY</h6>
          <h2 className='heading-two'>Wake Up to White Peaks<br/><i>Stay in Spiti</i></h2>
          <h1 className='heading-three'><i>House on the Clouds</i></h1>
        </div>
      </div>

      


      
      
      
    </>
  );
};

export default Landing;

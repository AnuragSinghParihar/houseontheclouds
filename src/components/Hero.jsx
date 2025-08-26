import React from 'react'
import './Hero.css'
import HotelVideo from '../assets/hotelvideo.mp4'
import WeatherIcon from '../assets/season.png'
import AltitudeIcon from '../assets/mountain (1).png'
import GettingIcon from '../assets/map.png'
import AccomodationIcon from '../assets/accomodation (1).png'
import { useState } from 'react'
const Hero = () => {
  const [unit, setUnit] = useState('C');

  const handleClick = (selectedUnit) => {
    setUnit(selectedUnit);
  };
  return (
    <>
    <section className='hero'>
        <div className='after-hero'>
            <h6 className='heading-one-hero'>SPITI VALLEY</h6>
            <h1 className='heading-main-two'>A Home in the Heights<br/> <i>Rooted in Spiti's Heart</i></h1>
            <p className='para-one'>Perched at an altitude of 13,615 ft, House on the Clouds offers <br/>
                uninterrupted views of the majestic Himalayan peaks and the rugged<br/>
                Spitian landscape.Nestled in the heart of Spiti Valley,this unique<br/>
                homestay is surrounded by notable attractions, making it an ideal base for <br/>
                exploring the region.A perfect retreat from the bustle of city life, your<br/>
                stay promises comfort, tranquility, and rejuvenation — with a true taste <br/>
                of Spitian hospitality, nature, and culture.</p>

            <h6 className='about-head'>About House on the Clouds</h6>
            <hr className="black-line" />

            
            </div>
            <div className="HOTEL-VIDEO">
                <video
                className="bg-video-one"
                autoPlay
                muted
                loop
                
                >
                <source src={HotelVideo} type="video/mp4" />
                Your browser does not support the video tag.
                </video>
            </div> 
            <div className='grid-one'>
  <div className='grid-items'>
    <img src={WeatherIcon} alt="Weather" width="60" height="60" className='icon-of-grid'/>
    <h4>Weather</h4>
    {unit === 'C' ? (<p>5°C to 24°C</p>) : (<p>41°F to 75°F</p>)}
    <a href="#" className={unit === 'C' ? 'active' : ''} onClick={(e) => { 
      e.preventDefault();
      handleClick('C');
    }}>Celsius </a>
    <a href="#" className={unit === 'F' ? 'active' : ''} onClick={(e) => {
      e.preventDefault();
      handleClick('F');}}>| Fahrenheit</a>
    <div className="grid-info">Pleasant summers, snowy winters.</div>
  </div>

  <div className='grid-items'>
    <img src={AltitudeIcon} alt="Altitude" width="60" height="60" className='icon-of-grid' />
    <h4>Altitude</h4>
    <h6>13,615 ft</h6>
    <div className="grid-info">One of the highest villages in Asia.</div>
  </div>

  <div className='grid-items'>
    <img src={GettingIcon} alt="Getting There" width="60" height="60" className='icon-of-grid' />
    <h4>Getting there</h4>
    <h6>10 min</h6>
            <p>from Key Monastery | <a href="https://maps.app.goo.gl/qYaBQrXuzyR9vE3a9" target="_blank" rel="noopener noreferrer">view Google Maps</a></p>
    <div className="grid-info">Accessible by road, scenic drive.</div>
  </div>

  <div className='grid-items'>
    <img src={AccomodationIcon} alt="Accomodation" width="60" height="60" className='icon-of-grid' />
    <h4>Accomodation</h4>
    <h6>6 Rooms</h6>
    <div className="grid-info">Cozy, mountain-view rooms.</div>
  </div>
</div>

            
        
    </section>
    
      
    </>
  )
}

export default Hero

import React from 'react'
import './Hero.css'
import HotelVideo from '../assets/hotelvideo.mp4'

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='after-hero'>
            <h6 className='heading-one-hero'>SPITI VALLEY</h6>
            <h1 className='heading-main-two'>One of the World's Highest Boutique Stays<br/> <i>Perched at 13,615 ft in Chicham, Spiti Valley</i></h1>
            <p className='para-one'>House on the Clouds offers a rare retreat above the clouds — a boutique homestay surrounded by the majesty of the Himalayas and the timeless spirit of Spiti.</p>

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
        </section>
    
      
    </>
  )
}

export default Hero

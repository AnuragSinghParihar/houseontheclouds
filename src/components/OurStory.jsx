import React, { useState } from 'react'
import './OurStory.css'
import imageone from "../assets/chicham.webp"
import imagesecond from "../assets/imagesecond.JPG"
import imagethird from '../assets/window.jpg'
import imagefourthone from '../assets/fouthone.jpg'
import imagefourthtwo from '../assets/fourthtwo.jpg'
import imagefifth from '../assets/fifthimage.jpg'
import HotelVideo from '../assets/hotelvideo.mp4'
import Navbar from './Navbar'
import Footer from './Footer'
import imagegallery1 from '../assets/building.JPG'
import imagegallery2 from '../assets/whitebuilding.JPG'
import imagegallery3 from '../assets/linepaint.JPG'

const timelineData = [
  {
    year: '2023',
    title: 'House on the Clouds is Built',
    desc: 'House on the Clouds, a unique retreat, is built in Spiti. The hotel blends local tradition with modern comfort, quickly becoming a haven for travelers seeking warmth, culture, and breathtaking views.',
    images: [imageone, imagesecond],
  },
  {
    year: '2024',
    title: 'First Winter Season',
    desc: 'Our first winter welcomes guests from around the world. The snow-covered landscape and cozy interiors create unforgettable memories for all who visit.',
    images: [imagethird, imagefourthone],
  },
  {
    year: '2025',
    title: 'A Growing Legacy',
    desc: 'With each year, House on the Clouds continues to grow, adding new experiences and stories while staying true to its roots in Spiti hospitality.',
    images: [imagefourthtwo, imagefifth],
  },
];

const galleryData = [
  imagegallery1,
  imagegallery2,
  imagegallery3,
  imageone,
  imagesecond,
  imagethird,
];

const OurStory = () => {
  const [slide, setSlide] = useState(0);
  const current = timelineData[slide];
  const [gallerySlide, setGallerySlide] = useState(0);
  const galleryPrev = () => setGallerySlide((s) => (s === 0 ? galleryData.length - 1 : s - 1));
  const galleryNext = () => setGallerySlide((s) => (s === galleryData.length - 1 ? 0 : s + 1));

  const prevSlide = () => setSlide((s) => (s === 0 ? timelineData.length - 1 : s - 1));
  const nextSlide = () => setSlide((s) => (s === timelineData.length - 1 ? 0 : s + 1));

  return (
    <>
      <Navbar />
      <div className="ourstory-video-bg">
        <video className="ourstory-bg-video" autoPlay muted loop playsInline>
          <source src={HotelVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="ourstory-overlay" />
        <div className="ourstory-content">
          <h1 className="ourstory-title">Our Story</h1>
          <div className="ourstory-subtitle">More Than a Hotel,<br /><span className="ourstory-heritage">a Heritage of Hospitality</span></div>
        </div>
      </div>

      {/* New About Section Below Video */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-label">ABOUT THE HOTEL</div>
          <h2 className="about-hero-title">Welcome to <span>House on the Clouds</span></h2>
          <div className="about-hero-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <div className="about-hero-row">
            <div className="about-hero-image">
              {/* Replace with your best hotel image */}
              <img src={imageone} alt="Hotel Welcome" />
            </div>
            <div className="about-hero-texts">
              <p className="about-hero-lead">
                Since 2023, House on the Clouds has embodied alpine charm, blending tradition with modern comfort. Thoughtfully crafted and expanded, it retains its nostalgic family atmosphere while offering exceptional hospitality in the heart of Spiti.
              </p>
              <p className="about-hero-desc">
                Now in the hands of a passionate team, little has changed in spirit. The comforts are finer, the dining more refined, but the feeling remains the same: a house built for mountain life, where every guest is welcomed as a friend and every stay is a story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Large Image Section */}
      <section className="about-image-section">
        <div className="about-image-frame">
          <div className="about-image-inner-frame">
            <img src={imagesecond} alt="Hotel at Night" className="about-large-image" />
          </div>
        </div>
      </section>

      {/* New Tradition Section */}
      <section className="about-tradition-section">
        <div className="about-tradition-container">
          <div className="about-tradition-label">A JOURNEY THROUGH THE HOUSE ON THE CLOUDS LEGACY</div>
          <h2 className="about-tradition-title">Tradition,<br /><span>Since 2023</span></h2>
          <div className="about-tradition-history">OUR HISTORY</div>
          <p className="about-tradition-desc">
            A legacy built on tradition, shaped by generations, and carried into the future. A story of heritage, resilience, and hospitality that continues to unfold.
          </p>
        </div>
      </section>

      {/* Timeline Slider Section */}
      <section className="about-timeline-section">
        <div className="about-timeline-bg-year">{current.year}</div>
        <div className="about-timeline-images">
          <img src={current.images[0]} alt="timeline 1" className="about-timeline-img about-timeline-img-left" />
          <img src={current.images[1]} alt="timeline 2" className="about-timeline-img about-timeline-img-right" />
        </div>
        <div className="about-timeline-content">
          <h3 className="about-timeline-title">{current.title}</h3>
          <p className="about-timeline-desc">{current.desc}</p>
        </div>
        <div className="about-timeline-arrows">
          <button className="about-timeline-arrow" onClick={prevSlide}>&#8592;</button>
          <button className="about-timeline-arrow" onClick={nextSlide}>&#8594;</button>
        </div>
      </section>

      {/* New Gallery Slider Section */}
      <section className="about-gallery-section">
        <div className="about-gallery-image-frame">
          <img src={galleryData[gallerySlide]} alt={`Gallery ${gallerySlide + 1}`} className="about-gallery-image" />
        </div>
        <div className="about-gallery-arrows">
          <button className="about-gallery-arrow" onClick={galleryPrev}>&#8592;</button>
          <button className="about-gallery-arrow" onClick={galleryNext}>&#8594;</button>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default OurStory

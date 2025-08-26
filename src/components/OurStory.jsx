import React from 'react'
import './OurStory.css'
import HotelVideo from '../assets/hotelvideo.mp4'
// Using the mud painting image
import MudPaintingImage from '../assets/mudpaint.JPG'
import WelcomeImage from '../assets/IMG_0303.JPG'
import NightViewImage from '../assets/IMG_0307.jpg'
import GatheringImage from '../assets/IMG_0297.JPG'
import CulturalImage from '../assets/IMG_0304.JPG'
import LivingRoomImage from '../assets/IMG_0308.jpg'
import OwnerImage from '../assets/IMG_0309.jpg'
import Navbar from './Navbar'
import Footer from './Footer'

const OurStory = () => {
  return (
    <>
      <Navbar />
      
      {/* Video Background Section */}
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

      {/* Mud Painting Showcase Section */}
      <div className="mud-painting-showcase">
        <div className="mud-painting-container">
          <div className="mud-painting-image-section">
            <img src={MudPaintingImage} alt="Traditional Himachali Mud Painting" className="mud-painting-image" />
          </div>
          <div className="mud-painting-text-section">
            <h2 className="mud-painting-title">Mud Painting – A Traditional Himachali Craft</h2>
            <p className="mud-painting-description">
              This wall showcases the beauty of traditional mud painting, a time-honored art form from Himachal Pradesh. Created using layers of natural earth pigments, each stripe reflects the raw tones of local soils and minerals – from deep reds and browns to lighter creams and greys.
              <br /><br />
              Mud painting is not just decorative but also deeply sustainable, blending seamlessly with the environment. It helps regulate indoor temperature, keeping spaces cool in summer and warm in winter.
            </p>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome-showcase">
        <div className="welcome-container">
          <div className="welcome-text-section">
            <h2 className="welcome-title">Welcome to House on the Clouds</h2>
            <p className="welcome-description">
              Step into a world where traditional craftsmanship meets modern comfort. Our welcoming entrance, adorned with the signature mud-painted wall, sets the tone for your extraordinary stay in the heart of Himachal Pradesh.
              <br /><br />
              As you enter, you'll be greeted by the warm embrace of our thoughtfully designed interiors, where every element tells a story of heritage and hospitality.
            </p>
          </div>
          <div className="welcome-image-section">
            <img src={WelcomeImage} alt="Welcome to House on the Clouds" className="welcome-image" />
          </div>
        </div>
      </div>

      {/* Night View Section */}
      <div className="night-view-showcase">
        <div className="night-view-container">
          <div className="night-view-image-section">
            <img src={NightViewImage} alt="House on the Clouds at Night" className="night-view-image" />
          </div>
          <div className="night-view-text-section">
            <h2 className="night-view-title">A Sanctuary Under the Stars</h2>
            <p className="night-view-description">
              As the sun sets over the majestic Himalayas, our House on the Clouds transforms into a magical sanctuary bathed in moonlight. The warm glow from our windows creates a beacon of comfort against the vast mountain landscape, inviting weary travelers to find rest and rejuvenation.
              <br /><br />
              The traditional decorative elements adorning our entrance, with their vibrant colors and cultural significance, stand as a testament to the rich heritage of Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Gathering Section */}
      <div className="gathering-showcase">
        <div className="gathering-container">
          <div className="gathering-text-section">
            <h2 className="gathering-title">Where Stories Come Alive</h2>
            <p className="gathering-description">
              In our warm and inviting common spaces, guests from around the world gather to share stories, experiences, and moments of connection. The presence of local spiritual leaders and community members creates an atmosphere of cultural exchange and authentic Himalayan hospitality.
              <br /><br />
              Over traditional tea and local delicacies, friendships are forged and memories are made.
            </p>
          </div>
          <div className="gathering-image-section">
            <img src={GatheringImage} alt="Community Gathering at House on the Clouds" className="gathering-image" />
          </div>
        </div>
      </div>

      {/* Cultural Welcome Section */}
      <div className="cultural-showcase">
        <div className="cultural-container">
          <div className="cultural-image-section">
            <img src={CulturalImage} alt="Traditional Himachali Welcome Ceremony" className="cultural-image" />
          </div>
          <div className="cultural-text-section">
            <h2 className="cultural-title">A Traditional Welcome</h2>
            <p className="cultural-description">
              Experience the authentic warmth of Himachali hospitality through our traditional welcome ceremonies. Dressed in vibrant traditional attire adorned with intricate silver jewelry and turquoise stones, our local women extend the sacred khata scarves as a symbol of respect and blessing.
              <br /><br />
              This ancient ritual, passed down through generations, represents the deep-rooted cultural values of the Himalayan people.
            </p>
          </div>
        </div>
      </div>

      {/* Living Room Section */}
      <div className="living-room-showcase">
        <div className="living-room-container">
          <div className="living-room-text-section">
            <h2 className="living-room-title">Where Comfort Meets Culture</h2>
            <p className="living-room-description">
              Our living spaces embody the perfect harmony of traditional craftsmanship and modern comfort. The signature mud-painted wall, with its horizontal stripes of natural earth tones, stands as a testament to the ancient art forms of Himachal Pradesh, while the exposed wooden beams create a rustic yet elegant atmosphere.
              <br /><br />
              Large windows frame breathtaking views of the Himalayan landscape, bringing the natural beauty of the mountains into every moment.
            </p>
          </div>
          <div className="living-room-image-section">
            <img src={LivingRoomImage} alt="Living Room at House on the Clouds" className="living-room-image" />
          </div>
        </div>
      </div>

      {/* Owner Section */}
      <div className="owner-showcase">
        <div className="owner-container">
          <div className="owner-image-section">
            <img src={OwnerImage} alt="Hotel Owner and Building Owner with Family" className="owner-image" />
          </div>
          <div className="owner-text-section">
            <h2 className="owner-title">Meet Our Family</h2>
            <p className="owner-description">
              At the heart of House on the Clouds is our family – the hotel owner and building owner, who have poured their passion and heritage into creating this mountain sanctuary. Together with their family, they embody the true spirit of Himachali hospitality, ensuring every guest feels like part of our extended family.
              <br /><br />
              The presence of the revered Buddhist monk in our gatherings reflects the deep spiritual connection that guides our approach to hospitality.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default OurStory

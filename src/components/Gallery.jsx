import React, { useState } from 'react';
import './Gallery.css';
import Navbar from './Navbar';
import Footer from './Footer';

// Import icons
import hotelIcon from '../assets/hotel.png';
import deerIcon from '../assets/deer.png';
import rangoliIcon from '../assets/rangoli.png';
import riverIcon from '../assets/river.png';

// Import the single hotel image
import IMG_0001 from '../assets/IMG_0001.JPG';

// Import new hotel images
import IMG_0078 from '../assets/IMG_0078.JPG';
import IMG_0048 from '../assets/IMG_0048.JPG';
import IMG_0090 from '../assets/IMG_0090.JPG';
import IMG_0110 from '../assets/IMG_0110.JPG';
import IMG_0149 from '../assets/IMG_0149.JPG';
import IMG_0228 from '../assets/IMG_0228.JPG';
import IMG_0249 from '../assets/IMG_0249.JPG';
import IMG_0329 from '../assets/IMG_0329.JPG';
import IMG_4701 from '../assets/IMG_4701.JPG';
import IMG_4704 from '../assets/IMG_4704.JPG';
import IMG_5341 from '../assets/IMG_5341.JPG';
import IMG_8537 from '../assets/IMG_8537.JPG';
import IMG_8938 from '../assets/IMG_8938.JPG';
import DJI_20250310_165228_826 from '../assets/DJI_20250310_165228_826.JPG';

// Import wildlife images requested
import IMG_0024 from '../assets/IMG_0024.JPG';
import IMG_0022 from '../assets/IMG_0022.JPG';
import IMG_0017 from '../assets/IMG_0017.JPG';
import IMG_0029 from '../assets/IMG_0029.JPG';
import IMG_0212 from '../assets/IMG_0212.JPG';

// Import river images requested
import IMG_0219 from '../assets/IMG_0219.JPG';
import IMG_0218 from '../assets/IMG_0218.JPG';
import IMG_0028 from '../assets/IMG_0028.JPG';
import IMG_0027 from '../assets/IMG_0027.JPG';
import IMG_0026 from '../assets/IMG_0026.JPG';
import IMG_0023 from '../assets/IMG_0023.JPG';
import IMG_0216 from '../assets/IMG_0216.JPG';

// Import festival image for culture section
import LaDarFestival from '../assets/la-dar.jpeg';
import KibberVillage from '../assets/kibber.jpg';
import PastoralLife from '../assets/68896f836e920.image copy.jpg';
import HikkimPostOffice from '../assets/hikkim.jpg';

const Gallery = () => {
  const [activeSection, setActiveSection] = useState('hotel');
  
  // Hotel images - now including all the new images
  const hotelImages = [
    IMG_0001, IMG_0078, IMG_0048, IMG_0090, IMG_0110, 
    IMG_0149, IMG_0228, IMG_0249, IMG_0329, IMG_4701, 
    IMG_4704, IMG_5341, IMG_8537, IMG_8938, DJI_20250310_165228_826
  ];

  // Wildlife images provided by you
  const wildlifeImages = [IMG_0024, IMG_0022, IMG_0017, IMG_0029, IMG_0212];

  // River images provided by you
  const riverImages = [IMG_0219, IMG_0218, IMG_0028, IMG_0027, IMG_0026, IMG_0023, IMG_0216];

  const getImagesForSection = () => {
    switch (activeSection) {
      case 'wildlife':
        return wildlifeImages;
      case 'culture':
        return [];
      case 'waterscapes':
        return riverImages;
      case 'hotel':
      default:
        return hotelImages;
    }
  };

  const allImagesForSection = getImagesForSection();
  const displayedImages = allImagesForSection;

  // Define different sizes for masonry images
  const getImageSize = (index) => {
    const sizes = ['large', 'medium', 'small', 'medium', 'large', 'small', 'medium', 'small', 'large'];
    return sizes[index % sizes.length];
  };

  const sections = [
    { id: 'hotel', name: 'HOTEL', icon: hotelIcon },
    { id: 'wildlife', name: 'WILD ANIMALS', icon: deerIcon },
    { id: 'culture', name: 'CULTURE', icon: rangoliIcon },
    { id: 'waterscapes', name: 'WATERSCAPES', icon: riverIcon }
  ];

  // Wildlife content data
  const wildlifeContent = [
    {
      title: "Bharal – The Mountain Companions",
      description: "Living in harmony on rugged cliffs, these Himalayan Blue Sheep symbolize resilience and kinship."
    },
    {
      title: "Snow Leopard – Ghost of the Mountains",
      description: "Elusive and majestic, the snow leopard roams the high peaks with unmatched grace and stealth."
    },
    {
      title: "Himalayan Fox – Desert Wanderer",
      description: "Adapted to the harsh mountain environment, these foxes thrive in the most challenging conditions."
    },
    {
      title: "Golden Eagle – Sky Sovereign",
      description: "Master of the mountain winds, the golden eagle soars above the valleys with unmatched precision."
    },
    {
      title: "Mountain Goat – Cliff Dancer",
      description: "Defying gravity with every step, these agile creatures navigate the most treacherous terrain."
    }
  ];

  return (
    <div className="gallery-page">
      <Navbar />
      
      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="gallery-title">OUR GALLERY</h2>
            <p className="gallery-subtitle">This project is created in order to help showcase the beauty of Spiti Valley</p>
          </div>
          
          {/* Navigation Tabs */}
          <div className="gallery-nav">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(section.id);
                }}
              >
                <span className="tab-icon">
                  <img src={section.icon} alt={section.name} className="tab-icon-image" />
                </span>
                <span className="tab-name">{section.name}</span>
              </button>
            ))}
        </div>

          {/* Hotel uses masonry layout; Wildlife uses 3x3 grid; Culture uses masonry; others use masonry */}
          {activeSection === 'hotel' ? (
            <div className="masonry-gallery">
              {hotelImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`gallery-item ${getImageSize(index)}`}
                >
                  <div className="image-container">
                    <img src={image} alt={`Hotel image ${index + 1}`} className="gallery-image" />
                  </div>
                </div>
              ))}
            </div>
          ) : activeSection === 'wildlife' ? (
            <div className="wildlife-grid">
              {/* Row 1: Image, Content, Image */}
              <div className="grid-row">
                <div className="grid-item image-item">
                  <img src={wildlifeImages[0]} alt="Wildlife 1" className="wildlife-image" />
                </div>
                <div className="grid-item content-item">
                  <h3 className="wildlife-title">{wildlifeContent[0].title}</h3>
                  <p className="wildlife-description">{wildlifeContent[0].description}</p>
                </div>
                <div className="grid-item image-item">
                  <img src={wildlifeImages[1]} alt="Wildlife 2" className="wildlife-image" />
            </div>
          </div>
              
              {/* Row 2: Content, Image, Content */}
              <div className="grid-row">
                <div className="grid-item content-item">
                  <h3 className="wildlife-title">{wildlifeContent[1].title}</h3>
                  <p className="wildlife-description">{wildlifeContent[1].description}</p>
                </div>
                <div className="grid-item image-item">
                  <img src={wildlifeImages[2]} alt="Wildlife 3" className="wildlife-image" />
                </div>
                <div className="grid-item content-item">
                  <h3 className="wildlife-title">{wildlifeContent[2].title}</h3>
                  <p className="wildlife-description">{wildlifeContent[2].description}</p>
                </div>
              </div>
              
              {/* Row 3: Image, Content, Image */}
              <div className="grid-row">
                <div className="grid-item image-item">
                  <img src={wildlifeImages[3]} alt="Wildlife 4" className="wildlife-image" />
                </div>
                <div className="grid-item content-item">
                  <h3 className="wildlife-title">{wildlifeContent[3].title}</h3>
                  <p className="wildlife-description">{wildlifeContent[3].description}</p>
                </div>
                <div className="grid-item image-item">
                  <img src={wildlifeImages[4]} alt="Wildlife 5" className="wildlife-image" />
                </div>
              </div>
            </div>
          ) : activeSection === 'culture' ? (
            <div className="culture-content-section">
              <div className="culture-content-container">
                <div className="culture-main-title">
                  <h2>Discover the Soul of Spiti Valley at Our Hotel in Kaza–Chicham</h2>
                </div>
                
                <div className="culture-intro">
                  <p>Perched amid the stark beauty of the cold-desert Himalayas, Kaza and Chicham are more than destinations—they're living tapestries of resilient communities, age-old Buddhism, and vibrant traditions. At our hotel, immerse yourself in this rare heritage and tribal artistry, where rugged landscapes meet timeless warmth.</p>
                </div>
                
                <div className="culture-sections">
                  <div className="culture-section">
                    <div className="culture-section-content">
                      <div className="culture-text">
                        <h3>Spiritual Heritage</h3>
                        <p>In the shadow of century-old monasteries like Key and Tangyud—where murals, Thangka paintings, and sacred rituals echo—our region pulses with spiritual depth. Explore the monasteries, listen to the chants, and witness festivals held in harmony with the land's rhythms.</p>
                      </div>
                      <div className="culture-image">
                        <img src={IMG_0216} alt="Ancient Monastery in the Himalayas" className="section-image" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="culture-section">
                    <div className="culture-section-content reverse">
                      <div className="culture-text">
                        <h3>Celebrations & Traditions</h3>
                        <p>Join us during cultural highlights such as the Ladarcha fair in August, Spiti Losar in November, or winter solstice festivities. Each brings alive folk dances, seasonal fare, crafts, and narratives passed down through generations.</p>
                      </div>
                      <div className="culture-image">
                        <img src={LaDarFestival} alt="Traditional Festival Dance" className="section-image" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="culture-section">
                    <div className="culture-section-content">
                      <div className="culture-text">
                        <h3>Village Life & Local Soul</h3>
                        <p>Venture into Chicham and neighboring hamlets to meet families whose homes are built from earth, stone, and stories. Here, generosity is expressed through gestures—earthy thalis, shared tales, and the kind greeting, "Julley," meaning hello, thank you, and farewell.</p>
                      </div>
                      <div className="culture-image">
                        <img src={KibberVillage} alt="Traditional Village in Spiti Valley" className="section-image" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="culture-section">
                    <div className="culture-section-content reverse">
                      <div className="culture-text">
                        <h3>High-Altitude Traditions</h3>
                        <p>Discover the pastoral life: yaks grazing alpine meadows, the rare Chumurti horse, and fields of barley and peas that sustain local life. All while embracing the blend of Buddhist devotion, shamanic rites, and ancient ethnic pride that defines the Bodh people's identity.</p>
                      </div>
                      <div className="culture-image">
                        <img src={PastoralLife} alt="Yak Herding in Alpine Meadows" className="section-image" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="culture-section">
                    <div className="culture-section-content">
                      <div className="culture-text">
                        <h3>Experiences Tailored for You</h3>
                        <p>Enhance your stay with festival-timed tours, monastery visits, or immersive village walks. Sample local chhaang or arak, send postcards from Hikkim—the world's highest post office—or simply linger, absorbed by Spiti's timeless silence.</p>
                      </div>
                      <div className="culture-image">
                        <img src={HikkimPostOffice} alt="World's Highest Post Office in Hikkim" className="section-image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="masonry-gallery">
              {displayedImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`gallery-item ${getImageSize(index)}`}
                >
                  <div className="image-container">
                    <img src={image} alt={`Gallery image ${index + 1}`} className="gallery-image" />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;

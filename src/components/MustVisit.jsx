import React from 'react';
import './MustVisit.css';
import { useState } from 'react';

import Place1 from '../assets/key.png';
import Place2 from '../assets/bridge.png';
import Place3 from '../assets/shimokhabdin.webp';
import Place4 from '../assets/buddha.jpg';
import TrekKanomo from '../assets/trekkanomo.jpg';
import Kibber from '../assets/kibber.jpg';

const Places = [
    {
      name: 'Key Monastery',
      image: Place1,
      description: `Perched dramatically on a hilltop, Key Monastery is the largest and oldest Buddhist monastery in the Spiti Valley. 
      With centuries-old murals, sacred scriptures, and peaceful monks, it's not just a spiritual site but a cultural experience. 
      The view of the Spiti River and valley from the top is simply breathtaking — a must-visit for history lovers and soul seekers.`,
    },
    {
      name: 'Chicham Bridge',
      image: Place2,
      description: `Chicham Bridge holds the record as Asia’s highest suspension bridge, suspended over a gorge 1,000 feet deep. 
      Connecting remote mountain villages, this engineering marvel offers spectacular views and a thrilling experience. 
      Walking or driving across it gives you an adrenaline rush and a chance to click some truly Instagram-worthy shots.`,
    },
    {
      name: 'Shimokhabdin',
      image: Place3,
      description: `Shimokhabdin is a hidden gem in the upper Himalayas, known for its untouched natural beauty and tranquil charm. 
      Surrounded by snow-covered cliffs and serene trails, the village offers a perfect retreat for nature lovers and trekkers. 
      The peaceful atmosphere and friendly locals make it a great place to explore local culture, enjoy authentic cuisine, and disconnect from the modern world.`,
    },
    {
      name: 'Langza Buddha Statue',
      image: Place4,
      description: `Overlooking the Trans-Himalayas, the giant seated Buddha of Langza gazes peacefully at the valley below. 
      It's a symbol of harmony and heritage, surrounded by fossil-rich mountains and traditional mud houses. 
      Sunsets here are magical, casting golden hues across the peaks — making it a photographer’s and meditator’s dream alike.`,
    },
    {
      name: 'Trek to Mt. Kanomo',
      image: TrekKanomo,
      description: `A thrilling trek leading to the majestic Mt. Kanomo, offering panoramic views of the Spiti Valley. Ideal for adventure seekers looking for solitude, snow, and a spiritual connection with nature.`,
    },
    {
      name: 'Kibber Village',
      image: Kibber,
      description: `One of the highest inhabited villages in the world, Kibber is surrounded by dramatic landscapes and home to rare wildlife like the snow leopard. It’s a peaceful village where time seems to pause.`,
    },
  ];
  


  const MustVisit = () => {
    const [selectedPlace, setSelectedPlace] = useState(null);
  
    const openPopup = (place) => setSelectedPlace(place);
    const closePopup = () => setSelectedPlace(null);
  
    return (
      <section className="explore-section">
        <h2 className="explore-title">Places to Explore</h2>
        <div className="explore-grid">
          {Places.map((place, index) => (
            <div key={index} className="explore-card" style={{ animationDelay: `${index * 100}ms` }} onClick={() => openPopup(place)}>
              <img src={place.image} alt={place.name} className="explore-thumb" />
              <div className="image-overlay">Click to Explore</div>
            </div>
          ))}
        </div>
  
        {selectedPlace && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <img src={selectedPlace.image} alt={selectedPlace.name} className="popup-image" />
              <h3>{selectedPlace.name}</h3>
              <p>{selectedPlace.description}</p>
              <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </section>
    );
  };
    

export default MustVisit;

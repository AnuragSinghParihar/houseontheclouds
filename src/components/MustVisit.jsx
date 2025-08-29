import React from 'react';
import './MustVisit.css';
import { useState } from 'react';

// Assets moved to public folder - using direct URLs

const Places = [
    {
      name: 'Key Monastery',
      image: "/images/key.png",
      description: `Perched dramatically on a hilltop, Key Monastery is the largest and oldest Buddhist monastery in the Spiti Valley. 
      With centuries-old murals, sacred scriptures, and peaceful monks, it's not just a spiritual site but a cultural experience. 
      The view of the Spiti River and valley from the top is simply breathtaking — a must-visit for history lovers and soul seekers.`,
    },
    {
      name: 'Chicham Bridge',
      image: "/images/bridge.png",
      description: `Chicham Bridge holds the record as Asia's highest suspension bridge, suspended over a gorge 1,000 feet deep. 
      Connecting remote mountain villages, this engineering marvel offers spectacular views and a thrilling experience. 
      Walking or driving across it gives you an adrenaline rush and a chance to click some truly Instagram-worthy shots.`,
    },
    {
      name: 'Langza Buddha Statue',
      image: "/images/buddha.jpg",
      description: `Overlooking the Trans-Himalayas, the giant seated Buddha of Langza gazes peacefully at the valley below. 
      It's a symbol of harmony and heritage, surrounded by fossil-rich mountains and traditional mud houses. 
      Sunsets here are magical, casting golden hues across the peaks — making it a photographer's and meditator's dream alike.`,
    },
  ];

const MustVisit = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const openPopup = (place) => setSelectedPlace(place);
  const closePopup = () => setSelectedPlace(null);

  return (
    <>
      <section className="experience-section">
        <h2 className="experience-title">Experience at House on the Clouds</h2>
        <div className="experience-images">
          <div className="experience-image-item">
            <div className="image-overlay-text">
              <h3>Local Welcome</h3>
              <p>Step into the warmth of Himachali traditions, where heartfelt smiles and genuine hospitality embrace you like family.</p>
            </div>
            <div className="image-overlay-text bonfire-text">
              <h3>Bonfire</h3>
              <p>Under a blanket of stars, gather by the crackling fire as mountain nights weave stories, laughter, and timeless memories.</p>
            </div>
          </div>
          <div className="experience-image-item second-image">
            <div className="image-overlay-text breakfast-text">
              <h3>Outdoor Breakfast</h3>
              <p>Awaken to crisp mountain air and golden sunlight, savoring a delightful breakfast amidst nature's open embrace.</p>
            </div>
            <div className="image-overlay-text river-text">
              <h3>River Breakfast</h3>
              <p>Dine beside the gentle flow of the river, where serenity and nature's rhythm create a morning unlike any other.</p>
            </div>
          </div>
        </div>
      </section>

              <section className="explore-section">
          <h2 className="explore-title">Get to Know Our Land</h2>
        <div className="explore-grid">
                      {Places.map((place, index) => (
              <div key={index} className="explore-card" style={{ animationDelay: `${index * 100}ms` }} onClick={() => openPopup(place)}>
                <img src={place.image} alt={place.name} className="explore-thumb" />
                <div className="hover-overlay">Click to Explore</div>
                <div className="place-name">{place.name}</div>
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
    </>
  );
};

export default MustVisit;

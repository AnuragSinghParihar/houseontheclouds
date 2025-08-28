import React from 'react';
import './Dine.css';
import Navbar from './Navbar';
import Footer from './Footer';
// Assets moved to public folder - using direct URLs

const Dine = () => {
  return (
    <>
      <Navbar />
      <div className="dine-video-bg">
        <video className="dine-bg-video" autoPlay muted loop playsInline>
          <source src="/videos/hotelvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="dine-overlay" />
        <div className="dine-content">
          <h1 className="dine-title">A Dining Experience<br /><span className="dine-title-italic">Beyond Expectations</span></h1>
          <div className="dine-subtitle">DINING</div>
          <div className="dine-desc">Fine Dining, World-Class Wines,<br /><span className="dine-desc-italic">&amp; Lasting Memories</span></div>
        </div>
      </div>
      
      <div className="dine-slogan-section">
        <div className="dine-slogan-text">A Culinary Retreat in the Heart of Chicham, Kaza, Himachal Pradesh</div>
      </div>
      
      <section className="livingroom-section">
        <div className="livingroom-container">
          <div className="livingroom-image fade-in-left">
            <img src="/images/imageone.JPG" alt="Living Room" />
          </div>
          <div className="livingroom-content fade-in-right">
            <h2 className="livingroom-title">The Living Room</h2>
            <div className="livingroom-subtitle">A welcoming space for lively conversations, mountain stories, and lasting connections.</div>
            <p className="livingroom-desc">
              At House on the Clouds, our living room is the heart of the home—a cozy retreat where guests gather after a day of adventure. Sink into a comfortable chair, share stories by the fire, or simply enjoy the peace and warmth of mountain hospitality. Here, every evening is an invitation to connect, unwind, and feel at home in the Himalayas.
            </p>
          </div>
        </div>
      </section>

      
      <section className="dham-section" style={{ backgroundImage: `url(/images/imagesecond.JPG)` }}>
        <div className="dham-overlay" />
        <h2 className="dham-title fade-in-up">Dham</h2>
      </section>

      
      <section className="culinary-section">
        <div className="culinary-container">
          <div className="culinary-left fade-in-left">
            <h2 className="culinary-title">Culinary Simplicity Meets the Spirit of the Himalayas at House on the Clouds</h2>
            <p className="culinary-lead">House on the Clouds is one of the few stays in Kaza to offer a complete culinary experience — a rhythm of nourishing meals thoughtfully prepared and quietly served, from warm mountain breakfasts to hearty, soul-soothing dinners.</p>
            <p className="culinary-desc">It's a tradition born not from luxury, but from care — where knowing your meals are taken care of lets you fully immerse in the moment. Our kitchen draws from Himachali roots and beyond — using local produce, seasonal ingredients, and a philosophy of simple, honest food.<br/>Expect steaming momos, slow-cooked dals, and baked breads — but also the joy of Maggi after a long hike or a chai that warms more than just your hands.</p>
            <p className="culinary-desc">For those who linger after dinner, our herbal infusions, local cheese platters, or baked desserts offer the perfect quiet end to the day.<br/>Everything is cooked fresh, served without pretension, and made to match the peaceful rhythm of the mountains.<br/>At House on the Clouds, food isn't a show — it's a way to feel at home.</p>
          </div>
          <div className="culinary-right fade-in-right">
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Dine; 
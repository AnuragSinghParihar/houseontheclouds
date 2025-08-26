import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Hero from './components/Hero'
import RoomShowcase from './components/RoomShowcase'
import Footer from './components/Footer'
import MustVisit from './components/MustVisit'
import HotCLife from './components/HotCLife'
import OurStory from './components/OurStory'
import Stay from './components/Stay'
import Dine from './components/Dine'
import Booking from './components/Booking'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const Home = () => (
  <>
    <Landing />
    <Hero />
    <RoomShowcase />
    <MustVisit />
    <HotCLife />
    <Footer />
  </>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<OurStory />} />
    <Route path="/stay" element={<Stay />} />
    <Route path="/dine" element={<Dine />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default App;

import { Link } from 'react-router-dom';
import './Landing.css';
import Backvideo from "../assets/back.mp4"

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
          <source src={Backvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <nav>
          <section className="navbar">
            <div className="navbar-left">
              <Link to="/about" className="link-btn">About</Link>
              <Link to="/stay">Stay</Link>
              <Link to="/dine">Dine</Link>
              
              <a href="#contact">Contact</a>
            </div>

            <div className="navbar-center">
              <div className="logo-box">
                <img src="" alt="Logo" />
              </div>
            </div>

            <div className="navbar-right">
              <Link to="/booking" className="book-btn">Book Here</Link>
            </div>
          </section>
        </nav>

        <div className='writting'>
          <h6 className='heading-one'>SPITI VALLEY</h6>
          <h2 className='heading-two'>A place to pause, breathe, and belong</h2>
          <h1 className='heading-three'>House on the Clouds</h1>
        </div>
      </div>

      


      
      
      
    </>
  );
};

export default Landing;

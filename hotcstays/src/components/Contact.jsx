import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import mainBackground from '../assets/mainbk2.jpg';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Let the form submit naturally to Web3Forms
    // The form will handle the submission automatically
    // We'll show success message after a delay
    
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Get in Touch</h1>
          <p className="hero-subtitle">We'd love to hear from you and help plan your perfect stay</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          <div className="background-image-container" style={{ backgroundImage: `url(${mainBackground})` }}></div>
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Send us a Query</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                <div className="success-icon"></div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your query. We'll get back to you within 2-4 hours.</p>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="error-message">
                <div className="error-icon"></div>
                <h3>Message Could Not Be Sent</h3>
                <p>Sorry, there was an error sending your message. Please try again later or call us at +91 9805848433.</p>
              </div>
            )}

            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="85aada83-8439-41db-8412-944ae56aa0bb" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="hidden" name="subject" value="New Contact Form Submission - House on the Clouds" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="availability">Availability Check</option>
                    <option value="pricing">Pricing Information</option>
                    <option value="amenities">Amenities & Services</option>
                    <option value="directions">Directions & Location</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkIn">Check-in Date</label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="checkOut">Check-out Date</label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="guests">Number of Guests</label>
                  <select
                    id="guests"
                    name="guests"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="roomPreference">Room Preference</label>
                  <select
                    id="roomPreference"
                    name="roomPreference"
                  >
                    <option value="">Select room preference</option>
                    <option value="dawa">Dawa (Moon)</option>
                    <option value="sprin">Sprin (Clouds)</option>
                    <option value="yul">Yul (Village)</option>
                    <option value="riwo">Riwo (Mountain)</option>
                    <option value="kha">Kha (Snow)</option>
                    <option value="namkha">Namkha (Sky)</option>
                    <option value="kora">Kora (The Circle)</option>
                    <option value="any">Any Available Room</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell us about your requirements, questions, or any special requests..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading-spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Query'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

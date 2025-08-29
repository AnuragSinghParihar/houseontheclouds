import React, { useState } from 'react';
import './Booking.css';
// Assets moved to public folder - using direct URLs

const ROOMS = [
  { finalNo: 0, oldNo: 'Lama', name: 'Dawa (ཟླ་བ་)', meaning: 'Moon', essence: 'Grace of the night', img: "/images/roomone.jpg" },
  { finalNo: 1, oldNo: '1', name: 'Sprin (སྤྲིན་)', meaning: 'Clouds', essence: 'The floating sky', img: "/images/roomone.jpg" },
  { finalNo: 2, oldNo: '2', name: 'Yul (ཡུལ་)', meaning: 'Village', essence: 'The land that holds your spirit', img: "/images/roomone.jpg" },
  { finalNo: 3, oldNo: '7', name: 'Riwo (རི་བོ་)', meaning: 'Mountain', essence: 'The stillness of giants', img: "/images/roomone.jpg" },
  { finalNo: 4, oldNo: '3', name: 'Kha (དཀར་པོ་)', meaning: 'Snow', essence: 'The purity of the highlands', img: "/images/roomone.jpg" },
  { finalNo: 5, oldNo: '4', name: 'Namkha (ནམ་མཁའ་)', meaning: 'Sky', essence: 'Where the clouds drift endlessly', img: "/images/roomone.jpg" },
  { finalNo: 6, oldNo: '6', name: 'Karma (གར་)', meaning: 'Star', essence: 'A light that watches in silence', img: "/images/roomone.jpg" },
  { finalNo: 7, oldNo: '5', name: 'Nima (ཉི་མ་)', meaning: 'Sun', essence: 'The warmth that awakens all', img: "/images/roomone.jpg" },
];

const initialForm = {
  name: '',
  email: '',
  phone: '',
  room: '',
  checkIn: '',
  checkOut: '',
  guests: 1,
  notes: ''
};

const Booking = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [occupancy, setOccupancy] = useState('1 room for 2 adults');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(ROOMS[0]);

  const openBookingForm = (roomName) => {
    const roomObj = ROOMS.find(r => r.name === roomName) || ROOMS[0];
    setFormData({ ...initialForm, room: roomObj.name, checkIn, checkOut });
    setSelectedRoom(roomObj);
    setShowForm(true);
    setSubmitStatus(null);
  };

  const closeBookingForm = () => {
    setShowForm(false);
    setFormData(initialForm);
    setSubmitStatus(null);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'room') {
      const roomObj = ROOMS.find(r => r.name === value) || ROOMS[0];
      setSelectedRoom(roomObj);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: 'Booking successful! We will contact you soon.' });
        setFormData(initialForm);
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Booking failed. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="booking-page-root">
      {/* Hero Section with Background Image */}
              <div className="booking-hero" style={{ backgroundImage: `url(/images/mainbk2.jpg)` }}>
        <div className="booking-hero-overlay">
          <div className="booking-search-bar">
            <div className="search-field">
              <label>Check In</label>
              <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
            </div>
            <div className="search-field">
              <label>Check Out</label>
              <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
            </div>
            <div className="search-field">
              <label>Occupancy</label>
              <select value={occupancy} onChange={e => setOccupancy(e.target.value)}>
                <option>1 room for 2 adults</option>
                <option>1 room for 1 adult</option>
                <option>2 rooms for 4 adults</option>
                <option>Family (2 adults, 2 kids)</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
          <div className="booking-rating">
            <span className="rating-badge">4.9</span>
            <span className="rating-label">Excellent</span>
            <span className="rating-reviews">218 reviews</span>
          </div>
        </div>
      </div>

      {/* Room Cards */}
      <div className="room-list">
        {ROOMS.map((room) => (
          <div className="room-card" key={room.finalNo}>
            <img src={room.img} alt={room.name} className="room-image" />
            <div className="room-details">
              <div className="room-header-row">
                <h2>{room.name}</h2>
                <span className="room-no">Room #{room.finalNo}</span>
              </div>
              <div className="room-meta">
                <span><i className="fa fa-user" /> Max: 2 people</span>
                <span><i className="fa fa-arrows-alt" /> 50 m²</span>
              </div>
              <div className="room-bed"><i className="fa fa-bed" /> King size bed</div>
              <div className="room-meaning"><b>Meaning:</b> {room.meaning}</div>
              <div className="room-essence"><b>Essence:</b> {room.essence}</div>
              <div className="room-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam nunc, eget aliquam massa nisl quis neque.
              </div>
              <button className="search-btn" onClick={() => openBookingForm(room.name)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button className="close-modal" onClick={closeBookingForm}>&times;</button>
            <h2>Book a Room</h2>
            <div className="booking-room-select">
              <label>Room</label>
              <div className="room-select-dropdown">
                <select name="room" value={formData.room} onChange={handleFormChange} required>
                  {ROOMS.map(room => (
                    <option key={room.name} value={room.name}>{room.name}</option>
                  ))}
                </select>
                <div className="room-select-preview">
                  <img src={selectedRoom.img} alt={selectedRoom.name} />
                  <div className="room-select-meta">
                    <div><b>{selectedRoom.name}</b></div>
                    <div style={{fontSize:'13px',color:'#666'}}>{selectedRoom.meaning} — {selectedRoom.essence}</div>
                  </div>
                </div>
              </div>
            </div>
            <form className="booking-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name *</label>
                <input name="name" value={formData.name} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input name="email" type="email" value={formData.email} onChange={handleFormChange} required />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input name="phone" value={formData.phone} onChange={handleFormChange} required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Check In *</label>
                  <input name="checkIn" type="date" value={formData.checkIn} onChange={handleFormChange} required />
                </div>
                <div className="form-group">
                  <label>Check Out *</label>
                  <input name="checkOut" type="date" value={formData.checkOut} onChange={handleFormChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Guests *</label>
                <select name="guests" value={formData.guests} onChange={handleFormChange} required>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleFormChange} rows={3} />
              </div>
              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>{submitStatus.message}</div>
              )}
              <button className="search-btn" type="submit" disabled={submitting}>{submitting ? 'Booking...' : 'Book Now'}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking; 
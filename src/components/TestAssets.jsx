import React from 'react';

const TestAssets = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Asset Test Page</h1>
      
      <h2>Testing Images:</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Logo Image:</h3>
        <img 
          src="/images/IMG_9032.jpeg" 
          alt="Logo Test" 
          style={{ width: '200px', height: 'auto', border: '1px solid #ccc' }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Hotel Icon:</h3>
        <img 
          src="/images/hotel.png" 
          alt="Hotel Icon Test" 
          style={{ width: '100px', height: 'auto', border: '1px solid #ccc' }}
        />
      </div>
      
      <h2>Testing Videos:</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Hotel Video:</h3>
        <video 
          controls 
          style={{ width: '400px', height: 'auto', border: '1px solid #ccc' }}
        >
          <source src="/videos/hotelvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Background Video:</h3>
        <video 
          controls 
          style={{ width: '400px', height: 'auto', border: '1px solid #ccc' }}
        >
          <source src="/videos/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <h2>Testing Problematic Files:</h2>
      <div style={{ marginBottom: '20px' }}>
        <h3>Experience Image 2:</h3>
        <img 
          src="/images/house-on-the-clouds-experience-2.png" 
          alt="Experience 2 Test" 
          style={{ width: '300px', height: 'auto', border: '1px solid #ccc' }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>Experience Image 3:</h3>
        <img 
          src="/images/house-on-the-clouds-experience-3.png" 
          alt="Experience 3 Test" 
          style={{ width: '300px', height: 'auto', border: '1px solid #ccc' }}
        />
      </div>
    </div>
  );
};

export default TestAssets;

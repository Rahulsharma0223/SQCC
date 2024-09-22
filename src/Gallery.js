import React, { useState } from 'react';
import './Gallery.css';
import bgImage from './images/bg.jpg'; // Path to your background image

const Gallery = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);

  const imagesSet1 = [
    "image1.jpg", "image2.jpg", "image3.jpg",
    "image4.jpg", "image5.jpg", "image6.jpg"
  ];

  const imagesSet2 = [
    "image7.jpg", "image8.jpg", "image9.jpg",
    "image10.jpg", "image11.jpg", "image12.jpg"
  ];

  const handleNext1 = () => {
    setCurrentSlide1((prev) => (prev + 3) % imagesSet1.length);
  };

  const handlePrev1 = () => {
    setCurrentSlide1((prev) => (prev - 3 + imagesSet1.length) % imagesSet1.length);
  };

  const handleNext2 = () => {
    setCurrentSlide2((prev) => (prev + 3) % imagesSet2.length);
  };

  const handlePrev2 = () => {
    setCurrentSlide2((prev) => (prev - 3 + imagesSet2.length) % imagesSet2.length);
  };

  return (
    <section className="gallery-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="gallery-title">GALLERY</h2>
      
      {/* First Title Section */}
      <div className="gallery-row">
        <h3 className="title">Title 1</h3>
        <div className="slider">
          <button className="prev-button" onClick={handlePrev1}>‹</button>
          <div className="image-container">
            {imagesSet1.slice(currentSlide1, currentSlide1 + 3).map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNext1}>›</button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(imagesSet1.length / 3) }, (_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide1 / 3 === index ? 'active-dot' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Second Title Section */}
      <div className="gallery-row">
        <h3 className="title">Title 2</h3>
        <div className="slider">
          <button className="prev-button" onClick={handlePrev2}>‹</button>
          <div className="image-container">
            {imagesSet2.slice(currentSlide2, currentSlide2 + 3).map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNext2}>›</button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(imagesSet2.length / 3) }, (_, index) => (
            <span
              key={index}
              className={`dot ${currentSlide2 / 3 === index ? 'active-dot' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

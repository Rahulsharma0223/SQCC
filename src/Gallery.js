import React, { useState, useEffect } from 'react';
import './Gallery.css';
import bgImage from './images/bg.jpg'; // Path to your background image
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image11.jpg';
import image14 from './images/image11.jpg';
import image15 from './images/image11.jpg';
import image16 from './images/image11.jpg';
import image17 from './images/image11.jpg';
import image18 from './images/image11.jpg';

const Gallery = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0); // New state for the third slider
  const [visibleImages, setVisibleImages] = useState(3); // Default to 3 images for large screens

  const imagesSet1 = [image1, image2, image3, image4, image5, image6];
  const imagesSet2 = [image7, image8, image9, image10, image11, image12];
  const imagesSet3 = [image13, image14, image15, image16, image17, image18]; // Updated image set with 6 images for the third section

  // Update the number of visible images based on the screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleImages(1); // Show 1 image on small screens
      } else if (window.innerWidth < 960) {
        setVisibleImages(2); // Show 2 images on medium screens
      } else {
        setVisibleImages(3); // Show 3 images on large screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set the initial number of visible images
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext1 = () => {
    setCurrentSlide1((prev) => (prev + visibleImages) % imagesSet1.length);
  };

  const handlePrev1 = () => {
    setCurrentSlide1((prev) => (prev - visibleImages + imagesSet1.length) % imagesSet1.length);
  };

  const handleNext2 = () => {
    setCurrentSlide2((prev) => (prev + visibleImages) % imagesSet2.length);
  };

  const handlePrev2 = () => {
    setCurrentSlide2((prev) => (prev - visibleImages + imagesSet2.length) % imagesSet2.length);
  };

  const handleNext3 = () => {
    setCurrentSlide3((prev) => (prev + visibleImages) % imagesSet3.length);
  };

  const handlePrev3 = () => {
    setCurrentSlide3((prev) => (prev - visibleImages + imagesSet3.length) % imagesSet3.length);
  };

  return (
    <section className="gallery-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className="gallery-title">GALLERY</h2>

      {/* First Title Section */}
      <div className="gallery-row">
        <h3 className="title">Quantathon 1.O</h3>
        <div className="slider">
          <button className="prev-button" onClick={handlePrev1}>‹</button>
          <div className="image-container">
            {imagesSet1
              .slice(currentSlide1, currentSlide1 + visibleImages)
              .map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))}
          </div>
          <button className="next-button" onClick={handleNext1}>›</button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(imagesSet1.length / visibleImages) }, (_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentSlide1 / visibleImages) === index ? 'active-dot' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Second Title Section */}
      <div className="gallery-row">
        <h3 className="title">Meets</h3>
        <div className="slider">
          <button className="prev-button" onClick={handlePrev2}>‹</button>
          <div className="image-container">
            {imagesSet2
              .slice(currentSlide2, currentSlide2 + visibleImages)
              .map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))}
          </div>
          <button className="next-button" onClick={handleNext2}>›</button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(imagesSet2.length / visibleImages) }, (_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentSlide2 / visibleImages) === index ? 'active-dot' : ''}`}
            ></span>
          ))}
        </div>
      </div>

      {/* Third Title Section */}
      <div className="gallery-row">
        <h3 className="title">Induction Meets</h3>
        <div className="slider">
          <button className="prev-button" onClick={handlePrev3}>‹</button>
          <div className="image-container">
            {imagesSet3
              .slice(currentSlide3, currentSlide3 + visibleImages)
              .map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Slide ${index}`} />
                </div>
              ))}
          </div>
          <button className="next-button" onClick={handleNext3}>›</button>
        </div>
        <div className="pagination">
          {Array.from({ length: Math.ceil(imagesSet3.length / visibleImages) }, (_, index) => (
            <span
              key={index}
              className={`dot ${Math.floor(currentSlide3 / visibleImages) === index ? 'active-dot' : ''}`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

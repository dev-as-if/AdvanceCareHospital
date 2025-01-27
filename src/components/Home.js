import React, { useState } from "react";
import Image1 from "../assets/1.jpg"; 
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image7 from "../assets/7.jpg";
import Image8 from "../assets/8.jpg";
import Image9 from "../assets/9.jpg";


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    Image1,
    Image2,
    Image3,
  ];

  const galleryImages = [
    Image4,
    Image5,
    Image7,
    Image8,
    Image9,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="home">
      {/* Carousel */}
      <div className="carousel">
        <div className="carousel-container">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Slide ${index + 1}`}
              className={`carousel-slide ${
                index === currentSlide ? "active" : ""
              }`}
            />
          ))}
        </div>
        <button className="carousel-button prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-button next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Development Phase Notice */}
      <div className="development-notice">
        🚧 Website is in development phase 🚧
      </div>
    </div>
  );
};

export default Home;

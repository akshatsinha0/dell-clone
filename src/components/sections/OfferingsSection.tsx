// src/components/sections/OfferingsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../../styles/OfferingsSection.css';
import offeringsImage1 from '../../assets/offeringsimage1.png';
import offeringsImage2 from '../../assets/offeringsimage2.png';
import offeringsImage3 from '../../assets/offeringsimage3.png';

const OfferingsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const offerings = [
    {
      image: offeringsImage1,
      title: "Transform your business with modern IT",
      description: "Prepare your infrastructure for the age of AI. Watch the virtual event.",
      buttonText: "Watch Replay"
    },
    {
      image: offeringsImage2,
      title: "Data that drives smarter IT decisions",
      description: "Discover, assess, and modernise your entire infrastructure with Dell Live Optics - from core to cloud to edge.",
      buttonText: "Get Started"
    },
    {
      image: offeringsImage3,
      title: "The intelligent business engine",
      description: "Unify, implement, and enhance your multicloud data estate with Dell software-defined storage.",
      buttonText: "Explore Solutions"
    }
  ];

  // Auto-rotation every 30 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 30000);
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [activeSlide]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index: number) => setActiveSlide(index);

  return (
    <section id="offerings" className="offerings-section">
      <div className="carousel">
        <div className="slides">
          {offerings.map((offering, index) => (
            <div 
              key={index} 
              className={`slide ${index === activeSlide ? 'active' : ''}`}
            >
              <div className="slide-inner">
                <div className="slide-image">
                  <img src={offering.image} alt={offering.title} />
                </div>
                <div className="slide-content">
                  <h2>{offering.title}</h2>
                  <p>{offering.description}</p>
                  <button>{offering.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav prev" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="white" />
          </svg>
        </button>
        
        <button className="nav next" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" fill="white" />
          </svg>
        </button>
        
        <div className="indicators">
          {offerings.map((_, index) => (
            <button 
              key={index} 
              className={`indicator ${index === activeSlide ? 'active' : ''}`} 
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

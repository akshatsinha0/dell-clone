// src/components/HeroSection.tsx
import React from 'react';
import ladyOnLaptop from '../assets/ladyonlaptop.png';
import intelXEON from '../assets/intelXEONimage.png';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${ladyOnLaptop})`,
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-breadcrumbs">
              <span>India</span>
              <span className="hero-breadcrumb-sep">/</span>
              <span>Servers, Storage & Networking</span>
              <span className="hero-breadcrumb-sep">/</span>
              <span>Storage</span>
            </div>
            <h1 className="hero-title">Data Storage</h1>
            <p className="hero-subtitle">
              Achieve your data needs with flexible, AI-optimized and secure solutions from the #1 provider of enterprise storage.
            </p>
            <div className="hero-buttons">
              <button className="hero-btn hero-btn-primary">Request a Callback</button>
              <button className="hero-btn hero-btn-secondary">All Storage Products</button>
            </div>
            <div className="hero-intel">
              <span>Accelerate performance with Intel® Xeon® processors</span>
              <img src={intelXEON} alt="Intel Xeon" className="hero-intel-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

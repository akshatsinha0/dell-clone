// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import StickyNavbar from './components/StickyNavbar';
import ProductsSection from './components/sections/ProductsSection';
import StickyContactButton from './components/StickyContactButton';
import './index.css';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('products');
  
  // Refs for all sections
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    features: useRef<HTMLElement>(null),
    stats: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    benefits: useRef<HTMLElement>(null),
    demo: useRef<HTMLElement>(null),
    workloads: useRef<HTMLElement>(null),
    offerings: useRef<HTMLElement>(null),
    resources: useRef<HTMLElement>(null),
    reviews: useRef<HTMLElement>(null)
  };
  

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better detection
      
      // Check each section's position
      let currentSection = 'products'; // Default
      Object.entries(sectionRefs).forEach(([id, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (
            scrollPosition >= offsetTop && 
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (id !== 'hero' && id !== 'features' && id !== 'stats') {
              currentSection = id;
            }
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <div className="app-container">
      <Navbar />
      <StickyNavbar 
        activeSectionId={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <main>
        <section id="hero-section" ref={sectionRefs.hero}>
          <HeroSection />
        </section>
        <section id="features-section" ref={sectionRefs.features}>
          <FeaturesSection />
        </section>
        <section id="stats-section" ref={sectionRefs.stats}>
          <StatsSection />
        </section>
        <section id="products" ref={sectionRefs.products}>
          <ProductsSection />
        </section>
        {/* Add more sections here as you create them */}
      </main>
      <StickyContactButton />
    </div>
  );
};

export default App;

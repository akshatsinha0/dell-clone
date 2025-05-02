// src/App.tsx
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import StickyNavbar from './components/StickyNavbar';
import ProductsSection from './components/sections/ProductsSection';
import BenefitsSection from './components/sections/BenefitsSection';
import DemoSection from './components/sections/DemoSection';
import WorkloadsSection from './components/sections/WorkloadsSection';
import OfferingsSection from './components/sections/OfferingsSection';
import ResourcesSection from './components/sections/ResourcesSection';

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
      setActiveSection(sectionId);
    }
  };

  // Detect active section based on scroll position with improved accuracy
  useEffect(() => {
    const handleScroll = () => {
      // Get viewport middle point for better detection
      const viewportHeight = window.innerHeight;
      const viewportMiddle = viewportHeight / 2;
      
      // Check sections in priority order
      const sectionsToCheck = ['products', 'benefits', 'demo', 'workloads', 'offerings', 'resources', 'reviews'];
      
      // Find the section that contains the middle of the viewport
      for (const id of sectionsToCheck) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
            // This section contains the middle of the viewport
            if (id !== activeSection) {
              setActiveSection(id);
            }
            return;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Run once on mount to set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

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
        <section id="benefits" ref={sectionRefs.benefits}>
          <BenefitsSection />
        </section>
        <section id="demo" ref={sectionRefs.demo}>
          <DemoSection />
        </section>
        <section id="workloads" ref={sectionRefs.workloads}>
          <WorkloadsSection />
        </section>
        <section id="offerings" ref={sectionRefs.offerings}>
          <OfferingsSection />
        </section>
        <section id="resources" ref={sectionRefs.resources}>
          <ResourcesSection />
        </section>
        {/* Add more sections here as you create them */}
      </main>
      <StickyContactButton />
    </div>
  );
};

export default App;

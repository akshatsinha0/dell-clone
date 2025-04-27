// src/components/StickyNavbar.tsx
import React, { useState, useEffect, useRef } from 'react';
import '../styles/StickyNavbar.css';

interface StickyNavbarProps {
  activeSectionId: string;
  scrollToSection: (sectionId: string) => void;
}

const StickyNavbar: React.FC<StickyNavbarProps> = ({ 
  activeSectionId, 
  scrollToSection 
}) => {
  const [visible, setVisible] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const firstCallRef = useRef(true); // Track initial callback to avoid flash

  useEffect(() => {
    const statsSection = document.getElementById('stats-section');
    
    // Modern Intersection Observer approach
    observer.current = new IntersectionObserver(
      ([entry]) => {
        // Skip the first callback when page loads
        if (firstCallRef.current) {
          firstCallRef.current = false;
          return;
        }
        
        // Show navbar when stats section is 50% out of view
        setVisible(entry.intersectionRatio < 0.5);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.5, 1] // Multiple thresholds for better detection
      }
    );

    if (statsSection) {
      observer.current.observe(statsSection);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const sections = [
    { id: 'products', label: 'Products' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'demo', label: 'Demo' },
    { id: 'workloads', label: 'Workloads' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'resources', label: 'Resources' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <nav className={`sticky-navbar ${visible ? 'visible' : ''}`}>
      <div className="sticky-navbar-container">
        <div className="sticky-navbar-title">Data Storage</div>
        
        <div className="sticky-navbar-links">
          {sections.map(section => (
            <button
              key={section.id}
              className={`sticky-navbar-link ${activeSectionId === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
        
        <div className="sticky-navbar-cta">
          <button className="request-callback-btn">Request a Callback</button>
        </div>
      </div>
    </nav>
  );
};

export default StickyNavbar;

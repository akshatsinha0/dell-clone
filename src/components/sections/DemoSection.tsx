// src/components/sections/DemoSection.tsx
import React, { useState } from 'react';
import '../../styles/DemoSection.css';
import demoImage from '../../assets/demoimage.png';

const DemoSection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string>('virtualLabs');

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? '' : section);
  };

  return (
    <section id="demo" className="demo-section">
      <div className="demo-content">
        <h2 className="demo-title">Test drive our storage management software</h2>
        <p className="demo-subtitle">
          Experience our storage solutions with self-paced virtual labs and guided demos.
        </p>

        <div className="demo-sections-container">
          <div className="demo-left-content">
            <div className="demo-collapsible-section">
              <div 
                className={`demo-section-header ${expandedSection === 'virtualLabs' ? 'active' : ''}`}
                onClick={() => toggleSection('virtualLabs')}
              >
                <h3 className="demo-section-title">Virtual labs</h3>
                <span className="demo-section-arrow">
                  {expandedSection === 'virtualLabs' ? '▲' : '▼'}
                </span>
              </div>
              
              {expandedSection === 'virtualLabs' && (
                <div className="demo-section-content">
                  <p className="demo-section-description">
                    Try our storage software in free, real-time virtual environments.
                  </p>
                  <button className="demo-button">
                    Explore Hands-on Labs
                  </button>
                </div>
              )}
            </div>

            <div className="demo-collapsible-section">
              <div 
                className={`demo-section-header ${expandedSection === 'interactiveDemos' ? 'active' : ''}`}
                onClick={() => toggleSection('interactiveDemos')}
              >
                <h3 className="demo-section-title">Interactive demos</h3>
                <span className="demo-section-arrow">
                  {expandedSection === 'interactiveDemos' ? '▲' : '▼'}
                </span>
              </div>
              
              {expandedSection === 'interactiveDemos' && (
                <div className="demo-section-content">
                  <p className="demo-section-description">
                    Step through key features with guided product tours and demos.
                  </p>
                  <button className="demo-button">
                    Browse Demo Library
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="demo-right-content">
            <img src={demoImage} alt="Dell Demo" className="demo-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

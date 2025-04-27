// src/components/FeaturesSection.tsx
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-card">
          <h2 className="feature-title">SMART</h2>
          <p className="feature-description">
            Manage data growth cost effectively with our intelligent and efficient systems.
          </p>
        </div>
        
        <div className="feature-card">
          <h2 className="feature-title">FLEXIBLE</h2>
          <p className="feature-description">
            Power any workload, anywhere across on-premises or hybrid cloud environments.
          </p>
        </div>
        
        <div className="feature-card">
          <h2 className="feature-title">RESILIENT</h2>
          <p className="feature-description">
            Ensure your data is protected everywhere with our trusted and secure storage platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

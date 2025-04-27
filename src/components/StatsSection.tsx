  // src/components/StatsSection.tsx
  import React from 'react';

  const StatsSection: React.FC = () => {
    return (
      <section className="stats-section" /*style={{ minHeight: '150vh' }}*/>
        <div className="stats-container">
          <div className="stat-card">
            <h2 className="stat-title">Trusted solutions</h2>
            <div className="stat-subtitle">IDC ranked</div>
            <div className="stat-value">#1</div>
            <div className="stat-description">
              provider of enterprise storage 
              <span className="info-icon" title="More information">ⓘ</span>
            </div>
          </div>
          
          <div className="stat-card">
            <h2 className="stat-title">Efficient</h2>
            <div className="stat-subtitle">Up to</div>
            <div className="stat-value">99%</div>
            <div className="stat-description">
              time-consuming IT tasks eliminated
              <span className="info-icon" title="More information">ⓘ</span>
            </div>
          </div>
          
          <div className="stat-card">
            <h2 className="stat-title">Cyber resilient</h2>
            <div className="stat-subtitle">Up to</div>
            <div className="stat-value">99.5%</div>
            <div className="stat-description">
              confidence of finding data corruption
              <span className="info-icon" title="More information">ⓘ</span>
            </div>
          </div>
          
          <div className="stat-card">
            <h2 className="stat-title">Cloud-ready</h2>
            <div className="stat-subtitle">Up to</div>
            <div className="stat-value">80%</div>
            <div className="stat-description">
              cost reduction p/GB for archive & long-term data retention
              <span className="info-icon" title="More information">ⓘ</span>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default StatsSection;

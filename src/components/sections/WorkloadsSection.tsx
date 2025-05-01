    // src/components/sections/WorkloadsSection.tsx
import React, { useState } from 'react';
import '../../styles/WorkloadsSection.css';

const WorkloadsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'workload' | 'industry'>('workload');

  const workloadOptions = [
    { name: 'Artificial Intelligence', id: 'ai' },
    { name: 'Analytics', id: 'analytics' },
    { name: 'SAP', id: 'sap' },
    { name: 'Oracle', id: 'oracle' },
    { name: 'SQL', id: 'sql' },
    { name: 'VMware', id: 'vmware' },
    { name: 'Mainframe Environments', id: 'mainframe' }
  ];

  const industryOptions = [
    { name: 'Healthcare & Life Sciences', id: 'healthcare' },
    { name: 'Media & Entertainment', id: 'media' },
    { name: 'Automotive', id: 'automotive' },
    { name: 'Safety & Security', id: 'safety' },
    { name: 'Semiconductor Design & Manufacturing', id: 'semiconductor' },
    { name: 'Oil & Gas', id: 'oil-gas' }
  ];

  return (
    <section id="workloads" className="workloads-section">
      <div className="workloads-container">
        <h2 className="workloads-title">Power your innovation for every application and industry</h2>
        
        <div className="workloads-tabs">
          <button 
            className={`workloads-tab ${activeTab === 'workload' ? 'active' : ''}`} 
            onClick={() => setActiveTab('workload')}
          >
            By Workload
          </button>
          <button 
            className={`workloads-tab ${activeTab === 'industry' ? 'active' : ''}`}
            onClick={() => setActiveTab('industry')}
          >
            By Industry
          </button>
        </div>
        
        <div className="workloads-grid">
          {(activeTab === 'workload' ? workloadOptions : industryOptions).map(option => (
            <div key={option.id} className="workload-card">
              <h3 className="workload-name">{option.name}</h3>
              <div className="external-link-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 19V5H19V12H21V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5Z" fill="white"/>
                  <path d="M14 15V17H17V20H19V17H22V15H19V12H17V15H14Z" fill="white"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkloadsSection;

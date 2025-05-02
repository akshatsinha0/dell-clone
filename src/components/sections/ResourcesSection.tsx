// src/components/sections/ResourcesSection.tsx
import React, { useState } from 'react';
import '../../styles/ResourcesSection.css';

// Resources tab images
import zeroDatalossImg from '../../assets/Resources/zerodataloss.png';
import maximizeDataImg from '../../assets/Resources/maximizeyourdata.png';
import innovateSwImg from '../../assets/Resources/innovatewithsw.png';

// Customer Stories images
import optimizeItImg from '../../assets/CustomerStories/optimizeIT.png';
import providingPowerImg from '../../assets/CustomerStories/providingpowerful.png';
import empoweringDubaiImage from '../../assets/CustomerStories/empoweringDubai.png';

// Related Offerings images
import connectrixFibreImg from '../../assets/RelatedOfferings/ConnectrixFibre.png';
import hyperconvergedImg from '../../assets/RelatedOfferings/Hyperconverged.png';
import dataProtectionImg from '../../assets/RelatedOfferings/DataProtection.png';

const ResourcesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('labs-webinars');
  const [activeIndicator, setActiveIndicator] = useState<number>(0);

  // Resource card content data
  const resourcesData = [
    {
      image: zeroDatalossImg,
      tag: "SOLUTION BRIEF",
      title: "Zero Data Loss Replication",
      description: "Metro Node Appliance enables synchronous active-active replication over metro or local distances.",
      action: "Read the solution brief",
      link: "#"
    },
    {
      image: maximizeDataImg,
      tag: "REPORT",
      title: "Maximize your Data Insights with AI",
      description: "Chart your path to success by unlocking the power of your data.",
      action: "Read the report",
      link: "#"
    },
    {
      image: innovateSwImg,
      tag: "VIDEO",
      title: "Innovate with Software-Driven Storage Solutions",
      description: "Simplify IT, gain multicloud control, harness automation and AI, and innovate securely with Dell storage solutions.",
      action: "Watch the video",
      link: "#"
    }
  ];
  
  // Labs and Webinars data
  const labsWebinarsData = [
    {
      tag: "LAB",
      title: "Hands-on Labs",
      description: "Sign up to test drive Dell infrastructure products and solutions for free in a real-time, user-friendly environment.",
      action: "Browse labs",
      link: "#"
    },
    {
      tag: "LIBRARY",
      title: "Storage Blogs",
      description: "Learn how modern workload solutions powered by data storage products from Dell Technologies drive business success for your digital future.",
      action: "Browse blogs",
      link: "#"
    },
    {
      tag: "LIBRARY",
      title: "Storage Webinars and Events",
      description: "Register for and explore on demand events to gain expertise and industry insight for the latest technology trends.",
      action: "Browse webinars",
      link: "#"
    }
  ];

  const customerStoriesData = [
    {
      image: optimizeItImg,
      tag: "NORTHWESTERN MUTUAL",
      title: "Optimize IT performance with a simple, standardized strategy",
      description: "Standardizing financial operations with modern data center infrastructure.",
      action: "Read case study",
      link: "#"
    },
    {
      image: providingPowerImg,
      tag: "LANCASTER UNIVERSITY",
      title: "Providing powerful, flexible storage for world-class research",
      description: `"PowerStore has significantly reduced rack space, power and cooling - decreasing our energy usage and costs." Dr. Matthew Storey, Head of Storage and Virtualization, Lancaster University`,
      action: "Read case study",
      link: "#"
    },
    {
      image: empoweringDubaiImage,
      tag: "EMIRATES NBD BANK",
      title: "Empowering Dubai's leading bank with modern infrastructure",
      description: "Fast, reliable and flexible solutions from Dell Technologies take financial services further for banking customers.",
      action: "Read case study",
      link: "#"
    }
  ];

  const relatedOfferingsData = [
    {
      image: connectrixFibreImg,
      tag: "FEATURED SOLUTION",
      title: "Connectrix Fibre Channel Storage Area Network (SAN) Solutions",
      description: "Highly reliable and scalable, the Dell Connectrix family of directors and switches deliver high performance block-based storage connectivity.",
      action: "Explore Connectrix SAN Solutions",
      link: "#"
    },
    {
      image: hyperconvergedImg,
      tag: "FEATURED SOLUTION",
      title: "Hyperconverged Infrastructure",
      description: "Modernize IT, simplify operations and lower risk with a choice of hyperconverged systems for modern and traditional workloads.",
      action: "Explore Hyperconverged Infrastructure",
      link: "#"
    },
    {
      image: dataProtectionImg,
      tag: "FEATURED SOLUTION",
      title: "Data Protection",
      description: "Ensure availability - no matter where your data resides - with cost-effective data management and protection solutions for any workload.",
      action: "Data protection solutions",
      link: "#"
    }
  ];

  // Get current tab data based on active tab
  const getCurrentTabData = () => {
    switch(activeTab) {
      case 'resources':
        return resourcesData;
      case 'labs-webinars':
        return labsWebinarsData;
      case 'customer-stories':
        return customerStoriesData;
      case 'related-offerings':
        return relatedOfferingsData;
      default:
        return resourcesData;
    }
  };

  // Get view all link text based on active tab
  const getViewAllText = () => {
    switch(activeTab) {
      case 'resources':
        return 'View all storage resources';
      case 'customer-stories':
        return 'View all customer stories';
      case 'labs-webinars':
        return '';
      case 'related-offerings':
        return '';
      default:
        return 'View all';
    }
  };

  // Get section title based on active tab
  const getSectionTitle = () => {
    return 'Resources';
  };

  // Special rendering for Labs, Webinars & Events tab
  const renderLabsWebinarsContent = () => {
    return (
      <div className="labs-webinars-cards">
        {labsWebinarsData.map((item, index) => (
          <div key={index} className="labs-webinar-card">
            <div className="labs-tag">{item.tag}</div>
            <h3 className="labs-title">{item.title}</h3>
            <p className="labs-description">{item.description}</p>
            <a href={item.link} className="labs-link">
              {item.action} <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    );
  };

  // Next indicator
  const nextIndicator = () => {
    setActiveIndicator((prev) => (prev + 1) % 2);
  };

  // Previous indicator
  const prevIndicator = () => {
    setActiveIndicator((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section id="resources" className="resources-section">
      <div className="resources-header">
        <h1 className="resources-title">{getSectionTitle()}</h1>
        <div className="resources-tabs">
          <button 
            className={`resources-tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button 
            className={`resources-tab ${activeTab === 'labs-webinars' ? 'active' : ''}`}
            onClick={() => setActiveTab('labs-webinars')}
          >
            Labs, Webinars & Events
          </button>
          <button 
            className={`resources-tab ${activeTab === 'customer-stories' ? 'active' : ''}`}
            onClick={() => setActiveTab('customer-stories')}
          >
            Customer Stories
          </button>
          <button 
            className={`resources-tab ${activeTab === 'related-offerings' ? 'active' : ''}`}
            onClick={() => setActiveTab('related-offerings')}
          >
            Related Offerings
          </button>
        </div>
      </div>

      {getViewAllText() && (
        <div className="view-all-container">
          <a href="#" className="view-all-link">
            {getViewAllText()} <span className="arrow">→</span>
          </a>
        </div>
      )}
      
      <div className="resources-carousel">
        <button className="carousel-nav prev" onClick={prevIndicator}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="white" />
          </svg>
        </button>
        
        {activeTab === 'labs-webinars' ? (
          renderLabsWebinarsContent()
        ) : (
          <div className="resources-cards">
            {getCurrentTabData().map((item, index) => (
              <div key={index} className="resource-card">
                <div className="resource-image-container">
                  {item.image && <img src={item.image} alt={item.title} className="resource-image" />}
                </div>
                <div className="resource-content">
                  <div className="resource-tag">{item.tag}</div>
                  <h3 className="resource-title">{item.title}</h3>
                  <p className="resource-description">{item.description}</p>
                  <a href={item.link} className="resource-link">
                    {item.action} <span className="arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <button className="carousel-nav next" onClick={nextIndicator}>
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" fill="white" />
          </svg>
        </button>
      </div>
      
      <div className="carousel-indicators">
        <button 
          className={`indicator ${activeIndicator === 0 ? 'active' : ''}`}
          onClick={() => setActiveIndicator(0)}
        ></button>
        <button 
          className={`indicator ${activeIndicator === 1 ? 'active' : ''}`}
          onClick={() => setActiveIndicator(1)}
        ></button>
      </div>
    </section>
  );
};

export default ResourcesSection;

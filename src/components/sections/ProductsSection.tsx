// src/components/sections/ProductsSection.tsx
import React from 'react';
import '../../styles/ProductsSection.css';
import powerStoreImage from '../../assets/powerStore.png';
import powerFlexImage from '../../assets/powerFlex.png';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-filters">
          <button className="filter-btn active">All Storage</button>
          <button className="filter-btn">Unified</button>
          <button className="filter-btn">Block</button>
          <button className="filter-btn">File</button>
          <button className="filter-btn">Object</button>
          <button className="filter-btn">Software-Defined</button>
          <button className="filter-btn">Multicloud</button>
        </div>
        
        <h2 className="products-title">All Dell Storage Products</h2>
        <p className="products-subtitle">
          Get breakthrough efficiency, cyber resiliency, and multicloud flexibility with software-driven storage.
        </p>
        
        <div className="products-grid">
          <div className="product-card">
            <div className="product-badge">AI-optimised</div>
            <div className="product-image-container">
              <img src={powerStoreImage} alt="Dell PowerStore" className="product-image" />
            </div>
            <h3 className="product-name">PowerStore</h3>
            <p className="product-description">
              Intelligent all-flash storage for the digital enterprise
            </p>
            <div className="product-best-for">
              <h4>BEST FOR:</h4>
              <ul>
                <li>Business-critical transactional workloads</li>
                <li>VMware applications</li>
                <li>Database workloads</li>
              </ul>
            </div>
            <button className="product-btn-explore">Explore PowerStore</button>
          </div>
          
          <div className="product-card">
            <div className="product-badge">AI-optimised</div>
            <div className="product-image-container">
              <img src={powerFlexImage} alt="Dell PowerFlex" className="product-image" />
            </div>
            <h3 className="product-name">PowerFlex</h3>
            <p className="product-description">
              The ultimate software-defined infrastructure for modern enterprise
            </p>
            <div className="product-best-for">
              <h4>BEST FOR:</h4>
              <ul>
                <li>Flexible adaptable architecture</li>
                <li>Extreme performance that scales linearly</li>
                <li>Consolidate enterprise workloads on a single platform</li>
              </ul>
            </div>
            <button className="product-btn-explore">Explore PowerFlex</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

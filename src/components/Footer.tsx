// src/components/Footer.tsx
import React, { useState } from 'react';
import '../styles/Footer.css';
import eatenCookieImage from '../assets/EATENCOOKIEIMAGE.png';

const Footer: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [ratings, setRatings] = useState({
    innovation: 0,
    brand: 0,
    content: 0
  });
  const [hoveredStar, setHoveredStar] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  
  // Handle star rating selection and advance to next step
  const handleStarClick = (rating: number) => {
    switch(step) {
      case 1:
        setRatings({...ratings, innovation: rating});
        break;
      case 2:
        setRatings({...ratings, brand: rating});
        break;
      case 3:
        setRatings({...ratings, content: rating});
        break;
    }
    setStep(step + 1);
  };
  
  // Get current question based on step
  const getQuestion = () => {
    switch(step) {
      case 1:
        return "Based on my visit today, I would say Dell Technologies is...";
      case 2:
        return "The Dell Technologies brand on this site is...";
      case 3:
        return "The content featured on this page is...";
      case 4:
        return "Is there anything specific about your experience today that you'd like to share?";
      default:
        return "";
    }
  };
  
  // Get left label based on step
  const getLeftLabel = () => {
    switch(step) {
      case 1:
        return "Not at all innovative";
      case 2:
        return "Not at all exciting";
      case 3:
        return "Not at all relevant";
      default:
        return "";
    }
  };
  
  // Get right label based on step
  const getRightLabel = () => {
    switch(step) {
      case 1:
        return "Extremely innovative";
      case 2:
        return "Extremely exciting";
      case 3:
        return "Extremely relevant";
      default:
        return "";
    }
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", { ...ratings, feedback });
    // Reset form after submission (optional)
    setStep(1);
    setRatings({ innovation: 0, brand: 0, content: 0 });
    setFeedback('');
  };
  
  // Render the appropriate feedback UI based on current step
  const renderFeedbackContent = () => {
    if (step <= 3) {
      return (
        <div className="rating-container">
          <p>{getQuestion()}</p>
          <div className="rating-stars">
            <span className="rating-label">{getLeftLabel()}</span>
            <div className="stars">
              {[1, 2, 3, 4, 5, 6, 7].map((star) => (
                <button 
                  key={star} 
                  className={`star-btn ${star <= hoveredStar ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredStar(star)}
                  onMouseLeave={() => setHoveredStar(0)}
                  onClick={() => handleStarClick(star)}
                >
                  <span className={`star ${star <= hoveredStar ? 'filled' : ''}`}>★</span>
                </button>
              ))}
            </div>
            <span className="rating-label">{getRightLabel()}</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="rating-container feedback-form">
          <p>{getQuestion()}</p>
          <form onSubmit={handleSubmit}>
            <textarea 
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Your feedback will help us improve our website."
              maxLength={500}
            />
            <div className="feedback-controls">
              <span className="character-count">{feedback.length} of 500</span>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      );
    }
  };
  
  return (
    <footer className="dell-footer">
      <div className="footer-rating-section">
        <div className="step-indicator">{step}/4</div>
        {renderFeedbackContent()}
      </div>

      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-column language-column">
            <div className="language-selector">
              <span className="globe-icon">🌐</span>
              <span className="language-text">IN/EN</span>
              <span className="arrow-icon">▼</span>
            </div>
            <ul className="footer-links">
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Account</h3>
            <ul className="footer-links">
              <li><a href="#">My Account</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Profile Settings</a></li>
              <li><a href="#">My Products</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul className="footer-links">
              <li><a href="#">Support Home</a></li>
              <li><a href="#">Contact Technical Support</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Connect with Us</h3>
            <ul className="footer-links">
              <li><a href="#">Community</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Offerings</h3>
            <ul className="footer-links">
              <li><a href="#">Artificial Intelligence</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Deals</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Company</h3>
            <ul className="footer-links">
              <li><a href="#">Who We Are</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Dell Technologies Capital</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Recycling</a></li>
              <li><a href="#">ESG & Impact</a></li>
              <li><a href="#">Customer Stories</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Partners</h3>
            <ul className="footer-links">
              <li><a href="#">Find a Partner</a></li>
              <li><a href="#">OEM Solutions</a></li>
              <li><a href="#">Partner Program</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Dell Rewards</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Email Sign-Up</a></li>
              <li><a href="#">Privacy Centre</a></li>
              <li><a href="#">Security & Trust Centre</a></li>
              <li><a href="#">Trial Software Downloads</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-brand">
        <div className="footer-container">
          <div className="brand-links">
            <a href="#" className="brand-link">Dell Technologies</a>
            <a href="#" className="brand-link">Dell Premier</a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="footer-container">
          <div className="legal-links">
            <div className="copyright">Copyright © 2025 Dell Inc.</div>
            <a href="#">Terms of Sale</a>
            <a href="#">Privacy Statement</a>
            <a href="#">Cookies, Ads & Emails</a>
            <a href="#">Legal & Regulatory</a>
            <a href="#">Accessibility</a>
          </div>
          <div className="contact-us-btn-container">
            <button className="contact-us-btn">
              <span className="headset-icon">🎧</span>
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Consent Banner */}
      <div className="cookie-banner">
        <img src={eatenCookieImage} alt="Cookie Preferences" className="cookie-image" />
      </div>
    </footer>
  );
};

export default Footer;

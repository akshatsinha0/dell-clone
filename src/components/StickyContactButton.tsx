// src/components/StickyContactButton.tsx
import React from 'react';
import contactUsIcon from '../assets/contactus.png';

const StickyContactButton: React.FC = () => {
  return (
    <a href="#" className="sticky-contact-btn">
      <img src={contactUsIcon} alt="Contact Us" className="sticky-contact-icon" />
      Contact Us
    </a>
  );
};

export default StickyContactButton;

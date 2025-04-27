// src/components/sections/BenefitsSection.tsx
import React, { useState, useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import '../../styles/BenefitsSection.css';
import thumbnailImage from '../../assets/thumbnailimage.png';

const BenefitsSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Plyr | null>(null);
  
  // Initialize Plyr when the component mounts
  useEffect(() => {
    if (isPlaying && videoRef.current) {
      // Find the element and check it's not null
      const playerElement = videoRef.current.querySelector('.js-plyr');
      
      if (playerElement) {
        // Initialize Plyr with proper type assertion
        playerRef.current = new Plyr(playerElement as HTMLElement, {
          controls: [
            'play-large', 'play', 'progress', 'current-time', 
            'mute', 'volume', 'fullscreen'
          ],
          autoplay: true,
          hideControls: false,
          resetOnEnd: true,
          displayDuration: true
        });
      }
    }
    
    return () => {
      // Clean up Plyr instance on unmount
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [isPlaying]);
  
  // Video ID from YouTube URL
  const videoId = "3tlY_l4u07o";

  return (
    <section id="benefits" className="benefits-section">
      <h2 className="benefits-title">Software-driven storage innovation</h2>
      
      <div className="video-container">
        {!isPlaying ? (
          <div className="thumbnail-container">
            <img src={thumbnailImage} alt="Video thumbnail" className="video-thumbnail" />
            <button className="play-button" onClick={() => setIsPlaying(true)}>
              <svg viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="plyr__container" ref={videoRef}>
            <div className="js-plyr plyr__video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?origin=${window.location.origin}&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1`}
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      
      <div className="benefits-cards">
        <div className="benefit-card">
          <div className="benefit-icon smart-icon">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path d="M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4M6,7H18V9H6V7M6,11H16V13H6V11Z" fill="#ffffff" />
            </svg>
          </div>
          <h3>Smart infrastructure</h3>
          <p>Get more value from your data with a modern IT environment – on-premises and in public clouds.</p>
          <a href="#" className="benefit-link">Read the eBook <span className="external-icon">↗</span></a>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-icon sustainable-icon">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75Z" fill="#ffffff" />
            </svg>
          </div>
          <h3>Sustainable data center</h3>
          <p>Improve your energy efficiency without compromising performance with data reduction and more.</p>
          <a href="#" className="benefit-link">Read the eBook <span className="external-icon">↗</span></a>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-icon security-icon">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path d="M12,12H19C18.47,16.11 15.72,19.78 12,20.92V12H5V6.3L12,3.19M12,1L3,5V11C3,16.55 6.84,21.73 12,23C17.16,21.73 21,16.55 21,11V5L12,1Z" fill="#ffffff" />
            </svg>
          </div>
          <h3>Comprehensive data security</h3>
          <p>World's broadest storage portfolio with comprehensive security capabilities to protect your data from cyber threats.</p>
          <a href="#" className="benefit-link">Read the white paper <span className="external-icon">↗</span></a>
        </div>
        
        <div className="benefit-card">
          <div className="benefit-icon multicloud-icon">
            <svg viewBox="0 0 24 24" width="32" height="32">
              <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z" fill="#ffffff" />
            </svg>
          </div>
          <h3>Multicloud</h3>
          <p>Simplify multicloud storage with a universal storage layer, across public, private and edge locations.</p>
          <a href="#" className="benefit-link">Explore Dell APEX portfolio <span className="external-icon">↗</span></a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
  
// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StickyContactButton from './components/StickyContactButton';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#0a1533' }}>
      <Navbar />
      <HeroSection />
      <StickyContactButton />
    </div>
  );
};

export default App;

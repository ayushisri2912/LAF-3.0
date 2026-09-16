import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import AboutSection from '../components/HomeComponents/AboutSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Home;
import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import AboutSection from '../components/HomeComponents/AboutSection';
import HighlightsSection from '../components/HomeComponents/HighlightsSection';
import AgendaSection from '../components/HomeComponents/AgendaSection';
import FestivalTeamSection from '../components/HomeComponents/FestivalTeamSection';
import SupportingOrganizationsSection from '../components/HomeComponents/SupportingOrganizationsSection';
import LastEventGlanceSection from '../components/HomeComponents/LastEventGlanceSection';
import AboutLAASection from '../components/HomeComponents/AboutLAASection';
import LocationLayoutSection from '../components/HomeComponents/LocationLayoutSection';
import GetInTouchSection from '../components/HomeComponents/GetInTouchSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <HighlightsSection/>
      <AgendaSection/>
      <FestivalTeamSection/>
      <SupportingOrganizationsSection/>
      <LastEventGlanceSection/>
      <AboutLAASection/>
      <LocationLayoutSection/>
      <GetInTouchSection/>
    </div>
  );
};

export default Home;
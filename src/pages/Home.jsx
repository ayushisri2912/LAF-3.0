import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import AboutSection from '../components/HomeComponents/AboutSection';
import HighlightsSection from '../components/HomeComponents/HighlightsSection';
import AgendaSection from '../components/HomeComponents/AgendaSection';
import ParticipationSection from '../components/HomeComponents/ParticipationSection';
import FestivalTeamSection from '../components/HomeComponents/FestivalTeamSection';
import SupportingOrganizationsSection from '../components/HomeComponents/SupportingOrganizationsSection';
import LastEventGlanceSection from '../components/HomeComponents/LastEventGlanceSection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <HighlightsSection/>
      <AgendaSection/>
      <ParticipationSection/>
      <FestivalTeamSection/>
      <SupportingOrganizationsSection/>
      <LastEventGlanceSection/>
    </div>
  );
};

export default Home;
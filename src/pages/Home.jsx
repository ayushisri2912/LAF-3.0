import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import AboutSection from '../components/HomeComponents/AboutSection';
import HighlightsSection from '../components/HomeComponents/HighlightsSection';
import AgendaSection from '../components/HomeComponents/AgendaSection';
import PrePublicitySection from '../components/HomeComponents/PrePublicitySection';
import VisitorsProfileSection from '../components/HomeComponents/VisitorsProfileSection';
import OpportunitiesSection from '../components/HomeComponents/OpportunitiesSection';
import FestivalTeamSection from '../components/HomeComponents/FestivalTeamSection';
import SupportingOrganizationsSection from '../components/HomeComponents/SupportingOrganizationsSection';
import LastEventGlanceSection from '../components/HomeComponents/LastEventGlanceSection';
import AboutLAASection from '../components/HomeComponents/AboutLAASection';
import LafInMediaSection from '../components/HomeComponents/LafInMediaSection';
import BrandShowcase from '../components/HomeComponents/BrandShowcase';
import LocationLayoutSection from '../components/HomeComponents/LocationLayoutSection';
import GetInTouchSection from '../components/HomeComponents/GetInTouchSection';
import LAFHistory from '../components/HomeComponents/LAFHistory';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <LAFHistory/>
      <HighlightsSection/>
      <AgendaSection/>
      <PrePublicitySection/>
      <VisitorsProfileSection/>
      <OpportunitiesSection/>
      <FestivalTeamSection/>
      <SupportingOrganizationsSection/>
      <LastEventGlanceSection/>
      <AboutLAASection/>
      <LafInMediaSection/>
      <BrandShowcase/>
      <LocationLayoutSection/>
      <GetInTouchSection/>
    </div>
  );
};

export default Home;
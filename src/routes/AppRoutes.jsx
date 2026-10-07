import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TeamPage from '../pages/TeamPage';
import ParticipatePage from '../pages/ParticipatePage';
import HighlightPage from '../pages/HighlightPage';
import GalleryPage from '../pages/GalleryPage';
import LocationPage from '../pages/LocationPage';
import RegistrationPage from '../pages/RegistrationPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/highlights" element={<HighlightPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/participate" element={<ParticipatePage />} />
      <Route path="/participation" element={<ParticipatePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/team/:submenu" element={<TeamPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      {/* <Route path="/registration" element={<RegistrationPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;

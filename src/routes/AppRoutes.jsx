import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TeamPage from '../pages/TeamPage';
import ParticipatePage from '../pages/ParticipatePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participate" element={<ParticipatePage />} />
      <Route path="/participation" element={<ParticipatePage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/team/:submenu" element={<TeamPage />} />
    </Routes>
  );
};

export default AppRoutes;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TeamPage from '../pages/TeamPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/team/:submenu" element={<TeamPage />} />
    </Routes>
  );
};

export default AppRoutes;

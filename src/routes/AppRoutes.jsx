import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

// Route-level Code Splitting for secondary pages
const TeamPage = lazy(() => import('../pages/TeamPage'));
const ParticipatePage = lazy(() => import('../pages/ParticipatePage'));
const HighlightPage = lazy(() => import('../pages/HighlightPage'));
const GalleryPage = lazy(() => import('../pages/GalleryPage'));
const LocationPage = lazy(() => import('../pages/LocationPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));

// Fallback loader while route chunk is loading
const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-[#B77A27] border-t-transparent animate-spin" />
      <span className="text-xs font-mono tracking-widest text-[#B77A27] uppercase font-bold">
        Loading...
      </span>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
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
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

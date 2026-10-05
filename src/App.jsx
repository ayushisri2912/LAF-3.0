import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import AppRoutes from './routes/AppRoutes';
import CTASection from './layout/CTASection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
       <AppRoutes/>
      </main>
      <CTASection/>
      <Footer />
    </div>
  );
}

export default App;
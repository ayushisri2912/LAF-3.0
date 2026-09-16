import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/images/lucknow-img.jpeg';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0c0c0e] font-sans">
      
      {/* 1. REAL ORIGINAL BACKGROUND IMAGE (NO FILTERS / NO GRID EFFECTS) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      />

      {/* 2. MINIMAL SOFT OVERLAY FOR TEXT READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70 pointer-events-none" />

      {/* 3. MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center flex flex-col items-center">

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] max-w-5xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
        >
          North India's Largest{' '}
          <span className="font-serif italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 drop-shadow-[0_4px_20px_rgba(245,158,11,0.5)]">
            Design, Luxury
          </span>{' '}
          & Lifestyle Conclave
        </motion.h1>

        {/* Sub-text / Symposium Theme in Frosted Glass Container for perfect contrast */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-3xl bg-black/55 backdrop-blur-lg px-6 py-4 rounded-2xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
        >
          <p className="text-sm sm:text-base md:text-lg text-neutral-100 font-normal leading-relaxed tracking-wide drop-shadow-md">
            A Symposium of{' '}
            <span className="text-amber-400 font-semibold uppercase tracking-wider">
              EMERGING ARCHITECTS
            </span>{' '}
            Think Tank for Sustainable Urban Development & Vision SCR – U.P.
          </p>
        </motion.div>

        {/* 4. PREMIUM FLOATING DATE BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 sm:mt-10 inline-flex items-center gap-4 sm:gap-6 bg-[#121214]/90 backdrop-blur-xl border border-[#D4AF37]/50 px-6 sm:px-8 py-4 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
        >
          <div className="flex items-center gap-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 tracking-tight font-serif">
            <span>10</span>
            <span className="text-neutral-600 text-xl font-light">|</span>
            <span>11</span>
            <span className="text-neutral-600 text-xl font-light">|</span>
            <span>12</span>
          </div>
          
          <div className="text-left pl-4 sm:pl-6 border-l border-neutral-700/80">
            <span className="block text-[10px] sm:text-xs uppercase tracking-widest text-[#D4AF37] font-semibold flex items-center gap-1">
              <Calendar className="w-3 h-3 text-amber-400 inline" /> Event Dates
            </span>
            <span className="block text-sm sm:text-base font-bold text-white tracking-wider">
              January 2026
            </span>
          </div>
        </motion.div>

        {/* 5. CALL TO ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#registration"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/60 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-black" />
              <span>Register Now</span>
            </span>
          </a>

          <a
            href="#agenda"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-black/40 hover:bg-black/60 border border-white/30 hover:border-amber-400/80 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            <span className="flex items-center gap-2">
              <span>Explore Agenda</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Hairline Accent Border */}
      <div className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
    </section>
  );
};

export default HeroSection;




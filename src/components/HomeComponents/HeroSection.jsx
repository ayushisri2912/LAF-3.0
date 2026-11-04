import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/images/hero-image.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[660px] sm:h-[710px] lg:h-[760px] overflow-hidden bg-[#0A0D14] font-sans select-none">
      {/* ================= 1. BACKGROUND IMAGE ================= */}
      <div
        className="absolute inset-0 bg-cover bg-center sm:bg-bottom bg-no-repeat scale-[1.01] brightness-[1.06] contrast-[1.02]"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      />

      {/* ================= 2. CINEMATIC BRIGHT BALANCED OVERLAY ================= */}
      {/* Light top-to-bottom edge gradient keeping the palace architecture bright & sunlit */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/45 pointer-events-none" />

      {/* Focused center radial soft shadow specifically behind text for crisp readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,12,20,0.46)_0%,rgba(10,12,20,0.22)_45%,transparent_72%)] pointer-events-none" />

      {/* Ambient warm festival glow accents behind text */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 via-rose-500/8 to-purple-600/10 blur-3xl pointer-events-none" />

      {/* ================= 3. HERO CONTENT ================= */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center pt-4 sm:pt-6">
        {/* ================= MAIN HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl text-[30px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[72px] font-extrabold text-white leading-[1.05] sm:leading-[1] tracking-[-0.025em] drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]"
        >
          North India's Largest{' '}
          {/* Design */}
          <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFE58F] via-[#FFC107] to-[#FFA000] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Design,
          </span>
          <br />
          {/* Luxury */}
          <span className="font-serif italic font-bold bg-gradient-to-r from-[#FFE58F] via-[#FFC107] to-[#FFA000] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Luxury
          </span>{' '}
          &amp; Lifestyle Conclave
        </motion.h1>

        {/* ================= LAF 3.0 FESTIVAL EMBLEM ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3.5 sm:mt-4"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            {/* Left Accent Line */}
            <span className="hidden sm:block w-12 md:w-20 h-[2px] bg-gradient-to-r from-transparent via-[#FFC107] to-amber-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />

            {/* LAF */}
            <span className="inline-block text-[44px] sm:text-[58px] md:text-[68px] lg:text-[78px] font-black tracking-[0.06em] leading-tight bg-gradient-to-b from-[#FFF5C0] via-[#FFC72C] to-[#E68A00] bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] py-1">
              LAF
            </span>

            {/* 3.0 (Full solid lining numerals, no clipping, radiant gold) */}
            <span className="inline-block text-[42px] sm:text-[56px] md:text-[66px] lg:text-[76px] font-black tracking-normal leading-tight bg-gradient-to-b from-[#FFFDF0] via-[#FFC72C] to-[#F59E0B] bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)] py-1 px-1">
              3.0
            </span>

            {/* Right Accent Line */}
            <span className="hidden sm:block w-12 md:w-20 h-[2px] bg-gradient-to-l from-transparent via-[#FFC107] to-amber-200 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Festival Name Subtitle */}
          <p className="mt-1 text-[9px] sm:text-[10.5px] md:text-[11.5px] uppercase tracking-[0.32em] font-bold text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            Lucknow Architecture Festival
          </p>
        </motion.div>

        {/* ================= DESCRIPTION CARD (Frosted Glass Luxury Card) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mt-4 sm:mt-5 w-full max-w-[840px] px-5 sm:px-8 py-3 sm:py-3.5 rounded-2xl bg-[#0F121C]/65 backdrop-blur-md border border-white/20 border-t-amber-400/40 shadow-[0_8px_32px_rgba(0,0,0,0.55)]"
        >
          <p className="text-xs sm:text-sm md:text-base lg:text-[16.5px] text-white/95 leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            A Symposium of{' '}
            <span className="text-[#FFC107] font-bold uppercase tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Emerging Architects
            </span>{' '}
            Think Tank for Sustainable Urban Development &amp; Vision SCR – U.P.
          </p>
        </motion.div>

        {/* ================= DATE BADGE (Luxury Gold Glass Container) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="mt-4 sm:mt-5 flex items-center justify-center gap-4 sm:gap-6 px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-[#0F121C]/75 backdrop-blur-md border border-[#FFC107]/45 border-t-amber-300/60 shadow-[0_8px_28px_rgba(0,0,0,0.6)]"
        >
          {/* Dates */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-2xl sm:text-3xl md:text-4xl font-serif font-bold bg-gradient-to-b from-[#FFF2B2] via-[#FFC72C] to-[#FFA000] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(255,193,7,0.3)]">
            <span>22</span>
            <span className="text-amber-300/40 text-xl font-light">|</span>
            <span>23</span>
            <span className="text-amber-300/40 text-xl font-light">|</span>
            <span>24</span>
          </div>

          {/* Date Details */}
          <div className="pl-4 sm:pl-6 border-l border-white/20 text-left">
            <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] uppercase tracking-[0.16em] font-bold text-[#FFC107]">
              <Calendar className="w-3.5 h-3.5 text-[#FFC107]" />
              Event Dates
            </span>
            <span className="block mt-0.5 text-xs sm:text-sm md:text-base font-bold text-white tracking-wide">
              January 2027
            </span>
          </div>
        </motion.div>

        {/* ================= ACTION BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.48 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* REGISTER BUTTON (Matching Navbar Brand Gold Style) */}
          <Link
            to="/register"
            className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-extrabold text-xs sm:text-[12.5px] uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#FFB800] via-[#FFAE00] to-[#FF9E00] border border-amber-200/80 shadow-[0_4px_25px_rgba(255,184,0,0.45)] hover:shadow-[0_6px_35px_rgba(255,184,0,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer light sweep */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-neutral-950 text-neutral-950" />
              Register Now
            </span>
          </Link>

          {/* EXPLORE AGENDA BUTTON (Luxury Frosted Glass Button) */}
          <a
            href="#agenda"
            className="group inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-[12.5px] uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-[#FFC107] hover:text-[#FFC107] shadow-[0_4px_22px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Explore Agenda
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* ================= BOTTOM GOLD LUXURY ACCENT LINE ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFC107] to-transparent" />
    </section>
  );
};

export default HeroSection;

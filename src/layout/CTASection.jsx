import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";

// =====================================================
// MINIMAL TRADITIONAL INDIAN EMBROIDERY MOTIFS
// =====================================================

const IndianPaisleyMotif = ({ className = "" }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M100 20 C140 20 170 50 170 90 C170 140 120 180 80 180 C40 180 20 150 20 110 C20 75 45 50 80 50 C100 50 110 35 100 20 Z"
      stroke="#D6AA46"
      strokeWidth="1"
      strokeDasharray="4 2"
    />
    <path
      d="M100 25 C135 25 162 52 162 88 C162 132 116 172 78 172 C44 172 28 145 28 110 C28 78 50 56 80 56 C96 56 106 42 100 25 Z"
      stroke="#D6AA46"
      strokeWidth="0.75"
    />
    <path d="M80 160 Q100 130 80 100 T80 65" stroke="#D6AA46" strokeWidth="0.8" />
    <path d="M80 130 C95 120 110 125 105 138 C100 148 85 145 80 130 Z" stroke="#D6AA46" strokeWidth="0.75" />
    <path d="M80 100 C65 90 50 95 55 108 C60 118 75 115 80 100 Z" stroke="#D6AA46" strokeWidth="0.75" />
    <circle cx="80" cy="100" r="3" fill="#D6AA46" fillOpacity="0.3" />
  </svg>
);

const IndianEmbroideryMedallion = ({ className = "" }) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="120" cy="120" r="105" stroke="#D6AA46" strokeWidth="0.8" strokeDasharray="3 3" />
    <circle cx="120" cy="120" r="95" stroke="#D6AA46" strokeWidth="0.6" />
    <circle cx="120" cy="120" r="65" stroke="#D6AA46" strokeWidth="0.6" />
    <circle cx="120" cy="120" r="12" fill="#D6AA46" fillOpacity="0.2" stroke="#D6AA46" strokeWidth="0.8" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, idx) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 120 + 35 * Math.cos(rad);
      const y1 = 120 + 35 * Math.sin(rad);
      const x2 = 120 + 95 * Math.cos(rad);
      const y2 = 120 + 95 * Math.sin(rad);
      return (
        <path
          key={idx}
          d={`M ${x1} ${y1} L ${x2} ${y2}`}
          stroke="#D6AA46"
          strokeWidth="0.6"
        />
      );
    })}
  </svg>
);

const CTASection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C120B] via-[#24170E] to-[#170E08] text-white select-none font-sans py-24 sm:py-28 border-t border-b border-[#D6AA46]/20">

      {/* ================= BACKGROUND MOTIFS (ULTRA MINIMAL & SUBTLE) ================= */}
      
      {/* Top Right Background Watermark */}
      <div className="pointer-events-none absolute -right-24 -top-24 opacity-[0.16] transition-opacity">
        <IndianEmbroideryMedallion className="w-[500px] h-[500px] sm:w-[600px] sm:h-[600px]" />
      </div>

      {/* Bottom Left Background Watermark */}
      <div className="pointer-events-none absolute -left-24 -bottom-24 opacity-[0.16] transition-opacity">
        <IndianPaisleyMotif className="w-[450px] h-[450px] sm:w-[550px] sm:h-[550px]" />
      </div>

      {/* Warm Brownie & Gold Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#5C3214]/20 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#D6AA46]/10 rounded-full blur-3xl" />

      {/* ================= MAIN MINIMAL CONTENT ================= */}

      <div className="relative z-10 w-full max-w-5xl px-6 mx-auto text-center flex flex-col items-center">

        {/* Top Minimal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A1B12] border border-[#D6AA46]/40 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#D6AA46]">
            LUCKNOW ARCHITECTURE FESTIVAL 3.0
          </span>
        </motion.div>

        {/* Main Clean Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.02] tracking-tight text-white max-w-4xl"
        >
          Let's build the{" "}
          <span className="italic text-[#D6AA46] font-serif font-normal">
            next conversation.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-sm sm:text-base text-amber-100/70 leading-relaxed font-light"
        >
          A premier platform where architects, designers, students and changemakers unite to exchange ideas, explore possibilities, and shape the future of urbanism.
        </motion.p>

        {/* Primary CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-9"
        >
          <a
            href="#registration"
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#140D08] bg-[#D6AA46] rounded-full shadow-[0_0_30px_rgba(214,170,70,0.25)] hover:shadow-[0_0_45px_rgba(214,170,70,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <UsersRound className="w-4 h-4 fill-black text-black" />
            <span>LAF REGISTRATION</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Minimal Event Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 w-full max-w-3xl grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#D6AA46]/20 py-6 text-xs text-neutral-300"
        >
          {/* Date */}
          <div className="flex items-center justify-center gap-3 py-1 sm:border-r border-[#D6AA46]/20">
            <CalendarDays className="w-4 h-4 text-[#D6AA46] shrink-0" />
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-widest text-amber-200/50 font-semibold">Event Date</div>
              <div className="text-xs font-semibold text-neutral-200 mt-0.5">15 — 17 Nov 2026</div>
            </div>
          </div>

          {/* Venue */}
          <div className="flex items-center justify-center gap-3 py-1 sm:border-r border-[#D6AA46]/20">
            <MapPin className="w-4 h-4 text-[#D6AA46] shrink-0" />
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-widest text-amber-200/50 font-semibold">Venue</div>
              <div className="text-xs font-semibold text-neutral-200 mt-0.5">Lucknow, UP</div>
            </div>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-center gap-3 py-1">
            <Sparkles className="w-4 h-4 text-[#D6AA46] shrink-0" />
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-widest text-amber-200/50 font-semibold">Be A Part Of</div>
              <div className="text-xs font-semibold text-neutral-200 mt-0.5">Design · Ideas · Impact</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CTASection;
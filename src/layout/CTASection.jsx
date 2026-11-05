import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";

import highlightBg from "../assets/images/h-bg.png";

const CTASection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#FFFBF5] text-[#0F172A] select-none font-sans py-14 sm:py-16 md:py-20 flex items-center justify-center border-t border-[#E6DFD3]"
      style={{
        backgroundImage: `url(${highlightBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 w-full max-w-5xl px-5 sm:px-8 mx-auto text-center flex flex-col items-center">
        {/* Top Tag with side lines */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5"
        >
          <div className="w-8 sm:w-16 h-px bg-[#B77A27]/40" />
          <div className="px-4 py-1.5 rounded-full border border-[#B77A27]/40 bg-white/70 backdrop-blur-xs text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] text-[#B77A27] uppercase shadow-2xs">
            LUCKNOW ARCHITECTURE FESTIVAL 3.0
          </div>
          <div className="w-8 sm:w-16 h-px bg-[#B77A27]/40" />
        </motion.div>

        {/* Main Heading with Brand Gradient on 'next conversation.' */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-normal leading-[1.12] tracking-tight text-[#0F172A] max-w-4xl text-center"
        >
          Let's build the{" "}
          <span
            className="font-serif italic font-normal text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F97316 0%, #EC2656 60%, #930777 100%)",
            }}
          >
            next
          </span>
          <br />
          <span
            className="font-serif italic font-normal text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #F97316 0%, #EA580C 25%, #EC2656 60%, #930777 100%)",
            }}
          >
            conversation.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-5 max-w-2xl text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed font-normal text-center"
        >
          A premier platform where architects, designers, students and changemakers unite to exchange ideas, explore possibilities, and shape the future of urbanism.
        </motion.p>

        {/* Primary CTA Button with Top-Right Sparkle Rays */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-7 sm:mt-8"
        >
          {/* Decorative Sparkle Rays on top right matching 2nd image */}
          <div className="absolute -top-3.5 -right-3 text-[#EA580C] pointer-events-none select-none flex gap-1">
            <span className="block w-0.5 h-2.5 rounded-full bg-[#EA580C] -rotate-45 translate-y-1" />
            <span className="block w-0.5 h-3.5 rounded-full bg-[#EA580C] rotate-6 -translate-y-0.5" />
            <span className="block w-0.5 h-2.5 rounded-full bg-[#EA580C] rotate-45 translate-y-1" />
          </div>

          <Link
            to="/register"
            className="group relative inline-flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white rounded-full shadow-[0_8px_30px_rgba(236,38,86,0.35)] hover:shadow-[0_12px_40px_rgba(236,38,86,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            style={{
              background:
                "linear-gradient(90deg, #FB7801 0%, #EC2656 45%, #7C1382 75%, #420A68 100%)",
            }}
          >
            {/* Shimmer sweep effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <UsersRound className="w-3.5 h-3.5 text-white" />
            </div>
            <span>REGISTER FOR LAF 3.0</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* High-Contrast Info Bar (Event Date, Venue, Be A Part Of) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 sm:mt-11 w-full max-w-3xl bg-white/85 backdrop-blur-md rounded-2xl border border-white/80 shadow-[0_4px_25px_rgba(0,0,0,0.05)] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6"
        >
          {/* Date */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100/70 border border-orange-200/80 flex items-center justify-center text-[#EA580C] shrink-0 shadow-2xs">
              <CalendarDays className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A7B38] font-bold font-mono">
                EVENT DATE
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">
                15 — 17 Nov 2026
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-9 bg-neutral-300/70" />

          {/* Venue */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100/70 border border-orange-200/80 flex items-center justify-center text-[#EA580C] shrink-0 shadow-2xs">
              <MapPin className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A7B38] font-bold font-mono">
                VENUE
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">
                Lucknow, UP
              </div>
            </div>
          </div>

          <div className="hidden sm:block w-px h-9 bg-neutral-300/70" />

          {/* Theme */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100/70 border border-orange-200/80 flex items-center justify-center text-[#EA580C] shrink-0 shadow-2xs">
              <Sparkles className="w-5 h-5 text-[#EA580C]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9A7B38] font-bold font-mono">
                BE A PART OF
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-0.5">
                Design · Ideas · Impact
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

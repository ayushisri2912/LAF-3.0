import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronRight,
  Menu, 
  X, 
  Users, 
  Award, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Building2,
  Compass
} from 'lucide-react';

import laaLogo from '../assets/images/logo-left.webp';
import LAFLogo from '../assets/images/logo.jpeg';
import taskLogo from '../assets/images/logo-right.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Participate', href: '#participate' },
    {
      name: 'Team',
      href: '#team',
      dropdown: [
        { name: 'Core Committee', href: '#core-committee', desc: 'Organizing leadership', icon: Users },
        { name: 'Advisors & Mentors', href: '#advisors', desc: 'Veteran architects & mentors', icon: Award },
        { name: 'Student Volunteers', href: '#volunteers', desc: 'Future architects & team', icon: GraduationCap },
      ],
    },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* ================= 1. ARCHITECTURAL TOP BRANDING HEADER ================= */}
      <header className="w-full select-none font-sans">
        {/* ================= ARCHITECTURAL TOP RIBBON ================= */}
        <div className="bg-[#121214] text-neutral-300 border-b border-[#D4AF37]/25 text-[11px] sm:text-xs py-2 px-4 sm:px-8 relative overflow-hidden">
          {/* Subtle shimmer accent line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent pointer-events-none" />
          
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 relative z-10">
            
            {/* Left: Conclave status */}
            <div className="flex items-center gap-2.5 text-[#D4AF37]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="font-semibold tracking-widest uppercase text-[10.5px]">
                Lucknow Architecture Festival 3.0 • Edition 2026
              </span>
            </div>

            {/* Center: Cultural Theme Slogan */}
            <div className="hidden md:flex items-center gap-2 text-neutral-400 font-serif italic text-xs tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>"Heritage Archway to Modern Sustainable Urbanism"</span>
            </div>

            {/* Right: Venue & Date */}
            <div className="flex items-center gap-4 text-neutral-300 text-[11px]">
              <div className="flex items-center gap-1.5 text-neutral-300">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Oct 2026</span>
              </div>
              <span className="text-neutral-600">|</span>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Lucknow, UP</span>
              </div>
            </div>

          </div>
        </div>

        {/* ================= TOP BRANDING HEADER ================= */}
        <div className="bg-architect-grid bg-[#FAF7F2] relative border-b border-[#D4AF37]/20 py-2 md:py-2.5 shadow-sm overflow-hidden">
          
          {/* Background Architectural Watermark Arches */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.035] flex items-center justify-between px-10">
            <svg className="w-64 h-64 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
            <svg className="w-64 h-64 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
              <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            
            {/* Left: Lucknow Architects Association Card */}
            <div className="flex items-center justify-center md:justify-start flex-1 w-full md:w-auto">
              <div className="group relative bg-white/90 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto">
                {/* Corner Gold Accent Ticks */}
                <div className="absolute top-1 left-2 text-[8px] text-[#D4AF37]/60 font-mono">✦ LAA</div>
                
                <img
                  src={laaLogo}
                  alt="Lucknow Architects Association"
                  className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="hidden xl:flex flex-col border-l border-neutral-200 pl-3 py-0.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-800">
                    Lucknow Architects
                  </span>
                  <span className="text-[9px] tracking-widest text-[#B38F38] font-medium uppercase">
                    Association
                  </span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">Host Body</span>
                </div>
              </div>
            </div>

            {/* Center Vertical Divider Line (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center text-[#D4AF37]/40 px-2">
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              <span className="text-[8px] my-0.5 text-[#D4AF37]/70">❖</span>
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>

            {/* Center: LAF Main 3.0 Logo (Primary Festival Emblem) */}
            <div className="flex items-center justify-center flex-1 my-0.5 md:my-0 w-full md:w-auto">
              <div className="group relative bg-white/90 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto">
                {/* Corner Gold Accent Ticks */}
                <div className="absolute top-1 left-2 text-[8px] text-[#D4AF37]/60 font-mono">✦ LAF</div>
                
                <img
                  src={LAFLogo}
                  alt="Lucknow Architecture Festival 3.0"
                  className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Vertical Divider Line (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center text-[#D4AF37]/40 px-2">
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              <span className="text-[8px] my-0.5 text-[#D4AF37]/70">❖</span>
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>

            {/* Right: Partner / Task Logo Card */}
            <div className="flex items-center justify-center md:justify-end flex-1 w-full md:w-auto">
              <div className="group relative bg-white/90 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto">
                
                <div className="hidden xl:flex flex-col text-right border-r border-neutral-200 pr-3 py-0.5">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-neutral-800">
                    Task Marketing
                  </span>
                  <span className="text-[9px] tracking-widest text-[#B38F38] font-medium uppercase">
                    Solutions
                  </span>
                  <span className="text-[8px] text-neutral-400 mt-0.5">Event Partner</span>
                </div>

                <img
                  src={taskLogo}
                  alt="Task Marketing Solutions"
                  className="h-8 sm:h-10 md:h-11 lg:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Corner Gold Accent Ticks */}
                <div className="absolute top-1 right-2 text-[8px] text-[#D4AF37]/60 font-mono">TMS ✦</div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= 2. STICKY LUXURY DARK NAVBAR (DIRECT SIBLING OF HEADER FOR FULL-PAGE STICKY) ================= */}
      <nav className="sticky top-0 w-full bg-[#121214]/98 backdrop-blur-xl border-b border-[#D4AF37]/20 z-[100] select-none font-sans">
        {/* Multi-stop hairline gold gradient accent line */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 via-[#D4AF37] to-transparent opacity-90" />

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Mobile Brand Title */}
            <div className="md:hidden flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-neutral-200 font-bold">LAF 3.0 MENU</span>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-amber-400 bg-neutral-900 border border-neutral-800 hover:text-white hover:bg-neutral-800 focus:outline-none transition-all"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-2 lg:gap-4">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="relative group py-2 flex items-center"
                  onMouseEnter={() => {
                    if (item.dropdown) setIsTeamOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) setIsTeamOpen(false);
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setActiveTab(item.name)}
                    className={`relative text-[12.5px] lg:text-[13.5px] font-semibold uppercase tracking-[0.08em] transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 ${
                      activeTab === item.name
                        ? 'text-amber-400 bg-neutral-900/80 border border-amber-500/30'
                        : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-400 transition-transform duration-300 ${isTeamOpen ? 'rotate-180' : ''}`} />
                    )}

                    {/* Architectural Hover Underline Glow */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300 group-hover:w-3/4" />
                  </a>

                  {/* Enhanced Dropdown Menu with Framer Motion */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {isTeamOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72 z-[110]"
                        >
                          <div className="bg-[#111114]/95 border border-[#D4AF37]/20 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-2 backdrop-blur-2xl overflow-hidden relative group/card">
                            {/* Subtle top ambient hairline glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent pointer-events-none" />
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

                            {/* Minimal Header */}
                            <div className="px-3 pt-2 pb-2 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-[#D4AF37]/75 border-b border-white/5 mb-1.5">
                              <span className="flex items-center gap-1.5">
                                <span className="text-amber-400/80">✦</span> Team Directories
                              </span>
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80 animate-pulse" />
                            </div>

                            <div className="space-y-1">
                              {item.dropdown.map((subItem) => {
                                const IconComponent = subItem.icon;
                                return (
                                  <a
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.05] transition-all duration-200 border border-transparent hover:border-amber-500/20"
                                  >
                                    <div className="w-9 h-9 rounded-xl bg-neutral-900/90 border border-white/5 flex items-center justify-center text-amber-400/80 group-hover/item:text-amber-400 group-hover/item:border-amber-500/30 group-hover/item:bg-amber-500/10 group-hover/item:shadow-[0_0_12px_rgba(212,175,55,0.15)] transition-all duration-300 shrink-0">
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="text-[12.5px] font-medium text-neutral-200 group-hover/item:text-amber-300 transition-colors flex items-center justify-between">
                                        <span>{subItem.name}</span>
                                        <ChevronRight className="w-3.5 h-3.5 text-amber-400/60 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                      </div>
                                      <div className="text-[10.5px] text-neutral-400 group-hover/item:text-neutral-300 transition-colors truncate">
                                        {subItem.desc}
                                      </div>
                                    </div>
                                  </a>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Premium CTA Button */}
            <div className="hidden md:flex items-center pl-4">
              <a
                href="#registration"
                className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-300/60 overflow-hidden"
              >
                {/* Shimmer sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 fill-black text-black animate-pulse" />
                  <span>LAF REGISTRATION</span>
                </span>
              </a>
            </div>

          </div>
        </div>

        {/* ================= 4. MOBILE DRAWER MENU ================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#141416] border-t border-neutral-800 overflow-hidden"
            >
              <div className="px-5 pt-4 pb-6 space-y-3">
                
                {/* Mobile Info Ribbon */}
                <div className="p-3 rounded-xl bg-neutral-900/90 border border-amber-500/20 text-xs text-neutral-300 flex items-center justify-between">
                  <span className="text-[#D4AF37] font-semibold text-[11px] uppercase">Lucknow Oct 2026</span>
                  <span className="text-[10px] text-neutral-400">Architects Conclave</span>
                </div>

                {navLinks.map((item) => (
                  <div key={item.name} className="border-b border-neutral-800/60 pb-2">
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-amber-400 transition-colors"
                    >
                      {item.name}
                    </a>
                    
                    {item.dropdown && (
                      <div className="pl-3 mt-1.5 space-y-2 border-l border-amber-500/30 ml-1">
                        {item.dropdown.map((sub) => {
                          const SubIcon = sub.icon;
                          return (
                            <a
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-2 py-1 text-xs text-neutral-400 hover:text-amber-400 transition-colors"
                            >
                              <SubIcon className="w-3.5 h-3.5 text-amber-500" />
                              <span>{sub.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-2">
                  <a
                    href="#registration"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase font-bold tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-xl shadow-lg shadow-amber-500/20"
                  >
                    <Sparkles className="w-4 h-4 fill-black" />
                    <span>LAF Registration</span>
                  </a>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

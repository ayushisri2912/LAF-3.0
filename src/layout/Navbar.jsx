import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronDown, 
  ChevronRight, 
  Menu, 
  X, 
  Users, 
  Award, 
  GraduationCap, 
  Home
} from 'lucide-react';

import laaLogo from '../assets/images/LAA.webp';
import LAFLogo from '../assets/images/logo.webp';
import taskLogo from '../assets/images/logo-right.webp';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const teamMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (teamMenuRef.current && !teamMenuRef.current.contains(e.target)) {
        setIsTeamOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '/') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (location.hash) {
          window.history.pushState(null, '', '/');
        }
      }
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', href);
        } else {
          window.location.hash = href;
        }
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '/', isHome: true },
    { name: 'Highlights', href: '/highlights' },
    { name: 'Agenda', href: '#agenda' },
    { name: 'Participate', href: '/participate' },
    {
      name: 'Team',
      href: '#festival-team',
      dropdown: [
        { name: 'Core Committee', href: '/team/core-committee', desc: 'Organizing leadership & Curators', icon: Users },
        { name: 'Advisors & Mentors', href: '/team/advisors-mentors', desc: 'Veteran architects & mentors', icon: Award },
        { name: 'Student Volunteers', href: '/team/student-volunteers', desc: 'Future architects & team', icon: GraduationCap },
      ],
    },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Committees', href: '#committees' },
    { name: 'Location', href: '/location' },
  ];

  return (
    <>
      {/* ================= 1. ARCHITECTURAL TOP BRANDING HEADER ================= */}
      <header className="w-full select-none font-sans">
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
              <Link to="/" className="group relative bg-white/90 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto">
                <div className="absolute top-1 left-2 text-[8px] text-[#D4AF37]/60 font-mono">✦ LAA</div>
                <img
                  src={laaLogo}
                  alt="Lucknow Architects Association"
                  className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Center Vertical Divider Line (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center text-[#D4AF37]/40 px-2">
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
              <span className="text-[8px] my-0.5 text-[#D4AF37]/70">❖</span>
              <div className="w-[1px] h-5 bg-gradient-to-b from-transparent via-[#D4AF37]/40 to-transparent" />
            </div>

            {/* Center: LAF Main 3.0 Logo (Primary Festival Emblem) */}
            <div className="flex items-center justify-center flex-1 my-0.5 md:my-0 w-full md:w-auto">
              <Link to="/" className="group relative bg-white/90 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2.5 w-full sm:w-auto">
                <div className="absolute top-1 left-2 text-[8px] text-[#D4AF37]/60 font-mono">✦ LAF</div>
                <img
                  src={LAFLogo}
                  alt="Lucknow Architecture Festival 3.0"
                  className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
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
                <div className="absolute top-1 right-2 text-[8px] text-[#D4AF37]/60 font-mono">TMS ✦</div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* ================= 2. STICKY BRAND GRADIENT NAVBAR ================= */}
      <nav
        className={`sticky top-0 w-full z-[100] select-none font-sans transition-all duration-300 ${
          isScrolled
            ? 'pointer-events-none py-2 sm:py-2.5'
            : 'border-b border-white/10 shadow-md'
        }`}
        style={
          !isScrolled
            ? {
                background:
                  'linear-gradient(90deg, #FB7801 0%, #EC2656 20%, #D8066B 40%, #930777 65%, #4E0C7B 85%, #3C086E 100%)',
              }
            : undefined
        }
      >
        <div
          className={`max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 transition-all duration-300 ${
            isScrolled ? 'pointer-events-auto' : ''
          }`}
        >
          {/* Main Navbar Bar (No overflow-hidden so dropdown can extend below) */}
          <div
            className={`transition-all duration-300 relative ${
              isScrolled
                ? 'border border-white/20 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]'
                : ''
            }`}
            style={
              isScrolled
                ? {
                    background:
                      'linear-gradient(90deg, #FB7801 0%, #EC2656 20%, #D8066B 40%, #930777 65%, #4E0C7B 85%, #3C086E 100%)',
                  }
                : undefined
            }
          >
            {/* Top Sheen Line */}
            <div
              className={`h-[1px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80 ${
                isScrolled ? 'rounded-t-2xl' : ''
              }`}
            />

            {/* Left corner diagonal decorative accent stripe matching Image 1 (clipped inside its own container) */}
            <div
              className={`absolute top-0 left-0 w-8 h-full pointer-events-none overflow-hidden z-0 ${
                isScrolled ? 'rounded-l-2xl' : ''
              }`}
            >
              <div className="w-4 h-[160%] bg-gradient-to-b from-[#FDE047] via-[#F97316] to-[#DB2777] [transform:skewX(-26deg)] -ml-2 -mt-2 opacity-95 shadow-sm" />
            </div>

            <div className={`transition-all duration-300 relative z-10 ${isScrolled ? 'px-4 sm:px-6 lg:px-8' : ''}`}>
              <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14 sm:h-16' : 'h-16'}`}>

                {/* Mobile Brand Title */}
                <div className="md:hidden flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
                  <Link to="/" className="text-xs uppercase tracking-widest text-white font-bold">
                    LAF 3.0 MENU
                  </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-xl text-white bg-white/10 border border-white/20 hover:bg-white/20 focus:outline-none transition-all"
                  aria-label="Toggle Navigation"
                >
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center justify-center flex-1 gap-1.5 lg:gap-3">
                  {navLinks.map((item) => {
                    if (item.isHome) {
                      const isHomeActive = location.pathname === '/' && !location.hash;
                      return (
                        <React.Fragment key="Home">
                          <NavLink
                            to="/"
                            onClick={(e) => handleNavClick(e, '/')}
                            title="Home"
                            aria-label="Home"
                            className={`relative transition-all duration-200 p-2 rounded-full flex items-center justify-center cursor-pointer group ${
                              isHomeActive
                                ? 'text-[#FA7400] bg-white shadow-md'
                                : 'text-white bg-white/15 hover:bg-white/25 shadow-xs'
                            }`}
                          >
                            <Home className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                          </NavLink>

                          {/* Divider after Home */}
                          <div className="w-[1px] h-4 bg-white/30 mx-1" />
                        </React.Fragment>
                      );
                    }

                    const isRoute = !item.href.startsWith('#');
                    const isTeamActive = item.name === 'Team' && (location.pathname.startsWith('/team') || location.hash === '#festival-team');
                    const isHashActive = location.pathname === '/' && location.hash === item.href;

                    return (
                      <div
                        key={item.name}
                        ref={item.dropdown ? teamMenuRef : null}
                        className="relative group py-2 flex items-center"
                        onMouseEnter={() => {
                          if (item.dropdown) setIsTeamOpen(true);
                        }}
                        onMouseLeave={() => {
                          if (item.dropdown) setIsTeamOpen(false);
                        }}
                      >
                        {isRoute ? (
                          <NavLink
                            to={item.href}
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              if (item.dropdown) setIsTeamOpen(false);
                            }}
                            className={({ isActive }) =>
                              `relative text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                                isActive || isTeamActive
                                  ? 'text-[#55197D] bg-white shadow-sm'
                                  : 'text-white/95 hover:text-white hover:bg-white/15'
                              }`
                            }
                          >
                            <span>{item.name}</span>
                            {item.dropdown && (
                              <ChevronDown className={`w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-transform duration-300 ${isTeamOpen ? 'rotate-180' : ''}`} />
                            )}
                          </NavLink>
                        ) : (
                          <a
                            href={item.href}
                            onClick={(e) => {
                              if (item.dropdown) {
                                setIsTeamOpen((prev) => !prev);
                              }
                              handleNavClick(e, item.href);
                            }}
                            className={`relative text-[12px] lg:text-[13px] font-bold uppercase tracking-[0.06em] transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 cursor-pointer ${
                              isHashActive || isTeamActive
                                ? 'text-[#55197D] bg-white shadow-sm'
                                : 'text-white/95 hover:text-white hover:bg-white/15'
                            }`}
                          >
                            <span>{item.name}</span>
                            {item.dropdown && (
                              <ChevronDown className={`w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-transform duration-300 ${isTeamOpen ? 'rotate-180' : ''}`} />
                            )}
                          </a>
                        )}

                        {/* Dropdown Menu for Team Submenus */}
                        {item.dropdown && (
                          <AnimatePresence>
                            {isTeamOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 8, scale: 0.97 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 6, scale: 0.97 }}
                                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-72 z-[110]"
                              >
                                <div className="bg-[#2D0A4E]/98 border border-white/20 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.4)] p-2 backdrop-blur-2xl overflow-hidden relative group/card">
                                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                                  <div className="px-3 pt-2 pb-2 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] uppercase text-amber-300 border-b border-white/10 mb-1.5">
                                    <span className="flex items-center gap-1.5">
                                      <span className="text-amber-400">✦</span> Team Directories
                                    </span>
                                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                                  </div>

                                  <div className="space-y-1">
                                    {item.dropdown.map((subItem) => {
                                      const IconComponent = subItem.icon;
                                      return (
                                        <NavLink
                                          key={subItem.name}
                                          to={subItem.href}
                                          onClick={() => setIsTeamOpen(false)}
                                          className={({ isActive }) =>
                                            `group/item flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 border ${
                                              isActive
                                                ? 'bg-white/20 border-white/30 text-white font-semibold'
                                                : 'hover:bg-white/10 border-transparent hover:border-white/15 text-white/90'
                                            }`
                                          }
                                        >
                                          <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-amber-300 group-hover/item:text-amber-200 group-hover/item:border-white/20 group-hover/item:bg-white/15 transition-all duration-300 shrink-0">
                                            <IconComponent className="w-4 h-4" />
                                          </div>
                                          <div className="flex-1 min-w-0">
                                            <div className="text-[12.5px] font-medium text-white group-hover/item:text-amber-200 transition-colors flex items-center justify-between">
                                              <span>{subItem.name}</span>
                                              <ChevronRight className="w-3.5 h-3.5 text-amber-300 opacity-0 -translate-x-1.5 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                                            </div>
                                            <div className="text-[10.5px] text-white/60 group-hover/item:text-white/80 transition-colors truncate">
                                              {subItem.desc}
                                            </div>
                                          </div>
                                        </NavLink>
                                      );
                                    })}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Desktop Premium CTA Button */}
                <div className="hidden md:flex items-center pl-2">
                  {/* Divider before Registration button */}
                  <div className="w-[1px] h-4 bg-white/30 mr-3" />

                  <Link
                    to="/register"
                    className="group relative inline-flex items-center justify-center px-5 py-2 text-xs font-bold uppercase tracking-wider text-neutral-950 bg-gradient-to-r from-[#FFB800] via-[#FFAE00] to-[#FF9E00] rounded-full shadow-[0_2px_15px_rgba(255,184,0,0.35)] hover:shadow-[0_4px_25px_rgba(255,184,0,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-amber-200/50 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 fill-neutral-950 text-neutral-950" />
                      <span>REGISTRATION</span>
                    </span>
                  </Link>
                </div>

              </div>
            </div>

            {/* Mobile Drawer Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-[#350A5A] border-t border-white/10 overflow-hidden"
                >
                  <div className="px-5 pt-4 pb-6 space-y-3">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/15 text-xs text-white/90 flex items-center justify-between">
                      <span className="text-amber-300 font-semibold text-[11px] uppercase">Lucknow Oct 2026</span>
                      <span className="text-[10px] text-white/70">Architects Conclave</span>
                    </div>

                    {navLinks.map((item) => {
                      if (item.isHome) {
                        const isHomeActive = location.pathname === '/' && !location.hash;
                        return (
                          <div key="Home" className="border-b border-white/10 pb-2">
                            <NavLink
                              to="/"
                              onClick={(e) => handleNavClick(e, '/')}
                              className={`flex items-center gap-2 py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                isHomeActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                              }`}
                            >
                              <Home className="w-4 h-4 text-amber-300" />
                              <span>Home</span>
                            </NavLink>
                          </div>
                        );
                      }

                      const isRoute = !item.href.startsWith('#');
                      const isTeamActive = item.name === 'Team' && (location.pathname.startsWith('/team') || location.hash === '#festival-team');
                      const isHashActive = location.pathname === '/' && location.hash === item.href;

                      return (
                        <div key={item.name} className="border-b border-white/10 pb-2">
                          {isRoute ? (
                            <NavLink
                              to={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={({ isActive }) =>
                                `block py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                  isActive || isTeamActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                                }`
                              }
                            >
                              {item.name}
                            </NavLink>
                          ) : (
                            <a
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className={`block py-1.5 text-sm font-semibold uppercase tracking-wider transition-colors ${
                                isHashActive || isTeamActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
                              }`}
                            >
                              {item.name}
                            </a>
                          )}
                          
                          {item.dropdown && (
                            <div className="pl-3 mt-1.5 space-y-2 border-l border-white/20 ml-1">
                              {item.dropdown.map((sub) => {
                                const SubIcon = sub.icon;
                                return (
                                  <NavLink
                                    key={sub.name}
                                    to={sub.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) =>
                                      `flex items-center gap-2 py-1 text-xs transition-colors ${
                                        isActive ? 'text-amber-300 font-semibold' : 'text-white/70 hover:text-amber-300'
                                      }`
                                    }
                                  >
                                    <SubIcon className="w-3.5 h-3.5 text-amber-300" />
                                    <span>{sub.name}</span>
                                  </NavLink>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}

                    <div className="pt-2">
                      <Link
                        to="/register"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase font-bold tracking-wider text-neutral-950 bg-gradient-to-r from-[#FFB800] via-[#FFAE00] to-[#FF9E00] rounded-xl shadow-lg"
                      >
                        <Sparkles className="w-4 h-4 fill-neutral-950 text-neutral-950" />
                        <span>LAF Registration</span>
                      </Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

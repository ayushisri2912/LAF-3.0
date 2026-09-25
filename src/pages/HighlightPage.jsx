import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  UsersRound,
  Newspaper,
  MessageSquareText,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
  Building2,
  Palette,
  Boxes,
  Leaf,
  Cpu,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Landmark,
  Store,
  Handshake,
  Presentation,
  WalletCards,
  MousePointerClick,
  Gift,
  ChevronRight,
  ArrowLeft,
  Search,
  Filter,
  X,
  CheckCircle2,
  Calendar,
  MapPin,
  Layers,
  Award,
  Sparkle,
  ArrowRight,
  SlidersHorizontal
} from "lucide-react";

// Images from assets
import highlightImage from "../assets/images/image-6.jpg";
import marketersImg from "../assets/images/01_marketers_platform.png";
import architectsMeetImg from "../assets/images/02_architects_meet.png";
import highlightMainImg from "../assets/images/heighlight.jpeg";
import highlight2Img from "../assets/images/heighlight-2.jpeg";

const HighlightPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeRoleTab, setActiveRoleTab] = useState("architects");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // 1. Core 6 Experiences Data
  const experiences = [
    {
      id: "exp-1",
      icon: Megaphone,
      title: "Brand Reach",
      text: "A premier platform for leading architectural & building material brands to connect directly with key decision-makers and target audience across North India.",
      details: "Gain unparalleled visibility with high-impact product showcases, brand placement, and targeted promotional campaigns reaching top architectural firms and developers.",
      color: "#F97316",
      tag: "Visibility & Marketing",
      stats: "50,000+ Audience Footprint"
    },
    {
      id: "exp-2",
      icon: UsersRound,
      title: "Targeted Engagement",
      text: "Interactive engagement activities meticulously designed around the target group, fostering active participation, discussions, and networking.",
      details: "Includes curated roundtables, interactive product trials, live demonstrations, and structured B2B networking sessions.",
      color: "#8B5CF6",
      tag: "Networking & B2B",
      stats: "500+ B2B Meetings"
    },
    {
      id: "exp-3",
      icon: Newspaper,
      title: "Media Amplification",
      text: "Wide-ranging pre-promotional, digital print, and mainstream media opportunities for national and regional coverage.",
      details: "Pre-event press releases, social media spotlights, live stream coverage, and print features across major architectural publications.",
      color: "#3B82F6",
      tag: "PR & Broadcast",
      stats: "25+ Media Partners"
    },
    {
      id: "exp-4",
      icon: MessageSquareText,
      title: "Seminars & Workshops",
      text: "Architects, urban planners, industry experts, and academics meet to exchange cutting-edge ideas, research, and design solutions.",
      details: "Keynote speeches, panel discussions on sustainable urbanism, workshops on smart building tech, and student design forums.",
      color: "#10B981",
      tag: "Knowledge & Innovation",
      stats: "20+ Expert Keynotes"
    },
    {
      id: "exp-5",
      icon: BriefcaseBusiness,
      title: "Financing Facilities",
      text: "Exclusive opportunities for on-spot financing solutions, institutional loans, and direct financial interaction for development projects.",
      details: "Financial partners providing instant loan consultations, project funding advisory, and business banking solutions for firms.",
      color: "#EAB308",
      tag: "Banking & Investment",
      stats: "Instant Financial Desk"
    },
    {
      id: "exp-6",
      icon: Sparkles,
      title: "Art & Culture",
      text: "Vibrant display of art, local culture, heritage, and creative expression celebrating Awadh's rich architectural ethos.",
      details: "Live art installations, heritage photo exhibits, cultural evening performances, and craft artisan showcases.",
      color: "#EC4899",
      tag: "Heritage & Craft",
      stats: "Cultural Evening Gala"
    },
  ];

  // 2. 14 Focus Sectors Data
  const sectors = [
    { id: "sec-1", name: "ART", icon: Palette, category: "Design & Culture", desc: "Sculptures, murals, canvas works & spatial installation art." },
    { id: "sec-2", name: "ARCHITECTURE", icon: Building2, category: "Core Design", desc: "Residential, commercial, urban design & master planning solutions." },
    { id: "sec-3", name: "INTERIORS", icon: Sparkles, category: "Design & Culture", desc: "Luxury interior designs, bespoke furniture & lighting aesthetics." },
    { id: "sec-4", name: "CONSTRUCTION", icon: Wrench, category: "Materials & Engineering", desc: "Advanced engineering systems, structural solutions & safety." },
    { id: "sec-5", name: "BUILDING MATERIALS", icon: Boxes, category: "Materials & Engineering", desc: "Premium stone, glass, ceramics, timber, metals & finishes." },
    { id: "sec-6", name: "GREEN TECH", icon: Leaf, category: "Sustainability & Tech", desc: "Renewable energy integrations, eco-facades & net-zero solutions." },
    { id: "sec-7", name: "NEW TECHNOLOGIES", icon: Cpu, category: "Sustainability & Tech", desc: "BIM, AI in design, 3D printing, parametric tools & VR walkthroughs." },
    { id: "sec-8", name: "BUILDING EQUIPMENTS", icon: Wrench, category: "Materials & Engineering", desc: "Heavy machinery, HVAC systems, elevators & automated tools." },
    { id: "sec-9", name: "BUILDING TECHNIQUES", icon: Building2, category: "Materials & Engineering", desc: "Prefabrication, modular construction & earthquake resistance." },
    { id: "sec-10", name: "SUSTAINABILITY", icon: Leaf, category: "Sustainability & Tech", desc: "Carbon-neutral materials, rainwater harvesting & waste management." },
    { id: "sec-11", name: "SMART BUILDING", icon: ShieldCheck, category: "Sustainability & Tech", desc: "Home automation, IoT sensors, smart security & energy grids." },
    { id: "sec-12", name: "REAL ESTATE", icon: Landmark, category: "Industry & Governance", desc: "Residential townships, commercial hubs & township planning." },
    { id: "sec-13", name: "ACADEMICS", icon: GraduationCap, category: "Industry & Governance", desc: "Architectural research, university thesis displays & student competitions." },
    { id: "sec-14", name: "GOVERNMENT SCHEMES & DEPARTMENTS", icon: Landmark, category: "Industry & Governance", desc: "State urban policies, SCR U.P. vision, heritage conservation & smart cities." },
  ];

  // 3. 8 Key Highlights Data
  const keyHighlights = [
    {
      number: "01",
      icon: Store,
      title: "MARKETERS PLATFORM",
      text: "A dedicated platform for manufacturers, marketers, and suppliers to exhibit their newest products and services directly to practicing architects and developers.",
      fullDesc: "Provides brand booths, live product testing zones, launch events, and direct catalog distribution to top decision makers in North India.",
      image: marketersImg,
      badge: "EXHIBITION & STALLS"
    },
    {
      number: "02",
      icon: Handshake,
      title: "ARCHITECTS MEET",
      text: "Architects meet, seminars, and collaborative workshops for high-level professional exchange, networking, and peer-to-peer inspiration.",
      fullDesc: "Brings together senior architects, emerging talent, and council members for structured discussions on regional building codes and design ethos.",
      image: architectsMeetImg,
      badge: "CONCLAVE & SYMPOSIUM"
    },
    {
      number: "03",
      icon: Presentation,
      title: "EXPERTS INTERFACE",
      text: "Direct interface with industry stalwarts, offering knowledge-sharing sessions, masterclasses, and interactive Q&A workshops.",
      fullDesc: "Renowned structural engineers, facade consultants, acoustic experts, and landscape architects lead specialized technical masterclasses.",
      image: highlightMainImg,
      badge: "MASTERCLASSES"
    },
    {
      number: "04",
      icon: WalletCards,
      title: "FINANCING FACILITY",
      text: "On-spot loan appraisal, project funding assistance, and specialized financing facilities for relevant participants and real estate developments.",
      fullDesc: "Leading public & private banking institutions set up instant consultation desks for construction finance, home loans, and MSME credit lines.",
      image: highlight2Img,
      badge: "ON-SPOT APPRAISAL"
    },
    {
      number: "05",
      icon: MousePointerClick,
      title: "BRAND REACH",
      text: "Maximization of brand visibility across print, digital, event branding, and direct targeted exposure to over 10,000+ conclave attendees.",
      fullDesc: "Includes high-visibility logo placements, sponsored session slots, VIP networking lounge access, and newsletter features.",
      image: null,
      badge: "PROMOTIONAL VALUE"
    },
    {
      number: "06",
      icon: Gift,
      title: "ENGAGEMENT ACTIVITIES",
      text: "Interactive audience engagements including live architectural competitions, lucky draws, product trials, and award ceremonies.",
      fullDesc: "Special visitor contests, architectural quizzes, instant giveaway prizes, and hands-on material testing challenges.",
      image: null,
      badge: "INTERACTIVE GAMIFICATION"
    },
    {
      number: "07",
      icon: Palette,
      title: "ART & CULTURE GALAS",
      text: "Vibrant showcase of art installations, cultural heritage of Uttar Pradesh, traditional music, and architectural photography exhibits.",
      fullDesc: "A gala night featuring local Awadhi art forms, live acoustic music, craft pavilions, and awards honoring design excellence.",
      image: null,
      badge: "CULTURAL EVENINGS"
    },
    {
      number: "08",
      icon: Newspaper,
      title: "MEDIA AMPLIFICATION",
      text: "Extensive pre-promotional tools, press conferences, media coverage, and live stream broadcasts across regional and national platforms.",
      fullDesc: "Media partners publish exclusive event coverage, architect interviews, product spotlight videos, and press syndications.",
      image: null,
      badge: "NATIONWIDE MEDIA"
    },
  ];

  // Role Perspective Data
  const rolePerspectives = {
    architects: {
      title: "For Architects & Interior Designers",
      subtitle: "Discover New Material Technologies & Network with Industry Legends",
      points: [
        "Earn continuing education insights and discover international design trends.",
        "Interact directly with 50+ leading building material brands & manufacturers.",
        "Participate in symposia focusing on Sustainable Urban Development & SCR - U.P.",
        "Present your portfolio and build collaborations with regional developers."
      ],
      cta: "Register as Architect Delegate",
      ctaLink: "/participate"
    },
    brands: {
      title: "For Brands, Manufacturers & Suppliers",
      subtitle: "Unmatched Platform for Product Launch & Direct Business Generation",
      points: [
        "Showcase your latest product lines to over 1,000+ practicing architects & specifiers.",
        "Conduct live demonstrations and get instant feedback from industry leaders.",
        "Gain extensive media amplification across North India's architectural network.",
        "Secure high-value B2B inquiries and on-spot purchase orders."
      ],
      cta: "Book a Brand Stall / Partner",
      ctaLink: "/participate"
    },
    students: {
      title: "For Academics & Architecture Students",
      subtitle: "Learn from Global Visionaries & Display Your Thesis Concepts",
      points: [
        "Attend expert keynotes and technical masterclasses by veteran architects.",
        "Explore student thesis displays and get mentored by core committee members.",
        "Participate in live design competitions with exciting prizes and recognition.",
        "Network with top design studios for internships and career opportunities."
      ],
      cta: "Join Student Volunteers",
      ctaLink: "/team/student-volunteers"
    },
    realestate: {
      title: "For Developers & Government Authorities",
      subtitle: "Drive Sustainable Urban Growth & Form Strategic Alliances",
      points: [
        "Explore innovative green tech, smart building automation, and cost-effective materials.",
        "Engage with government departments driving the State Capital Region (SCR) vision.",
        "Access on-spot financing facilities and project funding advisory.",
        "Form strategic consortiums for mega residential & commercial projects."
      ],
      cta: "Explore Conclave Agenda",
      ctaLink: "/#agenda"
    }
  };

  // Filtered lists based on search or tabs
  const filteredSectors = sectors.filter((sec) => {
    const matchesSearch =
      sec.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const filteredHighlights = keyHighlights.filter((hl) => {
    const matchesSearch =
      hl.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hl.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hl.badge.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* =========================================================
          1. HERO HEADER WITH ARCHITECTURAL LUXURY DESIGN
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#121214] text-white pt-10 pb-20 border-b border-[#D4AF37]/30">
        
        {/* Background Decorative Architecture Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,175,55,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-400 mb-8">
            <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-amber-400 font-bold">Highlights</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-mono tracking-[0.2em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>North India's Largest Architecture Conclave</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-white">
                Festival <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-500">Highlights</span> &amp; Focus Sectors
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore the core experiences, key highlights, and 14 focus sectors driving the Lucknow Architecture Festival 3.0. A curated symposium connecting design visionaries, industry leaders, brands, and government think tanks.
              </p>

              {/* Quick Stat Pill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">03 Days</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">22 - 24 Jan 2027</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">14 Sectors</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Focus Ecosystem</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">08 Key</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Highlights</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">06 Core</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Experiences</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#registration"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/participate");
                  }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 fill-black" />
                  <span>Register For LAF 3.0</span>
                </a>
                <a
                  href="#overview"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <span>Explore All Highlights</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>

            </div>

            {/* Right Hero Visual Feature Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none overflow-hidden rounded-3xl bg-neutral-900 border border-[#D4AF37]/40 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Gold Arch Border Framing */}
                <div className="relative h-[320px] sm:h-[380px] rounded-2xl overflow-hidden group">
                  <img
                    src={highlightImage}
                    alt="Lucknow Architecture Conclave"
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  
                  {/* Overlay Tag */}
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-[10px] uppercase font-mono tracking-widest text-amber-400 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
                    <span>Lucknow Architecture Festival</span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-mono">3 Days of Extravaganza</span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">Architecture • Culture • Business</h3>
                    <p className="text-xs text-neutral-300 line-clamp-2">
                      A symposium of emerging architects, think tank for sustainable urban development, and vision for SCR U.P.
                    </p>
                  </div>
                </div>

                {/* Bottom Architectural Details Strip */}
                <div className="mt-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs text-neutral-300">
                  <span className="flex items-center gap-1.5 text-amber-400 font-mono text-[11px]">
                    <MapPin className="w-3.5 h-3.5" />
                    Lucknow, Uttar Pradesh
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">January 2027</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          2. STICKY FILTER & SEARCH NAVIGATION BAR
      ========================================================= */}
      <div id="overview" className="sticky top-16 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E6DFD3] shadow-sm py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {[
              { id: "all", label: "✨ Overview", icon: Layers },
              { id: "experiences", label: "🎯 6 Experiences", icon: Megaphone },
              { id: "sectors", label: "📐 14 Focus Sectors", icon: Building2 },
              { id: "highlights", label: "🔑 8 Key Highlights", icon: Award },
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#121214] text-amber-400 shadow-md border border-amber-500/30"
                      : "bg-[#F0EADF] text-neutral-700 hover:bg-[#E6DFD3] hover:text-black"
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-neutral-500"}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search sectors, experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 rounded-full bg-[#F5F0E6] border border-[#E6DFD3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 space-y-20">
        
        {/* =========================================================
            3. SECTION: 6 CORE EXPERIENCES
        ========================================================= */}
        {(activeTab === "all" || activeTab === "experiences") && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6DFD3] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B77A27] uppercase tracking-widest mb-1">
                  <span>01</span>
                  <span className="w-8 h-[1px] bg-[#B77A27]" />
                  <span>The Festival Program</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-neutral-900">
                  06 Core <span className="text-[#B77A27]">Experiences</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                Connecting ideas, people, and commercial opportunities through specialized events, seminars, workshops, and exhibitions.
              </p>
            </div>

            {/* Experiences Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp, idx) => {
                const IconComponent = exp.icon;
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    onClick={() => setSelectedItem({ type: "experience", data: exp })}
                    className="group cursor-pointer bg-white rounded-3xl p-6 border border-[#E6DFD3] hover:border-[#D4AF37] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
                  >
                    
                    {/* Top Glow on Hover */}
                    <div
                      className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                      style={{ backgroundColor: exp.color }}
                    />

                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${exp.color}15`,
                            borderColor: `${exp.color}40`,
                            color: exp.color,
                          }}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-600 border border-neutral-200">
                          {exp.tag}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl text-neutral-900 font-medium group-hover:text-[#B77A27] transition-colors mb-2">
                        {exp.title}
                      </h3>

                      <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                        {exp.text}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                        {exp.stats}
                      </span>
                      <span className="text-[#B77A27] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </motion.section>
        )}

        {/* =========================================================
            4. SECTION: 14 FOCUS SECTORS
        ========================================================= */}
        {(activeTab === "all" || activeTab === "sectors") && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-4"
          >
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6DFD3] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B77A27] uppercase tracking-widest mb-1">
                  <span>02</span>
                  <span className="w-8 h-[1px] bg-[#B77A27]" />
                  <span>Comprehensive Ecosystem</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-neutral-900">
                  14 Focus <span className="text-[#B77A27]">Sectors</span>
                </h2>
              </div>
              <div className="text-right flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                  Showing {filteredSectors.length} of 14 Sectors
                </span>
              </div>
            </div>

            {/* Grid of 14 Sectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredSectors.map((sector, index) => {
                const SectorIcon = sector.icon;
                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    onClick={() => setSelectedItem({ type: "sector", data: sector })}
                    className="group bg-white rounded-2xl p-5 border border-[#E6DFD3] hover:border-amber-500/60 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-gradient-to-b from-amber-400 to-[#B77A27] transition-all duration-300" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6DFD3] group-hover:border-amber-500 group-hover:bg-amber-500/10 flex items-center justify-center text-[#B77A27] transition-all">
                          <SectorIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-neutral-400 group-hover:text-amber-600 transition-colors">
                          SEC-{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3 className="font-bold text-xs sm:text-sm tracking-wider uppercase text-neutral-900 group-hover:text-[#B77A27] transition-colors mb-1.5">
                        {sector.name}
                      </h3>

                      <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                        {sector.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span>{sector.category}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.section>
        )}

        {/* =========================================================
            5. SECTION: 8 KEY HIGHLIGHTS
        ========================================================= */}
        {(activeTab === "all" || activeTab === "highlights") && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 pt-4"
          >
            
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E6DFD3] pb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#B77A27] uppercase tracking-widest mb-1">
                  <span>03</span>
                  <span className="w-8 h-[1px] bg-[#B77A27]" />
                  <span>Curated Conclave Features</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-neutral-900">
                  08 Key <span className="text-[#B77A27]">Highlights</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 max-w-md">
                From Marketers Platforms &amp; Architects Meets to Financial Desks and Art Galas.
              </p>
            </div>

            {/* Grid of 8 Key Highlights */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredHighlights.map((hl, idx) => {
                const HlIcon = hl.icon;
                return (
                  <motion.div
                    key={hl.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    onClick={() => setSelectedItem({ type: "highlight", data: hl })}
                    className="group bg-white rounded-3xl border border-[#E6DFD3] hover:border-amber-500 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Optional Image Banner */}
                      {hl.image ? (
                        <div className="relative h-40 overflow-hidden bg-neutral-900">
                          <img
                            src={hl.image}
                            alt={hl.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-amber-400 border border-amber-500/30">
                            {hl.badge}
                          </span>
                          <span className="absolute bottom-3 right-3 font-serif text-4xl text-white/20 font-bold">
                            {hl.number}
                          </span>
                        </div>
                      ) : (
                        <div className="relative p-6 pb-0 flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-[9px] font-mono text-amber-700 font-bold border border-amber-500/20">
                            {hl.badge}
                          </span>
                          <span className="font-serif text-4xl text-[#B77A27]/20 font-bold">
                            {hl.number}
                          </span>
                        </div>
                      )}

                      <div className="p-6">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E6DFD3] group-hover:bg-[#B77A27] group-hover:text-white flex items-center justify-center text-[#B77A27] transition-colors mb-4">
                          <HlIcon className="w-5 h-5" />
                        </div>

                        <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-neutral-900 group-hover:text-[#B77A27] transition-colors mb-2">
                          {hl.title}
                        </h3>

                        <p className="text-xs text-neutral-600 leading-relaxed">
                          {hl.text}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t border-neutral-100 bg-[#FAF7F2] flex items-center justify-between text-xs font-semibold text-[#B77A27]">
                      <span>View Full Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </motion.section>
        )}

        {/* =========================================================
            6. INTERACTIVE ROLE PERSPECTIVE (WHY ATTEND?)
        ========================================================= */}
        <section className="bg-[#121214] text-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Value Proposition</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Why Attend <span className="text-amber-400">LAF 3.0 Highlights?</span>
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-xl">
                Select your persona to discover how LAF 3.0 highlights add direct value to your career, business, or organization.
              </p>
            </div>

            {/* Persona Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
              {[
                { id: "architects", label: "Architects & Designers" },
                { id: "brands", label: "Brands & Manufacturers" },
                { id: "students", label: "Academics & Students" },
                { id: "realestate", label: "Developers & Government" },
              ].map((role) => (
                <button
                  key={role.id}
                  onClick={() => setActiveRoleTab(role.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeRoleTab === role.id
                      ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                      : "bg-white/5 text-neutral-300 hover:bg-white/10"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            {rolePerspectives[activeRoleTab] && (
              <motion.div
                key={activeRoleTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-8 space-y-4">
                  <h3 className="font-serif text-2xl text-amber-300 font-medium">
                    {rolePerspectives[activeRoleTab].title}
                  </h3>
                  <p className="text-sm text-neutral-300 font-medium">
                    {rolePerspectives[activeRoleTab].subtitle}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    {rolePerspectives[activeRoleTab].points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-neutral-300 leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center md:items-end justify-center p-6 bg-white/[0.04] border border-white/10 rounded-2xl text-center md:text-right space-y-4">
                  <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                    Ready to participate?
                  </span>
                  <Link
                    to={rolePerspectives[activeRoleTab].ctaLink}
                    className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-all text-center"
                  >
                    {rolePerspectives[activeRoleTab].cta}
                  </Link>
                </div>
              </motion.div>
            )}

          </div>
        </section>

      </main>

      {/* =========================================================
          7. MODAL DETAILED OVERLAY FOR SELECTED ITEMS
      ========================================================= */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#D4AF37] shadow-2xl relative overflow-hidden"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Content */}
              {selectedItem.type === "experience" && (
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${selectedItem.data.color}20`, color: selectedItem.data.color }}
                    >
                      {React.createElement(selectedItem.data.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-amber-600 uppercase tracking-widest font-bold">
                        {selectedItem.data.tag}
                      </span>
                      <h3 className="font-serif text-2xl text-neutral-900 font-medium">
                        {selectedItem.data.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedItem.data.text}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD3] space-y-2">
                    <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">Scope &amp; Impact</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {selectedItem.data.details}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-amber-600 font-bold">
                      ✦ {selectedItem.data.stats}
                    </span>
                    <Link
                      to="/participate"
                      onClick={() => setSelectedItem(null)}
                      className="px-5 py-2.5 rounded-full bg-[#121214] text-amber-400 font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Participate Now
                    </Link>
                  </div>
                </div>
              )}

              {selectedItem.type === "sector" && (
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center">
                      {React.createElement(selectedItem.data.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                        {selectedItem.data.category}
                      </span>
                      <h3 className="font-serif text-2xl text-neutral-900 font-medium uppercase tracking-wider">
                        {selectedItem.data.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedItem.data.desc}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E6DFD3]">
                    <h4 className="text-xs font-bold text-neutral-800 uppercase tracking-wider mb-1">Participation Benefits</h4>
                    <p className="text-xs text-neutral-600">
                      Exhibitors and professionals in {selectedItem.data.name} get dedicated booth space, category listing in the official LAF catalog, and targeted B2B matches.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-mono text-neutral-500">
                      LAF 3.0 Focus Area
                    </span>
                    <Link
                      to="/participate"
                      onClick={() => setSelectedItem(null)}
                      className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-black font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105"
                    >
                      Inquire Stall
                    </Link>
                  </div>
                </div>
              )}

              {selectedItem.type === "highlight" && (
                <div className="space-y-5">
                  {selectedItem.data.image && (
                    <img
                      src={selectedItem.data.image}
                      alt={selectedItem.data.title}
                      className="w-full h-44 object-cover rounded-2xl"
                    />
                  )}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 text-[10px] font-mono font-bold uppercase">
                      {selectedItem.data.badge}
                    </span>
                    <span className="font-serif text-2xl font-bold text-neutral-300">
                      #{selectedItem.data.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-neutral-900 font-medium uppercase tracking-wider">
                    {selectedItem.data.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {selectedItem.data.fullDesc || selectedItem.data.text}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <span className="text-xs font-mono text-neutral-400">
                      LAF 3.0 Feature
                    </span>
                    <Link
                      to="/participate"
                      onClick={() => setSelectedItem(null)}
                      className="px-5 py-2.5 rounded-full bg-neutral-900 text-amber-400 font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Explore Opportunities
                    </Link>
                  </div>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default HighlightPage;

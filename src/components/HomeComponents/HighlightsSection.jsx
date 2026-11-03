import React from "react";
import { motion } from "framer-motion";
import highlightImg from "../../assets/images/highlight-img.png";
import bgHist from "../../assets/images/bg-hist.png";

import secArt from "../../assets/images/sectors/sec-art.png";
import secArchitecture from "../../assets/images/sectors/sec-architecture.png";
import secInteriors from "../../assets/images/sectors/sec-interiors.png";
import secConstruction from "../../assets/images/sectors/sec-construction.png";
import secMaterials from "../../assets/images/sectors/sec-materials.png";
import secGreentech from "../../assets/images/sectors/sec-greentech.png";
import secTech from "../../assets/images/sectors/sec-tech.png";
import secEquipments from "../../assets/images/sectors/sec-equipments.png";
import secTechniques from "../../assets/images/sectors/sec-techniques.png";
import secSustainability from "../../assets/images/sectors/sec-sustainability.png";
import secSmartbuilding from "../../assets/images/sectors/sec-smartbuilding.png";
import secRealestate from "../../assets/images/sectors/sec-realestate.png";
import secAcademics from "../../assets/images/sectors/sec-academics.png";
import secGovernment from "../../assets/images/sectors/sec-government.png";
import khArchitects from "../../assets/images/key_highlights/kh-architects.png";
import khMarketers from "../../assets/images/key_highlights/kh-marketers.png";
import khEngagement from "../../assets/images/key_highlights/kh-engagement.png";
import khBrand from "../../assets/images/key_highlights/kh-brand.png";
import khFinancing from "../../assets/images/key_highlights/kh-financing.png";
import khExperts from "../../assets/images/key_highlights/kh-experts.png";
import khArt from "../../assets/images/key_highlights/kh-art.png";
import khMedia from "../../assets/images/key_highlights/kh-media.png";
import khSkyline from "../../assets/images/key_highlights/kh-skyline.png";

import {
  Megaphone,
  UsersRound,
  MonitorPlay,
  Presentation,
  Coins,
  Palette,
  Newspaper,
  MessageSquareText,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
  Building2,
  Boxes,
  Leaf,
  Cpu,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Landmark,
  Store,
  Handshake,
  WalletCards,
  MousePointerClick,
  Gift,
  Armchair,
  HardHat,
  Settings,
  Layers,
  Sprout,
  HouseWifi,
} from "lucide-react";

const HighlightsSection = () => {
  const experiences = [
    {
      icon: Megaphone,
      title: "BRAND REACH",
      text: "A platform for brands to reach their target audience.",
      borderColor: "border-[#FED7AA]",
      iconBg: "bg-[#FFEDD5]",
      iconColor: "text-[#EA580C]",
      barColor: "bg-[#EA580C]",
    },
    {
      icon: UsersRound,
      title: "ENGAGEMENT ACTIVITIES",
      text: "Engagement activities designed around the target group.",
      borderColor: "border-[#E9D5FF]",
      iconBg: "bg-[#F3E8FF]",
      iconColor: "text-[#8B5CF6]",
      barColor: "bg-[#8B5CF6]",
    },
    {
      icon: MonitorPlay,
      title: "MEDIA AMPLIFICATION",
      text: "Wide-ranging pre-promotional and media opportunities.",
      borderColor: "border-[#BAE6FD]",
      iconBg: "bg-[#E0F2FE]",
      iconColor: "text-[#0284C7]",
      barColor: "bg-[#0284C7]",
    },
    {
      icon: Presentation,
      title: "SEMINARS & WORKSHOPS",
      text: "Architects, experts and professionals meet to exchange ideas.",
      borderColor: "border-[#BBF7D0]",
      iconBg: "bg-[#DCFCE7]",
      iconColor: "text-[#10B981]",
      barColor: "bg-[#10B981]",
    },
    {
      icon: Coins,
      title: "FINANCING FACILITIES",
      text: "Opportunities for on-spot financing and financial interaction.",
      borderColor: "border-[#FEF08A]",
      iconBg: "bg-[#FEF9C3]",
      iconColor: "text-[#EAB308]",
      barColor: "bg-[#EAB308]",
    },
    {
      icon: Palette,
      title: "ART & CULTURE",
      text: "Display of art, culture, heritage and creative expression.",
      borderColor: "border-[#FBCFE8]",
      iconBg: "bg-[#FCE7F3]",
      iconColor: "text-[#EC4899]",
      barColor: "bg-[#EC4899]",
    },
  ];

  const sectors = [
    {
      name: "ART",
      icon: Palette,
      iconColor: "text-[#EA580C]",
      iconBg: "bg-[#FFEDD5]",
      borderColor: "border-[#FED7AA]",
      cardBg: "bg-[#FFF7ED]/70",
      image: secArt,
    },
    {
      name: "ARCHITECTURE",
      icon: Building2,
      iconColor: "text-[#8B5CF6]",
      iconBg: "bg-[#F3E8FF]",
      borderColor: "border-[#DDD6FE]",
      cardBg: "bg-[#FAF5FF]/70",
      image: secArchitecture,
    },
    {
      name: "INTERIORS",
      icon: Armchair,
      iconColor: "text-[#D97706]",
      iconBg: "bg-[#FEF3C7]",
      borderColor: "border-[#FDE68A]",
      cardBg: "bg-[#FFFBEB]/70",
      image: secInteriors,
    },
    {
      name: "CONSTRUCTION",
      icon: HardHat,
      iconColor: "text-[#2563EB]",
      iconBg: "bg-[#DBEAFE]",
      borderColor: "border-[#BFDBFE]",
      cardBg: "bg-[#EFF6FF]/70",
      image: secConstruction,
    },
    {
      name: "BUILDING MATERIALS",
      icon: Boxes,
      iconColor: "text-[#EA580C]",
      iconBg: "bg-[#FFEDD5]",
      borderColor: "border-[#FED7AA]",
      cardBg: "bg-[#FFF7ED]/70",
      image: secMaterials,
    },
    {
      name: "GREEN TECH",
      icon: Leaf,
      iconColor: "text-[#16A34A]",
      iconBg: "bg-[#DCFCE7]",
      borderColor: "border-[#BBF7D0]",
      cardBg: "bg-[#F0FDF4]/70",
      image: secGreentech,
    },
    {
      name: "NEW TECHNOLOGIES",
      icon: Cpu,
      iconColor: "text-[#9333EA]",
      iconBg: "bg-[#F3E8FF]",
      borderColor: "border-[#E9D5FF]",
      cardBg: "bg-[#FAF5FF]/70",
      image: secTech,
    },
    {
      name: "BUILDING EQUIPMENTS",
      icon: Settings,
      iconColor: "text-[#0284C7]",
      iconBg: "bg-[#E0F2FE]",
      borderColor: "border-[#BAE6FD]",
      cardBg: "bg-[#F0F9FF]/70",
      image: secEquipments,
    },
    {
      name: "BUILDING TECHNIQUES",
      icon: Layers,
      iconColor: "text-[#E11D48]",
      iconBg: "bg-[#FFE4E6]",
      borderColor: "border-[#FECDD3]",
      cardBg: "bg-[#FFF1F2]/70",
      image: secTechniques,
    },
    {
      name: "SUSTAINABILITY",
      icon: Sprout,
      iconColor: "text-[#059669]",
      iconBg: "bg-[#D1FAE5]",
      borderColor: "border-[#A7F3D0]",
      cardBg: "bg-[#ECFDF5]/70",
      image: secSustainability,
    },
    {
      name: "SMART BUILDING",
      icon: HouseWifi,
      iconColor: "text-[#D97706]",
      iconBg: "bg-[#FEF9C3]",
      borderColor: "border-[#FEF08A]",
      cardBg: "bg-[#FEFCE8]/70",
      image: secSmartbuilding,
    },
    {
      name: "REAL ESTATE",
      icon: Building2,
      iconColor: "text-[#2563EB]",
      iconBg: "bg-[#DBEAFE]",
      borderColor: "border-[#BFDBFE]",
      cardBg: "bg-[#EFF6FF]/70",
      image: secRealestate,
    },
    {
      name: "ACADEMICS",
      icon: GraduationCap,
      iconColor: "text-[#DB2777]",
      iconBg: "bg-[#FCE7F3]",
      borderColor: "border-[#FBCFE8]",
      cardBg: "bg-[#FDF2F8]/70",
      image: secAcademics,
    },
    {
      name: "GOVERNMENT SCHEMES & DEPARTMENTS",
      icon: Landmark,
      iconColor: "text-[#7C3AED]",
      iconBg: "bg-[#EDE9FE]",
      borderColor: "border-[#DDD6FE]",
      cardBg: "bg-[#FAF5FF]/70",
      image: secGovernment,
      span: "sm:col-span-2 lg:col-span-2",
    },
  ];

  const keyHighlights = [
    {
      id: "architects",
      title: "Architects meet/ seminars and workshops",
      icon: khArchitects,
      borderColor: "border-[#DDD6FE]",
      cornerBg: "bg-gradient-to-tl from-[#F3E8FF] via-transparent to-transparent",
      dividerColor: "bg-[#8B5CF6]/50",
    },
    {
      id: "marketers",
      title: "A platform for marketers to showcase their products and services.",
      icon: khMarketers,
      borderColor: "border-[#FED7AA]",
      cornerBg: "bg-gradient-to-tl from-[#FFEDD5] via-transparent to-transparent",
      dividerColor: "bg-[#EA580C]/50",
    },
    {
      id: "engagement",
      title: "Engagement activity with the target group/ audience in the form of lucky draws and much more.",
      icon: khEngagement,
      borderColor: "border-[#E9D5FF]",
      cornerBg: "bg-gradient-to-tl from-[#F3E8FF] via-transparent to-transparent",
      dividerColor: "bg-[#9333EA]/50",
    },
    {
      id: "brand",
      title: "A platform for brands to reach out to their target audience.",
      icon: khBrand,
      borderColor: "border-[#FED7AA]",
      cornerBg: "bg-gradient-to-tl from-[#FFEDD5] via-transparent to-transparent",
      dividerColor: "bg-[#EA580C]/50",
    },
    {
      id: "financing",
      title: "On spot loan and financing facility.",
      icon: khFinancing,
      borderColor: "border-[#FECDD3]",
      cornerBg: "bg-gradient-to-tl from-[#FFE4E6] via-transparent to-transparent",
      dividerColor: "bg-[#E11D48]/50",
    },
    {
      id: "experts",
      title: "Experts interface and workshops.",
      icon: khExperts,
      borderColor: "border-[#FEF08A]",
      cornerBg: "bg-gradient-to-tl from-[#FEF9C3] via-transparent to-transparent",
      dividerColor: "bg-[#D97706]/50",
    },
    {
      id: "art",
      title: "Display of art, culture, heritage and much more.",
      icon: khArt,
      borderColor: "border-[#FBCFE8]",
      cornerBg: "bg-gradient-to-tl from-[#FCE7F3] via-transparent to-transparent",
      dividerColor: "bg-[#DB2777]/50",
    },
    {
      id: "media",
      title: "Media amplification with wide arrays of pre-promotional tools.",
      icon: khMedia,
      borderColor: "border-[#DDD6FE]",
      cornerBg: "bg-gradient-to-tl from-[#EDE9FE] via-transparent to-transparent",
      dividerColor: "bg-[#7C3AED]/50",
    },
  ];

  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        bg-[#FAF8F5]
        text-[#171717]
        py-12
        sm:py-16
        lg:py-20
      "
    >
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* =====================================================
            SECTION HEADER (Matching Image 1)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 lg:mb-14"
        >

          {/* Gradient Serif Title: Highlights. */}
          <h2 className="inline-block font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] pb-2 sm:pb-3 pr-2 bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
            Highlights.
          </h2>

          {/* Gradient Pill Underline Bar */}
          <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-1 sm:mt-1.5" />
        </motion.div>

        {/* =====================================================
            HERO HIGHLIGHT (2-Column Layout matching Image 1)
        ====================================================== */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* ===================================================
              LEFT VISUAL PANEL (Feature Experience Card)
          ==================================================== */}
          <div className="relative group lg:col-span-4 flex flex-col">
            {/* Decorative Top-Left Orange Corner Accent (matching Image 1) */}
            <div className="absolute -top-2.5 -left-2.5 w-28 h-28 rounded-tl-[38px] bg-gradient-to-br from-[#EA580C] to-[#F97316] pointer-events-none -z-0" />

            {/* Main Dark Plum/Purple Card */}
            <div className="relative z-10 rounded-[30px] sm:rounded-[34px] bg-[#38164B] overflow-hidden shadow-xl flex-1 flex flex-col justify-between border border-[#4C1D66]">
              {/* Top Photo using highlight-img.png */}
              <div className="relative w-full h-[250px] sm:h-[275px] overflow-hidden">
                <img
                  src={highlightImg}
                  alt="Lucknow Rumi Darwaza - 3 Days of International Flavour"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Smooth gradient blend into the card background */}
                {/* Smooth light shaded gradient so the photo remains visible while blending into card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, transparent 45%, rgba(56, 22, 75, 0.2) 75%, #38164B 100%)",
                  }}
                />
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-7 pt-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[10px] sm:text-[11px] font-sans font-bold tracking-[0.25em] text-[#C4B5FD] uppercase mb-2">
                    THE EXPERIENCE
                  </span>

                  <h3 className="flex flex-col leading-tight">
                    <span className="font-sans font-bold text-white text-xl sm:text-2xl tracking-wide uppercase">
                      3 DAYS OF
                    </span>
                    <span className="font-serif text-white text-2xl sm:text-[27px] font-normal mt-0.5">
                      International Flavour
                    </span>
                    <span className="font-serif italic font-bold text-[#F59E0B] text-3xl sm:text-[35px] mt-0.5 leading-none">
                      Extravaganza
                    </span>
                  </h3>

                  <p className="mt-4 text-neutral-200/90 text-xs sm:text-[13px] leading-relaxed font-normal">
                    The festival will also display an exciting program of exhibitions,
                    installations, symposia, lectures and workshops, celebrating architecture's
                    contribution to culture, sustainability and the economy.
                  </p>
                </div>

                {/* Golden bottom accent bar */}
                <div className="w-14 h-1 rounded-full bg-[#EAB308] mt-6 mb-1" />
              </div>
            </div>
          </div>

          {/* ===================================================
              RIGHT CONTENT (Festival Experience Intro + 6 Cards)
          ==================================================== */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Flanked Label */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="w-8 sm:w-12 h-px bg-[#F97316]" />
                <span className="text-xs sm:text-[12.5px] font-sans font-bold tracking-[0.25em] uppercase text-[#171717]">
                  THE FESTIVAL EXPERIENCE
                </span>
                <span className="w-8 sm:w-12 h-px bg-[#F97316]" />
              </div>

              {/* Heading */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#171717] font-medium leading-[1.2]">
                Ideas that connect{" "}
                <span className="font-serif italic font-normal text-[#F26522]">
                  people &amp;{" "}
                </span>
                <span className="font-serif italic font-normal text-[#C21458]">
                  possibilities.
                </span>
              </h3>

              {/* Subtitle paragraph */}
              <p className="mt-3 text-neutral-600 text-xs sm:text-sm lg:text-[14px] leading-relaxed max-w-2xl font-normal">
                A multidisciplinary platform that brings together exhibitions,
                installations, symposia, lectures and workshops, celebrating design,
                heritage, culture, sustainability and the economy.
              </p>
            </motion.div>

            {/* Grid of 6 Distinct Floating Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mt-6 sm:mt-7">
              {experiences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="h-full"
                  >
                    <div
                      className={`h-full p-5 sm:p-5.5 rounded-[22px] sm:rounded-[26px] bg-white border ${item.borderColor} shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Rounded Icon Square */}
                        <div
                          className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>

                        {/* Text block */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-sans font-bold text-xs sm:text-[13px] text-[#111827] uppercase tracking-wider leading-snug">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-neutral-500 text-[11.5px] sm:text-xs leading-relaxed font-normal">
                            {item.text}
                          </p>
                          {/* Color Accent Indicator Line under text */}
                          <div
                            className={`w-8 h-[3px] rounded-full ${item.barColor} mt-3.5`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOCUS SECTORS (Matching Image 1) - FULL WIDTH COVER
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full my-16 sm:my-20 lg:my-24 py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgHist})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
            {/* Header matching Image 1 */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
              <div>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#171717] font-normal tracking-tight leading-tight">
                  Built around the{" "}
                  <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                    future of design.
                  </span>
                </h3>

                {/* Gradient Pill Underline Bar matching Image 1 */}
                <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3 sm:mt-3.5" />
              </div>

              {/* Right Counter matching Image 1 */}
              <div className="flex items-center gap-3.5 sm:gap-4 self-start sm:self-auto">
                {/* Thin vertical orange accent line */}
                <div className="w-[1.5px] h-10 bg-[#F97316] opacity-80" />

                <div className="flex flex-col items-center">
                  <span className="font-serif italic font-bold text-4xl sm:text-5xl lg:text-[52px] bg-gradient-to-r from-[#EA580C] via-[#E11D48] to-[#9333EA] bg-clip-text text-transparent leading-none">
                    14
                  </span>
                  <span className="font-sans font-bold text-[10px] sm:text-[11.5px] tracking-[0.25em] text-[#111827] uppercase mt-1">
                    FOCUS SECTORS
                  </span>
                </div>
              </div>
            </div>

            {/* 14 Sector Cards Grid (3 Columns, matching Image 1) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 lg:gap-4.5">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <motion.div
                    key={sector.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className={sector.span || ""}
                  >
                    <div
                      className={`
                        relative
                        overflow-hidden
                        h-[74px] sm:h-[78px]
                        rounded-[22px] sm:rounded-[26px]
                        border ${sector.borderColor}
                        ${sector.cardBg}
                        backdrop-blur-sm
                        bg-white/85
                        shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                        hover:shadow-md hover:-translate-y-0.5
                        transition-all duration-300
                        px-4 sm:px-5
                        flex items-center justify-between
                        group
                      `}
                    >
                      {/* Left: Icon Badge + Name */}
                      <div className="flex items-center gap-3.5 z-10 min-w-0 pr-2">
                        <div
                          className={`w-11 h-11 rounded-full ${sector.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm`}
                        >
                          <Icon className={`w-5 h-5 ${sector.iconColor}`} />
                        </div>

                        <span className="font-sans font-bold text-xs sm:text-[12.5px] tracking-wider text-[#111827] uppercase leading-snug">
                          {sector.name}
                        </span>
                      </div>

                      {/* Right: Architectural line sketch watermark matching Image 1 */}
                      <div className="absolute right-0 top-0 bottom-0 w-[42%] max-w-[130px] flex items-center justify-end pointer-events-none select-none pr-1">
                        <img
                          src={sector.image}
                          alt=""
                          className="h-[88%] w-auto object-contain opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            
          </div>
        </motion.div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* =====================================================
            KEY HIGHLIGHTS (Matching Image 2)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:mt-28"
        >
          {/* Header matching Image 2 */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#171717] leading-none">
              Key{" "}
               <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                    Highlights.
              </span>
            </h3>

            {/* Gradient underline pill matching Image 2 */}
            <div className="w-14 sm:w-16 h-1 rounded-full bg-gradient-to-r from-[#EA580C] to-[#EAB308] mt-3 mb-3.5" />

            {/* Subtitle */}
            <p className="max-w-xl text-neutral-600 text-xs sm:text-[13.5px] leading-relaxed font-normal">
              A curated experience connecting brands, professionals, experts,
              culture and the wider built–environment ecosystem.
            </p>
          </div>

          {/* 8 Highlights Grid (4 Columns x 2 Rows) matching Image 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4.5">
            {keyHighlights.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="h-full"
              >
                <div
                  className={`
                    relative
                    overflow-hidden
                    h-full
                    min-h-[120px] sm:min-h-[128px]
                    rounded-2xl
                    bg-white
                    border ${item.borderColor}
                    shadow-[0_2px_12px_rgba(0,0,0,0.02)]
                    hover:shadow-md hover:-translate-y-0.5
                    transition-all duration-300
                    p-3.5 sm:p-4
                    flex items-center gap-3 sm:gap-3.5
                    group
                  `}
                >
                  {/* Bottom-right diagonal shaded corner matching Image 2 */}
                  <div
                    className={`absolute bottom-0 right-0 w-16 h-16 pointer-events-none rounded-br-2xl ${item.cornerBg}`}
                  />

                  {/* Left: Custom Graphic Icon */}
                  <div className="w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center flex-shrink-0 z-10">
                    <img
                      src={item.icon}
                      alt=""
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Middle: Vertical Separator Line matching Image 2 */}
                  <div
                    className={`w-[1.5px] h-10 sm:h-12 ${item.dividerColor} flex-shrink-0 z-10`}
                  />

                  {/* Right: Text Description */}
                  <div className="flex-1 min-w-0 z-10">
                    <p className="font-sans font-bold text-[11.5px] sm:text-xs text-[#111827] leading-snug">
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Gradient Skyline Illustration & Line matching Image 2 */}
          <div className="mt-10 sm:mt-14 w-full flex flex-col items-center pointer-events-none select-none">
            <img
              src={khSkyline}
              alt="Lucknow Architecture Skyline"
              className="w-full max-w-3xl h-auto object-contain opacity-95"
            />
            {/* Orange/Amber Horizontal Line below skyline matching Image 2 */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#EA580C] to-transparent mt-1" />
          </div>
        </motion.div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-6
            lg:mt-8
            border-t
            border-b
            border-[#D9D0C2]
            py-4
            sm:py-5
            text-center
          "
        >

          <p
            className="
              max-w-4xl
              mx-auto
              font-serif
              text-xl
              sm:text-2xl
              md:text-3xl
              leading-relaxed
            "
          >
            A meeting ground for
            <span className="text-[#B77A27]">
              {" "}architecture, industry, academia
            </span>
            {" "}and culture.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default HighlightsSection;
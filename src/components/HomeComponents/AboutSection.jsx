import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  TrendingUp,
  Building2,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import pilgrimageImg from "../../assets/images/laf3.0-1.png";
import transportationImg from "../../assets/images/laf3.2.png";
import economyImg from "../../assets/images/laf3.0-3.png";
import sportsImg from "../../assets/images/laf3.0-4.png";
import tourismImg from "../../assets/images/laf3.0-5.png";
import cuisineImg from "../../assets/images/laf3.0-6.png";
import investUpImg from "../../assets/images/laf3.0-7.png";
import odopImg from "../../assets/images/laf3.0-8.png";
import craftImg from "../../assets/images/laf3.0-10.png";
import educationImg from "../../assets/images/laf3.0 12.png";
import cultureImg from "../../assets/images/laf3.0 13.png";
import lucknowImg from "../../assets/images/image-6.jpg";
import aboutVideo from "../../assets/images/about-vido.mp4";
import highlight1 from "../../assets/images/1-1.png";
import highlight2 from "../../assets/images/highlight-2.png";
import highlight3 from "../../assets/images/highlight-3.png";
import highlight4 from "../../assets/images/highlight-4.png";



const AboutSection = () => {
  const sectors = [
    {
      id: "pilgrimage",
      number: "01",
      name: "PILGRIMAGE",
      img: pilgrimageImg,
      color: "#F59E0B",
      soft: "rgba(245,158,11,0.13)",
      glow: "rgba(245,158,11,0.22)",
    },
    {
      id: "transportation",
      number: "02",
      name: "TRANSPORTATION",
      img: transportationImg,
      color: "#3B82F6",
      soft: "rgba(59,130,246,0.12)",
      glow: "rgba(59,130,246,0.22)",
    },
    {
      id: "economy",
      number: "03",
      name: "ECONOMY",
      img: economyImg,
      color: "#10B981",
      soft: "rgba(16,185,129,0.12)",
      glow: "rgba(16,185,129,0.22)",
    },
    {
      id: "sports",
      number: "04",
      name: "SPORTS",
      img: sportsImg,
      color: "#C026D3",
      soft: "rgba(192,38,211,0.12)",
      glow: "rgba(192,38,211,0.22)",
    },
    {
      id: "tourism",
      number: "05",
      name: "TOURISM",
      img: tourismImg,
      color: "#F97316",
      soft: "rgba(249,115,22,0.12)",
      glow: "rgba(249,115,22,0.22)",
    },
    {
      id: "cuisine",
      number: "06",
      name: "CUISINE",
      img: cuisineImg,
      color: "#EAB308",
      soft: "rgba(234,179,8,0.13)",
      glow: "rgba(234,179,8,0.22)",
    },
    {
      id: "invest-up",
      number: "07",
      name: "INVEST UP",
      img: investUpImg,
      color: "#EC4899",
      soft: "rgba(236,72,153,0.12)",
      glow: "rgba(236,72,153,0.22)",
    },
    {
      id: "odop",
      number: "08",
      name: "ONE DISTRICT ONE PRODUCT",
      img: odopImg,
      color: "#8B5CF6",
      soft: "rgba(139,92,246,0.12)",
      glow: "rgba(139,92,246,0.22)",
    },
    {
      id: "craft",
      number: "09",
      name: "CRAFT",
      img: craftImg,
      color: "#06B6D4",
      soft: "rgba(6,182,212,0.12)",
      glow: "rgba(6,182,212,0.22)",
    },
    {
      id: "education",
      number: "10",
      name: "EDUCATION",
      img: educationImg,
      color: "#3B82F6",
      soft: "rgba(59,130,246,0.12)",
      glow: "rgba(59,130,246,0.22)",
    },
    {
      id: "culture",
      number: "11",
      name: "CULTURE",
      img: cultureImg,
      color: "#F59E0B",
      soft: "rgba(245,158,11,0.13)",
      glow: "rgba(245,158,11,0.22)",
    },
  ];

  const highlights = [
    {
      number: "01",
      title: "Highest MSMEs",
      subtitle: "Organized & Unorganized",
      image: highlight1,
    },
    {
      number: "02",
      title: "Ease of Doing Business",
      subtitle: "Investor Friendly Ecosystem",
      image: highlight2,
    },
    {
      number: "03",
      title: "One Trillion Economy",
      subtitle: "Ambitious Growth Vision",
      image: highlight3,
    },
    {
      number: "04",
      title: "Largest State by Area",
      subtitle: "A Vast Urban Landscape",
      image: highlight4,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#181818]"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120,90,40,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,90,40,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute left-[-220px] top-[260px] w-[600px] h-[650px] rounded-t-full border border-[#A98952]/10" />
        <div className="absolute right-[-220px] top-[400px] w-[600px] h-[650px] rounded-t-full border border-[#A98952]/10" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#A98952]/[0.08] hidden lg:block" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 lg:pt-20 pb-4 sm:pb-6 lg:pb-8">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-6"
          >
            <span className="h-px w-12 bg-[#B8893A]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-[#9B6B24]">
              About Uttar Pradesh
            </span>
            <span className="h-px w-12 bg-[#B8893A]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
          >
            A LANDSCAPE OF
            <span className="block text-[#B77A27]">CULTURE & GROWTH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-7 text-sm sm:text-base leading-7 text-neutral-500"
          >
            Uttar Pradesh brings together heritage, architecture, infrastructure
            and a rapidly evolving urban economy — creating a distinctive
            landscape for future development.
          </motion.p>
        </div>

        {/* THE OPPORTUNITY — EDITORIAL TWO-COLUMN ARCHITECTURAL LAYOUT */}
        <div className="mt-14 lg:mt-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* LEFT COLUMN: TEXT CONTENT */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Eyebrow Label */}
              {/* <div className="flex items-center gap-3 mb-3.5">
                <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#B07A24] uppercase">
                  01 — THE OPPORTUNITY
                </span>
              </div> */}
                <div className="flex items-center gap-4 mb-5">

            <span className="text-xs font-bold text-[#B77A27]">
              01
            </span>

            <span className="w-12 h-px bg-[#B77A27]" />

            <span
              className="
                text-[10px]
                tracking-[0.3em]
                uppercase
                text-neutral-400
              "
            >
               THE OPPORTUNITY
            </span>

          </div>


              {/* Serif Heading with Italic Muted Gold Accent */}
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-[#1C1C1A] leading-[1.18] mb-5">
                Where heritage meets{" "}
                <span className="italic font-serif text-[#B07A24]">
                  contemporary ambition.
                </span>
              </h3>

              {/* Descriptive Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                <p>
                  The economic transformation of Uttar Pradesh has created
                  significant opportunities across real estate, infrastructure,
                  tourism and urban development. Lucknow, as the state capital,
                  represents an important intersection of culture, commerce and
                  contemporary urban growth.
                </p>
                <p>
                  Its historic identity combined with modern development creates a
                  distinctive environment for architects, designers, developers
                  and the wider built environment ecosystem.
                </p>
              </div>

              {/* Location Identity Row & Discover Link */}
              <div className="pt-6 border-t border-[#E6DFD3] mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-[#B07A24]/30 flex items-center justify-center text-[#B07A24] bg-[#B07A24]/5 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#1C1C1A] uppercase">
                      LUCKNOW
                    </div>
                    <div className="text-xs text-neutral-500 font-light mt-0.5">
                      Heritage • Architecture • Future
                    </div>
                  </div>
                </div>

                <a
                  href="#highlights"
                  className="group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1C1C1A] hover:text-[#B07A24] transition-colors"
                >
                  <span>Discover More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B07A24] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: EDITORIAL ARCHITECTURAL VIDEO */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0 flex items-center justify-center">
              <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[560px]">
                {/* Thin Antique Gold Offset Border Frame */}
                <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-[26px] border border-[#B07A24]/30 pointer-events-none translate-x-2.5 translate-y-2.5 sm:translate-x-3.5 sm:translate-y-3.5" />

                {/* Main Video Container — Expanded Width & Height Aligned with Left Text */}
                <div className="relative h-[420px] sm:h-[460px] lg:h-[480px] w-full rounded-[22px] overflow-hidden border-2 border-[#B07A24]/40 bg-[#0A0D12] shadow-xl group flex items-center justify-center">
                  <video
                    src={aboutVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                  {/* Subtle Caption Pill */}
                  <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-[10.5px] sm:text-[11px] font-mono text-white tracking-wider uppercase flex items-center gap-2 shadow-2xs z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B07A24] animate-pulse" />
                    <span>Lucknow • Uttar Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GROWTH SECTORS */}
        <section className="relative mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 lg:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-12 h-px bg-[#C58B2B]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#A66A16]">
                Growth Sectors
              </span>
              <span className="w-12 h-px bg-[#C58B2B]" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-tight text-[#171717]">
              The many dimensions{" "}
              <span className="text-[#B77A27]">of Uttar Pradesh.</span>
            </h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-[2px] bg-[#C58B2B] mx-auto mt-6"
            />

            <p className="max-w-2xl mx-auto mt-5 text-sm text-neutral-500 leading-6">
              From heritage and pilgrimage to transportation, tourism and
              emerging economic corridors — Uttar Pradesh is shaping a new
              architectural and urban future.
            </p>
          </motion.div>

          {/* REDESIGNED CONNECTED CIRCULAR FLOW (NO CARDS, DOTTED ARROW FLOW PATH) */}
          <div className="relative w-full mx-auto py-2">
            
            {/* SVG ARROWHEAD MARKER DEFINITION */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
              <defs>
                <marker
                  id="dotted-arrow-head"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#B77A27" />
                </marker>
              </defs>
            </svg>

            {/* FLOW NODES GRID (4 COLUMNS DESKTOP, 2 COLUMNS MOBILE) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-10 sm:gap-y-14 gap-x-4 sm:gap-x-8 relative">
              {sectors.map((sector, index) => {
                const isLastInRow = (index + 1) % 4 === 0;
                const isTotalLast = index === sectors.length - 1;

                return (
                  <motion.div
                    key={sector.id}
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.04 }}
                    className="group relative flex flex-col items-center justify-start text-center"
                  >
                    {/* STEP NUMBER BADGE: 01, 02, 03... */}
                    <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#B77A27] bg-[#B77A27]/10 border border-[#B77A27]/30 px-2.5 py-0.5 rounded-full mb-2 shadow-2xs group-hover:bg-[#B77A27] group-hover:text-white transition-all duration-300">
                      {sector.number}
                    </span>

                    {/* CIRCULAR ICON BADGE */}
                    <div className="relative z-10">
                      {/* Ambient Radial Glow */}
                      <div
                        className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-md"
                        style={{ background: sector.glow }}
                      />

                      {/* Concentric Dashed Ring */}
                      <div
                        className="absolute -inset-2 rounded-full border border-dashed opacity-50 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-700 pointer-events-none"
                        style={{ borderColor: sector.color }}
                      />

                      {/* Main White Circle Icon Container */}
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 flex items-center justify-center p-3 shadow-[0_8px_25px_rgba(0,0,0,0.06)] group-hover:shadow-[0_12px_30px_rgba(183,122,39,0.22)] group-hover:scale-110 transition-all duration-500 shrink-0 relative z-10"
                        style={{ borderColor: `${sector.color}55` }}
                      >
                        <img
                          src={sector.img}
                          alt={sector.name}
                          className="w-11 h-11 sm:w-13 sm:h-13 object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* SECTOR NAME UNDERNEATH */}
                    <h4 className="mt-3 text-xs sm:text-sm font-bold tracking-wider text-[#171717] text-center uppercase group-hover:text-[#B77A27] transition-colors max-w-[130px] leading-snug">
                      {sector.name}
                    </h4>

                    {/* DOTTED CONNECTING LINE WITH ARROW TO NEXT NODE (DESKTOP) */}
                    {!isTotalLast && (
                      <div className="hidden lg:block absolute top-12 left-[calc(50%+46px)] w-[calc(100%-46px)] z-0 pointer-events-none">
                        {!isLastInRow ? (
                          /* Horizontal Right Dotted Arrow */
                          <svg className="w-full h-6 overflow-visible" viewBox="0 0 100 24" fill="none">
                            <path
                              d="M 5 12 L 85 12"
                              stroke="#B77A27"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              markerEnd="url(#dotted-arrow-head)"
                              className="opacity-75"
                            />
                          </svg>
                        ) : (
                          /* Downward Curved Dotted Arrow for Row Wrap */
                          <svg className="w-24 h-16 overflow-visible absolute -left-10 top-2" viewBox="0 0 80 60" fill="none">
                            <path
                              d="M 10 0 C 60 0, 70 40, 10 50"
                              stroke="#B77A27"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              markerEnd="url(#dotted-arrow-head)"
                              className="opacity-75"
                            />
                          </svg>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 lg:mt-16"
          >
            <span className="h-px w-10 bg-[#D0C6B7]" />
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Heritage
              <span className="mx-2 text-[#C58B2B]">•</span>
              Infrastructure
              <span className="mx-2 text-[#C58B2B]">•</span>
              Innovation
              <span className="mx-2 text-[#C58B2B]">•</span>
              Growth
            </span>
            <span className="h-px w-10 bg-[#D0C6B7]" />
          </motion.div>
        </section>

        {/* STATE HIGHLIGHTS — STAGGERED ARCHITECTURAL GALLERY (IMAGE 1 & 3 TOP, IMAGE 2 & 4 OFFSET DOWN) */}
        <div id="highlights" className="mt-8 lg:mt-12 w-full pb-16 lg:pb-24">
          
          {/* SECTION HEADER (CENTERED & ELEGANT) */}
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-3 mb-3.5"
            >
              {/* <span className="h-px w-10 bg-[#B77A27]/60" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#B77A27] uppercase">
                03 — STATE HIGHLIGHTS
              </span>
              <span className="h-px w-10 bg-[#B77A27]/60" /> */}
              <span className="text-xs font-bold text-[#B77A27]">
              02
            </span>

            <span className="w-12 h-px bg-[#B77A27]" />

            <span
              className="
                text-[10px]
                tracking-[0.3em]
                uppercase
                text-neutral-400
              "
            >
               STATE HIGHLIGHTS
            </span>
            </motion.div>
             

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#171717] leading-tight"
            >
              A state building{" "}
              <span className="italic font-serif text-[#B77A27]">
                at scale.
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal"
            >
              A combination of economic ambition, demographic strength,
              infrastructure and cultural identity is shaping the future of the
              state's built environment.
            </motion.p>
          </div>

          {/* STAGGERED GRID WRAPPER */}
          <div className="relative">
            
            {/* 4 STAGGERED UNIFORM IMAGE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
              {highlights.map((item, index) => {
                const isEven = index % 2 === 1; // Index 1 & 3 (Image 2 & Image 4) are staggered down
                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className={`group relative flex flex-col items-center text-center transition-transform duration-500 ${
                      isEven ? "lg:translate-y-14" : "lg:translate-y-0"
                    }`}
                  >
                    {/* STEP NUMBER NODE BADGE: [01], [02], [03], [04] */}
                    <div className="flex items-center justify-center mb-5 relative w-full">
                      {/* Connecting line segment behind node */}
                      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#B77A27]/30 z-0" />
                      
                      {/* Node Badge */}
                      <div className="relative z-10 bg-[#FAF7F2] border-2 border-[#B77A27] text-[#B77A27] font-mono text-xs font-bold px-4 py-1 rounded-full shadow-xs group-hover:bg-[#B77A27] group-hover:text-white transition-all duration-300">
                        [{item.number}]
                      </div>
                    </div>

                    {/* UNIFORM UNIFIED SIZE IMAGE CONTAINER (EXACT SAME SIZE FOR ALL 4 IMAGES) */}
                    <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden bg-[#0A0D12] border border-[#D4AF37]/30 shadow-md group-hover:border-[#B77A27] group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.03] flex items-center justify-center p-2.5">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain rounded-xl"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* FINAL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 lg:mt-8 text-center border-t border-b border-[#D8D0C2] py-5"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#B77A27] mb-5">
            The LAF Perspective
          </div>
          <blockquote className="max-w-4xl mx-auto font-serif text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#242424]">
            “Combining rich cultural heritage with contemporary architecture,
            sustainable development and a vision for the future.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
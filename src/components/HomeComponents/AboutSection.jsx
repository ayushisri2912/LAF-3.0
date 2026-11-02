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

import pilgrimageImg from "../../assets/images/laf3.0-1.webp";
import transportationImg from "../../assets/images/laf3.2.webp";
import economyImg from "../../assets/images/laf3.0-3.webp";
import sportsImg from "../../assets/images/laf3.0-4.webp";
import tourismImg from "../../assets/images/laf3.0-5.webp";
import cuisineImg from "../../assets/images/laf3.0-6.webp";
import investUpImg from "../../assets/images/laf3.0-7.webp";
import odopImg from "../../assets/images/laf3.0-8.webp";
import craftImg from "../../assets/images/laf3.0-10.webp";
import educationImg from "../../assets/images/laf3.0-12.webp";
import cultureImg from "../../assets/images/laf3.0-13.webp";
import lucknowImg from "../../assets/images/image-6.webp";
import highlight1 from "../../assets/images/card1.png";
import highlight2 from "../../assets/images/card2.png";
import highlight3 from "../../assets/images/card3.png";
import highlight4 from "../../assets/images/card4.png";



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
            <span className="h-px w-12 bg-[#B77A27]" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-[#B77A27]">
              About Uttar Pradesh
            </span>
            <span className="h-px w-12 bg-[#B77A27]" />
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

        {/* TWO-PART EDITORIAL TEXT SECTION (As in Reference Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 lg:mt-16 w-full max-w-6xl mx-auto"
        >
          <div className="relative grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-stretch">
            {/* Left Part */}
            <div className="flex items-center">
              <p className="text-neutral-700 text-base sm:text-[17px] lg:text-[18px] leading-[1.85] font-normal tracking-[0.01em]">
                The economic trend has consequently developed into a magnet for
                real estate. The state&apos;s lifestyle and amenities are improving
                because of these advancements. Being the state&apos;s capital,
                Lucknow has enormous potential. As a result of increases in per
                capita income, productivity, favourable market prices, and large
                credit flow in the city, demand for branded consumer goods and
                property has recently surged.
              </p>
            </div>

            {/* Vertical Center Divider Line (Orange - Exact match to Image 2) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 bg-[#B8893A]" />
            <div className="block md:hidden w-20 h-[2px] bg-[#B8893A] mx-auto my-2" />

            {/* Right Part */}
            <div className="flex items-center">
              <p className="text-neutral-700 text-base sm:text-[17px] lg:text-[18px] leading-[1.85] font-normal tracking-[0.01em]">
                Being a hub of heritage as well as a fast emerging economy, it
                attracts an influx of people from all surrounding cities,
                districts and villages. Lucknow offers a distinctive business
                philosophy that combines the city&apos;s rich cultural heritage with
                contemporary business methods. With the highest density of young
                population, UP is the richest state when we talk about
                demographic resources.
              </p>
            </div>
          </div>
        </motion.div>
        <br/><br/>

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
                    <div className="w-full aspect-[1920/819] relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-md group-hover:border-[#B77A27] group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.03] bg-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <br/>

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
              <span className="w-12 h-px bg-[#B77A27]" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                Growth Sectors
              </span>
              <span className="w-12 h-px bg-[#B77A27]" />
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-medium leading-tight text-[#181818]">
              The many dimensions{" "}
              <span className="text-[#B77A27]">of Uttar Pradesh.</span>
            </h3>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-[2px] bg-[#B77A27] mx-auto mt-6"
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
                    <h4 className="mt-3 text-xs sm:text-sm font-bold tracking-wider text-[#181818] text-center uppercase group-hover:text-[#B77A27] transition-colors max-w-[130px] leading-snug">
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
              <span className="mx-2 text-[#B77A27]">•</span>
              Infrastructure
              <span className="mx-2 text-[#B77A27]">•</span>
              Innovation
              <span className="mx-2 text-[#B77A27]">•</span>
              Growth
            </span>
            <span className="h-px w-10 bg-[#D0C6B7]" />
          </motion.div>
        </section>

        

        {/* FINAL QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 lg:mt-8 text-center border-t border-b border-[#D8D0C2] py-5"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
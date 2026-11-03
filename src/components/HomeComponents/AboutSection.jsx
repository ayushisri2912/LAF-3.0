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
      color: "#F97316",
      gradient: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
    },
    {
      id: "transportation",
      number: "02",
      name: "TRANSPORTATION",
      img: transportationImg,
      color: "#7C3AED",
      gradient: "linear-gradient(90deg, #7C3AED 0%, #5B1A83 100%)",
    },
    {
      id: "economy",
      number: "03",
      name: "ECONOMY",
      img: economyImg,
      color: "#E11D48",
      gradient: "linear-gradient(90deg, #E11D48 0%, #BE123C 100%)",
    },
    {
      id: "sports",
      number: "04",
      name: "SPORTS",
      img: sportsImg,
      color: "#2563EB",
      gradient: "linear-gradient(90deg, #2563EB 0%, #1D4ED8 100%)",
    },
    {
      id: "tourism",
      number: "05",
      name: "TOURISM",
      img: tourismImg,
      color: "#E11D48",
      gradient: "linear-gradient(90deg, #E11D48 0%, #BE123C 100%)",
    },
    {
      id: "cuisine",
      number: "06",
      name: "CUISINE",
      img: cuisineImg,
      color: "#F59E0B",
      gradient: "linear-gradient(90deg, #F59E0B 0%, #D97706 100%)",
    },
    {
      id: "invest-up",
      number: "07",
      name: "INVEST UP",
      img: investUpImg,
      color: "#6D28D9",
      gradient: "linear-gradient(90deg, #6D28D9 0%, #4C1D95 100%)",
    },
    {
      id: "odop",
      number: "08",
      name: "ONE DISTRICT ONE PRODUCT",
      img: odopImg,
      color: "#C026D3",
      gradient: "linear-gradient(90deg, #C026D3 0%, #A21CAF 100%)",
    },
    {
      id: "craft",
      number: "09",
      name: "CRAFT",
      img: craftImg,
      color: "#0284C7",
      gradient: "linear-gradient(90deg, #0284C7 0%, #0369A1 100%)",
    },
    {
      id: "education",
      number: "10",
      name: "EDUCATION",
      img: educationImg,
      color: "#7C3AED",
      gradient: "linear-gradient(90deg, #7C3AED 0%, #5B1A83 100%)",
    },
    {
      id: "culture",
      number: "11",
      name: "CULTURE",
      img: cultureImg,
      color: "#F97316",
      gradient: "linear-gradient(90deg, #F97316 0%, #EA580C 100%)",
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

  const renderSectorCard = (sector) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col items-center justify-center text-center flex-shrink-0"
    >
      {/* Number Pill at top of circle */}
      <div
        className="relative z-30 px-3.5 py-0.5 rounded-full text-white font-mono text-[11px] font-bold shadow-sm -mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: sector.color }}
      >
        {sector.number}
      </div>

      {/* Circle Container with Colored Top Arc Ring */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Top Arc Crescent */}
        <div
          className="absolute -top-1.5 w-[108%] h-[68%] rounded-t-full border-t-[3.5px] border-l-[3.5px] border-r-[3.5px] pointer-events-none transition-transform duration-300 group-hover:scale-105"
          style={{ borderColor: sector.color }}
        />

        {/* White Circular Card */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-white flex items-center justify-center p-3.5 sm:p-4 shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-neutral-100 transition-all duration-300 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.14)] group-hover:scale-105">
          <img
            src={sector.img}
            alt={sector.name}
            className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-transform duration-300 group-hover:scale-110 select-none"
            loading="lazy"
          />
        </div>
      </div>

      {/* Overlapping Bottom Colored Banner */}
      <div
        className="relative z-20 -mt-4 w-32 sm:w-36 lg:w-40 min-h-[34px] sm:min-h-[38px] py-1.5 px-2 rounded-xl text-center shadow-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
        style={{ background: sector.gradient || sector.color }}
      >
        <span className="block text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-snug select-none">
          {sector.name}
        </span>
      </div>
    </motion.div>
  );

  const renderArrow = () => (
    <div className="flex items-center text-[#C27827] px-1 sm:px-2 lg:px-3 select-none">
      <div className="w-6 sm:w-10 lg:w-14 border-t-2 border-dashed border-[#C27827]/70" />
      <svg className="w-3.5 h-3.5 text-[#C27827] -ml-1 fill-current" viewBox="0 0 10 10">
        <path d="M 1 2 L 7 5 L 1 8 z" />
      </svg>
    </div>
  );

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
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#181818]"
          >
            A LANDSCAPE OF
            <span className="block mt-1">
              <span className="text-[#F26522]">CULTURE</span>
              {" & "}
              <span className="text-[#5B1A83]">GROWTH</span>
            </span>
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

        {/* TWO-PART EDITORIAL TEXT SECTION */}
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

            {/* Vertical Center Divider Line */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {highlights.map((item, index) => {
              const isEven = index % 2 === 1;
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
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-[#B77A27]/30 z-0" />
                    <div className="relative z-10 bg-[#FAF7F2] border-2 border-[#B77A27] text-[#B77A27] font-mono text-xs font-bold px-4 py-1 rounded-full shadow-xs group-hover:bg-[#B77A27] group-hover:text-white transition-all duration-300">
                      [{item.number}]
                    </div>
                  </div>

                  {/* UNIFORM UNIFIED SIZE IMAGE CONTAINER */}
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

        {/* GROWTH SECTORS (CLEAN SIMPLE BACKGROUND) */}
        <section className="relative mt-16 sm:mt-20 lg:mt-24">
          {/* Section Content */}
          <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 sm:mb-14 lg:mb-16"
            >
              {/* Flanked top label */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-10 sm:w-16 h-px bg-[#D4AF37]/60" />
                <span className="text-[#171717] font-sans font-bold text-xs sm:text-[13px] tracking-[0.25em] uppercase">
                  GROWTH SECTORS
                </span>
                <span className="w-10 sm:w-16 h-px bg-[#D4AF37]/60" />
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal sm:font-medium leading-tight text-[#171717] tracking-tight">
                The many dimensions of{" "}
                <span className="italic font-serif text-[#F26522]">Uttar</span>{" "}
                <span className="italic font-serif text-[#5B1A83]">Pradesh.</span>
              </h3>

              <p className="max-w-2xl mx-auto mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                From heritage and pilgrimage to transportation, tourism and emerging economic corridors —
                <br className="hidden sm:inline" /> Uttar Pradesh is shaping a new architectural and urban future.
              </p>

              {/* Underline gradient bar */}
              <div className="w-24 sm:w-32 h-[3.5px] rounded-full bg-gradient-to-r from-[#F26522] to-[#5B1A83] mx-auto mt-4" />
            </motion.div>

            {/* Desktop 3-Row Connected Flow (Matching Image 1) */}
            <div className="hidden md:flex flex-col gap-12 lg:gap-14">
              {/* Row 1: 01 to 04 */}
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(0, 4).map((sector, idx) => (
                  <React.Fragment key={sector.id}>
                    {renderSectorCard(sector)}
                    {idx < 3 && renderArrow()}
                  </React.Fragment>
                ))}
              </div>

              {/* Row 2: 05 to 08 */}
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(4, 8).map((sector, idx) => (
                  <React.Fragment key={sector.id}>
                    {renderSectorCard(sector)}
                    {idx < 3 && renderArrow()}
                  </React.Fragment>
                ))}
              </div>

              {/* Row 3: 09 to 11 (Centered) */}
              <div className="flex items-center justify-center gap-2 lg:gap-4 xl:gap-6">
                {sectors.slice(8, 11).map((sector, idx) => (
                  <React.Fragment key={sector.id}>
                    {renderSectorCard(sector)}
                    {idx < 2 && renderArrow()}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile / Tablet Responsive Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:hidden gap-y-10 gap-x-4">
              {sectors.map((sector) => (
                <div key={sector.id} className="flex justify-center">
                  {renderSectorCard(sector)}
                </div>
              ))}
            </div>
          </div>
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

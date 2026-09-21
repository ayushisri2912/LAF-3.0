import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  MapPin,
  Maximize2,
  Compass,
} from "lucide-react";

import layoutImage from "../../assets/images/LAF2.0-Layout-HD.png";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const LocationLayoutSection = () => {
  return (
    <section
      id="location-layout"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHING AGENDA SECTION)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(120,90,40,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(120,90,40,0.07) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Large Decorative Architectural Circles */}
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -left-20 top-60 w-[350px] h-[350px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -right-40 bottom-20 w-[550px] h-[550px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute right-[10%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#B8893A]/10" />

        {/* Architectural corner accents */}
        <div className="absolute left-[8%] top-[15%] h-24 w-24 border-l border-t border-[#B8893A]/20" />
        <div className="absolute bottom-[10%] right-[8%] h-24 w-24 border-b border-r border-[#B8893A]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-end mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs font-bold text-[#B77A27] font-mono">10</span>
              <span className="w-12 h-px bg-[#B77A27]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
                VISIT THE FESTIVAL
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-[#171717]">
              Location{" "}
              <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
                &amp; Layout.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-16 bg-[#B77A27]/60" />
              <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-[#B77A27]">
                WHERE IDEAS MEET SPACE
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              Explore the festival layout and understand how exhibitions,
              installations, conversations and experiences come together
              within the festival environment.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "EXHIBITIONS",
                "TALKS",
                "INSTALLATIONS",
                "CIRCULATION",
                "MASTER PLAN",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#B8893A]/30 bg-white/50 px-3.5 py-1.5 text-[9.5px] font-bold tracking-[0.18em] text-[#80581B] rounded-full shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            LOCATION INFO STRIP
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="grid border-y border-[#D9D0C2] md:grid-cols-3 bg-white/50 rounded-2xl overflow-hidden shadow-2xs"
        >
          {/* ITEM 1 */}
          <div className="flex items-center gap-5 border-b border-[#D9D0C2] px-6 py-7 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B77A27]/30 bg-[#B77A27]/10 text-[#B77A27]">
              <MapPin size={20} strokeWidth={1.5} />
            </div>

            <div>
              <p className="mb-1 text-[9.5px] font-bold tracking-[0.25em] uppercase text-[#B77A27] font-mono">
                LOCATION
              </p>
              <p className="text-base font-semibold leading-snug text-[#171717]">
                Lucknow, Uttar Pradesh
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="flex items-center gap-5 border-b border-[#D9D0C2] px-6 py-7 md:border-b-0 md:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B77A27]/30 bg-[#B77A27]/10 text-[#B77A27]">
              <Compass size={20} strokeWidth={1.5} />
            </div>

            <div>
              <p className="mb-1 text-[9.5px] font-bold tracking-[0.25em] uppercase text-[#B77A27] font-mono">
                EXPERIENCE
              </p>
              <p className="text-base font-semibold leading-snug text-[#171717]">
                Exhibitions · Talks · Installations
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="flex items-center gap-5 px-6 py-7">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#B77A27]/30 bg-[#B77A27]/10 text-[#B77A27]">
              <Maximize2 size={20} strokeWidth={1.5} />
            </div>

            <div>
              <p className="mb-1 text-[9.5px] font-bold tracking-[0.25em] uppercase text-[#B77A27] font-mono">
                LAYOUT
              </p>
              <p className="text-base font-semibold leading-snug text-[#171717]">
                Festival Master Plan
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            LAYOUT DRAWING AREA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="relative mt-16"
        >
          {/* TOP LABEL */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#B77A27]" />
              <span className="text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                FESTIVAL MASTER PLAN
              </span>
            </div>

            <span className="hidden text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400 sm:block">
              LAF 3.0 · PLAN 01
            </span>
          </div>

          {/* IMAGE FRAME */}
          <div className="relative overflow-hidden border border-[#D9D0C2] bg-white p-3 sm:p-5 lg:p-7 rounded-2xl shadow-sm">
            {/* CORNER MARKS IN GOLD */}
            <span className="absolute left-0 top-0 h-7 w-px bg-[#B77A27]" />
            <span className="absolute left-0 top-0 h-px w-7 bg-[#B77A27]" />

            <span className="absolute right-0 top-0 h-7 w-px bg-[#B77A27]" />
            <span className="absolute right-0 top-0 h-px w-7 bg-[#B77A27]" />

            <span className="absolute bottom-0 left-0 h-7 w-px bg-[#B77A27]" />
            <span className="absolute bottom-0 left-0 h-px w-7 bg-[#B77A27]" />

            <span className="absolute bottom-0 right-0 h-7 w-px bg-[#B77A27]" />
            <span className="absolute bottom-0 right-0 h-px w-7 bg-[#B77A27]" />

            {/* IMAGE */}
            <div className="group relative overflow-hidden bg-[#FAFAF8] rounded-xl">
              <img
                src={layoutImage}
                alt="Lucknow Architecture Festival Location and Layout"
                className="h-auto max-h-[850px] w-full object-contain transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
              />

              {/* HOVER OVERLAY */}
              <div className="pointer-events-none absolute inset-0 bg-[#171717]/0 transition-all duration-500 group-hover:bg-[#171717]/[0.04]" />

              {/* PLAN TAG */}
              <div className="absolute bottom-5 left-5 bg-white/95 border border-[#D9D0C2] px-5 py-3.5 backdrop-blur-sm rounded-xl shadow-md">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.25em] text-[#B77A27] font-mono">
                  LOCATION &amp; LAYOUT
                </p>
                <p className="mt-1 font-serif text-lg font-semibold text-[#171717]">
                  Festival Master Plan
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM ACTION AREA
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-y border-[#D9D0C2] py-8 sm:py-10"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                NAVIGATION &amp; ACCESS
              </span>
              <h3 className="mt-3 max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#171717]">
                Find your way through the festival grounds &amp; exhibition zones.
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-neutral-600">
                Download the detailed layout plan to explore exhibition zones, circulation paths and key festival areas.
              </p>
            </div>

            <a
              href="/layout.pdf"
              download
              className="group flex items-center justify-between bg-[#151515] border border-[#B77A27]/30 hover:border-[#B77A27] px-6 py-5 text-white transition-all duration-300 hover:bg-[#1c1c1f] shadow-sm hover:shadow-xl rounded-xl relative overflow-hidden min-w-[280px]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B77A27] group-hover:w-1.5 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#B77A27] uppercase font-mono">
                  DOCUMENT
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  DOWNLOAD LAYOUT PLAN
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B77A27]/50 group-hover:bg-[#B77A27] group-hover:text-black flex items-center justify-center transition-all duration-300 text-[#B77A27] ml-4">
                <Download size={16} />
              </div>
            </a>
          </div>
        </motion.div>

        {/* =====================================================
            ARCHITECTURAL FOOTNOTE
        ====================================================== */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#D9D0C2] pt-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <MapPin size={15} strokeWidth={1.5} className="text-[#B77A27]" />
            <span className="text-[9.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase font-mono">
              LUCKNOW ARCHITECTURAL FESTIVAL
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[9.5px] font-bold tracking-[0.2em] text-neutral-500 uppercase font-mono">
              LOCATION · LAYOUT · EXPERIENCE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationLayoutSection;
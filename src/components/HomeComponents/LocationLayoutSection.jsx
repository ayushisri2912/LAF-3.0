import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import layoutImage from "../../assets/images/LAFmap.png";

const LocationLayoutSection = () => {
  return (
    <section
      id="location-layout"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-14 sm:pb-18 border-t border-[#E8E2D8]"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHING AGENDA SECTION THEME)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Blueprint Graph Grid matching Agenda Section */}
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 119, 6, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient Warm Atmosphere Glows */}
        <div className="absolute -left-32 top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/20 to-pink-200/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* =====================================================
            CENTERED SECTION HEADING (MATCHING AGENDA THEME)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="text-xs font-bold text-[#EA580C] font-mono">10</span>
            <span className="w-10 h-px bg-[#EA580C]/60" />
            <span className="text-[10.5px] tracking-[0.25em] uppercase text-neutral-500 font-semibold font-mono">
              VISIT THE FESTIVAL
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-[#171717]">
            Location{" "}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
              &amp; Layout.
            </span>
          </h2>

          {/* Centered Gradient Pill Underline Bar matching Agenda Section */}
          <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5 mx-auto" />
        </motion.div>

        {/* =====================================================
            MAP DRAWING AREA (FULL CLEAN MAP CONTAINER)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Top Label */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#EA580C]" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#EA580C] font-mono">
                FESTIVAL MASTER PLAN
              </span>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-400">
              LAF 3.0 · PLAN 01
            </span>
          </div>

          {/* Image Frame Card */}
          <div className="relative overflow-hidden border border-[#E8E2D8] bg-white p-3 sm:p-5 lg:p-6 rounded-[28px] shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(234,88,12,0.07)] transition-all duration-300">
            {/* Subtle Gradient Accent Marks on Corners */}
            <span className="absolute left-0 top-0 h-6 w-1 bg-gradient-to-b from-[#EA580C] to-transparent rounded-tl-[28px]" />
            <span className="absolute left-0 top-0 h-1 w-6 bg-gradient-to-r from-[#EA580C] to-transparent rounded-tl-[28px]" />

            <span className="absolute right-0 top-0 h-6 w-1 bg-gradient-to-b from-[#D91A5B] to-transparent rounded-tr-[28px]" />
            <span className="absolute right-0 top-0 h-1 w-6 bg-gradient-to-l from-[#D91A5B] to-transparent rounded-tr-[28px]" />

            {/* Master Plan Container — Full Unclipped Map */}
            <div className="group relative overflow-hidden bg-white rounded-2xl w-full flex items-center justify-center border border-[#F0EBE1] p-2 sm:p-4">
              <img
                src={layoutImage}
                alt="Lucknow Architecture Festival Location and Master Plan"
                className="w-full h-auto max-h-[800px] object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            DOWNLOAD BUTTONS (MATCHING AGENDA SECTION THEME)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 sm:mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            {
              tag: "MASTER PLAN",
              title: "DOWNLOAD LAYOUT PLAN",
              href: "/layout.pdf",
              isDownload: true,
            },
            {
              tag: "OFFICIAL BROCHURE",
              title: "DOWNLOAD EVENT BROCHURE",
              href: "#",
              isDownload: false,
            },
            {
              tag: "PARTICIPATION",
              title: "DOWNLOAD PARTICIPATION FORM",
              href: "#",
              isDownload: false,
            },
          ].map((btn) => (
            <a
              key={btn.title}
              href={btn.href}
              download={btn.isDownload}
              className="group flex items-center justify-between bg-white border border-[#E8E2D8] hover:border-[#EA580C] px-6 py-4 text-[#171717] transition-all duration-300 hover:shadow-lg rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#EA580C] to-[#D91A5B] group-hover:w-2 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#EA580C] uppercase font-mono">
                  {btn.tag}
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 group-hover:text-[#EA580C] transition-colors">
                  {btn.title}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 group-hover:border-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white flex items-center justify-center transition-all duration-300 text-[#EA580C] ml-3 shrink-0">
                <Download size={16} />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationLayoutSection;

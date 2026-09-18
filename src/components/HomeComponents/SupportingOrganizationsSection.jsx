import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";

import org01 from "../../assets/images/org01.png";
import org02 from "../../assets/images/org02.png";
import org03 from "../../assets/images/org03 (1).png";
import org04 from "../../assets/images/org04.png";
import org05 from "../../assets/images/org05.png";

const organizations = [
  {
    id: "01",
    image: org01,
    title: "Institute of Urban Designers India",
    person: "Ar. Rajat Kant Mittal",
    role: "Chairperson, IUDI Lucknow Centre",
    badge: "IUDI",
  },
  {
    id: "02",
    image: org02,
    title: "Indian Institute of Architects",
    person: "Ar. Sandeep Saraswat",
    role: "Chairman, IIA UP Chapter",
    badge: "IIA",
  },
  {
    id: "03",
    image: org03,
    title: "Indian Institute of Interior Designers",
    person: "Ar. Prasenjeet Sanyal",
    role: "Chairman, IIID Lucknow Chapter",
    badge: "IIID",
  },
  {
    id: "04",
    image: org04,
    title: "Indian Plumbing Association",
    person: "Ar. Devesh Mani Tripathi",
    role: "Chairman, IPA Lucknow Chapter",
    badge: "IPA",
  },
  {
    id: "05",
    image: org05,
    title: "Fire & Security Association of India",
    person: "Mr. Puneet Jaiswal",
    role: "Joint Secretary, FSAI Lucknow Chapter",
    badge: "FSAI",
  },
  {
    id: "06",
    image: null,
    title: "Small Industries and Manufacturers Association",
    person: "Mr. Shalendra Srivastava",
    role: "President, SIMA",
    badge: "SIMA",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SupportingOrganizationsSection() {
  return (
    <section
      id="supporting-organizations"
      className="relative overflow-hidden bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 select-none font-sans"
    >
      {/* Subtle Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#b38f38_1px,transparent_1px),linear-gradient(to_bottom,#b38f38_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-[1340px] px-5 sm:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B38F38]">
                FESTIVAL NETWORK & COLLABORATIONS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
              Supporting{" "}
              <span className="italic text-[#B38F38] font-serif">
                Organizations
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              The Lucknow Architecture Festival has collaborated with various
              organizations working in close tandem.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#E6DFD3] shadow-sm">
            <Compass className="w-5 h-5 text-[#B38F38]" />
            <div className="text-left">
              <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-800">Key Partners</div>
              <div className="text-[10px] text-neutral-500">Institutional Alliances 2026</div>
            </div>
          </div>
        </div>

        {/* ================= CARDS GRID ================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {organizations.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl border border-[#E6DFD3] hover:border-[#D4AF37]/60 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.12)] transition-all duration-300 p-5 sm:p-7 flex flex-col justify-between overflow-hidden"
            >
              {/* Corner Gold Accent Tag */}
              <div className="flex items-center justify-between mb-3 border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#B38F38] font-bold bg-[#FAF7F2] px-2.5 py-1 rounded-md border border-[#E6DFD3]">
                    ✦ {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-neutral-700 truncate max-w-[220px] sm:max-w-[300px]">
                    {item.title}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400 group-hover:text-[#B38F38] font-bold transition-colors">
                  0{item.id}
                </span>
              </div>

              {/* Main Content Area */}
              <div className="flex items-center justify-center min-h-[140px] sm:min-h-[160px] my-2 px-2">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-[130px] sm:max-h-[150px] w-auto max-w-full object-contain filter group-hover:scale-[1.03] transition-transform duration-300"
                  />
                ) : (
                  /* Custom card 06 (SIMA) fallback matching the layout of PNGs */
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-3 py-2">
                    {/* Left side: SIMA logo branding */}
                    <div className="flex items-center gap-3 justify-center sm:justify-start border-b sm:border-b-0 sm:border-r border-neutral-200 pb-3 sm:pb-0 sm:pr-5 w-full sm:w-1/2">
                      <div className="w-14 h-14 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-600 font-extrabold text-xs tracking-wider shrink-0 shadow-inner">
                        SIMA
                      </div>
                      <div className="text-left">
                        <div className="text-[11px] font-bold text-neutral-800 uppercase tracking-tight leading-tight">
                          Small Industries &
                        </div>
                        <div className="text-[10px] font-semibold text-neutral-600 uppercase">
                          Manufacturers Assoc.
                        </div>
                      </div>
                    </div>

                    {/* Right side: Representative profile */}
                    <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/2">
                      <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-300 overflow-hidden flex items-center justify-center text-neutral-700 font-bold text-sm mb-1.5 shadow-sm">
                        SS
                      </div>
                      <span className="text-xs font-bold text-neutral-900">
                        {item.person}
                      </span>
                      <span className="text-[10px] font-semibold text-amber-600">
                        {item.role}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Shimmer Bar on Hover */}
              <div className="absolute bottom-0 left-0 h-[2.5px] w-0 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM FOOTNOTE RIBBON ================= */}
        <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6DFD3] pt-6 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B38F38]" />
            <span>Building connections across architecture, design, and construction sectors.</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-[#B38F38] uppercase font-bold">
            LAF 3.0 • INSTITUTIONAL PARTNERSHIPS
          </span>
        </div>
      </div>
    </section>
  );
}
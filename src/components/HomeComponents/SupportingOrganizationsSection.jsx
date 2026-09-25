import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Users, Award, ShieldCheck } from "lucide-react";

// Organization Logos (Part 1)
import iudiLogo from "../../assets/images/org0.1.png";
import iiaLogo from "../../assets/images/org02.1.png";
import iiidLogo from "../../assets/images/org03 (1-1).png";
import ipaLogo from "../../assets/images/org04-1.png";
import fsaiLogo from "../../assets/images/org05-1.png";

// Organization Key Persons (Part 2)
import iudiPerson from "../../assets/images/conveners-1.png";
import iiaPerson from "../../assets/images/sp-2.png";
import iiidPerson from "../../assets/images/sp-3.png";
import ipaPerson from "../../assets/images/sp-4.png";
import fsaiPerson from "../../assets/images/sp-5.png";

const organizations = [
  {
    id: "01",
    logo: iudiLogo,
    personImg: iudiPerson,
    title: "Institute of Urban Designers India",
    person: "Ar. Rajat Kant Mittal",
    role: "Chairperson, IUDI Lucknow Centre",
    badge: "IUDI",
  },
  {
    id: "02",
    logo: iiaLogo,
    personImg: iiaPerson,
    title: "Indian Institute of Architects",
    person: "Ar. Sandeep Saraswat",
    role: "Chairman, IIA UP Chapter",
    badge: "IIA",
  },
  {
    id: "03",
    logo: iiidLogo,
    personImg: iiidPerson,
    title: "Indian Institute of Interior Designers",
    person: "Ar. Prasenjeet Sanyal",
    role: "Chairman, IIID Lucknow Chapter",
    badge: "IIID",
  },
  {
    id: "04",
    logo: ipaLogo,
    personImg: ipaPerson,
    title: "Indian Plumbing Association",
    person: "Ar. Devesh Mani Tripathi",
    role: "Chairman, IPA Lucknow Chapter",
    badge: "IPA",
  },
  {
    id: "05",
    logo: fsaiLogo,
    personImg: fsaiPerson,
    title: "Fire & Security Association of India",
    person: "Mr. Puneet Jaiswal",
    role: "Joint Secretary, FSAI Lucknow Chapter",
    badge: "FSAI",
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
      className="relative overflow-hidden bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 select-none font-sans border-t border-[#E6DFD3]"
    >
      {/* Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#b38f38_1px,transparent_1px),linear-gradient(to_bottom,#b38f38_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* =====================================================
            PART 1: SUPPORTING ORGANIZATIONS (LOGOS ONLY)
        ====================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#B38F38]">
                  PART 01 · INSTITUTIONAL ALLIANCES
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
                Supporting{" "}
                <span className="italic text-[#B38F38] font-serif font-normal">
                  Organizations
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                The Lucknow Architecture Festival has collaborated with premier professional institutions working across urban planning, architecture, design, and engineering.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#E6DFD3] shadow-2xs">
              <Compass className="w-5 h-5 text-[#B38F38]" />
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-800">Key Partners</div>
                <div className="text-[10px] font-mono text-neutral-500">5 Institutional Logos</div>
              </div>
            </div>
          </div>

          {/* PART 1 LOGOS GRID (5 Items) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {organizations.map((item) => (
              <motion.div
                key={`logo-${item.id}`}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl border border-[#E6DFD3] hover:border-[#D4AF37]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)] transition-all duration-300 p-6 flex flex-col justify-between items-center text-center overflow-hidden min-h-[220px]"
              >
                {/* Header Tag */}
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#B38F38] font-bold bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#E6DFD3]">
                    ✦ {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-[#B38F38] font-bold transition-colors">
                    {item.id}
                  </span>
                </div>

                {/* Logo Display */}
                <div className="flex-1 flex items-center justify-center p-3 my-2 w-full">
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="max-h-[85px] sm:max-h-[95px] w-auto max-w-full object-contain filter group-hover:scale-[1.05] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xs font-semibold text-neutral-800 group-hover:text-[#B38F38] transition-colors leading-snug mt-2 line-clamp-2">
                  {item.title}
                </h3>

                {/* Bottom Shimmer Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="relative my-16 sm:my-20 border-t border-[#E6DFD3] flex items-center justify-center">
          <div className="absolute bg-[#FAF8F5] px-6 text-[10px] font-mono tracking-[0.3em] uppercase text-[#B38F38] font-bold flex items-center gap-2">
            <span>❖</span>
            <span>LAF 3.0 ORGANIZATIONAL REPRESENTATIVES</span>
            <span>❖</span>
          </div>
        </div>

        {/* =====================================================
            PART 2: SUPPORTING KEY PERSONS / LEADERSHIP (PERSONS ONLY)
        ====================================================== */}
        <div>
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#B38F38]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#B38F38]">
                  PART 02 · ORGANIZATIONAL LEADERSHIP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
                Supporting{" "}
                <span className="italic text-[#B38F38] font-serif font-normal">
                  Leadership
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                Distinguished chairpersons, presidents, and secretaries representing our partner organizations in exact order of collaboration.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-[#E6DFD3] shadow-2xs">
              <ShieldCheck className="w-5 h-5 text-[#B38F38]" />
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-800">Key Persons</div>
                <div className="text-[10px] font-mono text-neutral-500">5 Representatives</div>
              </div>
            </div>
          </div>

          {/* PART 2 PERSONS GRID (5 Items - Aligned 1-to-1 with Logos) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {organizations.map((item) => (
              <motion.div
                key={`person-${item.id}`}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl border border-[#E6DFD3] hover:border-[#D4AF37]/70 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)] transition-all duration-300 p-6 flex flex-col items-center text-center overflow-hidden min-h-[260px]"
              >
                {/* Header Tag */}
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-[#B38F38] font-bold bg-[#FAF7F2] px-2.5 py-0.5 rounded-md border border-[#E6DFD3]">
                    ✦ {item.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-[#B38F38] font-bold transition-colors">
                    {item.id}
                  </span>
                </div>

                {/* Circular Person Portrait Avatar */}
                <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(183,122,39,0.2)] mb-4 shrink-0">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                    <img
                      src={item.personImg}
                      alt={item.person}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Name & Role */}
                <div className="w-full flex-1 flex flex-col justify-center">
                  <h3 className="font-serif text-base font-semibold text-neutral-900 group-hover:text-[#B38F38] transition-colors leading-tight">
                    {item.person}
                  </h3>
                  <p className="text-[11px] font-medium text-[#B38F38] mt-1 leading-snug">
                    {item.role}
                  </p>
                  <p className="text-[9.5px] text-neutral-500 font-mono mt-1 uppercase tracking-wider truncate">
                    {item.title}
                  </p>
                </div>

                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Footnote Ribbon */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6DFD3] pt-6 text-xs text-neutral-500">
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
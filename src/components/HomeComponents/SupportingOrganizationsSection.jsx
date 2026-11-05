import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Compass, Users, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

// Organization Logos (Part 1)
import iudiLogo from "../../assets/images/suplogo2.png";
import iiaLogo from "../../assets/images/suplogo1.png";
import iiidLogo from "../../assets/images/suplogo3.png";
import ipaLogo from "../../assets/images/suplogo4.png";
import fsaiLogo from "../../assets/images/suplogo5.png";
import itpiLogo from "../../assets/images/suplogo6.png";
import yacaLogo from "../../assets/images/suplogo7.png";

// Organization Key Persons (Part 2)
import iudiPerson from "../../assets/images/conveners-1.webp";
import iiaPerson from "../../assets/images/sp-2.webp";
import iiidPerson from "../../assets/images/sup3.png";
import ipaPerson from "../../assets/images/sp-4.webp";
import fsaiPerson from "../../assets/images/sp-5.webp";
import itpiPerson from "../../assets/images/sup2.png";
import yacaPerson from "../../assets/images/sup4.png";


const organizations = [
  {
    id: "01",
    logo: iudiLogo,
    personImg: iudiPerson,
    person: "Ar. Rajat Kant Mittal",
    role: "Chairperson, IUDI Lucknow Centre",
    badge: "IUDI",
  },
  {
    id: "02",
    logo: iiaLogo,
    personImg: iiaPerson,
    person: "Ar. Sandeep Saraswat",
    role: "Chairman, IIA ALL UP Chapter",
    badge: "IIA",
  },
  {
    id: "03",
    logo: iiidLogo,
    personImg: iiidPerson,
    person: "Ar. Aviral Agrawal",
    role: "Chairman, IIID Lucknow Chapter",
    badge: "IIID",
  },
  {
    id: "04",
    logo: ipaLogo,
    personImg: ipaPerson,
    person: "Ar. Devesh Mani Tripathi",
    role: "Chairman, IPA Lucknow Chapter",
    badge: "IPA",
  },
  {
    id: "05",
    logo: fsaiLogo,
    personImg: fsaiPerson,
    person: "Mr. Puneet Jaiswal",
    role: "Joint Secretary, FSAI Lucknow Chapter",
    badge: "FSAI",
  },
  {
    id: "06",
    logo: itpiLogo,
    personImg: itpiPerson,
    person: "Tpr. Anoop Kumar Srivastava",
    role: "President -ITPI Lucknow Chapter ",
    badge: "ITPI",
  },
  {
    id: "07",
    logo: yacaLogo,
    personImg: yacaPerson,
    person: "Ar. Vishal Mathur",
    role: "President -YACA",
    badge: "YACA",
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
  const sliderRef = useRef(null);
  const sliderRef2 = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      const cardW = ref.current.firstChild?.offsetWidth ?? 240;
      ref.current.scrollBy({ left: dir * (cardW + 20), behavior: "smooth" });
    }
  };
  return (
    <section
      id="supporting-organizations"
      className="relative overflow-hidden bg-[#FAF8F5] pt-16 sm:pt-20 lg:pt-24 pb-2 sm:pb-3 lg:pb-4 select-none font-sans border-t border-[#E6DFD3]"
    >
      {/* Subtle grid — themed purple/orange tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#930777_1px,transparent_1px),linear-gradient(to_bottom,#FB7801_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Ambient glow — theme colors */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #FB7801, #EC2656)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #930777, #3C086E)" }} />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* =====================================================
            PART 1: SUPPORTING ORGANIZATIONS (LOGOS ONLY)
        ====================================================== */}
        <div className="mb-16 sm:mb-20">
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EC2656]"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
                  style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  PART 01 · INSTITUTIONAL ALLIANCES
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
                Supporting{" "}
                <span className="italic font-serif font-normal"
                  style={{ background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Organizations
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                The Lucknow Architecture Festival has collaborated with premier professional institutions working across urban planning, architecture, design, and engineering.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/30 shadow-sm text-white"
              style={{ background: "linear-gradient(90deg, #FB7801 0%, #EC2656 40%, #930777 80%, #3C086E 100%)" }}>
              <Compass className="w-5 h-5 text-amber-300" />
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white">Key Partners</div>
                <div className="text-[10px] font-mono text-white/70">7 Institutional Logos</div>
              </div>
            </div>
          </div>

          {/* PART 1 LOGOS — Horizontal Slider */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll(sliderRef, -1)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E6DFD3] shadow-md flex items-center justify-center hover:border-[#EC2656]/40 hover:shadow-lg transition-all duration-200 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#EC2656] group-hover:scale-110 transition-transform" />
            </button>

            {/* Scrollable track */}
            <div
              ref={sliderRef}
              className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2"
              style={{ scrollbarWidth: "none" }}
            >
              {organizations.map((item) => (
                <motion.div
                  key={`logo-${item.id}`}
                  variants={cardVariants}
                  className="group relative bg-white rounded-2xl border border-[#E6DFD3] hover:border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(236,38,86,0.12)] transition-all duration-300 p-6 flex flex-col justify-between items-center text-center overflow-hidden shrink-0 w-[220px] min-h-[230px]"
                >
                  {/* Header Tag */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-bold bg-gradient-to-r from-orange-50 to-purple-50 px-2.5 py-0.5 rounded-md border border-orange-100/80"
                      style={{ color: "#EC2656" }}>
                      ✦ {item.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 group-hover:text-[#EC2656] font-bold transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Logo Display */}
                  <div className="flex-1 flex items-center justify-center p-3 my-2 w-full">
                    <img
                      src={item.logo}
                      alt={item.title}
                      className="max-h-[110px] sm:max-h-[120px] w-auto max-w-full object-contain group-hover:scale-[1.06] transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs font-semibold text-neutral-800 group-hover:text-[#EC2656] transition-colors leading-snug mt-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Bottom Shimmer Line — theme gradient */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: "linear-gradient(90deg, #FB7801, #EC2656, #930777, #3C086E)" }} />
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll(sliderRef, 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E6DFD3] shadow-md flex items-center justify-center hover:border-[#EC2656]/40 hover:shadow-lg transition-all duration-200 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#EC2656] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Divider — themed */}
        

        {/* =====================================================
            PART 2: SUPPORTING KEY PERSONS / LEADERSHIP (PERSONS ONLY)
        ====================================================== */}
        <div>
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-3.5 flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#EC2656]" />
                <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
                  style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  PART 02 · ORGANIZATIONAL LEADERSHIP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
                Supporting{" "}
                <span className="italic font-serif font-normal"
                  style={{ background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Leadership
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                Distinguished chairpersons, presidents, and secretaries representing our partner organizations in exact order of collaboration.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/30 shadow-sm text-white"
              style={{ background: "linear-gradient(90deg, #FB7801 0%, #EC2656 40%, #930777 80%, #3C086E 100%)" }}>
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white">Key Persons</div>
                <div className="text-[10px] font-mono text-white/70">7 Representatives</div>
              </div>
            </div>
          </div>

          {/* PART 2 PERSONS — Horizontal Slider */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={() => scroll(sliderRef2, -1)}
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E6DFD3] shadow-md flex items-center justify-center hover:border-[#EC2656]/40 hover:shadow-lg transition-all duration-200 group"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4 text-[#EC2656] group-hover:scale-110 transition-transform" />
            </button>

            {/* Scrollable track */}
            <div
              ref={sliderRef2}
              className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-2"
              style={{ scrollbarWidth: "none" }}
            >
              {organizations.map((item) => (
                <motion.div
                  key={`person-${item.id}`}
                  variants={cardVariants}
                  className="group relative bg-white rounded-2xl border border-[#E6DFD3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(236,38,86,0.12)] transition-all duration-300 p-6 flex flex-col items-center text-center overflow-hidden shrink-0 w-[200px] min-h-[260px] hover:border-transparent"
                >
                  {/* Header Tag */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono tracking-widest uppercase font-bold bg-gradient-to-r from-orange-50 to-purple-50 px-2.5 py-0.5 rounded-md border border-orange-100/80"
                      style={{ color: "#EC2656" }}>
                      ✦ {item.badge}
                    </span>
                    <span className="text-xs font-mono text-neutral-400 font-bold group-hover:text-[#EC2656] transition-colors">
                      {item.id}
                    </span>
                  </div>

                  {/* Circular Person Portrait Avatar */}
                  <div className="relative w-28 h-28 rounded-full p-1 transition-all duration-300 shadow-sm mb-4 shrink-0 group-hover:shadow-[0_0_22px_rgba(236,38,86,0.25)]"
                    style={{ background: "linear-gradient(135deg, #FB7801, #EC2656, #930777)" }}
                  >
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
                    <h3 className="font-serif text-base font-semibold text-neutral-900 transition-colors leading-tight group-hover:text-[#EC2656]">
                      {item.person}
                    </h3>
                    <p className="text-[11px] font-medium mt-1 leading-snug"
                      style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                      {item.role}
                    </p>
                    <p className="text-[9.5px] text-neutral-500 font-mono mt-1 uppercase tracking-wider truncate">
                      {item.title}
                    </p>
                  </div>

                  {/* Bottom Accent Bar — theme gradient */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
                    style={{ background: "linear-gradient(90deg, #FB7801, #EC2656, #930777, #3C086E)" }} />
                </motion.div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll(sliderRef2, 1)}
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#E6DFD3] shadow-md flex items-center justify-center hover:border-[#EC2656]/40 hover:shadow-lg transition-all duration-200 group"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4 text-[#EC2656] group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Footnote Ribbon */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6DFD3]/40 pt-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#EC2656]" />
            <span>Building connections across architecture, design, and construction sectors.</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest uppercase font-bold"
            style={{ background: "linear-gradient(90deg, #FB7801, #930777)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            LAF 3.0 • INSTITUTIONAL PARTNERSHIPS
          </span>
        </div>

      </div>
    </section>
  );
}
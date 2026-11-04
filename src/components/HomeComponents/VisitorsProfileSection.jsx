import React from "react";
import { motion } from "framer-motion";

/* ==========================================================================
   CUSTOM PIXEL-PERFECT SVG ICONS MATCHING VISITOR'S PROFILE
   ========================================================================== */

// 1. Architects Icon (Building + Drafting Triangle)
const ArchitectIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="8" y="10" width="14" height="26" rx="2" />
    <line x1="12" y1="16" x2="18" y2="16" />
    <line x1="12" y1="22" x2="18" y2="22" />
    <line x1="12" y1="28" x2="18" y2="28" />
    <polygon points="20,38 42,38 42,16" />
    <polygon points="26,34 38,34 38,22" />
  </svg>
);

// 2. Builders & Promoters Icon (Hard Hat Builder)
const BuilderIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#D91A5B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 20a10 10 0 0 1 20 0Z" />
    <line x1="10" y1="20" x2="38" y2="20" strokeWidth="2.5" />
    <path d="M16 20v4a8 8 0 0 0 16 0v-4" />
    <path d="M11 38v-4a7 7 0 0 1 7-7h12a7 7 0 0 1 7 7v4" />
  </svg>
);

// 3. Civil & Structural Engineers Icon (Tower / Structure)
const CivilEngineerIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#7C2D92]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="16" y="8" width="16" height="32" rx="2" />
    <path d="M24 8v32" strokeDasharray="3 3" />
    <path d="M8 38V20h8" />
    <path d="M32 20h8v18" />
    <line x1="20" y1="14" x2="28" y2="14" />
    <line x1="20" y1="20" x2="28" y2="20" />
    <line x1="20" y1="26" x2="28" y2="26" />
    <line x1="20" y1="32" x2="28" y2="32" />
  </svg>
);

// 4. Contractors Icon (Handshake)
const ContractorIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 22l8-8 10 10-6 6a3 3 0 0 1-4.2 0l-7.8-8Z" />
    <path d="M40 22l-8-8-10 10 6 6a3 3 0 0 0 4.2 0l7.8-8Z" />
    <path d="M18 32l4 4" />
    <path d="M22 36l4 4" />
  </svg>
);

// 5. Consultants Icon (Advisory Team / Cogwheel)
const ConsultantIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#D91A5B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="18" r="4.5" />
    <path d="M16 34v-2a8 8 0 0 1 16 0v2" />
    <circle cx="12" cy="22" r="3.5" />
    <path d="M6 35v-1.5a6 6 0 0 1 8-4" />
    <circle cx="36" cy="22" r="3.5" />
    <path d="M34 29.5a6 6 0 0 1 8 4V35" />
  </svg>
);

// 6. Dealers & Distributors Icon (Fast Delivery Van)
const DealerIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#7C2D92]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 32V18a2 2 0 0 1 2-2h14l6 5v11a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2Z" />
    <path d="M28 16v8h6" />
    <circle cx="18" cy="34" r="3.5" />
    <circle cx="30" cy="34" r="3.5" />
    <line x1="6" y1="21" x2="10" y2="21" />
    <line x1="4" y1="26" x2="9" y2="26" />
  </svg>
);

// 7. End Users / Buyers Icon (Shopping Cart)
const BuyerIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="36" r="3" />
    <circle cx="32" cy="36" r="3" />
    <path d="M8 12h5l4 18h18l4-14H15" />
  </svg>
);

// 8. Interior Designers Icon (Armchair + Floor Lamp)
const InteriorIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#7C2D92]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 24v10a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V24" />
    <rect x="13" y="27" width="16" height="6" rx="2" />
    <path d="M8 24h4v8H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
    <path d="M30 24h4v8h-4a2 2 0 0 0-2-2v-4a2 2 0 0 0 2-2Z" />
    <path d="M38 14l3-6h-6l3 6v22" />
    <line x1="35" y1="36" x2="41" y2="36" />
  </svg>
);

// 9. Large Warehouse Builders Icon (Warehouse Industrial Shed)
const WarehouseIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 20l16-9 16 9v17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V20Z" />
    <rect x="17" y="24" width="14" height="15" rx="1" />
    <line x1="17" y1="28" x2="31" y2="28" />
    <line x1="17" y1="32" x2="31" y2="32" />
    <line x1="17" y1="36" x2="31" y2="36" />
  </svg>
);

// 10. Govt. Officials Icon (Classical Landmark / Pillars)
const GovtIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#D91A5B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="24,10 8,18 40,18" />
    <line x1="12" y1="18" x2="12" y2="34" />
    <line x1="20" y1="18" x2="20" y2="34" />
    <line x1="28" y1="18" x2="28" y2="34" />
    <line x1="36" y1="18" x2="36" y2="34" />
    <rect x="6" y="34" width="36" height="4" rx="1" />
  </svg>
);

// 11. Faculties & Students Icon (Graduation Cap)
const EducationIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#7C2D92]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="24,12 8,20 24,28 40,20" />
    <path d="M14 23v9c0 4 4.5 7 10 7s10-3 10-7v-9" />
    <path d="M40 20v14" />
    <circle cx="40" cy="34" r="1.5" fill="currentColor" />
  </svg>
);

// 12. General Public Icon (Community People)
const PublicIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="24" cy="18" r="4.5" />
    <path d="M16 35v-2a8 8 0 0 1 16 0v2" />
    <circle cx="13" cy="22" r="3.5" />
    <path d="M7 36v-1.5a6 6 0 0 1 8-4" />
    <circle cx="35" cy="22" r="3.5" />
    <path d="M33 30.5a6 6 0 0 1 8 4V36" />
  </svg>
);

// 13. Prospective Home Buyers Icon (House with Warm Heart)
const HomeBuyerIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#D91A5B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 22l14-11 14 11v15a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V22Z" />
    <path d="M20 39v-11h8v11" />
  </svg>
);

// 14. And Many More Icon (Ellipsis Triple Dots)
const MoreIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-4.5 h-4.5 xl:w-5 xl:h-5 text-[#7C2D92]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="14" cy="24" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="24" cy="24" r="3.5" fill="currentColor" stroke="none" />
    <circle cx="34" cy="24" r="3.5" fill="currentColor" stroke="none" />
  </svg>
);

// Center Hub Silhouette Icon (Community / Audience Badge matching Navbar colors)
const CenterGroupIcon = () => (
  <svg
    viewBox="0 0 64 64"
    className="w-12 h-12 lg:w-14 lg:h-14 text-[#FFB800]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center Leader Person */}
    <circle cx="32" cy="22" r="6.5" />
    <path d="M19 46v-3a13 13 0 0 1 26 0v3" />
    {/* Left Peer */}
    <circle cx="16" cy="27" r="4.5" />
    <path d="M8 46v-2a8.5 8.5 0 0 1 11-5" />
    {/* Right Peer */}
    <circle cx="48" cy="27" r="4.5" />
    <path d="M45 39a8.5 8.5 0 0 1 11 5v2" />
  </svg>
);

/* ==========================================================================
   DATA LISTS (7 LEFT, 7 RIGHT)
   ========================================================================== */

const leftProfiles = [
  {
    icon: ArchitectIcon,
    title: "Architects",
    accentBg: "bg-orange-50/80",
    dotColor: "#EA580C",
  },
  {
    icon: BuilderIcon,
    title: "Builders & Promoters",
    accentBg: "bg-rose-50/80",
    dotColor: "#D91A5B",
  },
  {
    icon: CivilEngineerIcon,
    title: "Civil & Structural Engineers",
    accentBg: "bg-purple-50/80",
    dotColor: "#7C2D92",
  },
  {
    icon: ContractorIcon,
    title: "Contractors",
    accentBg: "bg-orange-50/80",
    dotColor: "#EA580C",
  },
  {
    icon: ConsultantIcon,
    title: "Consultants",
    accentBg: "bg-rose-50/80",
    dotColor: "#D91A5B",
  },
  {
    icon: DealerIcon,
    title: "Dealers & Distributors",
    accentBg: "bg-purple-50/80",
    dotColor: "#7C2D92",
  },
  {
    icon: BuyerIcon,
    title: "End Users/Buyers",
    accentBg: "bg-orange-50/80",
    dotColor: "#EA580C",
  },
];

const rightProfiles = [
  {
    icon: InteriorIcon,
    title: "Interior Designers",
    accentBg: "bg-purple-50/80",
    dotColor: "#7C2D92",
  },
  {
    icon: WarehouseIcon,
    title: "Large Warehouse Builders",
    accentBg: "bg-orange-50/80",
    dotColor: "#EA580C",
  },
  {
    icon: GovtIcon,
    title: "Govt. Officials",
    accentBg: "bg-rose-50/80",
    dotColor: "#D91A5B",
  },
  {
    icon: EducationIcon,
    title: "Faculties & Students",
    accentBg: "bg-purple-50/80",
    dotColor: "#7C2D92",
  },
  {
    icon: PublicIcon,
    title: "General Public",
    accentBg: "bg-orange-50/80",
    dotColor: "#EA580C",
  },
  {
    icon: HomeBuyerIcon,
    title: "Prospective home buyers...",
    accentBg: "bg-rose-50/80",
    dotColor: "#D91A5B",
  },
  {
    icon: MoreIcon,
    title: "and many more",
    accentBg: "bg-purple-50/80",
    dotColor: "#7C2D92",
  },
];

/* ==========================================================================
   VISITOR'S PROFILE COMPONENT
   ========================================================================== */

const VisitorsProfileSection = () => {
  return (
    <section
      id="visitors-profile"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-16 sm:pb-20 font-sans border-t border-[#E8E2D8]"
    >
      {/* Target anchor support for both #visitors-profile and #visitor-profile */}
      <span id="visitor-profile" className="absolute -top-24 pointer-events-none" />

      {/* ARCHITECTURAL BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0">
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

        {/* Ambient warm atmospheric glow gradients */}
        <div className="absolute -left-32 top-16 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/10 blur-3xl" />
        <div className="absolute -right-32 bottom-16 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/20 to-pink-200/10 blur-3xl" />
      </div>

      {/* Main container matching the navbar width */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER MATCHING SITE THEME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-tight">
            <span className="text-[#0B1536]">Visitor's </span>
            <span className="text-[#E11D48]">Profile</span>
          </h2>

          {/* Gradient Pill Underline Bar */}
          <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3 sm:mt-3.5" />
        </motion.div>

        {/* MAIN OUTLINE CARD CONTAINER (Matching Navbar Width) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[24px] sm:rounded-[32px] border-[2px] sm:border-[2.5px] border-[#F97316] p-4 sm:p-6 lg:p-9 shadow-[0_4px_30px_rgba(249,115,22,0.06)] relative overflow-hidden"
        >
          {/* ================= DESKTOP HUB-AND-SPOKE DIAGRAM (lg screens) ================= */}
          <div className="hidden lg:grid lg:grid-cols-12 items-center relative min-h-[520px]">
            {/* LEFT COLUMN: 7 PILL CARDS (Original full width restored) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 z-20">
              {leftProfiles.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 450, damping: 26 }}
                    className="group relative flex items-center justify-between bg-gradient-to-r from-orange-50/50 via-white to-white rounded-full border border-[#FED7AA]/60 hover:border-[#F97316] px-3.5 py-2 shadow-xs hover:shadow-[0_6px_20px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-pointer w-full"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Icon container */}
                      <div
                        className={`w-9 h-9 ${item.accentBg} rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                      >
                        <IconComponent />
                      </div>

                      {/* Text label */}
                      <span className="font-bold text-[#0F172A] group-hover:text-[#EA580C] text-[14px] xl:text-[14.5px] tracking-tight truncate transition-colors duration-200">
                        {item.title}
                      </span>
                    </div>

                    {/* Connecting Dot at Right Edge */}
                    <span
                      className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-150 ml-2"
                      style={{ backgroundColor: item.dotColor }}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* CENTER HUB: STRAIGHT ANGLED CONNECTOR SVG LINES + CENTER CIRCLE */}
            <div className="lg:col-span-2 relative flex items-center justify-center self-stretch z-10 px-0.5">
              {/* Straight / Angled Geometric Connector Lines matching Image 1 */}
              <svg
                viewBox="0 0 240 440"
                preserveAspectRatio="none"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                {/* LEFT SIDE STRAIGHT ANGLED CONNECTOR LINES (from x=0 to circle at x=76) */}
                {/* Row 0 - Architects: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 24 L 20 24 L 68 180 L 93 180" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 1 - Builders: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 89 L 25 89 L 62 190 L 85 190" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 2 - Civil Engineers: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 154 L 30 154 L 60 204 L 79 204" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 3 - Contractors: Straight Horizontal Line */}
                <path d="M 0 220 L 76 220" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 4 - Consultants: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 286 L 30 286 L 60 236 L 79 236" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 5 - Dealers: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 351 L 25 351 L 62 250 L 85 250" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 6 - Buyers: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 0 416 L 20 416 L 68 260 L 93 260" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />

                {/* RIGHT SIDE STRAIGHT ANGLED CONNECTOR LINES (from x=240 to circle at x=164) */}
                {/* Row 0 - Interior: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 24 L 220 24 L 172 180 L 147 180" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 1 - Warehouse: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 89 L 215 89 L 178 190 L 155 190" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 2 - Govt Officials: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 154 L 210 154 L 180 204 L 161 204" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 3 - Faculties & Students: Straight Horizontal Line */}
                <path d="M 240 220 L 164 220" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 4 - General Public: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 286 L 210 286 L 180 236 L 161 236" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 5 - Home buyers: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 351 L 215 351 L 178 250 L 155 250" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                {/* Row 6 - Many more: Horizontal -> Diagonal Straight -> Horizontal */}
                <path d="M 240 416 L 220 416 L 172 260 L 147 260" fill="none" stroke="#FDA4AF" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
              </svg>

              {/* Central Circle Emblem (Color matched to Image 3: Deep Royal Purple + Gold Glow) */}
              <motion.div
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className="relative w-28 h-28 xl:w-32 xl:h-32 rounded-full shadow-[0_10px_35px_rgba(78,12,123,0.35),0_0_20px_rgba(255,184,0,0.25)] border-[3px] border-[#FFB800] flex items-center justify-center z-20 cursor-pointer overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #4E0C7B 0%, #3C086E 55%, #2D0A4E 100%)",
                }}
              >
                {/* Concentric inner subtle gold/amber ring */}
                <div className="absolute inset-1.5 rounded-full border border-[#FFB800]/40 pointer-events-none" />

                {/* Top subtle sheen highlight */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 h-10 bg-white/20 blur-md rounded-full pointer-events-none" />

                {/* Center Badge Icon in Bright Golden Amber */}
                <div className="flex flex-col items-center justify-center relative z-10 drop-shadow-[0_2px_8px_rgba(255,184,0,0.4)]">
                  <CenterGroupIcon />
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: 7 PILL CARDS (Original full width restored) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2.5 z-20">
              {rightProfiles.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 450, damping: 26 }}
                    className="group relative flex items-center justify-start bg-gradient-to-l from-purple-50/40 via-white to-white rounded-full border border-[#FED7AA]/60 hover:border-[#F97316] px-3.5 py-2 shadow-xs hover:shadow-[0_6px_20px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-pointer w-full"
                  >
                    {/* Connecting Dot at Left Edge */}
                    <span
                      className="w-2.5 h-2.5 rounded-full border-2 border-white shadow-xs shrink-0 transition-transform duration-300 group-hover:scale-150 mr-2.5"
                      style={{ backgroundColor: item.dotColor }}
                    />

                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      {/* Icon container */}
                      <div
                        className={`w-9 h-9 ${item.accentBg} rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                      >
                        <IconComponent />
                      </div>

                      {/* Text label */}
                      <span className="font-bold text-[#0F172A] group-hover:text-[#EA580C] text-[14px] xl:text-[14.5px] tracking-tight truncate transition-colors duration-200">
                        {item.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= MOBILE / TABLET RESPONSIVE VIEW (< lg screens) ================= */}
          <div className="lg:hidden flex flex-col items-center space-y-6">
            {/* Center Circle Emblem (matching Image 3 colors) */}
            <div
              className="w-24 h-24 rounded-full shadow-lg border-[3px] border-[#FFB800] flex items-center justify-center relative my-2"
              style={{
                background: "linear-gradient(135deg, #4E0C7B 0%, #3C086E 55%, #2D0A4E 100%)",
              }}
            >
              <div className="absolute inset-1 rounded-full border border-[#FFB800]/40 pointer-events-none" />
              <CenterGroupIcon />
            </div>

            {/* Grid of all 14 profile pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              {[...leftProfiles, ...rightProfiles].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.015 }}
                    className="flex items-center gap-2.5 bg-white rounded-full border border-orange-200/80 hover:border-[#F97316] p-2 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <div
                      className={`w-8 h-8 ${item.accentBg} rounded-full flex items-center justify-center shrink-0`}
                    >
                      <IconComponent />
                    </div>
                    <span className="font-bold text-[#0F172A] text-xs sm:text-[13.5px] leading-tight truncate">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitorsProfileSection;

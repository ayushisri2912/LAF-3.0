import React from "react";
import { motion } from "framer-motion";

/* ==========================================================================
   CUSTOM PIXEL-PERFECT SVG ICONS MATCHING DESIGN
   ========================================================================== */

// 1. Calendar Icon (Orange)
const CalendarIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="7" y="10" width="34" height="31" rx="6" />
    <line x1="7" y1="18" x2="41" y2="18" />
    <path d="M15 6v7M33 6v7" />
    <circle cx="15" cy="25" r="1.5" fill="currentColor" />
    <circle cx="24" cy="25" r="1.5" fill="currentColor" />
    <circle cx="33" cy="25" r="1.5" fill="currentColor" />
    <circle cx="15" cy="33" r="1.5" fill="currentColor" />
    <circle cx="24" cy="33" r="1.5" fill="currentColor" />
    <circle cx="33" cy="33" r="1.5" fill="currentColor" />
  </svg>
);

// 2. AV Van with Megaphone Icon (Purple)
const VanIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E22CE]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Van body */}
    <path d="M7 32V20a3 3 0 0 1 3-3h18l7 5v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2Z" />
    {/* Windshield */}
    <path d="M28 17v8h7" />
    {/* Wheels */}
    <circle cx="15" cy="35" r="3.5" />
    <circle cx="29" cy="35" r="3.5" />
    {/* Loudspeaker / Megaphone on roof */}
    <path d="M16 17l6-6v6Z" />
    <line x1="22" y1="14" x2="24" y2="14" />
    {/* Soundwaves */}
    <path d="M27 11a4.5 4.5 0 0 1 0 6" />
    <path d="M30 9a8 8 0 0 1 0 10" />
  </svg>
);

// 3. Billboard / Hoarding Icon (Rose/Pink)
const BillboardIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Outer billboard board */}
    <rect x="6" y="9" width="36" height="22" rx="3" />
    {/* Inner frame */}
    <rect x="9" y="12" width="30" height="16" rx="1.5" strokeDasharray="3 2" />
    {/* Support legs */}
    <line x1="16" y1="31" x2="16" y2="40" />
    <line x1="32" y1="31" x2="32" y2="40" />
    {/* Base feet */}
    <line x1="12" y1="40" x2="20" y2="40" />
    <line x1="28" y1="40" x2="36" y2="40" />
    {/* Support struts */}
    <line x1="16" y1="34" x2="24" y2="31" />
    <line x1="32" y1="34" x2="24" y2="31" />
  </svg>
);

// 4. Leaflets / Flyers Icon (Amber)
const LeafletIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Back stacked card */}
    <rect x="14" y="7" width="26" height="29" rx="3" />
    {/* Front leaflet card */}
    <rect x="8" y="12" width="26" height="29" rx="3" fill="#FFF9EB" />
    {/* Picture frame */}
    <rect x="12" y="16" width="18" height="11" rx="1.5" />
    <path d="M13 24l4-3 5 4 4-2.5 4 2.5" />
    <circle cx="16" cy="19.5" r="1.2" fill="currentColor" />
    {/* Text lines */}
    <line x1="12" y1="31" x2="26" y2="31" />
    <line x1="12" y1="35" x2="22" y2="35" />
  </svg>
);

// 5. Radio Icon (Purple)
const RadioIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E22CE]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="6" y="14" width="36" height="24" rx="5" />
    {/* Speaker grill */}
    <circle cx="29" cy="26" r="6.5" />
    <circle cx="29" cy="26" r="2.5" />
    {/* Controls on left */}
    <line x1="12" y1="20" x2="19" y2="20" />
    <line x1="12" y1="26" x2="19" y2="26" />
    <line x1="12" y1="32" x2="19" y2="32" />
    {/* Antenna */}
    <line x1="14" y1="14" x2="24" y2="6" />
    <circle cx="24" cy="6" r="1.5" fill="currentColor" />
    {/* Sound waves from antenna */}
    <path d="M28 5.5a4 4 0 0 1 3 3.5" />
    <path d="M30 3a7 7 0 0 1 5 6" />
  </svg>
);

// 6. Newspaper Icon (Orange)
const NewspaperIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#EA580C]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="7" y="8" width="34" height="32" rx="3.5" />
    {/* NEWS title banner */}
    <rect x="11" y="12" width="26" height="7.5" rx="1.5" fill="#EA580C" stroke="none" />
    <text
      x="24"
      y="18"
      fill="#FFFFFF"
      fontSize="6"
      fontWeight="900"
      letterSpacing="0.08em"
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      NEWS
    </text>
    {/* Thumbnail photo */}
    <rect x="11" y="23" width="10" height="13" rx="1.5" />
    {/* Text columns */}
    <line x1="24" y1="24" x2="37" y2="24" />
    <line x1="24" y1="28" x2="37" y2="28" />
    <line x1="24" y1="32" x2="37" y2="32" />
    <line x1="24" y1="36" x2="33" y2="36" />
  </svg>
);

// 7. Mall & Market Storefront Icon (Purple)
const StoreMallIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#7E22CE]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Storefront building */}
    <path d="M8 20v18a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20" />
    {/* Awning / canopy */}
    <path d="M6 14h36l-3 7H9L6 14Z" />
    <path d="M12 14v7M18 14v7M24 14v7M30 14v7M36 14v7" />
    {/* Door */}
    <path d="M20 40v-10h8v10" />
    {/* Windows */}
    <rect x="11.5" y="25" width="5.5" height="7" rx="1" />
    <rect x="31" y="25" width="5.5" height="7" rx="1" />
  </svg>
);

// 8. Open Book / Advertorials Icon (Rose/Pink)
const OpenBookIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M24 35c-4-3-8-4-15-4v-18c7 0 11 1 15 4 4-3 8-4 15-4v18c-7 0-11 1-15 4Z" />
    <line x1="24" y1="13" x2="24" y2="35" />
    {/* Editorial lines on pages */}
    <line x1="13" y1="19" x2="20" y2="20" />
    <line x1="13" y1="24" x2="20" y2="25" />
    <line x1="13" y1="29" x2="19" y2="30" />
    <line x1="28" y1="20" x2="35" y2="19" />
    <line x1="28" y1="25" x2="35" y2="24" />
    <line x1="28" y1="30" x2="34" y2="29" />
  </svg>
);

// 9. Press Conference Icon (Amber)
const PressConferenceIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#F59E0B]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Podium */}
    <path d="M14 27l-2 13h24l-2-13" />
    <line x1="10" y1="27" x2="38" y2="27" />
    {/* Speaker figure */}
    <circle cx="24" cy="13" r="4.5" />
    <path d="M17 27v-3.5a7 7 0 0 1 14 0V27" />
    {/* Microphones on lectern */}
    <line x1="20" y1="27" x2="21.5" y2="21" />
    <circle cx="21.5" cy="20" r="1.3" fill="currentColor" />
    <line x1="28" y1="27" x2="26.5" y2="21" />
    <circle cx="26.5" cy="20" r="1.3" fill="currentColor" />
    <line x1="24" y1="27" x2="24" y2="20" />
    <circle cx="24" cy="19.2" r="1.3" fill="currentColor" />
  </svg>
);

// 10. Social Media 4-Grid Icon (Purple badges matching Image 2)
const SocialMediaIcon = () => (
  <div className="grid grid-cols-2 gap-0.5 w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]">
    {/* Facebook */}
    <div className="bg-[#6B21A8] rounded-[4px] flex items-center justify-center text-white text-[10px] font-bold font-sans shadow-xs">
      f
    </div>
    {/* Instagram */}
    <div className="bg-[#6B21A8] rounded-[4px] flex items-center justify-center text-white p-0.5 shadow-xs">
      <svg
        viewBox="0 0 24 24"
        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    </div>
    {/* Twitter / X */}
    <div className="bg-[#6B21A8] rounded-[4px] flex items-center justify-center text-white text-[8.5px] font-bold font-sans shadow-xs">
      𝕏
    </div>
    {/* LinkedIn */}
    <div className="bg-[#6B21A8] rounded-[4px] flex items-center justify-center text-white text-[8.5px] font-bold font-sans shadow-xs">
      in
    </div>
  </div>
);

// 11. SMS / Email Blasting Icon (Rose/Pink)
const EmailBlastIcon = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-5 h-5 sm:w-6 sm:h-6 text-[#E11D48]"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Motion speed streaks */}
    <line x1="5" y1="20" x2="13" y2="20" strokeWidth="2" />
    <line x1="3" y1="25" x2="12" y2="25" strokeWidth="2.5" />
    <line x1="6" y1="30" x2="14" y2="30" strokeWidth="2" />
    {/* Flying envelope */}
    <rect x="15" y="14" width="27" height="20" rx="3.5" />
    <path d="M15 16.5l13.5 10 13.5-10" />
    <path d="M15 32l9.5-7.5M42 32l-9.5-7.5" />
  </svg>
);

/* ==========================================================================
   DATA ITEMS
   - Left Column: 5 items
   - Right Column: 5 items
   - Centered: 1 item (SMS/E-mail)
   ========================================================================== */

const leftColumnItems = [
  {
    icon: CalendarIcon,
    bgColor: "bg-[#FFF5EB]", // Warm light orange
    text: "Pre-publicity will start 7–10 days prior to the event",
  },
  {
    icon: VanIcon,
    bgColor: "bg-[#F5EEFD]", // Light purple
    text: "2 AV Vans will cover the entire potential market",
  },
  {
    icon: BillboardIcon,
    bgColor: "bg-[#FFF0F4]", // Light rose/pink
    text: "Hoarding, Banners, Posters, etc. will be put across City & nearby",
  },
  {
    icon: LeafletIcon,
    bgColor: "bg-[#FFF9EB]", // Light amber
    text: "Lucky draw leaflets will be distributed through Newspaper Ads, Inserts, Pre-promotion Vans, etc.",
  },
  {
    icon: RadioIcon,
    bgColor: "bg-[#F5EEFD]", // Light purple
    text: "Radio jingles & Ads",
  },
];

const rightColumnItems = [
  {
    icon: NewspaperIcon,
    bgColor: "bg-[#FFF5EB]", // Warm light orange
    text: "Newspaper Ads",
  },
  {
    icon: StoreMallIcon,
    bgColor: "bg-[#F5EEFD]", // Light purple
    text: "Mall & Market activation",
  },
  {
    icon: OpenBookIcon,
    bgColor: "bg-[#FFF0F4]", // Light rose/pink
    text: "Publicity through advertorials and editorials",
  },
  {
    icon: PressConferenceIcon,
    bgColor: "bg-[#FFF9EB]", // Light amber
    text: "Press conference",
  },
  {
    icon: SocialMediaIcon,
    bgColor: "bg-[#F5EEFD]", // Light purple
    text: "Social Media promotion via Facebook, Instagram, Twitter, LinkedIn etc.",
  },
];

const centeredItem = {
  icon: EmailBlastIcon,
  bgColor: "bg-[#FFF0F4]", // Light rose/pink
  text: "SMS/E-mail blasting and many more",
};

/* ==========================================================================
   PRE-PUBLICITY & OUTREACH SECTION COMPONENT
   ========================================================================== */

const PrePublicitySection = () => {
  return (
    <section
      id="pre-publicity"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-16 sm:pb-20 font-sans border-t border-[#E8E2D8]"
    >
      {/* Target anchor support for both #pre-publicity and #outreach */}
      <span id="outreach" className="absolute -top-24 pointer-events-none" />

      {/* ARCHITECTURAL BLUEPRINT GRID BACKGROUND (Matching Agenda Section) */}
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

        {/* Ambient warm and purple glows */}
        <div className="absolute -left-32 top-16 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/10 blur-3xl" />
        <div className="absolute -right-32 bottom-16 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/20 to-pink-200/10 blur-3xl" />
      </div>

      {/* Width exactly matches the sticky navbar (max-w-[1400px] px-5 sm:px-8 lg:px-12) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER MATCHING IMAGE 2 & AGENDAS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight leading-tight">
            <span className="text-[#0B1536]">Pre-Publicity </span>
            <span className="text-[#E11D48]">&amp; Outreach</span>
          </h2>

          {/* Gradient Pill Underline Bar */}
          <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3 sm:mt-3.5" />
        </motion.div>

        {/* MAIN OUTLINE CARD CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-[24px] sm:rounded-[32px] border-[2px] sm:border-[2.5px] border-[#F97316] p-4 sm:p-6 lg:py-6 lg:px-8 shadow-[0_4px_30px_rgba(249,115,22,0.06)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* ================= LEFT COLUMN (5 ITEMS) ================= */}
            <div className="md:pr-5 lg:pr-8 md:border-r md:border-[#E5E7EB] space-y-1">
              {leftColumnItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLast = index === leftColumnItems.length - 1;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 450, damping: 26 }}
                    className={`group relative flex items-center gap-3 sm:gap-3.5 px-3 py-2.5 sm:py-3 rounded-2xl border border-transparent hover:border-[#F97316]/50 hover:bg-gradient-to-r hover:from-orange-50/90 hover:via-white hover:to-amber-50/40 hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-pointer ${
                      !isLast ? "border-b border-b-[#E5E7EB] hover:border-b-[#F97316]/50" : ""
                    }`}
                  >
                    {/* Left edge accent indicator bar on hover */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b from-[#EA580C] to-[#D91A5B] rounded-r-full transition-all duration-300" />

                    {/* Icon Square Container */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xs`}
                    >
                      <IconComponent />
                    </div>

                    {/* Item Description Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#0F172A] group-hover:text-[#EA580C] text-xs sm:text-[12px] md:text-[11.5px] lg:text-[12px] xl:text-[12.8px] leading-snug tracking-tight md:whitespace-nowrap transition-colors duration-200">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= RIGHT COLUMN (5 ITEMS) ================= */}
            <div className="md:pl-5 lg:pl-8 pt-3 md:pt-0 border-t md:border-t-0 border-[#E5E7EB] space-y-1">
              {rightColumnItems.map((item, index) => {
                const IconComponent = item.icon;
                const isLast = index === rightColumnItems.length - 1;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.015 }}
                    transition={{ type: "spring", stiffness: 450, damping: 26 }}
                    className={`group relative flex items-center gap-3 sm:gap-3.5 px-3 py-2.5 sm:py-3 rounded-2xl border border-transparent hover:border-[#F97316]/50 hover:bg-gradient-to-r hover:from-orange-50/90 hover:via-white hover:to-amber-50/40 hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-pointer ${
                      !isLast ? "border-b border-b-[#E5E7EB] hover:border-b-[#F97316]/50" : ""
                    }`}
                  >
                    {/* Left edge accent indicator bar on hover */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b from-[#EA580C] to-[#D91A5B] rounded-r-full transition-all duration-300" />

                    {/* Icon Square Container */}
                    <div
                      className={`w-10 h-10 sm:w-11 sm:h-11 ${item.bgColor} rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xs`}
                    >
                      <IconComponent />
                    </div>

                    {/* Item Description Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[#0F172A] group-hover:text-[#EA580C] text-xs sm:text-[12px] md:text-[11.5px] lg:text-[12px] xl:text-[12.8px] leading-snug tracking-tight md:whitespace-nowrap transition-colors duration-200">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= CENTERED SMS / EMAIL POINT (ACROSS BOTH COLUMNS) ================= */}
            <div className="md:col-span-2 pt-4 sm:pt-5 mt-2 border-t border-[#E5E7EB] flex justify-center">
              <motion.div
                whileHover={{ y: -2.5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 450, damping: 26 }}
                className="group relative inline-flex items-center gap-3 sm:gap-3.5 px-5 sm:px-8 py-2.5 sm:py-3 rounded-2xl border border-transparent hover:border-[#F97316]/50 hover:bg-gradient-to-r hover:from-orange-50/90 hover:via-white hover:to-amber-50/40 hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] transition-all duration-300 cursor-pointer"
              >
                {/* Left edge accent indicator bar on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 bg-gradient-to-b from-[#EA580C] to-[#D91A5B] rounded-r-full transition-all duration-300" />

                {/* Icon Container */}
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 ${centeredItem.bgColor} rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xs`}
                >
                  <EmailBlastIcon />
                </div>

                {/* Text */}
                <p className="font-bold text-[#0F172A] group-hover:text-[#EA580C] text-xs sm:text-[12px] md:text-[12px] lg:text-[12.5px] xl:text-[13px] leading-snug tracking-tight md:whitespace-nowrap transition-colors duration-200">
                  {centeredItem.text}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrePublicitySection;

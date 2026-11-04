import React from 'react';
import { motion } from 'framer-motion';

// ================= 1. CUSTOM ARCHITECTURAL SKETCH (Lucknow Monument Watermark) =================
const RumiDarwazaSketch = () => (
  <svg
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-[260px] h-auto pointer-events-none select-none opacity-20"
  >
    {/* Base line */}
    <line x1="10" y1="210" x2="310" y2="210" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="20" y1="214" x2="300" y2="214" stroke="#F97316" strokeWidth="1" strokeLinecap="round" />

    {/* Central Grand Archway (Rumi Darwaza) */}
    <path
      d="M100 210 V140 C100 85 130 50 160 40 C190 50 220 85 220 140 V210"
      stroke="#F97316"
      strokeWidth="1.5"
    />
    {/* Multi-foil inner scalloped arch */}
    <path
      d="M112 210 V145 C112 125 120 115 130 115 C136 100 145 92 160 85 C175 92 184 100 190 115 C200 115 208 125 208 145 V210"
      stroke="#F97316"
      strokeWidth="1.2"
    />
    <path
      d="M125 210 V155 C125 135 138 120 160 110 C182 120 195 135 195 155 V210"
      stroke="#F97316"
      strokeWidth="1"
    />

    {/* Central Lotus Finial & Spire */}
    <path d="M160 40 V15 M156 22 C160 12 160 12 164 22" stroke="#F97316" strokeWidth="1.5" />
    <circle cx="160" cy="12" r="2.5" stroke="#F97316" strokeWidth="1" />

    {/* Archway Decorative Floral Cresting */}
    <path
      d="M100 135 C95 120 102 105 110 95 C120 85 130 75 145 60 C152 50 160 42 160 42 C160 42 168 50 175 60 C190 75 200 85 210 95 C218 105 225 120 220 135"
      stroke="#F97316"
      strokeWidth="1"
      strokeDasharray="3 2"
    />

    {/* Left Flanking Minaret / Turret */}
    <rect x="78" y="90" width="18" height="120" stroke="#F97316" strokeWidth="1.2" />
    <line x1="78" y1="120" x2="96" y2="120" stroke="#F97316" strokeWidth="0.8" />
    <line x1="78" y1="150" x2="96" y2="150" stroke="#F97316" strokeWidth="0.8" />
    <line x1="78" y1="180" x2="96" y2="180" stroke="#F97316" strokeWidth="0.8" />
    {/* Left Cupola / Chhatri */}
    <path d="M76 90 C76 75 87 65 87 65 C87 65 98 75 98 90 Z" stroke="#F97316" strokeWidth="1.2" />
    <line x1="87" y1="65" x2="87" y2="52" stroke="#F97316" strokeWidth="1" />

    {/* Right Flanking Minaret / Turret */}
    <rect x="224" y="90" width="18" height="120" stroke="#F97316" strokeWidth="1.2" />
    <line x1="224" y1="120" x2="242" y2="120" stroke="#F97316" strokeWidth="0.8" />
    <line x1="224" y1="150" x2="242" y2="150" stroke="#F97316" strokeWidth="0.8" />
    <line x1="224" y1="180" x2="242" y2="180" stroke="#F97316" strokeWidth="0.8" />
    {/* Right Cupola / Chhatri */}
    <path d="M222 90 C222 75 233 65 233 65 C233 65 244 75 244 90 Z" stroke="#F97316" strokeWidth="1.2" />
    <line x1="233" y1="65" x2="233" y2="52" stroke="#F97316" strokeWidth="1" />

    {/* Outer Wings / Arched Colonnade */}
    <path d="M40 210 V140 C40 120 55 110 78 110" stroke="#F97316" strokeWidth="1" />
    <path d="M48 210 V155 C48 135 60 125 78 125" stroke="#F97316" strokeWidth="0.8" />
    <rect x="25" y="115" width="14" height="95" stroke="#F97316" strokeWidth="1" />
    <path d="M23 115 C23 102 32 95 32 95 C32 95 41 102 41 115 Z" stroke="#F97316" strokeWidth="1" />

    <path d="M280 210 V140 C280 120 265 110 242 110" stroke="#F97316" strokeWidth="1" />
    <path d="M272 210 V155 C272 135 260 125 242 125" stroke="#F97316" strokeWidth="0.8" />
    <rect x="281" y="115" width="14" height="95" stroke="#F97316" strokeWidth="1" />
    <path d="M279 115 C279 102 288 95 288 95 C288 95 297 102 297 115 Z" stroke="#F97316" strokeWidth="1" />
  </svg>
);

// ================= 2. ICONS TAILORED TO REFERENCE DESIGN =================
const IconNetwork = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="8" r="3.5" />
    <circle cx="7" cy="18" r="3" />
    <circle cx="25" cy="18" r="3" />
    <path d="M12 28 C12 24 14 22 16 22 C18 22 20 24 20 28" />
    <path d="M4 28 C4 25 5.5 24 7 24" />
    <path d="M28 28 C28 25 26.5 24 25 24" />
    <path d="M10 16 L14 10" />
    <path d="M22 16 L18 10" />
  </svg>
);

const IconCube = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 L27 9 L27 21 L16 27 L5 21 L5 9 Z" />
    <path d="M16 3 L16 27" />
    <path d="M5 9 L16 15 L27 9" />
    <circle cx="16" cy="15" r="2.5" fill={color} />
  </svg>
);

const IconHandshake = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14 L10 8 L18 13 L22 9 L28 14" />
    <path d="M7 17 L12 22 L16 18 L20 22 L25 17" />
    <path d="M11 15 L14 18" />
    <path d="M18 14 L21 17" />
  </svg>
);

const IconRocket = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 3 C21 6 24 11 24 17 L19 22 L10 13 L15 8 C15 8 16 3 16 3 Z" />
    <circle cx="17" cy="12" r="2" fill={color} />
    <path d="M10 13 L6 14 L9 18" />
    <path d="M19 22 L18 26 L14 23" />
    <path d="M9 23 L4 28 M8 27 L13 22" />
  </svg>
);

const IconDistributorsTree = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="16" cy="6" r="3" />
    <path d="M16 9 V16" />
    <path d="M7 16 H25" />
    <path d="M7 16 V22" />
    <path d="M16 16 V22" />
    <path d="M25 16 V22" />
    <circle cx="7" cy="25" r="3" />
    <circle cx="16" cy="25" r="3" />
    <circle cx="25" cy="25" r="3" />
  </svg>
);

const IconTrending = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 27 H28" />
    <rect x="7" y="18" width="4" height="9" rx="1" />
    <rect x="14" y="13" width="4" height="14" rx="1" />
    <rect x="21" y="8" width="4" height="19" rx="1" />
    <path d="M6 14 L14 8 L20 12 L26 4" />
    <path d="M22 4 H26 V8" />
  </svg>
);

const IconDecisionMakers = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Center Leader Star */}
    <path d="M16 2 L17.5 5.5 L21 6 L18.5 8.5 L19 12 L16 10 L13 12 L13.5 8.5 L11 6 L14.5 5.5 Z" fill={color} />
    {/* People */}
    <circle cx="16" cy="18" r="3" />
    <circle cx="8" cy="20" r="2.5" />
    <circle cx="24" cy="20" r="2.5" />
    <path d="M12 28 C12 24.5 13.8 23 16 23 C18.2 23 20 24.5 20 28" />
    <path d="M5 28 C5 26 6.3 25 8 25" />
    <path d="M27 28 C27 26 25.7 25 24 25" />
  </svg>
);

const IconDatabase = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="16" cy="7" rx="10" ry="3.5" />
    <path d="M6 7 V14 C6 16 10.5 17.5 16 17.5 C21.5 17.5 26 16 26 14 V7" />
    <path d="M6 14 V21 C6 23 10.5 24.5 16 24.5 C21.5 24.5 26 23 26 21 V14" />
  </svg>
);

const IconFeedback = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 6 C5 4.3 6.3 3 8 3 H24 C25.7 3 27 4.3 27 6 V19 C27 20.7 25.7 22 24 22 H11 L5 27 V6 Z" />
    <circle cx="11" cy="12.5" r="1.5" fill={color} />
    <circle cx="16" cy="12.5" r="1.5" fill={color} />
    <circle cx="21" cy="12.5" r="1.5" fill={color} />
  </svg>
);

const IconMarketKnowledge = ({ color }) => (
  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="14" cy="14" r="8" />
    <path d="M20 20 L28 28" />
    <path d="M9 16 L12 13 L15 15 L19 10" />
    <path d="M16 10 H19 V13" />
  </svg>
);

// ================= 3. OPPORTUNITIES DATA =================
const opportunities = [
  // ROW 1
  {
    id: 1,
    icon: IconNetwork,
    color: '#EA580C',
    accentGrad: 'from-[#EA580C] to-[#F97316]',
    text: 'Connect to architects, institutional buyers, experts, interior designers and other professionals',
  },
  {
    id: 2,
    icon: IconCube,
    color: '#7C2D92',
    accentGrad: 'from-[#7C2D92] to-[#A855F7]',
    text: 'Showcase your competitive advantage in product design, features, and cost benefits',
  },
  {
    id: 3,
    icon: IconHandshake,
    color: '#D91A5B',
    accentGrad: 'from-[#D91A5B] to-[#F43F5E]',
    text: 'Connect with your end users directly to make them experience the touch',
  },
  {
    id: 4,
    icon: IconRocket,
    color: '#F59E0B',
    accentGrad: 'from-[#F59E0B] to-[#EA580C]',
    text: 'Opportunity to present your innovations and new range of products',
  },
  {
    id: 5,
    icon: IconDistributorsTree,
    color: '#6B21A8',
    accentGrad: 'from-[#6B21A8] to-[#9333EA]',
    text: 'Simultaneously reach out to potential agents, distributors and wholesalers',
  },
  // ROW 2
  {
    id: 6,
    icon: IconTrending,
    color: '#E11D48',
    accentGrad: 'from-[#E11D48] to-[#F43F5E]',
    text: 'Consolidate trade relationships and opportunity to book on-spot orders',
  },
  {
    id: 7,
    icon: IconDecisionMakers,
    color: '#EA580C',
    accentGrad: 'from-[#EA580C] to-[#F97316]',
    text: 'Meet key buying decision makers from different segments of prospective buyers',
  },
  {
    id: 8,
    icon: IconDatabase,
    color: '#6366F1',
    accentGrad: 'from-[#6366F1] to-[#818CF8]',
    text: 'Build a database of potential buyers',
  },
  {
    id: 9,
    icon: IconFeedback,
    color: '#D91A5B',
    accentGrad: 'from-[#D91A5B] to-[#EC4899]',
    text: 'Get instant feedback on products, prices and innovations',
  },
  {
    id: 10,
    icon: IconMarketKnowledge,
    color: '#D97706',
    accentGrad: 'from-[#D97706] to-[#F59E0B]',
    text: 'Gain first-hand knowledge of market segments, trends, consumer preferences and retailers needs',
  },
];

const OpportunitiesSection = () => {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-12 sm:py-16 overflow-hidden font-sans">
      {/* Outer constraint matching Navbar Width */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* ================= THE MAIN FRAMED CONTAINER (Border Removed as Requested) ================= */}
        <div className="relative bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_4px_30px_rgba(0,0,0,0.04)] p-6 sm:p-8 lg:p-9 xl:p-10 overflow-hidden">
          {/* ================= MAIN FLEX LAYOUT (LEFT HEADING + RIGHT 10 SLANTED CARDS) ================= */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-7 xl:gap-8">
            {/* ================= LEFT COLUMN: HEADING & LUCKNOW WATERMARK ================= */}
            <div className="w-full lg:w-[250px] xl:w-[275px] flex-shrink-0 flex flex-col justify-between pt-2">
              {/* Header Titles matching theme */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-bold leading-[1.08] tracking-tight">
                  <span className="text-[#0B1536] block">Bouquet of</span>
                  <span className="text-[#E11D48] block mt-1">Opportunities</span>
                </h2>

                {/* Gradient Pill Underline Bar */}
                <div className="w-24 sm:w-28 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5" />
              </motion.div>

              {/* Architectural Monument Sketch (Rumi Darwaza Heritage Watermark) */}
              <div className="hidden lg:flex items-end justify-center pt-6 xl:pt-10">
                <RumiDarwazaSketch />
              </div>

              {/* Mobile Subtle Watermark */}
              <div className="lg:hidden absolute -bottom-4 right-2 w-28 opacity-15 pointer-events-none">
                <RumiDarwazaSketch />
              </div>
            </div>

            {/* ================= RIGHT COLUMN: 5 x 2 GRID OF SLANTED CARDS ================= */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 xl:gap-4">
              {opportunities.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className="group relative"
                  >
                    {/* The Slanted Card Box */}
                    <div className="h-full rounded-2xl bg-white border border-[#FED7AA]/70 group-hover:border-[#F97316]/60 shadow-[0_4px_18px_rgba(234,88,12,0.05)] group-hover:shadow-[0_10px_26px_rgba(234,88,12,0.14)] group-hover:-translate-y-1.5 transition-all duration-300 p-4 sm:p-4.5 flex flex-col items-center justify-between text-center min-h-[175px] sm:min-h-[185px] xl:min-h-[195px] transform sm:-skew-x-[6deg]">
                      {/* Un-skew Container for Inner Content (ensures text & icon stay 100% straight and crisp) */}
                      <div className="w-full flex-1 flex flex-col items-center justify-between transform sm:skew-x-[6deg]">
                        {/* Top Icon */}
                        <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
                          <IconComponent color={item.color} />
                        </div>

                        {/* Middle Content Text */}
                        <p className="my-2.5 text-[12px] sm:text-[12.5px] xl:text-[13px] font-semibold text-[#0E1B38] leading-[1.32] tracking-tight">
                          {item.text}
                        </p>

                        {/* Bottom Colored Accent Pill */}
                        <div
                          className={`w-12 h-[3.5px] rounded-full bg-gradient-to-r ${item.accentGrad} mt-auto`}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;

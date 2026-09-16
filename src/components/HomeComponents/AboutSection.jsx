import React from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  Train,
  TrendingUp,
  Trophy,
  Compass,
  Utensils,
  Building2,
  Award,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const AboutSection = () => {
  // 6 Main Sector Categories from Reference Site
  const sectors = [
    {
      id: 'pilgrimage',
      name: 'PILGRIMAGE',
      desc: 'Rich spiritual heritage, sacred monuments & grand temple architecture',
      icon: Landmark,
      gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-500/50',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    },
    {
      id: 'transportation',
      name: 'TRANSPORTATION',
      desc: 'World-class expressways, metro networks & international airports',
      icon: Train,
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderColor: 'group-hover:border-blue-500/50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    },
    {
      id: 'economy',
      name: 'ECONOMY',
      desc: 'Rapid real estate surge, high per capita income & financial credit growth',
      icon: TrendingUp,
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    },
    {
      id: 'sports',
      name: 'SPORTS',
      desc: 'State-of-the-art international stadiums & athletic hubs',
      icon: Trophy,
      gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
      borderColor: 'group-hover:border-purple-500/50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600',
    },
    {
      id: 'tourism',
      name: 'TOURISM',
      desc: 'Awadhi architectural grandeur, heritage walks & global tourist magnet',
      icon: Compass,
      gradient: 'from-rose-500/20 via-orange-500/10 to-transparent',
      borderColor: 'group-hover:border-rose-500/50',
      iconBg: 'bg-gradient-to-br from-rose-500 to-orange-500',
    },
    {
      id: 'cuisine',
      name: 'CUISINE',
      desc: 'World-renowned Nawabi gastronomy & culinary hospitality culture',
      icon: Utensils,
      gradient: 'from-amber-600/20 via-yellow-500/10 to-transparent',
      borderColor: 'group-hover:border-amber-600/50',
      iconBg: 'bg-gradient-to-br from-amber-600 to-yellow-500',
    },
  ];

  // Key Highlights / Badges from Reference Screenshot
  const highlights = [
    {
      rank: '1st',
      title: 'Highest MSMEs in India',
      subtitle: 'Both Organized & Unorganized Sectors',
      desc: 'Leading industrial ecosystem fueling architectural, manufacturing & employment boom across UP.',
      icon: Building2,
      badgeBg: 'bg-[#121214] text-amber-400 border border-amber-500/30',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    },
    {
      rank: '2nd',
      title: 'Best State in "Ease of Doing Business"',
      subtitle: 'Investor Friendly Policies',
      desc: 'Rapidly emerging real estate magnet with unprecedented investor trust and streamlined approvals.',
      icon: Award,
      badgeBg: 'bg-gradient-to-r from-amber-500 to-orange-500 text-black font-extrabold',
      gradient: 'from-orange-500/10 via-orange-500/5 to-transparent',
    },
    {
      rank: 'Top',
      title: 'Richest Demographic Resource',
      subtitle: 'Highest Density of Young Population',
      desc: 'Vibrant young workforce driving sustainable urban growth, modern housing & smart infrastructure.',
      icon: Users,
      badgeBg: 'bg-[#121214] text-amber-400 border border-amber-500/30',
      gradient: 'from-amber-600/10 via-amber-600/5 to-transparent',
    },
  ];

  return (
    <section id="about" className="relative w-full py-20 lg:py-28 bg-[#FAF7F2] bg-architect-grid overflow-hidden border-b border-[#E6DFD3]">
      
      {/* Background Architectural Arch Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-between px-6 lg:px-20">
        <svg className="w-96 h-96 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="w-96 h-96 text-[#9A7B38]" viewBox="0 0 100 100" fill="currentColor">
          <path d="M 10 90 L 10 40 Q 50 0 90 40 L 90 90 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M 25 90 L 25 50 Q 50 20 75 50 L 75 90 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= 1. SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] text-[#D4AF37] border border-[#D4AF37]/30 text-xs font-semibold uppercase tracking-widest mb-4 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>STATE PROFILE & REAL ESTATE MAGNET</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 tracking-tight font-serif uppercase"
          >
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">UTTAR PRADESH</span>
          </motion.h2>

          {/* Animated Gold Accent Line Underneath Title */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600 rounded-full mx-auto mt-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm sm:text-base text-neutral-600 italic font-serif leading-relaxed"
          >
            "Combining rich cultural heritage with contemporary business philosophy and rapid urban expansion"
          </motion.p>
        </div>

        {/* ================= 2. TWO-COLUMN ESSAY CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          
          {/* Left Column Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border-l-4 border-l-amber-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-wide">Real Estate & Income Surge</h3>
            </div>
            
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base text-justify font-sans">
              The economic trend has consequently developed into a magnet for real estate. The state's lifestyle and amenities are improving because of these advancements. Being the state's capital, Lucknow has enormous potential. As a result of increases in per capita income, productivity, favourable market prices, and large credit flow in the city, demand for branded consumer goods and property has recently surged.
            </p>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-amber-700 font-semibold tracking-wider uppercase">
              <span>Capital Advantage • Lucknow</span>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
            </div>
          </motion.div>

          {/* Right Column Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-600 border border-orange-500/20">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-wide">Heritage & Emerging Economy</h3>
            </div>
            
            <p className="text-neutral-700 leading-relaxed text-sm sm:text-base text-justify font-sans">
              Being a hub of heritage as well as a fast emerging economy, it attracts an influx of people from all surrounding cities, districts and villages. Lucknow offers a distinctive business philosophy that combines the city's rich cultural heritage with contemporary business methods. With the highest density of young population, UP is the richest state when we talk about the demographic resources.
            </p>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-orange-700 font-semibold tracking-wider uppercase">
              <span>Demographic Dividend • UP Youth</span>
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
            </div>
          </motion.div>

        </div>

        {/* ================= 3. FOCUS SECTORS GRID (6 SECTORS) ================= */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 font-serif tracking-tight uppercase">
              KEY GROWTH SECTORS OF UTTAR PRADESH
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">Driving architectural innovation & infrastructural development</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {sectors.map((sector, index) => {
              const IconComp = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`group relative bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-[#E6DFD3] ${sector.borderColor} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden`}
                >
                  {/* Card Background Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${sector.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl ${sector.iconBg} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300 mb-3`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Sector Title */}
                  <h4 className="text-xs sm:text-sm font-black text-neutral-900 tracking-wider uppercase group-hover:text-amber-600 transition-colors">
                    {sector.name}
                  </h4>

                  {/* Short description */}
                  <p className="text-[11px] text-neutral-500 mt-1.5 leading-snug font-medium">
                    {sector.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= 4. STATE HIGHLIGHTS & ACHIEVEMENTS (3 BIG CARDS) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {highlights.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="relative group bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-[#E6DFD3] hover:border-[#D4AF37]/60 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div>
                  {/* Top Badge & Rank */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-widest ${item.badgeBg} shadow-sm`}>
                      RANK {item.rank}
                    </span>
                    <div className="p-3 rounded-2xl bg-neutral-900 text-amber-400 border border-neutral-800 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-lg sm:text-xl font-extrabold text-neutral-900 tracking-tight leading-snug">
                    {item.title}
                  </h4>
                  <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mt-1">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Card Bottom Indicator */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-neutral-800 uppercase tracking-widest group-hover:text-amber-600 transition-colors">
                  <span>Growth Milestone</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

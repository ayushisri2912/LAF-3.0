import React from "react";
import { motion } from "framer-motion";
import {
  topRowBrands,
  bottomRowBrands,
  centerBrandBanner,
} from "../../assets/images/brands/brandsData";

export default function BrandShowcase() {
  // Duplicate for seamless infinite marquee loop
  const topLoop = [...topRowBrands, ...topRowBrands];
  const bottomLoop = [...bottomRowBrands, ...bottomRowBrands];

  return (
    <section
      id="brand-showcase"
      className="relative overflow-hidden bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 select-none font-sans border-t border-[#FED7AA]/50"
    >
      {/* Marquee Keyframes Animation Styling */}
      <style>{`
        @keyframes marquee-slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-left-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-slide-left 55s linear infinite;
        }
        .marquee-right-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marquee-slide-right 55s linear infinite;
        }
        .marquee-left-track:hover,
        .marquee-right-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Signature Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(234,88,12,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(234,88,12,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient background soft glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 via-pink-400/5 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />

      {/* Main Content Container */}
      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADING & SUBTITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-4xl mx-auto mb-6 sm:mb-8"
        >
          {/* Top Industry Partners Tag */}
          <div className="inline-flex items-center justify-center gap-2 mb-2 sm:mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#EA580C]">
            <span className="text-[#EA580C]/60 font-mono">|</span>
            <span>INDUSTRY PARTNERS • LAF 3.0</span>
            <span className="text-[#EA580C]/60 font-mono">|</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1536] leading-tight">
            Brands that shape{" "}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
              the future.
            </span>
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base md:text-lg text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            A collective of leading brands supporting architecture, design,
            construction and the built environment.
          </p>

          {/* Accent Rounded Bar */}
          <div className="w-16 h-1 rounded-full bg-[#EA580C] mx-auto mt-4" />
        </motion.div>

        {/* ================= DUAL MARQUEE SHOWCASE WITH SEPARATED CENTER CARD ================= */}
        <div className="relative py-2 sm:py-4">
          {/* Subtle Left & Right Edge Faders */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/85 to-transparent z-10" />

          {/* Row 1 Indicator: Slides Right to Left */}
          <div className="flex items-center justify-end gap-2 mb-2.5 px-4 sm:px-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#991B1B]/85 flex items-center gap-1.5 uppercase font-sans">
              <span className="text-sm leading-none">←</span> SLIDES RIGHT TO LEFT
            </span>
            <div className="w-12 sm:w-20 h-[1px] bg-[#991B1B]/30" />
          </div>

          {/* ================= ROW 1: SLIDES RIGHT TO LEFT ================= */}
          <div className="overflow-hidden py-1 sm:py-1.5">
            <div className="marquee-left-track gap-3 sm:gap-4 md:gap-5">
              {topLoop.map((brand, idx) => (
                <div
                  key={`top-${brand.id}-${idx}`}
                  className="w-[110px] sm:w-[130px] md:w-[145px] h-[72px] sm:h-[82px] md:h-[90px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#EA580C]/40 p-2 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={brand.img}
                    alt="Brand Partner"
                    loading="lazy"
                    className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ================= FIXED CENTER BANNER CARD (Separated in normal flow) ================= */}
          <div className="my-3 sm:my-5 md:my-6 flex justify-center items-center relative z-20">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group cursor-pointer"
            >
              {/* Vibrant Ambient Glow behind card */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[#EA580C]/35 via-[#E11D48]/30 to-[#F97316]/35 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Center Banner Image Frame */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-[0_16px_40px_rgba(234,88,12,0.32),0_8px_20px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
                <img
                  src={centerBrandBanner}
                  alt="Key Brands Presence - Lucknow Architecture Festival 3.0"
                  className="w-[280px] sm:w-[350px] md:w-[410px] lg:w-[450px] h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          {/* ================= ROW 2: SLIDES LEFT TO RIGHT ================= */}
          <div className="overflow-hidden py-1 sm:py-1.5">
            <div className="marquee-right-track gap-3 sm:gap-4 md:gap-5">
              {bottomLoop.map((brand, idx) => (
                <div
                  key={`bottom-${brand.id}-${idx}`}
                  className="w-[110px] sm:w-[130px] md:w-[145px] h-[72px] sm:h-[82px] md:h-[90px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_3px_12px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#EA580C]/40 p-2 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <img
                    src={brand.img}
                    alt="Brand Partner"
                    loading="lazy"
                    className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Indicator: Slides Left to Right */}
          <div className="flex items-center justify-start gap-2 mt-2.5 px-4 sm:px-6">
            <div className="w-12 sm:w-20 h-[1px] bg-[#991B1B]/30" />
            <span className="text-[10px] sm:text-xs font-bold tracking-wider text-[#991B1B]/85 flex items-center gap-1.5 uppercase font-sans">
              SLIDES LEFT TO RIGHT <span className="text-sm leading-none">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      className="relative overflow-hidden bg-[#FAF8F5] pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20 lg:pb-24 select-none font-sans border-t border-[#FED7AA]/50"
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
        .marquee-container:hover .marquee-left-track,
        .marquee-container:hover .marquee-right-track {
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
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-8 lg:px-12">
        {/* ================= SECTION HEADING & SUBTITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B1536] leading-tight">
            Brands that shape{" "}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
              the future.
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-600 font-sans max-w-2xl mx-auto leading-relaxed">
            A collective of leading brands supporting architecture, design,
            construction and the built environment.
          </p>

          {/* Decorative Diamond Accent Line */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-r from-transparent to-[#EA580C]/80" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#EA580C]" />
            <div className="w-16 sm:w-24 h-[1.5px] bg-gradient-to-l from-transparent to-[#EA580C]/80" />
          </div>
        </motion.div>

        {/* ================= DUAL MARQUEE SHOWCASE WITH FIXED CENTER CARD ================= */}
        <div className="relative marquee-container py-4 sm:py-6 overflow-hidden">
          {/* Subtle Left & Right Edge Faders */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10" />

          {/* ================= FIXED CENTER BANNER CARD ================= */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative group cursor-pointer"
            >
              {/* Vibrant Ambient Glow behind card */}
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-r from-[#EA580C]/35 via-[#E11D48]/30 to-[#F97316]/35 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Center Banner Image Frame */}
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-white shadow-[0_20px_50px_rgba(234,88,12,0.35),0_10px_25px_rgba(0,0,0,0.18)] bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
                <img
                  src={centerBrandBanner}
                  alt="Key Brands Presence - Lucknow Architecture Festival 3.0"
                  className="w-[280px] sm:w-[370px] md:w-[440px] lg:w-[480px] h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>

          {/* ================= ROW 1: SLIDES RIGHT TO LEFT ================= */}
          <div className="overflow-hidden py-1.5 sm:py-2">
            <div className="marquee-left-track gap-4 sm:gap-6">
              {topLoop.map((brand, idx) => (
                <div
                  key={`top-${brand.id}-${idx}`}
                  className="w-[115px] sm:w-[140px] md:w-[155px] h-[78px] sm:h-[90px] md:h-[100px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#EA580C]/40 p-2 sm:p-2.5 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
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

          {/* Spacer between rows */}
          <div className="h-4 sm:h-6 md:h-8" />

          {/* ================= ROW 2: SLIDES LEFT TO RIGHT ================= */}
          <div className="overflow-hidden py-1.5 sm:py-2">
            <div className="marquee-right-track gap-4 sm:gap-6">
              {bottomLoop.map((brand, idx) => (
                <div
                  key={`bottom-${brand.id}-${idx}`}
                  className="w-[115px] sm:w-[140px] md:w-[155px] h-[78px] sm:h-[90px] md:h-[100px] shrink-0 rounded-2xl bg-white border border-neutral-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#EA580C]/40 p-2 sm:p-2.5 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group"
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
        </div>
      </div>
    </section>
  );
}

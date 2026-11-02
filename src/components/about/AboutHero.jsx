import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import heritageImage from "../../assets/images/about-img1.jpg";

const AboutHero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden">
      {/* Background Image - Lighter, vibrant, with subtle contrast */}
      <img
        src={heritageImage}
        alt="Lucknow Heritage Architecture"
        className="absolute inset-0 w-full h-full object-cover object-center scale-[1.01]"
      />

      {/* Balanced, Soft Gradient Overlay: Lightened so architecture is clearly visible while text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Architectural subtle gold ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-24 md:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151515]/85 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-[10.5px] sm:text-xs font-mono tracking-[0.25em] uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>Discover The Heritage Of Uttar Pradesh</span>
          </div>

          {/* Heading - Crisp White with Regal Golden Gradient Accent */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.12] text-white font-medium drop-shadow-md">
            A Landscape of{" "}
            <span className="block font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF3D6] via-[#E8C26E] to-[#B77A27] mt-2 sm:mt-3">
              Culture, Heritage
              <br />
              &amp; Growth.
            </span>
          </h1>

          {/* Description Paragraph with high readability */}
          <p className="max-w-xl mt-6 text-white/95 text-base sm:text-lg lg:text-[17.5px] leading-relaxed font-normal drop-shadow-sm">
            Discover the cultural heritage, evolving infrastructure and
            architectural vision shaping the future of Uttar Pradesh.
          </p>

          {/* Breadcrumb Navigation matching site theme */}
          <div className="flex items-center gap-2.5 mt-8 text-xs font-mono tracking-wider uppercase">
            <Link
              to="/"
              className="text-white/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>

            <ChevronRight size={13} className="text-[#D4AF37]" />

            <span className="text-[#D4AF37] font-bold">About Us</span>
          </div>
        </div>
      </div>

      {/* Bottom Information Ribbon with Architectural Gold Detailing */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#111114]/90 backdrop-blur-md border-t border-[#D4AF37]/30">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-4 flex flex-wrap justify-between items-center gap-3">
          <span className="text-white/90 text-[10px] sm:text-xs tracking-[2.5px] font-mono uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span>Lucknow Architecture Festival 3.0</span>
          </span>

          <span className="text-[#D4AF37] text-[10px] sm:text-xs font-mono tracking-[2.5px] font-bold uppercase">
            EST. 2022 • LUCKNOW
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

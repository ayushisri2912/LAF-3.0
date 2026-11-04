import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Download
} from "lucide-react";

/* =========================================================
   ANIMATED COUNTER COMPONENT (Counts 0 to Target on Scroll)
========================================================= */
function AnimatedCounter({ end, duration = 2000, suffix = "+", formatValue }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, end, duration]);

  const display = formatValue ? formatValue(count) : count.toLocaleString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

// Event gallery images
import event01 from "../../assets/images/LAFevent1.webp";
import event02 from "../../assets/images/LAFevent2.webp";
import event03 from "../../assets/images/LAFEvent3.webp";
import event04 from "../../assets/images/LAFevent4.webp";
import event05 from "../../assets/images/lAFevent5.webp";
import event06 from "../../assets/images/LAFevent6.webp";
import event07 from "../../assets/images/LAFevent7.webp";
import event08 from "../../assets/images/LAFevent8.webp";
import event09 from "../../assets/images/LAFevent9.webp";
import event10 from "../../assets/images/LAFevent10.webp";
import event11 from "../../assets/images/LAFevent11.webp";
import event12 from "../../assets/images/LAFevent12.webp";
import event13 from "../../assets/images/LAFevent13.webp";
import event14 from "../../assets/images/LAFevent14.webp";
import event15 from "../../assets/images/LAFevent15.webp";
import event16 from "../../assets/images/LAFevent16.webp";

// Center image & full-screen background for rotating circular showcase
import centerEventImg from "../../assets/images/center-event.png";
import bg1Img from "../../assets/images/bg1.png";

const eventImages = [
  {
    id: "01",
    src: event01,
    title: "Art Contest Winners • Junior Category",
    category: "art",
    categoryLabel: "Art Contest",
  },
  {
    id: "02",
    src: event02,
    title: "Art Contest Winners • Senior Category",
    category: "art",
    categoryLabel: "Art Contest",
  },
  {
    id: "03",
    src: event03,
    title: "Icon Pavilion & Trade Booth",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "04",
    src: event04,
    title: "Indoor Architecture & Product Expo",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "05",
    src: event05,
    title: "Main Exhibition Walkway & Stalls",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "06",
    src: event06,
    title: "Hitachi Smart Climate Pavilion",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "07",
    src: event07,
    title: "Outdoor Sustainable Pavilion & Lawn",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "08",
    src: event08,
    title: "Kubico Architectural Display",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "09",
    src: event09,
    title: "Charak Steel & Structure Installation",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "10",
    src: event10,
    title: "KEI Principal Sponsor Stage Ceremony",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "11",
    src: event11,
    title: "I Love Lucknow Heritage Installation",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "12",
    src: event12,
    title: "Keynote Symposium & Speaker Stage",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "13",
    src: event13,
    title: "Exhibition Entry Arch & Welcome Lounge",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "14",
    src: event14,
    title: "Interior Designers Product Showcase",
    category: "exhibitions",
    categoryLabel: "Exhibitions",
  },
  {
    id: "15",
    src: event15,
    title: "Architectural Delegates & Audience",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
  {
    id: "16",
    src: event16,
    title: "Grand Conclave Auditorium & Gathering",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
  },
];

// 12 Images for the surrounding rotating wheel sectors
const wheelImages = [
  event01,
  event02,
  event03,
  event04,
  event05,
  event06,
  event07,
  event08,
  event09,
  event10,
  event11,
  event12,
];

const categories = [
  { id: "all", label: "All Highlights", count: 16 },
  { id: "exhibitions", label: "Exhibitions & Stalls", count: 11 },
  { id: "art", label: "Art Contests", count: 2 },
  { id: "conclave", label: "Conclave & Stage", count: 3 },
];

export default function LastEventGlanceSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isWheelHovered, setIsWheelHovered] = useState(false);

  const filteredImages = activeTab === "all" 
    ? eventImages 
    : eventImages.filter(img => img.category === activeTab);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredImages]);

  return (
    <section
      id="last-event"
      className="relative overflow-hidden bg-[#FAF8F5] pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-10 lg:pb-12 select-none font-sans border-t border-[#FED7AA]/60"
    >
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

      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-orange-400/10 via-pink-400/5 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />

      {/* ================= PART 1: HEADER & IMAGE GALLERY GRID (MATCHING NAVBAR WIDTH) ================= */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ================= CENTERED HEADING ================= */}
        <div className="mb-8 sm:mb-12 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1536] leading-[1.1]"
          >
            Last Event{" "}
            <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
              at a Glance.
            </span>
          </motion.h2>

          {/* Signature Centered Gradient Underline */}
          <div className="w-28 sm:w-40 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-4" />
        </div>

        {/* ================= SIMPLE IMAGE GALLERY GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-900 aspect-[4/3] border border-[#FED7AA]/80 hover:border-[#EA580C] shadow-xs hover:shadow-[0_12px_28px_rgba(234,88,12,0.18)] hover:-translate-y-1 transition-all duration-500"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Subtle Hover Gradient Overlay & Quick View */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FDBA74]">
                      ✦ {image.id} · {image.categoryLabel}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white">
                      <Maximize2 size={13} />
                    </div>
                  </div>
                  <p className="text-xs text-white font-medium line-clamp-1 mt-1">
                    {image.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* =====================================================
          PART 2: FULL-WIDTH ROTATING EVENT SHOWCASE WITH bg1.png
          Full screen width background (pure screen per full width),
          content aligned with navbar width (max-w-[1400px])
      ====================================================== */}
      <div
        className="relative w-full mt-4 sm:mt-6 lg:mt-8 mb-6 sm:mb-8 lg:mb-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bg1Img})` }}
      >
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 flex items-center justify-center">
          {/* THE CIRCULAR EVENTS WHEEL CONTAINER */}
          <div
            className="group relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] lg:w-[740px] lg:h-[740px] xl:w-[820px] xl:h-[820px] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsWheelHovered(true)}
            onMouseLeave={() => setIsWheelHovered(false)}
          >
            {/* Soft Ambient Glow Behind Wheel */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#EA580C]/12 via-[#D91A5B]/8 to-[#7C2D92]/12 blur-2xl pointer-events-none" />

            {/* ROTATING 12-SECTOR ANNULAR RING OF LAF EVENTS (PAUSES ON HOVER) */}
            <div
              className="w-full h-full relative cursor-pointer animate-spin-wheel"
              style={{
                animationPlayState: isWheelHovered ? "paused" : "running",
              }}
            >
              <svg
                viewBox="0 0 600 600"
                className="w-full h-full drop-shadow-[0_12px_35px_rgba(0,0,0,0.18)] overflow-visible"
              >
                <defs>
                  {/* Canonical Annular Sector Path (From -15 deg to +15 deg) */}
                  <clipPath id="canonical-sector">
                    <path d="M 555.97 231.41 A 265 265 0 0 1 555.97 368.59 L 440.06 337.53 A 145 145 0 0 0 440.06 262.47 Z" />
                  </clipPath>
                </defs>

                {/* 12 Annular Sectors Formed by Rotating Canonical Sector */}
                {wheelImages.map((imgSrc, i) => (
                  <g key={i} transform={`rotate(${i * 30}, 300, 300)`}>
                    <g clipPath="url(#canonical-sector)">
                      <image
                        href={imgSrc}
                        x={420}
                        y={215}
                        width={170}
                        height={170}
                        preserveAspectRatio="xMidYMid slice"
                        transform="rotate(90, 505, 300)"
                      />
                    </g>
                    {/* Crisp White Radial Divider Line separating each sector */}
                    <line
                      x1="440.06"
                      y1="337.53"
                      x2="555.97"
                      y2="368.59"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                  </g>
                ))}

                {/* Outer White Circumference Ring */}
                <circle cx="300" cy="300" r="265" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />
                {/* Inner White Circumference Ring */}
                <circle cx="300" cy="300" r="145" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
              </svg>
            </div>

            {/* STATIC CENTER CIRCLE IMAGE (Full aerial photo with LAF 2.0 branding, stays stationary & upright) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[48.33%] h-[48.33%] rounded-full overflow-hidden border-[4px] border-white shadow-[0_8px_30px_rgba(0,0,0,0.28)] z-20 pointer-events-auto bg-neutral-900 cursor-pointer"
              onMouseEnter={() => setIsWheelHovered(true)}
              onMouseLeave={() => setIsWheelHovered(false)}
            >
              <img
                src={centerEventImg}
                alt="LAF 2.0 Central Venue Aerial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= PART 3: DOWNLOADS, STATS & FOOTNOTE (MATCHING NAVBAR WIDTH) ================= */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ================= ELEGANT DOWNLOAD DOCUMENTS RIBBON (THEMED) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              title: "DOWNLOAD EVENT BROCHURE",
              subtitle: "Conclave Guide & Official Schedule",
              file: "#brochure",
              badge: "PDF • 4.2 MB",
            },
            {
              title: "DOWNLOAD PARTICIPATION FORM",
              subtitle: "Delegate & Exhibitor Entry Form",
              file: "#participation",
              badge: "PDF • 1.8 MB",
            },
            {
              title: "DOWNLOAD LAYOUT",
              subtitle: "Exhibition Floorplan & Stalls Map",
              file: "#layout",
              badge: "PDF • 3.5 MB",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.file}
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0B1536] via-[#111C44] to-[#0B1536] border border-[#EA580C]/40 hover:border-[#EA580C] shadow-[0_4px_22px_rgba(11,21,54,0.12)] hover:shadow-[0_10px_30px_rgba(234,88,12,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              {/* Vibrant Orange/Crimson Shimmer Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA580C]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="flex items-center gap-3.5 min-w-0 z-10">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C] group-hover:bg-gradient-to-r group-hover:from-[#EA580C] group-hover:to-[#D91A5B] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0 shadow-xs">
                  <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                </div>

                <div className="text-left truncate">
                  <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white group-hover:text-[#FDBA74] transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-[10.5px] text-neutral-400 truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="z-10 ml-2 shrink-0">
                <span className="text-[9.5px] font-mono font-bold tracking-widest text-[#FED7AA] bg-[#EA580C]/20 px-2.5 py-1 rounded-md border border-[#EA580C]/40 group-hover:border-[#EA580C] group-hover:bg-[#EA580C]/30 transition-all">
                  {item.badge}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ================= STATISTICS RIBBON (FROM REFERENCE IMAGE 2) ================= */}
        <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#C2B1D0] via-[#E8B5B3] via-50%-[#F9A669] to-[#F89D43] shadow-[0_8px_30px_rgba(234,88,12,0.10)] border border-white/40">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1: 200+ */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter end={200} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2">
                industries showcased.
              </div>
            </div>

            {/* Stat 2: 2000+ */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter end={2000} suffix="+" formatValue={(v) => v} />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2">
                architects and other professionals.
              </div>
            </div>

            {/* Stat 3: 3,00,000+ */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter
                  end={300000}
                  suffix="+"
                  formatValue={(v) => v.toLocaleString("en-IN")}
                />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2">
                general public walking in.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX PREVIEW MODAL (THEMED) ================= */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Modal Box */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-[#EA580C] border border-white/20 text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#EA580C] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#EA580C] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* High-Res Image Display */}
              <motion.div
                key={filteredImages[selectedIndex].src}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl max-h-[75vh]"
              >
                <img
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].title}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </motion.div>

              {/* Bottom Details Bar */}
              <div className="mt-4 flex items-center justify-between w-full max-w-3xl px-4 py-3 rounded-2xl bg-[#0B1536]/95 border border-white/10 text-white text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-white font-bold text-[10px] tracking-widest uppercase bg-gradient-to-r from-[#EA580C] to-[#D91A5B] px-2.5 py-1 rounded-md shadow-xs">
                    ✦ {filteredImages[selectedIndex].id}
                  </span>
                  <span className="font-medium text-neutral-200 text-sm truncate max-w-[280px] sm:max-w-md">
                    {filteredImages[selectedIndex].title}
                  </span>
                </div>
                <div className="text-neutral-400 font-mono text-[11px]">
                  {selectedIndex + 1} / {filteredImages.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

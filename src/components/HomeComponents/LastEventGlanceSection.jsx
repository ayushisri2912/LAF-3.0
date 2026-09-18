import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  Award,
  Building2,
  Users,
  Download
} from "lucide-react";

import event01 from "../../assets/images/LAFevent1.png";
import event02 from "../../assets/images/LAFevent2.png";
import event03 from "../../assets/images/LAFEvent3.png";
import event04 from "../../assets/images/LAFevent4.png";
import event05 from "../../assets/images/lAFevent5.png";
import event06 from "../../assets/images/LAFevent6.png";
import event07 from "../../assets/images/LAFevent7.png";
import event08 from "../../assets/images/LAFevent8.png";
import event09 from "../../assets/images/LAFevent9.png";
import event10 from "../../assets/images/LAFevent10.png";
import event11 from "../../assets/images/LAFevent11.png";
import event12 from "../../assets/images/LAFevent12.png";
import event13 from "../../assets/images/LAFevent13.png";
import event14 from "../../assets/images/LAFevent14.png";
import event15 from "../../assets/images/LAFevent15.png";
import event16 from "../../assets/images/LAFevent16.png";

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

const categories = [
  { id: "all", label: "All Highlights", count: 16 },
  { id: "exhibitions", label: "Exhibitions & Stalls", count: 11 },
  { id: "art", label: "Art Contests", count: 2 },
  { id: "conclave", label: "Conclave & Stage", count: 3 },
];

export default function LastEventGlanceSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState(null);

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
      className="relative overflow-hidden bg-[#FAF8F5] py-20 sm:py-24 lg:py-28 select-none font-sans border-t border-[#E6DFD3]"
    >
      {/* Subtle Architectural Grid Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#b38f38_1px,transparent_1px),linear-gradient(to_bottom,#b38f38_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Ambient background glow accents */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
        {/* ================= HEADER ================= */}
        <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B38F38]">
                VISUAL ARCHIVE • LAF PAST HIGHLIGHTS
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
              Last Event{" "}
              <span className="italic text-[#B38F38] font-serif">
                at a Glance.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
              A curated visual archive of moments, exhibitions, conversations, installations and celebrations from the previous Lucknow Architecture Festival.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/80 backdrop-blur-md p-1.5 rounded-2xl border border-[#E6DFD3] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setSelectedIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === cat.id
                    ? "bg-[#121214] text-amber-400 shadow-md border border-[#D4AF37]/30"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  activeTab === cat.id ? "bg-amber-500/20 text-amber-300" : "bg-neutral-200 text-neutral-600"
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ================= GALLERY MASONRY GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedIndex(index)}
                className="group relative cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E6DFD3] hover:border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(212,175,55,0.15)] transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with crisp aspect ratio */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* Subtle Top Index Badge */}
                  <div className="absolute top-3 left-3 bg-[#121214]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 text-white font-mono text-[9px] font-bold tracking-widest opacity-90 group-hover:opacity-100 transition-opacity">
                    ✦ {image.id}
                  </div>

                  {/* Top Right Zoom Icon Indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#B38F38]" />
                  </div>

                  {/* Dark Bottom Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-left w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-1">
                        {image.categoryLabel}
                      </span>
                      <h4 className="text-xs font-semibold text-white truncate drop-shadow-sm">
                        {image.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Minimal Card Footer Caption (Always Visible) */}
                <div className="p-3.5 bg-white border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="font-medium text-neutral-800 truncate pr-2 text-[11.5px]">
                    {image.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#B38F38] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>

                {/* Bottom Gold Hover Accent Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#D4AF37] via-amber-400 to-orange-500 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ================= ELEGANT DOWNLOAD DOCUMENTS RIBBON ================= */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
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
              className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#121214] border border-[#D4AF37]/30 hover:border-[#D4AF37] shadow-[0_4px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
            >
              {/* Gold Shimmer Sweep Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />
              
              <div className="flex items-center gap-3.5 min-w-0 z-10">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-[#D4AF37]/40 flex items-center justify-center text-amber-400 group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300 shrink-0">
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </div>
                <div className="text-left truncate">
                  <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white group-hover:text-amber-300 transition-colors truncate">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-neutral-400 truncate mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>

              <div className="z-10 ml-2 shrink-0">
                <span className="text-[9px] font-mono font-bold tracking-widest text-amber-400/80 bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20 group-hover:border-amber-400">
                  {item.badge}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ================= STATISTICS RIBBON ================= */}
        <div className="mt-16 bg-white rounded-3xl border border-[#E6DFD3] shadow-[0_6px_30px_rgba(0,0,0,0.03)] p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-6 first:pt-0 first:px-0">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#B38F38] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">100+</div>
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-500 mt-0.5">Exhibiting Brands</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#B38F38] shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">1,000+</div>
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-500 mt-0.5">Architects & Delegates</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#B38F38] shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-serif text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight">10,000+</div>
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-neutral-500 mt-0.5">Visitors Footfall</div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTNOTE ================= */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 px-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B38F38]" />
            <span>Lucknow Architecture Festival • Historical Edition Retrospective</span>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-[#B38F38] uppercase font-bold">
            LAF ARCHIVE • 2026
          </span>
        </div>
      </div>

      {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
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
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1))
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all focus:outline-none z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all focus:outline-none z-10"
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
              <div className="mt-4 flex items-center justify-between w-full max-w-3xl px-4 py-3 rounded-2xl bg-neutral-900/90 border border-white/10 text-white text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-amber-400 font-bold text-[10px] tracking-widest uppercase bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/30">
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
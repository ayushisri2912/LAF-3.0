import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Download,
  Share2,
  Search,
  Filter,
  ArrowLeft,
  Grid,
  LayoutGrid,
  MapPin,
  Calendar,
  Camera,
  Layers,
  Award,
  Building2,
  UsersRound,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

// Image Imports
import event01 from "../assets/images/LAFevent1.png";
import event02 from "../assets/images/LAFevent2.png";
import event03 from "../assets/images/LAFEvent3.png";
import event04 from "../assets/images/LAFevent4.png";
import event05 from "../assets/images/lAFevent5.png";
import event06 from "../assets/images/LAFevent6.png";
import event07 from "../assets/images/LAFevent7.png";
import event08 from "../assets/images/LAFevent8.png";
import event09 from "../assets/images/LAFevent9.png";
import event10 from "../assets/images/LAFevent10.png";
import event11 from "../assets/images/LAFevent11.png";
import event12 from "../assets/images/LAFevent12.png";
import event13 from "../assets/images/LAFevent13.png";
import event14 from "../assets/images/LAFevent14.png";
import event15 from "../assets/images/LAFevent15.png";
import event16 from "../assets/images/LAFevent16.png";
import event17 from "../assets/images/LAFevent17.png";
import event18 from "../assets/images/Lafevent18.png";
import event19 from "../assets/images/LAFevent19.png";

import highlightMain from "../assets/images/heighlight.jpeg";
import highlight2 from "../assets/images/heighlight-2.jpeg";
import highlight3 from "../assets/images/heighlight-3.jpeg";
import highlight4 from "../assets/images/heighlight-4.jpg";
import highlight5 from "../assets/images/heighlight-5.jpg";
import image6 from "../assets/images/image-6.jpg";
import lucknowImg from "../assets/images/lucknow-img.jpeg";

const galleryData = [
  {
    id: "g-01",
    src: event01,
    title: "Art Contest Winners • Junior Category",
    subtitle: "Young creative minds receiving awards at the LAF Art & Culture Pavilion.",
    category: "art",
    categoryLabel: "Art & Culture",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-02",
    src: event02,
    title: "Art Contest Winners • Senior Category",
    subtitle: "Award felicitation for senior architectural students and artists.",
    category: "art",
    categoryLabel: "Art & Culture",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-03",
    src: event03,
    title: "Icon Pavilion & Trade Booth",
    subtitle: "Bespoke architectural booth designs showcasing building material innovations.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-04",
    src: event04,
    title: "Indoor Architecture & Product Expo",
    subtitle: "Vibrant indoor walkthrough featuring top building specification brands.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-05",
    src: event05,
    title: "Main Exhibition Walkway & Stalls",
    subtitle: "Architects and delegates exploring cutting-edge surface materials and facades.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-06",
    src: event06,
    title: "Hitachi Smart Climate Pavilion",
    subtitle: "Interactive booth showcasing smart HVAC and climate automation for luxury living.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-07",
    src: event07,
    title: "Outdoor Sustainable Pavilion & Lawn",
    subtitle: "Eco-friendly landscaping, green structures, and outdoor architectural displays.",
    category: "pavilions",
    categoryLabel: "Pavilions & Design",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-08",
    src: event08,
    title: "Kubico Architectural Display",
    subtitle: "Modular steel structures and modern spatial construction setups.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-09",
    src: event09,
    title: "Charak Steel & Structure Installation",
    subtitle: "Structural engineering showcase highlighting heavy steel frameworks.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-10",
    src: event10,
    title: "KEI Principal Sponsor Stage Ceremony",
    subtitle: "Felicitation of principal sponsors and organizing committee on the main stage.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-11",
    src: event11,
    title: "I Love Lucknow Heritage Installation",
    subtitle: "Iconic selfie point celebrating Lucknow's architectural pride and culture.",
    category: "art",
    categoryLabel: "Art & Culture",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-12",
    src: event12,
    title: "Keynote Symposium & Speaker Stage",
    subtitle: "Distinguished architects delivering keynotes on sustainable urban futures.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-13",
    src: event13,
    title: "Exhibition Entry Arch & Welcome Lounge",
    subtitle: "Grand architectural entryway welcoming visitors and VIP delegates.",
    category: "pavilions",
    categoryLabel: "Pavilions & Design",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-14",
    src: event14,
    title: "Interior Designers Product Showcase",
    subtitle: "Curated display of luxury interior finishes, textures, and lighting.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-15",
    src: event15,
    title: "Architectural Delegates & Audience",
    subtitle: "Full house of practicing architects, interior designers, and students in session.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-16",
    src: event16,
    title: "Grand Conclave Auditorium & Gathering",
    subtitle: "Pan-India gathering of architectural think tanks and council leaders.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-17",
    src: event17,
    title: "Panel Discussion on Urban Governance",
    subtitle: "Interactive panel session with government authorities and urban planners.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-18",
    src: event18,
    title: "VIP Networking & Delegate Lounge",
    subtitle: "Exclusive networking space for sponsor interactions and B2B discussions.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-19",
    src: event19,
    title: "Architectural Student Competition Displays",
    subtitle: "Student thesis projects and model displays evaluated by jury members.",
    category: "art",
    categoryLabel: "Art & Culture",
    edition: "LAF 2.0 Archive",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-20",
    src: highlightMain,
    title: "Inaugural Ceremony & Lamp Lighting",
    subtitle: "Grand traditional opening ceremony led by Lucknow Architects Association.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF Highlights",
    aspect: "landscape",
    featured: true,
  },
  {
    id: "g-21",
    src: highlight2,
    title: "Keynote Address by Industry Veterans",
    subtitle: "Masterclass on regional heritage conservation and contemporary architecture.",
    category: "conclave",
    categoryLabel: "Conclave & Stage",
    edition: "LAF Highlights",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-22",
    src: highlight3,
    title: "Product Launch & Live Demonstration",
    subtitle: "Brands presenting futuristic building materials and smart home systems.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF Highlights",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-23",
    src: highlight4,
    title: "Exhibition Walkthrough & VIP Tour",
    subtitle: "Dignitaries touring the exhibition pavilions and trade stalls.",
    category: "exhibitions",
    categoryLabel: "Exhibitions & Stalls",
    edition: "LAF Highlights",
    aspect: "landscape",
    featured: false,
  },
  {
    id: "g-24",
    src: image6,
    title: "Awadh Architectural Heritage & Aesthetics",
    subtitle: "Architectural monuments of Lucknow showcasing timeless design inspiration.",
    category: "pavilions",
    categoryLabel: "Pavilions & Design",
    edition: "Heritage Spotlight",
    aspect: "landscape",
    featured: true,
  }
];

const categories = [
  { id: "all", label: "All Visuals", icon: Layers },
  { id: "exhibitions", label: "Exhibitions & Stalls", icon: Building2 },
  { id: "conclave", label: "Conclave & Stage", icon: UsersRound },
  { id: "art", label: "Art & Culture", icon: Sparkles },
  { id: "pavilions", label: "Pavilions & Heritage", icon: Award },
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [gridColumns, setGridColumns] = useState(4); // 3 or 4 columns

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Filtered dataset
  const filteredData = galleryData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItems = galleryData.filter((item) => item.featured).slice(0, 5);

  // Keyboard controls for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredData]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* =========================================================
          1. HERO HEADER WITH ARCHITECTURAL LUXURY DESIGN
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#121214] text-white pt-10 pb-20 border-b border-[#D4AF37]/30">
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(212,175,55,0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,175,55,0.15) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-amber-600/10 blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-neutral-400 mb-8">
            <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-amber-400 font-bold">Visual Gallery</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#D4AF37] text-xs font-mono tracking-[0.2em] uppercase">
                <Camera className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Visual Archive &amp; Event Photo Collection</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.15] text-white">
                LAF Festival <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#D4AF37] to-amber-500">Visual Gallery</span>
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Immerse yourself in high-resolution moments, architectural exhibitions, keynote symposia, art contests, and vibrant cultural celebrations from Lucknow Architecture Festival.
              </p>

              {/* Quick Stat Pill Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">24+</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">HD Visuals</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">04</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Categories</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">10,000+</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Attendees</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-2xl font-serif font-bold text-amber-400">100%</div>
                  <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono mt-0.5">Authentic</div>
                </div>
              </div>

            </div>

            {/* Right Hero Image Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none grid grid-cols-2 gap-3 p-3 rounded-3xl bg-neutral-900 border border-[#D4AF37]/40 shadow-2xl">
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden group">
                  <img src={event01} alt="Art Contest" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-400 uppercase">Art Winners</span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden group">
                  <img src={event12} alt="Keynote Speaker Stage" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-400 uppercase">Keynote Stage</span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden group">
                  <img src={event07} alt="Sustainable Pavilion" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-400 uppercase">Green Pavilion</span>
                </div>
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden group">
                  <img src={event16} alt="Conclave Auditorium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono text-amber-400 uppercase">Delegates Gathering</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          2. STICKY FILTER & SEARCH CONTROLS BAR
      ========================================================= */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-xl border-b border-[#E6DFD3] shadow-sm py-4">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const CatIcon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = cat.id === "all" ? galleryData.length : galleryData.filter(i => i.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-[#121214] text-amber-400 shadow-md border border-amber-500/30"
                      : "bg-[#F0EADF] text-neutral-700 hover:bg-[#E6DFD3] hover:text-black"
                  }`}
                >
                  <CatIcon className={`w-3.5 h-3.5 ${isActive ? "text-amber-400" : "text-neutral-500"}`} />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? "bg-amber-500/20 text-amber-300" : "bg-neutral-200 text-neutral-600"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search & Layout View Toggles */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            
            {/* Grid Column Toggles */}
            <div className="hidden sm:flex items-center gap-1 bg-[#F0EADF] p-1 rounded-full border border-[#E6DFD3]">
              <button
                onClick={() => setGridColumns(3)}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  gridColumns === 3 ? "bg-[#121214] text-amber-400" : "text-neutral-600 hover:text-black"
                }`}
                title="3 Columns Grid"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridColumns(4)}
                className={`p-1.5 rounded-full text-xs transition-colors ${
                  gridColumns === 4 ? "bg-[#121214] text-amber-400" : "text-neutral-600 hover:text-black"
                }`}
                title="4 Columns Grid"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search photos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 rounded-full bg-[#F5F0E6] border border-[#E6DFD3] text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          3. MAIN GALLERY MASONRY & GRID SHOWCASE
      ========================================================= */}
      <main className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12">
        
        {/* Results Counter */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E6DFD3]">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Showing {filteredData.length} of {galleryData.length} Visual Assets
          </span>
          <span className="text-xs font-mono text-[#B38F38] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            Click any image to view full screen
          </span>
        </div>

        {/* Dynamic Grid Layout */}
        {filteredData.length > 0 ? (
          <motion.div
            layout
            className={`grid grid-cols-1 sm:grid-cols-2 ${
              gridColumns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            } gap-6`}
          >
            <AnimatePresence>
              {filteredData.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-[#E6DFD3] hover:border-amber-500/70 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.95] group-hover:brightness-100"
                    />

                    {/* Dark Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[9px] font-mono text-amber-400 border border-amber-500/30 uppercase tracking-widest">
                        {item.categoryLabel}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                    </div>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest mb-1 block">
                        {item.edition}
                      </span>
                      <h3 className="font-serif text-lg text-white font-medium group-hover:text-amber-300 transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-neutral-300 line-clamp-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.subtitle}
                      </p>
                    </div>

                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E6DFD3] space-y-4">
            <Camera className="w-12 h-12 text-neutral-300 mx-auto" />
            <h3 className="font-serif text-xl text-neutral-700 font-medium">No Visual Assets Found</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto">
              We couldn't find any photos matching your current search query "{searchQuery}". Try changing categories or clearing the search.
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full bg-[#121214] text-amber-400 font-bold text-xs uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      {/* =========================================================
          4. FULL-SCREEN LIGHTBOX MODAL WITH KEYBOARD CONTROLS
      ========================================================= */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredData[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 select-none"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between text-white z-10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  {filteredData[lightboxIndex].categoryLabel}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {lightboxIndex + 1} of {filteredData.length}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={filteredData[lightboxIndex].src}
                  download={`LAF_Gallery_${filteredData[lightboxIndex].id}.png`}
                  onClick={(e) => e.stopPropagation()}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-amber-500 hover:text-black text-white transition-colors"
                  title="Download Image"
                >
                  <Download className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-neutral-800 text-white transition-colors"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Center Main High-Res Image Display */}
            <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
                }}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 transition-all"
                title="Previous Image (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <motion.img
                key={filteredData[lightboxIndex].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={filteredData[lightboxIndex].src}
                alt={filteredData[lightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-2xl border border-white/10 shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/60 hover:bg-amber-500 hover:text-black text-white border border-white/20 transition-all"
                title="Next Image (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

            </div>

            {/* Bottom Captions & Info */}
            <div className="bg-black/70 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10 max-w-3xl mx-auto w-full text-center space-y-2 z-10" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                {filteredData[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {filteredData[lightboxIndex].subtitle}
              </p>
              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-neutral-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1 text-amber-400">
                  <MapPin className="w-3 h-3" />
                  Lucknow, Uttar Pradesh
                </span>
                <span>•</span>
                <span>{filteredData[lightboxIndex].edition}</span>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          5. CTA BANNER FOR PARTICIPATION
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-20">
        <div className="bg-[#121214] text-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Be Part of LAF 3.0</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
              Want your brand or project showcased in our <span className="text-amber-400">Next Archive?</span>
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm">
              Join North India's largest architecture, luxury &amp; lifestyle conclave as an exhibitor, delegate, or sponsor.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/participate"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
            >
              Participate at LAF 3.0
            </Link>
            <Link
              to="/highlights"
              className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors"
            >
              Explore Highlights
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GalleryPage;

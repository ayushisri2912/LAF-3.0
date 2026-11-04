import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  MoveHorizontal
} from "lucide-react";

// Import all 10 news clipping images
import news1Img from "../../assets/images/news1.png";
import news2Img from "../../assets/images/news2.png";
import news3Img from "../../assets/images/news3.png";
import news4Img from "../../assets/images/news4.png";
import news5Img from "../../assets/images/news5.png";
import news6Img from "../../assets/images/news6.png";
import news7Img from "../../assets/images/news7.png";
import news8Img from "../../assets/images/news8.png";
import news9Img from "../../assets/images/news9.png";
import news10Img from "../../assets/images/news10.png";

/* =========================================================
   ANIMATED COUNTER COMPONENT (Counts 0 to Target on Scroll)
========================================================= */
function AnimatedCounter({ end, duration = 2000, suffix = "+" }) {
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

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// 10 News Articles Data with Webomindapps style pastel background themes
const newsArticles = [
  {
    id: 1,
    num: "01",
    img: news1Img,
    publication: "Amar Ujala",
    edition: "Lucknow City Edition",
    headline: "ऑटोमेशन प्लान से अब घर बन रहे स्मार्ट",
    tag: "Smart Architecture & 5G",
    quote: "हाई स्पीड फाइबर इंटरनेट और 5G तकनीक के आने के बाद घरों के निर्माण के समय ही स्मार्ट डिजाइन का बढ़ने लगा उपयोग। इकाना स्टेडियम में आयोजित कार्यक्रम में देश के प्रमुख वास्तुविदों ने आधुनिक शहर निर्माण पर साझा किए विचार।",
    bgColor: "#FFF1F4", // Soft Blush Pink
    accentColor: "#E11D48",
  },
  {
    id: 6,
    num: "02",
    img: news6Img,
    publication: "Official Media Bureau",
    edition: "Ekana Stadium Press Lounge",
    headline: "LAF 2.0 Official Press Conference & Media Launch",
    tag: "National Media Meet",
    quote: "Lucknow Architects Association leadership and conveners addressing accredited national print, electronic, and digital press delegates at the grand curtain-raiser of Lucknow Architecture Festival 2.0.",
    bgColor: "#F0F7FF", // Soft Sky Blue
    accentColor: "#2563EB",
  },
  {
    id: 2,
    num: "03",
    img: news2Img,
    publication: "Rashtriya Sahara",
    edition: "Apna Shehar Edition",
    headline: "सपनों का महल बनाने पर वास्तुविदों का मंथन",
    tag: "Conclave & Urban Design",
    quote: "लखनऊ आर्किटेक्ट एसोसिएशन की ओर से आयोजित तीन दिवसीय फेस्टिवल 'आर्किभाव-2022' का भव्य समापन। देश भर के अग्रणी वास्तुकारों ने सतत विकास, ग्रीन बिल्डिंग व आधुनिक वास्तुकला पर की विस्तृत परिचर्चा।",
    bgColor: "#FFFAF0", // Soft Warm Cream
    accentColor: "#D97706",
  },
  {
    id: 3,
    num: "04",
    img: news3Img,
    publication: "Amar Ujala",
    edition: "Special Festival Edition",
    headline: "रसोई में होगा सेंसर, हाथ घुमाते खुलेंगी रैक",
    tag: "Materials & Smart Innovation",
    quote: "सूक्ष्म, लघु एवं मध्यम उद्यम व खादी ग्रामोद्योग मंत्री राकेश सचान ने दूसरे दिन कार्यक्रमों का शुभारंभ किया। स्मार्ट होम सिस्टम, सेंसर्स और मॉड्यूलर किचन की नई तकनीकों ने दर्शकों को आकर्षित किया।",
    bgColor: "#F2FDFB", // Soft Mint Ice
    accentColor: "#059669",
  },
  {
    id: 4,
    num: "05",
    img: news4Img,
    publication: "Samvad News Agency",
    edition: "Statewide Dispatch",
    headline: "रोजगार दिलाने में आर्किटेक्ट्स की भूमिका अहम",
    tag: "Youth & Employment",
    quote: "भवन निर्माण क्षेत्र से जुड़े पेशेवरों और युवा आर्किटेक्ट्स के लिए रोजगार के नए अवसर। एमएसएमई के जरिए युवाओं को रोजगार तथा निर्माण क्षेत्र की गुणवत्ता में सुधार पर विशेष सत्र।",
    bgColor: "#FAF3FD", // Soft Lilac
    accentColor: "#9333EA",
  },
  {
    id: 5,
    num: "06",
    img: news5Img,
    publication: "Dainik Jagran",
    edition: "Jagran City Special",
    headline: "इकाना स्टेडियम में आयोजित आर्किभाव में उमड़ी भीड़",
    tag: "Public Gathering",
    quote: "इकाना स्टेडियम में चल रहे आर्किटेक्चर एवं डिजाइन महोत्सव में दूसरे दिन भी उमड़ी दर्शकों की भारी भीड़। देश भर से आए छात्रों, डिजाइनर्स व आम जनता ने आधुनिक एग्जिबिशन स्टॉल्स का अवलोकन किया।",
    bgColor: "#FFF5EC", // Soft Peach
    accentColor: "#EA580C",
  },
  {
    id: 8,
    num: "07",
    img: news8Img,
    publication: "Television Broadcast",
    edition: "Live News Bulletin",
    headline: "वास्तुकला महोत्सव का आयोजन: विशेष ग्राउंड रिपोर्ट",
    tag: "TV & Digital Broadcast",
    quote: "उत्तर प्रदेश आवास एवं विकास परिषद और राष्ट्रीय व राज्य मीडिया चैनलों पर तीन दिवसीय वास्तुकला महोत्सव का सजीव प्रसारण व विशेष विश्लेषण बुलेटिन।",
    bgColor: "#FDF0F5", // Soft Rose
    accentColor: "#DB2777",
  },
  {
    id: 7,
    num: "08",
    img: news7Img,
    publication: "Dainik Jagran",
    edition: "City Broadsheet",
    headline: "आर्किभाव एलएएफ 2022 का तीन दिवसीय सम्मेलन संपन्न",
    tag: "Grand Conclave",
    quote: "'आर्किटेक्चर एक भाव है' — देश भर से जुटे विख्यात वास्तुविदों ने आधुनिक भवन निर्माण, स्मार्ट सिटी डिजाइन और सतत विकास से जुड़ी संभावनाओं पर निष्कर्ष साझा किए।",
    bgColor: "#F0FDF4", // Soft Honeydew
    accentColor: "#16A34A",
  },
  {
    id: 9,
    num: "09",
    img: news9Img,
    publication: "Navbharat Times",
    edition: "NBT Lucknow City",
    headline: "सीपेज से घर की सुंदरता न होगी कम • नई तकनीक",
    tag: "Smart City & Materials",
    quote: "आधुनिक तकनीकों से होगा स्थायी समाधान; नए निर्माण तकनीकों, वॉटरप्रूफिंग, और हरित भवनों पर विशेष चर्चा के साथ छोटे शहरों में आर्किटेक्चरल प्रभाव का विस्तार।",
    bgColor: "#FFF9E6", // Soft Warm Amber
    accentColor: "#CA8A04",
  },
  {
    id: 10,
    num: "10",
    img: news10Img,
    publication: "Amar Ujala",
    edition: "Double-Spread Special",
    headline: "आर्किटेक्ट को गैर प्रशिक्षणार्थियों से करनी पड़ रही प्रतिस्पर्धा",
    tag: "Professional Standards",
    quote: "शहर के सुनियोजित विकास और सुरक्षा मानकों के लिए योग्य व पंजीकृत आर्किटेक्ट्स का होना अनिवार्य। लखनऊ में आर्किटेक्ट एसोसिएशन के महाधिवेशन की संपूर्ण विस्तृत समीक्षा।",
    bgColor: "#F5F0FF", // Soft Iris
    accentColor: "#7C3AED",
  },
];

export default function LafInMediaSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  // Mouse Drag to Scroll State
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : newsArticles.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < newsArticles.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  // Track active slide on scroll
  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const slides = container.querySelectorAll("[data-news-slide]");
    let closestIndex = 0;
    let minDistance = Infinity;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.left - containerRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCurrentIndex(closestIndex);
  };

  // Scroll to slide by index
  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const slides = sliderRef.current.querySelectorAll("[data-news-slide]");
    if (slides[index]) {
      slides[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const next = Math.min(newsArticles.length - 1, currentIndex + 1);
    scrollToSlide(next);
  };

  const prevSlide = () => {
    const prev = Math.max(0, currentIndex - 1);
    scrollToSlide(prev);
  };

  // Mouse Drag Handlers
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.6;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  return (
    <section
      id="laf-in-media"
      className="relative overflow-hidden bg-[#FAF8F5] pt-8 sm:pt-12 lg:pt-14 pb-10 sm:pb-14 lg:pb-16 select-none font-sans border-t border-[#FED7AA]/60"
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
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 via-pink-400/5 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-400/10 via-orange-400/5 to-transparent rounded-full blur-3xl" />

      {/* Main Container Aligned to Navbar Width */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* ================= SECTION HEADLINE ================= */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-900/15">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1536] leading-[1.05]">
                LAF In{" "}
                <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                  Media.
                </span>
              </h2>

              <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3.5" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif italic text-sm sm:text-base md:text-lg text-neutral-600 max-w-md lg:text-right leading-relaxed"
            >
              “Capturing the conversations, innovation, and architectural discourse of Lucknow Architecture Festival across leading national dailies and broadcast networks.”
            </motion.p>
          </div>
        </div>

        {/* ================= SLIDER CONTROL TOOLBAR (WEBOMINDAPPS STYLE) ================= */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider text-neutral-600 bg-white/80 border border-neutral-300/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <MoveHorizontal className="w-4 h-4 text-[#EA580C] animate-pulse" />
            <span>SWIPE OR DRAG TO EXPLORE 10 EDITIONS</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Active Counter Badge */}
            <div className="font-mono text-xs sm:text-sm font-bold tracking-widest text-neutral-700 bg-white border border-neutral-300 px-3 py-1.5 rounded-xl shadow-2xs">
              <span className="text-[#EA580C]">{newsArticles[currentIndex].num}</span>
              <span className="text-neutral-400 mx-1">/</span>
              <span>10</span>
            </div>

            {/* Prev Button */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
                currentIndex === 0
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-white/50"
                  : "border-neutral-300 text-neutral-800 bg-white hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] active:scale-95"
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={currentIndex === newsArticles.length - 1}
              className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all cursor-pointer shadow-2xs ${
                currentIndex === newsArticles.length - 1
                  ? "border-neutral-200 text-neutral-300 cursor-not-allowed bg-white/50"
                  : "border-neutral-300 text-neutral-800 bg-white hover:bg-[#EA580C] hover:text-white hover:border-[#EA580C] active:scale-95"
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ================= WEBOMINDAPPS STYLE HORIZONTAL SWIPE SHOWCASE ================= */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 pb-6 select-none no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {newsArticles.map((article, index) => {
            return (
              <div
                key={article.id}
                data-news-slide
                onClick={() => setSelectedIndex(index)}
                className="w-[85vw] max-w-[900px] min-w-[300px] sm:min-w-[540px] lg:min-w-[800px] h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] shrink-0 snap-center rounded-3xl p-3 sm:p-5 border border-neutral-300/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-[#EA580C] hover:shadow-[0_16px_45px_rgba(234,88,12,0.15)] transition-all duration-400 relative overflow-hidden flex items-center justify-center cursor-pointer group"
                style={{ backgroundColor: article.bgColor }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white/70 border border-black/5 flex items-center justify-center p-2 sm:p-4 shadow-xs">
                  <img
                    src={article.img}
                    alt="LAF In Media News Clipping"
                    loading="lazy"
                    className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-white/95 backdrop-blur-xs text-neutral-900 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl">
                    <Maximize2 className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Click to View Full Size</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= PAGINATION PILLS INDICATOR ================= */}
        <div className="mt-4 flex items-center justify-center gap-2">
          {newsArticles.map((art, idx) => (
            <button
              key={art.id}
              onClick={() => scrollToSlide(idx)}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-8 bg-[#EA580C]"
                  : "w-2 bg-neutral-300 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ================= STATISTICS BANNER (KEPT AS REQUESTED FROM IMAGE 4) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-r from-[#C2B1D0] via-[#E8B5B3] via-50%-[#F9A669] to-[#F89D43] shadow-[0_8px_30px_rgba(234,88,12,0.12)] border border-white/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Stat 1: 200+ influencers captured the event */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2.5 max-w-[220px]">
                influencers<br className="hidden sm:block" /> captured the event
              </div>
            </div>

            {/* Stat 2: 100+ Media House covered the event */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2.5 max-w-[220px]">
                Media House<br className="hidden sm:block" /> covered the event
              </div>
            </div>

            {/* Stat 3: 50+ radio spots daily for a month */}
            <div className="text-left">
              <div className="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B1B] tracking-tight leading-none">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-medium text-[#1E1B1B] leading-snug mt-2.5 max-w-[240px]">
                radio spots<br className="hidden sm:block" /> daily for a month
              </div>
            </div>
          </div>
        </motion.div>

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
                  setSelectedIndex((prev) => (prev > 0 ? prev - 1 : newsArticles.length - 1))
                }
                className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#EA580C] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Previous Clipping"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setSelectedIndex((prev) => (prev < newsArticles.length - 1 ? prev + 1 : 0))
                }
                className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#EA580C] border border-white/20 text-white transition-all focus:outline-none z-10 cursor-pointer"
                aria-label="Next Clipping"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Container with Scroll for Long Articles */}
              <div className="w-full max-h-[75vh] flex items-center justify-center overflow-auto rounded-xl bg-neutral-900/60 p-2 border border-white/10">
                <img
                  src={newsArticles[selectedIndex].img}
                  alt={newsArticles[selectedIndex].headline}
                  className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Caption and Meta */}
              <div className="w-full mt-4 flex items-center justify-between text-neutral-400 text-xs font-mono px-2">
                <span className="font-bold uppercase tracking-wider text-[#FDBA74]">
                  {newsArticles[selectedIndex].publication} • {newsArticles[selectedIndex].edition}
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-white">
                  {selectedIndex + 1} of {newsArticles.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  UsersRound,
  Sparkles,
  GraduationCap,
  BookOpen,
  Trophy,
  Coffee,
  Palette,
  CalendarDays,
  Newspaper,
  PenLine,
  Scale,
  HeartHandshake,
  Landmark,
  ShieldCheck,
  UserCheck,
  Search,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

// ==========================================
// IMAGES IMPORTS
// ==========================================
import mentorImage from "../../assets/images/m-1.webp";
import con4Img from "../../assets/images/convenor.png";
import patron2Img from "../../assets/images/patrons2.png";
import patron3Img from "../../assets/images/patrons3.png";
import patron4Img from "../../assets/images/patrons4.png";

import con1Img from "../../assets/images/co-3.png";
import con2Img from "../../assets/images/conveners-2.webp";
import con3Img from "../../assets/images/conveners-3.webp";

import cc1Img from "../../assets/images/cc-1.webp";
import cc2Img from "../../assets/images/cc-2.webp";
import cc3Img from "../../assets/images/co-10.png";
import cc4Img from "../../assets/images/cc-4.webp";
import cc5Img from "../../assets/images/cc-5.webp";
import cc6Img from "../../assets/images/cc-6.webp";

import jc1Img from "../../assets/images/am1-1.webp";
import jc2Img from "../../assets/images/am1-2.webp";
import jc3Img from "../../assets/images/am2-1.webp";
import jc4Img from "../../assets/images/am2-2.webp";
import jc5Img from "../../assets/images/am3-1.webp";
import jc6Img from "../../assets/images/am3-2.webp";
import jc7Img from "../../assets/images/am4-1.webp";
import jc8Img from "../../assets/images/am4-2.webp";
import jc9Img from "../../assets/images/co-9.png";
import jc10Img from "../../assets/images/am5-2.webp";
import jc11Img from "../../assets/images/am6-1.webp";
import jc12Img from "../../assets/images/committee1.webp";
import jc13Img from "../../assets/images/am7-1.webp";
import jc14Img from "../../assets/images/am7-2.webp";
import jc15Img from "../../assets/images/am8-1.webp";
import jc16Img from "../../assets/images/am9-1.webp";
import jc17Img from "../../assets/images/am9-2.webp";
import jc18Img from "../../assets/images/am10-1.webp";
import jc19Img from "../../assets/images/am10-2.webp";
import jc20Img from "../../assets/images/am11-1.webp";
import jc21Img from "../../assets/images/am11-2.webp";
import jc22Img from "../../assets/images/am12-1.webp";
import jc23Img from "../../assets/images/am12-2.webp";
import jc24Img from "../../assets/images/am13-1.webp";
import jc25Img from "../../assets/images/am13-2.webp";
import jc26Img from "../../assets/images/am14-2.webp";
import jc27Img from "../../assets/images/am16-2.webp";
import jc28Img from "../../assets/images/am17-1.webp";
import jc29Img from "../../assets/images/am17-2.webp";

import sp2Img from "../../assets/images/54f541e1-f042-457e-9b6c-aedadf9664ef.webp";

// Helper function to resolve convener circular photo avatars
const getMemberAvatar = (name, customImg) => {
  if (customImg) return customImg;
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=181716&color=D4AF37&bold=true&size=128`;
};

// Helper function to generate member initials for avatar placeholder
const getMemberInitials = (name) => {
  if (!name) return "LAF";
  const cleanName = name
    .replace(/^(Ar\.|Dr\.|Er\.|Prof\.|Mr\.|Mrs\.|Ms\.)\s*/i, "")
    .trim();
  const words = cleanName.split(/\s+/).filter(Boolean);
  if (words.length === 0) return "LAF";
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
};

// Member Card Component matching Core Committee styling
const MemberCard = ({ member, index }) => {
  const [imgError, setImgError] = useState(false);
  const initials = getMemberInitials(member.name);
  const formattedIndex = index < 10 ? `0${index}` : index;

  return (
    <div className="group relative flex flex-col items-center p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(236,38,86,0.12)] transition-all duration-300 cursor-pointer text-center w-[210px] sm:w-[230px] md:w-[240px] shrink-0 snap-start hover:-translate-y-1 overflow-hidden">
      {/* Avatar circular frame with theme gradient ring matching Supporting Leadership */}
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-[#FB7801] via-[#EC2656] to-[#930777] transition-all duration-300 shadow-sm group-hover:shadow-[0_0_22px_rgba(236,38,86,0.25)] mb-4">
        <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
          {member.image && !imgError ? (
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2D2426] via-[#1D171A] to-[#120F11] flex flex-col items-center justify-center border-2 border-white/90 shadow-inner group-hover:border-white transition-colors duration-300">
              <span className="font-serif font-bold text-3xl sm:text-4xl text-[#FDEEE9] group-hover:text-amber-200 tracking-wider select-none">
                {initials}
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <span
          className="text-[9.5px] font-mono tracking-widest font-bold uppercase block truncate"
          style={{
            background: "linear-gradient(90deg, #FB7801, #930777)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          LAF 3.0 · #{formattedIndex}
        </span>
        <h4 className="font-serif text-base font-bold text-neutral-900 group-hover:text-[#EC2656] transition-colors mt-1 leading-snug line-clamp-2 min-h-[2.5rem] flex items-center justify-center">
          {member.name}
        </h4>
        <p className="text-xs text-neutral-500 font-medium mt-1 truncate">
          {member.role}
        </p>
      </div>

      {/* Bottom Shimmer Line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
        style={{
          background: "linear-gradient(90deg, #FB7801, #EC2656, #930777, #3C086E)",
        }}
      />
    </div>
  );
};

// Committee Slider Row Component (Heading Card + Independent Slider)
const CommitteeSliderRow = ({ committee, index }) => {
  const sliderRef = React.useRef(null);
  const IconComponent = committee.icon || GraduationCap;

  // Normalize conveners & members into unified list of member objects
  const allMembers = React.useMemo(() => {
    const convenersList = (committee.conveners || []).map((c) => ({
      name: c.name,
      role: c.role || "Convener",
      image: c.image || null,
    }));

    const membersList = (committee.members || []).map((m) => {
      if (typeof m === "string") {
        return {
          name: m,
          role: "Committee Member",
          image: null,
        };
      }
      return {
        name: m.name,
        role: m.role || "Committee Member",
        image: m.image || null,
      };
    });

    return [...convenersList, ...membersList];
  }, [committee]);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="mb-14"
    >
      {/* ================= COMMITTEE HEADING CARD ================= */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E6DFD3] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 relative overflow-hidden">
        {/* Theme Top Accent Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
          style={{
            background:
              "linear-gradient(90deg, #FB7801 0%, #EC2656 25%, #930777 75%, #3C086E 100%)",
          }}
        />

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-orange-400/5 to-purple-400/5 rounded-full blur-3xl pointer-events-none" />

        <div>
          {/* Top Category Tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EC2656] animate-pulse shrink-0" />
            <span
              className="text-xs font-mono font-bold tracking-[0.3em] uppercase"
              style={{
                background: "linear-gradient(90deg, #FB7801, #930777)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {committee.id} · {committee.category?.toUpperCase()}
            </span>
          </div>

          {/* Heading + Icon */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-orange-50 to-purple-50 border border-orange-100/80 flex items-center justify-center text-[#EC2656] shrink-0 shadow-2xs">
              <IconComponent size={22} strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 group-hover:text-[#EC2656] transition-colors">
              {committee.title}
            </h3>
          </div>

          {/* Subtitle */}
          {committee.subtitle && (
            <p className="mt-2 text-xs sm:text-sm font-mono tracking-wider text-neutral-500 uppercase">
              {committee.subtitle}
            </p>
          )}
        </div>

        {/* MEMBER COUNT & INDEPENDENT SLIDER NAVIGATION ARROWS */}
        <div className="flex items-center gap-4 self-start md:self-auto shrink-0">
          <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#EC2656] uppercase bg-gradient-to-r from-orange-50 to-purple-50 px-4 py-2 rounded-full border border-orange-100 shadow-2xs">
            MEMBERS ({allMembers.length.toString().padStart(2, "0")})
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              aria-label={`Previous members of ${committee.title}`}
              className="w-10 h-10 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#FB7801] hover:to-[#EC2656] border border-[#E6DFD3] hover:border-transparent text-[#EC2656] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label={`Next members of ${committee.title}`}
              className="w-10 h-10 rounded-full bg-white hover:bg-gradient-to-r hover:from-[#FB7801] hover:to-[#EC2656] border border-[#E6DFD3] hover:border-transparent text-[#EC2656] hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= INDEPENDENT HORIZONTAL SLIDER ================= */}
      <div
        ref={sliderRef}
        className="flex flex-nowrap overflow-x-auto gap-5 pb-4 pt-1 no-scrollbar scrollbar-none snap-x snap-mandatory scroll-smooth"
      >
        {allMembers.map((member, idx) => (
          <MemberCard key={member.name + idx} member={member} index={idx + 1} />
        ))}
      </div>
    </motion.div>
  );
};

// ==========================================
// DATA
// ==========================================

const mentorData = {
  name: "Ar. D.C. Thapar",
  role: "Honorary Mentor",
  badge: "MENTOR",
  tag: "LAA GUIDANCE",
  image: mentorImage,
  quote: "Experience that shapes the next generation of architects.",
};

const patronsData = [
  {
    name: "Ar. Ashok Kumar",
    role: "Patron",
    badge: "PATRON",
    image: con4Img,
  },
  {
    name: "Ar. Ajai Behl",
    role: "Patron",
    badge: "PATRON",
    image: patron2Img,
  },
  {
    name: "Dr. Vandana Sehgal",
    role: "Patron",
    badge: "PATRON",
    image: patron3Img,
  },
  {
    name: "Ar. Sanjay Sinha",
    role: "Patron",
    badge: "PATRON",
    image: patron4Img,
  },
];

const leadershipWings = [
  {
    title: "MENTOR",
    desc: "Guiding vision & architectural legacy",
    icon: Sparkles,
  },
  {
    title: "PATRONS",
    desc: "Distinguished leadership & advisory panel",
    icon: ShieldCheck,
  },
  {
    title: "OFFICE BEARERS",
    desc: 
    "Executive management & operations",
    icon: UserCheck,
  },
  {
    title: "EXECUTIVE COMMITTEE",
    desc: "Strategic execution & committee governance",
    icon: UsersRound,
  },
  {
    title: "INTELLECT COUNCIL",
    desc: "Academic & professional think tank",
    icon: GraduationCap,
  },
];

const committeesData = [
  {
    id: "01",
    title: "Academic Committee",
    category: "Education & Culture",
    icon: GraduationCap,
    subtitle: "Knowledge · Education · Pedagogy",
    conveners: [
      { name: "Ar. Suparna Sircar", role: "Convener", image: sp2Img },
      { name: "Dr. Ritu Gulati", role: "Co-Convener", image: jc12Img },
    ],
    members: [
      "Ar. Vivek Karmakar",
      "Ar. Mohit Kumar Agarwal",
      "Ar. Gaurav Singh",
      "Ar. Shalini Diwaker",
      "Ar. Juwairia Qamruddin",
    ],
  },
  {
    id: "02",
    title: "Edu-Formation Committee",
    category: "Education & Culture",
    icon: BookOpen,
    subtitle: "Skill Development · Professional Training",
    conveners: [
      { name: "Ar. D. P. Singh", role: "Convener", image: con1Img },
      { name: "Ar. Deepti Pandey Rana", role: "Co-Convener", image: jc24Img },
    ],
    members: [
      "Ar. Deepti Sagar",
      "Ar. Amit Raj",
      "Ar. Vaibhav Kulshrestha",
      "Ar. Prashant Tiwari",
      "Ar. Kabir Kumar",
    ],
  },
  {
    id: "03",
    title: "Sports Committee",
    category: "Community & Welfare",
    icon: Trophy,
    subtitle: "Community Fitness · Tournaments",
    conveners: [
      { name: "Ar. Shubhendra Bajpayee", role: "Convener", image: cc3Img },
      { name: "Ar. Sandeep Negi", role: "Co-Convener", image: jc9Img },
    ],
    members: [
      "Ar. Vinay Vishwkarma",
      "Ar. Soharab Khan",
      "Ar. Pallav Pratiyogi",
      "Ar. Chandan Bhardwaj",
    ],
  },
  {
    id: "04",
    title: "Hospitality & Welfare Committee",
    category: "Community & Welfare",
    icon: Coffee,
    subtitle: "Member Relations · Guest Experience",
    conveners: [
      { name: "Ar. Vaibhav Goel", role: "Convener", image: cc4Img },
      { name: "Ar. Aviral Agarwal", role: "Co-Convener", image: jc7Img },
    ],
    members: [
      "Ar. Kalankar Raj Gupta",
      "Ar. Salman Nasir",
      "Ar. Pankaj Singh",
      "Ar. Ravi Verma",
    ],
  },
  {
    id: "05",
    title: "Cultural & Exhibition Committee",
    category: "Education & Culture",
    icon: Palette,
    subtitle: "Art · Heritage · Architectural Exhibits",
    conveners: [
      { name: "Ar. Namit Tondon", role: "Convener", image: cc5Img },
      { name: "Ar. Nishant Upadhyay", role: "Co-Convener", image: jc27Img },
    ],
    members: [
      "Ar. Rohit Agarwal",
      "Dr. Anjaneya Sharma",
    ],
  },
  {
    id: "06",
    title: "Event Management Committee",
    category: "Operations & Media",
    icon: CalendarDays,
    subtitle: "Event Operations · Logistics & Hosting",
    conveners: [
      { name: "Ar. Shipra Singh", role: "Convener", image: jc11Img },
      { name: "Ar. Krishna Mohan Prajapati", role: "Co-Convener", image: cc6Img },
    ],
    members: [
      "Ar. Shishir Srivastva",
      "Ar. Abhishek Baidya",
      "Ar. Ashutosh Gupta",
    ],
  },
  {
    id: "07",
    title: "Membership & Directory Committee",
    category: "Operations & Media",
    icon: UsersRound,
    subtitle: "Network Growth · Member Registry",
    conveners: [
      { name: "Ar. Awadhesh Verma", role: "Convener", image: con2Img },
      { name: "Ar. Imran Khan", role: "Co-Convener", image: jc3Img },
    ],
    members: [
      "Ar. Alok Kumar",
      "Ar. Vishal Mathur",
    ],
  },
  {
    id: "08",
    title: "Media & Protocol Committee",
    category: "Operations & Media",
    icon: Newspaper,
    subtitle: "Press Relations · Branding & Outreach",
    conveners: [
      { name: "Ar. Prafull Gupta", role: "Convener", image: cc1Img },
      { name: "Ar. Priyanka Rastogi", role: "Co-Convener", image: jc25Img },
    ],
    members: [
      "Ar. Rohit Verma",
      "Ar. Shrish Pratap Singh",
      "Ar. Vandana Patel",
    ],
  },
  {
    id: "09",
    title: "Editorial, Publication & Graphics",
    category: "Operations & Media",
    icon: PenLine,
    subtitle: "Journal Publications · Design Standards",
    conveners: [
      { name: "Ar. Sushil Gupta", role: "Convener", image: cc3Img },
      { name: "Ar. Shiyak Singh", role: "Co-Convener", image: jc10Img },
    ],
    members: [
      "Ar. Saurav Verma",
      "Ar. Rajarshi",
      "Ar. Sayan Munshi",
    ],
  },
  {
    id: "10",
    title: "Legal Committee",
    category: "Practice & Governance",
    icon: Scale,
    subtitle: "Governance · Advisory & Professional Ethics",
    conveners: [
      { name: "Ar. Sanjeev Kumar Singh", role: "Convener", image: cc4Img },
      { name: "Ar. Arvind Gupta", role: "Co-Convener", image: jc23Img },
    ],
    members: [
      "Ar. Ashish Gupta",
      "Ar. Nitin Singh",
      "Ar. Alok Srivastava",
    ],
  },
  {
    id: "11",
    title: "Spouses Committee",
    category: "Community & Welfare",
    icon: HeartHandshake,
    subtitle: "Community Bonding · Family Welfare",
    conveners: [
      { name: "Ar. Vivek Agarwal", role: "Convener", image: con3Img },
      { name: "Ar. Faraj Ahmad Usmani", role: "Co-Convener", image: jc3Img },
    ],
    members: [
      "Ar. Umesh Gupta",
      "Ar. Gaurav Gupta",
      "Ar. Narayan Pandey",
    ],
  },
  {
    id: "12",
    title: "LSR Committee (LAA Social Responsibility)",
    category: "Community & Welfare",
    icon: Sparkles,
    subtitle: "Civic Outreach · Sustainable Urban Impact",
    conveners: [
      { name: "Ar. Shikhar Singh", role: "Convener", image: jc16Img },
      { name: "Ar. Roli Singh", role: "Co-Convener", image: jc17Img },
    ],
    members: [
      "Ar. Akhilesh Pal",
      "Ar. Utkarsh Shukla",
    ],
  },
  {
    id: "13",
    title: "Governments Interaction & Professional Practice",
    category: "Practice & Governance",
    icon: Landmark,
    subtitle: "Urban Policy · Govt Liaison & Standards",
    conveners: [
      { name: "Ar. Anupam Mittal", role: "Convener", image: con3Img },
      { name: "Ar. Rajat Kant Mittal", role: "Co-Convener", image: con1Img },
    ],
    members: [
      "LAA Governance Wing",
      "Policy & Urban Affairs Panel",
    ],
  },
];

const categories = ["All", "Education & Culture", "Operations & Media", "Practice & Governance", "Community & Welfare"];

const AboutLAASection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCommittees = committeesData.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.conveners &&
        item.conveners.some((c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase())
        )) ||
      (item.members &&
        item.members.some((m) =>
          (typeof m === "string" ? m : m.name)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        ));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="about-laa"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 font-sans"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHES ALL HOMEPAGE SECTIONS)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Signature Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(234,88,12,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(234,88,12,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Large Decorative Architectural Circles */}
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#F97316]/10" />
        <div className="absolute -left-20 top-60 w-[350px] h-[350px] rounded-full border border-[#F97316]/10" />
        <div className="absolute -right-40 bottom-20 w-[550px] h-[550px] rounded-full border border-[#F97316]/10" />
        <div className="absolute right-[10%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#F97316]/10" />

        {/* Architectural corner accents */}
        <div className="absolute left-[8%] top-[15%] h-24 w-24 border-l border-t border-[#EA580C]/15" />
        <div className="absolute bottom-[10%] right-[8%] h-24 w-24 border-b border-r border-[#EA580C]/15" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
                {/* =====================================================
            ABOUT LAA HERO PRESENTATION CARD (Exact Match to User Mockup Image 1)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[32px] sm:rounded-[38px] border border-[#FED7AA]/80 shadow-[0_8px_36px_rgba(234,88,12,0.06)] p-6 sm:p-10 lg:p-12 overflow-hidden"
        >

          {/* ================= MAIN CONTENT (TWO COLUMNS) ================= */}
          <div className="relative z-10 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 xl:gap-12">
            {/* ================= LEFT COLUMN: ABOUT LAA & HERITAGE SKETCH ================= */}
            <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col items-center lg:items-start text-center lg:text-left justify-between pt-2">
              <div className="w-full flex flex-col items-center lg:items-start">
                {/* Top Badge: —— 🏢 ABOUT LAA —— */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <span className="w-8 sm:w-12 h-px bg-orange-300" />
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#0B1536]">
                    <Building2 size={16} className="text-[#EA580C]" />
                    <span>ABOUT LAA</span>
                  </div>
                  <span className="w-8 sm:w-12 h-px bg-orange-300" />
                </div>

                {/* Main Heading: About LAA */}
                <h2 className="font-serif text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-tight leading-none">
                  <span className="text-[#0B1536]">About </span>
                  <span className="text-[#D91A5B]">LAA</span>
                </h2>

                {/* Gradient Pill Underline Bar */}
                <div className="w-40 sm:w-48 h-[5.5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-4" />

                {/* Subtitle: LUCKNOW ARCHITECTS ASSOCIATION */}
                <p className="mt-3.5 text-xs sm:text-[12.5px] font-mono font-bold uppercase tracking-[0.28em] text-neutral-800">
                  LUCKNOW ARCHITECTS ASSOCIATION
                </p>
              </div>

              {/* Architectural Monument Sketch (Lucknow Rumi Darwaza / Imambara) */}
              <div className="w-full max-w-[340px] mt-6 sm:mt-8 flex justify-center lg:justify-start">
                <svg
                  viewBox="0 0 340 180"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto opacity-35 pointer-events-none select-none"
                >
                  {/* Ground base */}
                  <line x1="10" y1="170" x2="330" y2="170" stroke="#C2410C" strokeWidth="1.2" />
                  <line x1="20" y1="173" x2="320" y2="173" stroke="#C2410C" strokeWidth="0.8" />

                  {/* Central Rumi Darwaza Grand Arch */}
                  <path
                    d="M110 170 V115 C110 65 135 38 170 30 C205 38 230 65 230 115 V170"
                    stroke="#C2410C"
                    strokeWidth="1.4"
                  />
                  {/* Scalloped Cusped Multi-foil Arch */}
                  <path
                    d="M120 170 V120 C120 102 128 92 138 92 C144 80 152 74 170 66 C188 74 196 80 202 92 C212 92 220 102 220 120 V170"
                    stroke="#C2410C"
                    strokeWidth="1.1"
                  />
                  <path
                    d="M132 170 V128 C132 112 144 98 170 90 C196 98 208 112 208 128 V170"
                    stroke="#C2410C"
                    strokeWidth="0.9"
                  />
                  {/* Top Spire & Crescent Finial */}
                  <path d="M170 30 V8 M166 16 C170 7 170 7 174 16" stroke="#C2410C" strokeWidth="1.4" />
                  <circle cx="170" cy="7" r="2.5" stroke="#C2410C" strokeWidth="1" />

                  {/* Arch Floral Border Cresting */}
                  <path
                    d="M110 110 C106 96 112 84 120 74 C130 64 140 54 155 42 C162 34 170 28 170 28 C170 28 178 34 185 42 C200 54 210 64 220 74 C228 84 234 96 230 110"
                    stroke="#C2410C"
                    strokeWidth="0.9"
                    strokeDasharray="2.5 2"
                  />

                  {/* Left Octagonal Turret */}
                  <rect x="88" y="70" width="16" height="100" stroke="#C2410C" strokeWidth="1.1" />
                  <line x1="88" y1="95" x2="104" y2="95" stroke="#C2410C" strokeWidth="0.7" />
                  <line x1="88" y1="120" x2="104" y2="120" stroke="#C2410C" strokeWidth="0.7" />
                  <line x1="88" y1="145" x2="104" y2="145" stroke="#C2410C" strokeWidth="0.7" />
                  <path d="M86 70 C86 56 96 46 96 46 C96 46 106 56 106 70 Z" stroke="#C2410C" strokeWidth="1.1" />
                  <line x1="96" y1="46" x2="96" y2="35" stroke="#C2410C" strokeWidth="1" />

                  {/* Right Octagonal Turret */}
                  <rect x="236" y="70" width="16" height="100" stroke="#C2410C" strokeWidth="1.1" />
                  <line x1="236" y1="95" x2="252" y2="95" stroke="#C2410C" strokeWidth="0.7" />
                  <line x1="236" y1="120" x2="252" y2="120" stroke="#C2410C" strokeWidth="0.7" />
                  <line x1="236" y1="145" x2="252" y2="145" stroke="#C2410C" strokeWidth="0.7" />
                  <path d="M234 70 C234 56 244 46 244 46 C244 46 254 56 254 70 Z" stroke="#C2410C" strokeWidth="1.1" />
                  <line x1="244" y1="46" x2="244" y2="35" stroke="#C2410C" strokeWidth="1" />

                  {/* Outer Left Side Pavilion */}
                  <path d="M50 170 V110 C50 95 65 85 88 85" stroke="#C2410C" strokeWidth="0.9" />
                  <rect x="36" y="90" width="14" height="80" stroke="#C2410C" strokeWidth="0.9" />
                  <path d="M34 90 C34 78 43 70 43 70 C43 70 52 78 52 90 Z" stroke="#C2410C" strokeWidth="0.9" />

                  {/* Outer Right Side Pavilion */}
                  <path d="M290 170 V110 C290 95 275 85 252 85" stroke="#C2410C" strokeWidth="0.9" />
                  <rect x="290" y="90" width="14" height="80" stroke="#C2410C" strokeWidth="0.9" />
                  <path d="M288 90 C288 78 297 70 297 70 C297 70 306 78 306 90 Z" stroke="#C2410C" strokeWidth="0.9" />
                </svg>
              </div>
            </div>

            {/* ================= VERTICAL DIVIDER LINE (Matching Mockup Image 1) ================= */}
            <div className="hidden lg:block w-[1.5px] bg-[#F97316] self-stretch my-2 shrink-0" />

            {/* ================= RIGHT COLUMN: NARRATIVE & QUOTE CARD ================= */}
            <div className="flex-1 flex flex-col justify-between pt-1">
              <div className="space-y-4">
                <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-neutral-800 font-normal">
                  Founded in the late 1960s by a group of distinguished architects, the{' '}
                  <strong className="font-bold text-[#D91A5B]">
                    Lucknow Architects Association (LAA)
                  </strong>
                  , is a forum for empowering individuals working in terms of professional development,
                  business development and net-working, and leadership in our community.
                </p>

                <p className="text-[14px] sm:text-[15.5px] leading-relaxed text-neutral-800 font-normal">
                  Since, its founding, the organization has expanded not only physically, with a rise
                  in the number of individual members and member firms, but also significantly in the
                  community's perception of it, thanks to its programs, opportunities for networking,
                  and community awards.
                </p>

                {/* Soft Peach/Orange Quote Card */}
                <div className="bg-[#FFF8F4] border border-[#FDBA74]/50 rounded-2xl p-4 sm:p-4.5 flex items-center gap-4 mt-5 shadow-2xs">
                  <div className="shrink-0 text-[#EA580C]">
                    <UsersRound size={28} strokeWidth={2.2} />
                  </div>
                  <div className="w-px h-10 bg-orange-300 shrink-0" />
                  <p className="font-serif italic text-sm sm:text-[14.5px] text-[#831843] leading-relaxed font-medium">
                    LAA provides a common forum for co-operation among individuals and businesses in the
                    architectural community and among building specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================= 3 STATS HORIZONTAL STRIP ================= */}
          <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#FED7AA]/60 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4 items-center">
            {/* STAT 1: ESTABLISHED 1960s */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:pl-4 lg:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-orange-200/90 shadow-sm flex items-center justify-center shrink-0">
                <CalendarDays className="w-7 h-7 text-[#EA580C]" strokeWidth={2} />
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-700 font-bold">
                  ESTABLISHED
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#0B1536] leading-tight mt-0.5">
                  1960s
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#EA580C] mt-1.5" />
              </div>
            </div>

            {/* STAT 2: COMMITTEES 13 Wings */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:border-l md:border-neutral-200/80 md:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-orange-200/90 shadow-sm flex items-center justify-center shrink-0">
                <UsersRound className="w-7 h-7 text-[#EA580C]" strokeWidth={2} />
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-700 font-bold">
                  COMMITTEES
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#D91A5B] leading-tight mt-0.5">
                  13 Wings
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#EA580C] mt-1.5" />
              </div>
            </div>

            {/* STAT 3: PILLARS 5 Leadership */}
            <div className="flex items-center justify-center md:justify-start gap-4 md:border-l md:border-neutral-200/80 md:pl-8">
              <div className="w-14 h-14 rounded-2xl bg-white border border-purple-200/90 shadow-sm flex items-center justify-center shrink-0">
                <Landmark className="w-7 h-7 text-[#7C2D92]" strokeWidth={2} />
              </div>
              <div>
                <span className="block font-mono text-xs uppercase tracking-[0.2em] text-neutral-700 font-bold">
                  PILLARS
                </span>
                <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#7C2D92] leading-tight mt-0.5">
                  5 Leadership
                </span>
                <div className="w-14 h-[3.5px] rounded-full bg-[#EA580C] mt-1.5" />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM TAG STRIP ================= */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-3 sm:gap-4 select-none">
            <span className="w-12 sm:w-20 h-px bg-orange-300" />
            <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.28em] text-neutral-800 uppercase">
              ARCHITECTURE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
            <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.28em] text-neutral-800 uppercase">
              COMMUNITY
            </span>
            <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
            <span className="text-xs sm:text-[12.5px] font-mono font-bold tracking-[0.28em] text-neutral-800 uppercase">
              LEADERSHIP
            </span>
            <span className="w-12 sm:w-20 h-px bg-orange-300" />
          </div>
        </motion.div>

        {/* =====================================================
            5 CORE LEADERSHIP PILLARS STRIP
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 py-8 border-y border-[#FED7AA]/60 bg-gradient-to-r from-orange-50/30 via-white to-amber-50/20 rounded-2xl px-4 sm:px-6"
        >
          <div className="mb-6 flex items-center justify-between px-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#EA580C]">
              ORGANIZATIONAL WINGS &amp; PILLARS
            </span>
            <span className="text-xs text-neutral-500 font-mono hidden sm:inline">
              STRUCTURE OF LUCKNOW ARCHITECTS ASSOCIATION
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {leadershipWings.map((wing, idx) => {
              const IconComp = wing.icon;
              return (
                <div
                  key={wing.title}
                  className="group relative p-5 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-orange-50/30 border border-[#FED7AA]/70 hover:border-[#F97316] shadow-[0_2px_12px_rgba(249,115,22,0.04)] hover:shadow-[0_8px_24px_rgba(249,115,22,0.12)] hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#EA580C] font-bold">
                      0{idx + 1}
                    </span>
                    <IconComp size={19} className="text-[#EA580C] group-hover:scale-110 group-hover:text-[#D91A5B] transition-all" />
                  </div>
                  <h4 className="font-serif text-sm font-bold tracking-wide text-[#0B1536] group-hover:text-[#EA580C] transition-colors">
                    {wing.title}
                  </h4>
                  <p className="mt-1 text-[11.5px] leading-snug text-neutral-500">
                    {wing.desc}
                  </p>
                  <div className="mt-3 h-[2px] w-0 group-hover:w-8 bg-gradient-to-r from-[#EA580C] to-[#D91A5B] transition-all duration-300" />
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            MENTOR & PATRONS SHOWCASE
        ====================================================== */}
        <div className="mt-20">
          {/* SECTION SUBHEADER */}
          <div className="mb-10 sm:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E6DFD3] pb-6">
            <div className="max-w-2xl">
              <div className="mb-3.5 flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EC2656]"></span>
                </span>
                <span
                  className="text-[11px] font-mono font-bold uppercase tracking-[0.25em]"
                  style={{
                    background: "linear-gradient(90deg, #FB7801, #930777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  GUIDING LIGHTS &amp; LEADERSHIP
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-neutral-900 leading-[1.1]">
                Mentor &amp;{" "}
                <span
                  className="italic font-serif font-normal"
                  style={{
                    background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Patrons
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                Honoring the esteemed mentors and founding patrons driving the mission of Lucknow Architects Association.
              </p>
            </div>

            <div
              className="hidden lg:flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-white/30 shadow-sm text-white"
              style={{
                background:
                  "linear-gradient(90deg, #FB7801 0%, #EC2656 40%, #930777 80%, #3C086E 100%)",
              }}
            >
              <ShieldCheck className="w-5 h-5 text-amber-300" />
              <div className="text-left">
                <div className="text-[11px] font-bold uppercase tracking-wider text-white">
                  LAA Leadership
                </div>
                <div className="text-[10px] font-mono text-white/70">
                  1 Mentor · 4 Patrons
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* FEATURED UNIQUE MENTOR CARD (LEFT) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FAF6EE] p-6 sm:p-7 rounded-3xl border border-[#E6DFD3] hover:border-[#D4AF37]/70 shadow-sm flex flex-col justify-between text-center relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
              {/* Gold Top Light Sweep */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Unique Gold Mentor Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FB7801] via-[#EC2656] to-[#930777] text-white text-[9.5px] font-bold uppercase font-mono tracking-widest px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles size={11} />
                <span>{mentorData.badge}</span>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B77A27] font-bold font-mono mb-3 text-left">
                  ✦ {mentorData.tag}
                </p>

                {/* Avatar with double orbit ring - bigger image */}
                <div className="relative mx-auto h-44 w-44 sm:h-48 sm:w-48 my-2">
                  <div className="absolute -inset-2 rounded-full border border-[#D4AF37]/50 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -inset-4 rounded-full border border-[#D4AF37]/25 pointer-events-none" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg bg-white flex items-center justify-center">
                    <img
                      src={mentorData.image}
                      alt={mentorData.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h4 className="mt-3 font-serif text-2xl font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors">
                  {mentorData.name}
                </h4>
                <p className="mt-0.5 text-xs font-mono tracking-[0.25em] text-[#B77A27] uppercase font-bold">
                  {mentorData.role}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#E6DFD3] text-center">
                <p className="font-serif italic text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  "{mentorData.quote}"
                </p>
              </div>
            </motion.div>

            {/* PATRONS COMPACT MINIMAL GRID (RIGHT) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
              {patronsData.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#D4AF37]/70 shadow-2xs hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* Patron Badge */}
                  <div className="absolute top-2.5 right-2.5 text-[8.5px] font-bold uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-amber-50/80 text-[#B77A27] border border-amber-200/60 font-bold">
                    {person.badge}
                  </div>

                  <div className="w-full flex flex-col items-center pt-2">
                    {/* Image Circular Ring */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_18px_rgba(183,122,39,0.2)] mb-3">
                      <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                        <img
                          src={person.image}
                          alt={person.name}
                          className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <h5 className="font-serif text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors leading-snug">
                      {person.name}
                    </h5>
                    <p className="mt-1 text-[11px] text-neutral-500 font-medium">
                      {person.role}
                    </p>
                  </div>

                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#D4AF37] to-[#FB7801] group-hover:w-8 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            LAA COMMITTEES SHOWCASE (REDESIGNED WITH STANDALONE CIRCULAR CONVENER HEADSHOTS)
        ====================================================== */}
        <div id="committees" className="mt-24">
          {/* HEADER & FILTER BAR */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E6DFD3] pb-6 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EC2656]"></span>
                  </span>
                  <span
                    className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase"
                    style={{
                      background: "linear-gradient(90deg, #FB7801, #930777)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    LAA WORKING STRUCTURE
                  </span>
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                  LAA{" "}
                  <span
                    className="italic font-serif font-normal"
                    style={{
                      background: "linear-gradient(90deg, #FB7801, #EC2656, #930777)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Committees
                  </span>
                </h3>
              </div>

              {/* SEARCH BAR */}
              <div className="relative w-full lg:w-72">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search committee or member..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E6DFD3] text-xs focus:outline-hidden focus:border-[#EC2656]/60 focus:ring-1 focus:ring-[#EC2656]/30 transition-all placeholder:text-neutral-400 shadow-2xs"
                />
              </div>
            </div>

            {/* CATEGORY TABS */}
            <div className="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`
                    px-4 py-2 rounded-full text-xs whitespace-nowrap transition-all duration-300 cursor-pointer
                    ${
                      selectedCategory === cat
                        ? "text-white shadow-sm font-semibold"
                        : "bg-white hover:bg-[#FDFBF7] text-neutral-700 border border-[#E6DFD3] hover:border-[#EC2656]/40 font-medium"
                    }
                  `}
                  style={
                    selectedCategory === cat
                      ? {
                          background:
                            "linear-gradient(90deg, #FB7801 0%, #EC2656 40%, #930777 80%, #3C086E 100%)",
                        }
                      : undefined
                  }
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* COMMITTEES LIST - EACH COMMITTEE HAS A HEADING CARD & INDEPENDENT HORIZONTAL SLIDER */}
          <div>
            <AnimatePresence mode="popLayout">
              {filteredCommittees.map((item, index) => (
                <CommitteeSliderRow
                  key={item.id + item.title}
                  committee={item}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>

          {filteredCommittees.length === 0 && (
            <div className="text-center py-16 bg-white/50 rounded-2xl border border-[#E6DFD3]">
              <p className="text-neutral-500 font-serif text-lg">
                No committee or member found matching "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-5 py-2 rounded-full text-white text-xs font-medium transition-all shadow-sm cursor-pointer"
                style={{
                  background:
                    "linear-gradient(90deg, #FB7801, #EC2656, #930777)",
                }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* =====================================================
            CLOSING STATEMENT BANNER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-12 border-y border-[#D9D0C2] py-6 sm:py-8"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                THE LAA VISION
              </span>

              <h3 className="mt-3 max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#171717]">
                Building a stronger architectural community through{" "}
                <span className="font-serif italic text-[#B77A27]">
                  ideas, collaboration and shared purpose.
                </span>
              </h3>
            </div>

            <a
              href="#committees"
              className="group flex items-center justify-between bg-[#151515] border border-[#B77A27]/30 hover:border-[#B77A27] px-6 py-5 text-white transition-all duration-300 hover:bg-[#1c1c1f] shadow-sm hover:shadow-xl rounded-xl relative overflow-hidden min-w-[260px]"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B77A27] group-hover:w-1.5 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#B77A27] uppercase">
                  STRUCTURE
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  EXPLORE ALL COMMITTEES
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B77A27]/50 group-hover:bg-[#B77A27] group-hover:text-black flex items-center justify-center transition-all duration-300 text-[#B77A27] ml-4">
                <ArrowUpRight size={16} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutLAASection;
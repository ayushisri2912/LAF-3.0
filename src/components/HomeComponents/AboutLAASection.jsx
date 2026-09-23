import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  UsersRound,
  Plus,
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
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

// ==========================================
// IMAGES
// ==========================================
import mentorImage from "../../assets/images/m-1.png";
import ob11Img from "../../assets/images/ob1.1.png";
import ob12Img from "../../assets/images/ob1.2.png";
import ob21Img from "../../assets/images/ob2.1.png";
import db22Img from "../../assets/images/db2.2.png";
import cd31Img from "../../assets/images/cd3.1.png";
import cd32Img from "../../assets/images/cd3.2.png";
import cd4Img from "../../assets/images/cd-4.png";

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
    role: "Patron / Past President",
    badge: "PATRON",
    image: ob11Img,
  },
  {
    name: "Ar. Anupam Mittal",
    role: "Patron / President",
    badge: "PATRON",
    image: ob12Img,
  },
  {
    name: "Ar. Sanjay Patel",
    role: "Patron / Past President",
    badge: "PATRON",
    image: ob21Img,
  },
  {
    name: "Ar. Devesh Mani",
    role: "Patron / Gen. Secretary",
    badge: "PATRON",
    image: db22Img,
  },
  {
    name: "Ar. Nitin Gangwar",
    role: "Patron / Secretary",
    badge: "PATRON",
    image: cd31Img,
  },
  {
    name: "Ar. Ashutosh Gupta",
    role: "Patron / Joint Secretary",
    badge: "PATRON",
    image: cd32Img,
  },
  {
    name: "Ar. Devendra Kumar",
    role: "Patron / Treasurer",
    badge: "PATRON",
    image: cd4Img,
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
    desc: "Executive management & operations",
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
    members: [
      "Ar. Amit Raj",
      "Ar. Deepti Sagar",
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
    members: [
      "Ar. Namit Tondon",
      "Ar. Nishant Upadhyay",
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
    members: [
      "Ar. Shipra Singh",
      "Ar. Krishna Mohan Prajapati",
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
    members: [
      "Ar. Awadhesh Verma",
      "Ar. Imran Khan",
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
    members: [
      "Ar. Prafull Gupta",
      "Ar. Priyanka Rastogi",
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
    members: [
      "Ar. Sushil Gupta",
      "Ar. Shiyak Singh",
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
    members: [
      "Ar. Sanjeev Kumar Singh",
      "Ar. Arvind Gupta",
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
    members: [
      "Ar. Vivek Agarwal",
      "Ar. Faraj Ahmad Usmani",
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
    members: [
      "Ar. Shikhar Singh",
      "Ar. Roli Singh",
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
    members: [
      "LAA Strategic Governance Wing",
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
      item.members.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="about-laa"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20 font-sans"
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
              linear-gradient(rgba(120,90,40,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,90,40,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Large Decorative Architectural Circles */}
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -left-20 top-60 w-[350px] h-[350px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -right-40 bottom-20 w-[550px] h-[550px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute right-[10%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#B8893A]/10" />

        {/* Architectural corner accents */}
        <div className="absolute left-[8%] top-[15%] h-24 w-24 border-l border-t border-[#B8893A]/20" />
        <div className="absolute bottom-[10%] right-[8%] h-24 w-24 border-b border-r border-[#B8893A]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            TOP LABEL / HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-center justify-between border-b border-[#D9D0C2] pb-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-[#B77A27] font-mono">09</span>
            <span className="w-12 h-px bg-[#B77A27]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
              THE ASSOCIATION · EST. 1960S
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B77A27] font-mono">
            <Building2 size={15} className="text-[#B77A27]" />
            <span>Lucknow Architects Association</span>
          </div>
        </motion.div>

        {/* =====================================================
            HERO INTRO SECTION
        ====================================================== */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#B8893A]/30 bg-white/50 text-[9.5px] font-bold tracking-[0.18em] text-[#80581B] shadow-2xs mb-6">
              <Building2 size={14} />
              <span>ABOUT LAA</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-[#171717]">
              A community{" "}
              <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
                shaping places.
              </span>
            </h2>

            {/* Est badge & quick stat counters */}
            <div className="mt-10 pt-8 border-t border-[#D9D0C2] grid grid-cols-3 gap-4">
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-neutral-400">
                  ESTABLISHED
                </span>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#171717] mt-1">
                  1960s
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#B77A27]">
                  COMMITTEES
                </span>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#B77A27] mt-1">
                  13 Wings
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-[0.2em] text-neutral-400">
                  PILLARS
                </span>
                <span className="block font-serif text-2xl sm:text-3xl font-medium text-[#171717] mt-1">
                  5 Leadership
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN - DETAILED Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 bg-white/60 backdrop-blur-xs p-8 sm:p-10 rounded-2xl border border-[#D9D0C2] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#B77A27]/10 to-transparent pointer-events-none" />

            <p className="text-base sm:text-lg leading-relaxed text-neutral-700">
              Founded in the late 1960s by a group of distinguished architects, the{" "}
              <strong className="font-semibold text-[#171717]">Lucknow Architects Association (LAA)</strong>{" "}
              is a forum for empowering individuals working in terms of professional development, business development and networking, and leadership in our community.
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-neutral-600">
              Since its founding, the organization has expanded not only physically—with a steady rise in individual members and member firms—but also significantly in the community’s perception, thanks to its signature programs, networking opportunities, and community awards.
            </p>

            <p className="mt-6 text-base leading-relaxed text-neutral-600 border-l-2 border-[#B77A27] pl-4 italic">
              "LAA provides a common forum for cooperation among individuals and businesses in the architectural community and among building specialists."
            </p>

            <div className="mt-8 pt-6 border-t border-[#D9D0C2] flex items-center justify-between">
              <span className="text-[10.5px] font-mono uppercase tracking-[0.25em] text-[#B77A27]">
                ARCHITECTURE · COMMUNITY · LEADERSHIP
              </span>
              <span className="h-2 w-2 rounded-full bg-[#B77A27]" />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            5 CORE LEADERSHIP PILLARS STRIP
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-y border-[#D9D0C2] bg-[#F7F4EE]/90 py-8"
        >
          <div className="mb-6 flex items-center justify-between px-2">
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.28em] text-[#B77A27]">
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
                  className="group relative p-5 rounded-xl bg-white/70 hover:bg-white border border-[#D9D0C2] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10.5px] text-[#B77A27] font-bold">
                      0{idx + 1}
                    </span>
                    <IconComp size={18} className="text-[#B77A27] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-serif text-sm font-semibold tracking-wide text-[#171717] group-hover:text-[#B77A27] transition-colors">
                    {wing.title}
                  </h4>
                  <p className="mt-1 text-[11px] leading-tight text-neutral-500">
                    {wing.desc}
                  </p>
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
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between border-b border-[#D9D0C2] pb-6">
            <div>
              <p className="text-[10.5px] font-mono font-bold uppercase tracking-[0.28em] text-[#B77A27] mb-2">
                GUIDING LIGHTS &amp; LEADERSHIP
              </p>
              <h3 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#171717]">
                Mentor &amp; Patrons
              </h3>
            </div>
            <p className="mt-3 md:mt-0 text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed">
              Honoring the esteemed mentors and founding patrons driving the mission of Lucknow Architects Association.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-stretch">
            {/* FEATURED UNIQUE MENTOR CARD (LEFT) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4 bg-gradient-to-b from-[#FFFDF9] via-white to-[#F7F2EA] p-7 sm:p-8 rounded-3xl border-2 border-[#D4AF37]/40 shadow-lg flex flex-col justify-between text-center relative overflow-hidden group hover:shadow-2xl hover:border-[#B77A27] transition-all duration-500"
            >
              {/* Gold Top Light Sweep */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

              {/* Unique Gold Mentor Badge */}
              <div className="absolute top-4 right-4 bg-[#B77A27] text-white text-[9.5px] font-bold uppercase font-mono tracking-widest px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles size={11} />
                <span>{mentorData.badge}</span>
              </div>

              <div>
                <p className="text-[10.5px] uppercase tracking-[0.28em] text-[#B77A27] font-bold font-mono mb-4 text-left">
                  ✦ {mentorData.tag}
                </p>

                {/* Avatar with double orbit ring */}
                <div className="relative mx-auto h-32 w-32 sm:h-36 sm:w-36 my-3">
                  <div className="absolute -inset-2.5 rounded-full border border-[#B77A27]/30 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute -inset-5 rounded-full border border-[#B8893A]/15 pointer-events-none" />
                  <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-lg bg-white">
                    <img
                      src={mentorData.image}
                      alt={mentorData.name}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <h4 className="mt-4 font-serif text-2xl font-bold text-[#171717] group-hover:text-[#B77A27] transition-colors">
                  {mentorData.name}
                </h4>
                <p className="mt-0.5 text-xs font-mono tracking-[0.25em] text-[#B77A27] uppercase font-bold">
                  {mentorData.role}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#E6DFD3] text-center">
                <p className="font-serif italic text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  "{mentorData.quote}"
                </p>
              </div>
            </motion.div>

            {/* PATRONS COMPACT MINIMAL GRID (RIGHT) */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {patronsData.map((person, index) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative flex flex-col items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/80 hover:bg-white border border-[#D9D0C2] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* Patron Badge */}
                  <div className="absolute top-2.5 right-2.5 text-[8.5px] font-bold uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-amber-50 text-[#B77A27] border border-amber-200/60">
                    {person.badge}
                  </div>

                  <div className="w-full flex flex-col items-center pt-2">
                    {/* Image Circular Ring */}
                    <div className="relative w-22 h-22 sm:w-26 sm:h-26 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/40 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_18px_rgba(183,122,39,0.2)] mb-3">
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
                    <p className="mt-0.5 text-[10px] text-neutral-500 font-medium">
                      {person.role}
                    </p>
                  </div>

                  <div className="mt-3 h-0.5 w-0 bg-[#B77A27] group-hover:w-8 transition-all duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            LAA COMMITTEES SHOWCASE (FULL 13 COMMITTEES)
        ====================================================== */}
        <div id="committees" className="mt-24">
          {/* HEADER & FILTER BAR */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#D9D0C2] pb-6 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-px w-8 bg-[#B77A27]" />
                  <span className="text-[10.5px] font-mono font-bold uppercase tracking-[0.28em] text-[#B77A27]">
                    LAA WORKING STRUCTURE
                  </span>
                </div>
                <h3 className="font-serif text-4xl sm:text-5xl tracking-tight text-[#171717]">
                  LAA Committees
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
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#D9D0C2] text-xs focus:outline-hidden focus:border-[#B77A27] transition-colors placeholder:text-neutral-400"
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
                    px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 cursor-pointer
                    ${
                      selectedCategory === cat
                        ? "bg-[#171717] text-white shadow-xs"
                        : "bg-white/80 hover:bg-white text-neutral-600 border border-[#D9D0C2]"
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* COMMITTEES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredCommittees.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id + item.title}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.03 }}
                    className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/70 hover:bg-white border border-[#D9D0C2] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      {/* CARD TOP BAR */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-[#B77A27] bg-[#B77A27]/10 px-2.5 py-1 rounded-md border border-[#B77A27]/20">
                          {item.id}
                        </span>

                        <div className="h-10 w-10 rounded-xl bg-[#F7F4EE] border border-[#D9D0C2] flex items-center justify-center text-[#B77A27] group-hover:bg-[#B77A27] group-hover:text-white transition-colors duration-300">
                          <IconComponent size={20} strokeWidth={1.5} />
                        </div>
                      </div>

                      {/* TITLE & SUBTITLE */}
                      <h4 className="font-serif text-xl font-semibold text-[#171717] group-hover:text-[#B77A27] transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-[11px] font-mono tracking-wider text-neutral-500 uppercase">
                        {item.subtitle}
                      </p>

                      {/* MEMBERS LIST */}
                      <div className="mt-6 pt-4 border-t border-[#D9D0C2]">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B77A27] block mb-3 font-mono">
                          COMMITTEE MEMBERS
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.members.map((member) => (
                            <span
                              key={member}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F7F4EE] hover:bg-[#EAE5DC] border border-[#D9D0C2] text-[11px] text-neutral-700 transition-colors"
                            >
                              <CheckCircle2 size={11} className="text-[#B77A27]" />
                              <span>{member}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* FOOTER */}
                    <div className="mt-6 pt-4 border-t border-[#D9D0C2]/60 flex items-center justify-between text-xs text-neutral-400 font-mono">
                      <span>{item.category}</span>
                      <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform text-[#B77A27]" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {filteredCommittees.length === 0 && (
            <div className="text-center py-16 bg-white/50 rounded-2xl border border-[#D9D0C2]">
              <p className="text-neutral-500 font-serif text-lg">
                No committee or member found matching "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-5 py-2 rounded-full bg-[#171717] text-white text-xs font-medium hover:bg-[#B77A27] transition-colors"
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
          className="mt-20 border-y border-[#D9D0C2] py-8 sm:py-10"
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
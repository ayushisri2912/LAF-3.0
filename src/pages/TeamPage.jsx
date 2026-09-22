import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Compass,
} from "lucide-react";

const BASE_URL = "https://lucknowarchitecturefestival.in/img/comm1/";

export const teamCategories = {
  "core-committee": {
    id: "core-committee",
    title: "Core Committee",
    tagline: "ORGANIZING LEADERSHIP & CREATIVE DIRECTION",
    subtitle: "01 · CORE COMMITTEE",
    description: "The core committee and curators driving the architectural themes, creative direction, and organization of LAF 3.0.",
    icon: Users,
    countLabel: "06 MEMBERS",
    members: Array.from({ length: 6 }, (_, index) => ({
      id: `cu-${index + 1}`,
      name: `Core Committee Member ${index + 1}`,
      role: index < 3 ? "Lead Curator" : "Core Committee Member",
      image: `${BASE_URL}cu${index + 1}.png`,
    })),
  },
  "advisors-mentors": {
    id: "advisors-mentors",
    title: "Advisors & Mentors",
    tagline: "VETERAN ARCHITECTS & ADVISORY BOARD",
    subtitle: "02 · ADVISORS & MENTORS",
    description: "Senior architects, advisors, and joint convenors guiding LAF 3.0 with vision, wisdom, and industry experience.",
    icon: Award,
    countLabel: "15 MEMBERS",
    members: Array.from({ length: 15 }, (_, index) => ({
      id: `jc-${index + 1}`,
      name: `Advisor & Mentor ${index + 1}`,
      role: "Senior Advisory Member",
      image: `${BASE_URL}jc${index + 1}.png`,
    })),
  },
  "student-volunteers": {
    id: "student-volunteers",
    title: "Student Volunteers & Coordinators",
    tagline: "FUTURE ARCHITECTS & EXECUTION TEAM",
    subtitle: "03 · VOLUNTEERS & COORDINATORS",
    description: "The enthusiastic coordinators and student volunteers leading logistics, guest relations, and ground execution.",
    icon: GraduationCap,
    countLabel: "15 MEMBERS",
    members: Array.from({ length: 15 }, (_, index) => ({
      id: `co-${index + 1}`,
      name: `Coordinator / Volunteer ${index + 1}`,
      role: "Event Coordinator",
      image: `${BASE_URL}co${index + 1}.png`,
    })),
  },
  "convenors": {
    id: "convenors",
    title: "Convenors",
    tagline: "FESTIVAL LEADERSHIP",
    subtitle: "00 · LEADERSHIP",
    description: "The leadership team convening Lucknow Architecture Festival 3.0.",
    icon: Sparkles,
    countLabel: "03 MEMBERS",
    members: Array.from({ length: 3 }, (_, index) => ({
      id: `con-${index + 1}`,
      name: `Convenor ${index + 1}`,
      role: "Festival Convenor",
      image: `${BASE_URL}con${index + 1}.png`,
    })),
  },
};

export default function TeamPage() {
  const { submenu } = useParams();
  const navigate = useNavigate();

  const currentCategoryKey = submenu && teamCategories[submenu] ? submenu : "core-committee";
  const currentCategory = teamCategories[currentCategoryKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [submenu]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30">
      {/* Background Architectural Watermark & Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 140, 60, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 140, 60, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-[6%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
        <div className="absolute right-[6%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-8 pb-24">
        {/* Top Breadcrumbs & Back button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-[#B77A27] transition-colors bg-white/80 border border-[#E6DFD3] hover:border-[#B77A27]/40 rounded-full px-4 py-2 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
            <Link to="/" className="hover:text-[#B77A27] transition-colors">LAF 3.0</Link>
            <ChevronRight className="w-3 h-3 text-[#B77A27]" />
            <span>TEAM</span>
            <ChevronRight className="w-3 h-3 text-[#B77A27]" />
            <span className="text-[#B77A27] font-bold">{currentCategory.title}</span>
          </div>
        </div>

        {/* Submenu Category Switcher Tabs */}
        <div className="mb-12 border-b border-[#D4AF37]/25 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {Object.keys(teamCategories).map((key) => {
              const cat = teamCategories[key];
              const isActive = key === currentCategoryKey;
              const IconComp = cat.icon;

              return (
                <button
                  key={key}
                  onClick={() => navigate(`/team/${key}`)}
                  className={`
                    relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#121214] text-amber-400 shadow-lg border border-[#D4AF37]/50"
                        : "bg-white/70 hover:bg-white text-neutral-600 hover:text-neutral-900 border border-[#E6DFD3] hover:border-[#D4AF37]/40 shadow-2xs"
                    }
                  `}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-[#B77A27]"}`} />
                  <span>{cat.title}</span>
                  <span
                    className={`
                      text-[9px] font-mono px-2 py-0.5 rounded-full font-bold
                      ${isActive ? "bg-amber-400/20 text-amber-300 border border-amber-400/30" : "bg-neutral-100 text-neutral-500"}
                    `}
                  >
                    {cat.members.length.toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Header for current category */}
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end bg-white/60 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#B77A27] font-semibold uppercase">
                {currentCategory.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717]">
              {currentCategory.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              {currentCategory.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <div className="p-4 rounded-2xl bg-[#121214] text-white border border-[#D4AF37]/30 shadow-md w-full sm:w-auto min-w-[200px]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">TOTAL</span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="font-serif text-3xl font-medium text-amber-400 mt-1">
                {currentCategory.members.length.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                {currentCategory.tagline}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {currentCategory.members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.3) }}
              className="group flex flex-col items-center p-5 rounded-2xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
            >
              {/* Avatar ring */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/40 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(183,122,39,0.2)] mb-4">
                <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="w-full">
                <span className="text-[9px] font-mono tracking-widest text-[#B77A27] font-semibold uppercase block truncate">
                  LAF 3.0 · #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <h3 className="font-serif text-sm font-semibold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-0.5 truncate">
                  {member.name}
                </h3>
                <p className="text-[10px] text-neutral-500 truncate mt-0.5">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

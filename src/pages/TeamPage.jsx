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
} from "lucide-react";

import con1Img from "../assets/images/conveners-1.png";
import con2Img from "../assets/images/conveners-2.png";
import con3Img from "../assets/images/conveners-3.png";

import cc1Img from "../assets/images/cc-1.png";
import cc2Img from "../assets/images/cc-2.png";
import cc3Img from "../assets/images/cc-3.png";
import cc4Img from "../assets/images/cc-4.png";
import cc5Img from "../assets/images/cc-5.png";
import cc6Img from "../assets/images/cc-6.png";

const BASE_URL = "https://lucknowarchitecturefestival.in/img/comm1/";

export const convenorLeadershipMembers = [
  {
    id: "con-1",
    name: "Ar.Rajat Kant Mittal",
    role: "Festival Convenor",
    image: con1Img,
    badge: "CONVENOR 01",
  },
  {
    id: "con-2",
    name: "Ar.Ranjan Shukla",
    role: "Festival Convenor",
    image: con2Img,
    badge: "CONVENOR 02",
  },
  {
    id: "con-3",
    name: "Ar.Anupam Mittal",
    role: "Festival Convenor",
    image: con3Img,
    badge: "CONVENOR 03",
  },
];

export const teamCategories = {
  "core-committee": {
    id: "core-committee",
    title: "Core Committee & Convenors",
    tagline: "ORGANIZING LEADERSHIP & CREATIVE DIRECTION",
    subtitle: "01 · CORE COMMITTEE",
    description: "The core committee, convenors, and curators driving the architectural themes, creative direction, and organization of LAF 3.0.",
    icon: Users,
    countLabel: "09 MEMBERS",
    members: [
      { id: "cc-1", name: "Ar.Jagbir Singh", role: "Lead Curator", image: cc1Img },
      { id: "cc-2", name: "Ar.Sabina Singh", role: "Lead Curator", image: cc2Img },
      { id: "cc-3", name: "Ar.Jitendra Kr.Tripathi", role: "Lead Curator", image: cc3Img },
      { id: "cc-4", name: "Ar.Vipul Vashneya", role: "Core Committee Member", image: cc4Img },
      { id: "cc-5", name: "Ar.Aninda Sircar", role: "Core Committee Member", image: cc5Img },
      { id: "cc-6", name: "Ar.vijay Sinha", role: "Core Committee Member", image: cc6Img },
    ],
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
                {currentCategoryKey === "core-committee"
                  ? (convenorLeadershipMembers.length + currentCategory.members.length).toString().padStart(2, "0")
                  : currentCategory.members.length.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                {currentCategory.tagline}
              </div>
            </div>
          </div>
        </div>

        {/* If Core Committee page, show Convenors at the top of the Core Committee page */}
        {currentCategoryKey === "core-committee" && (
          <div className="mb-14 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6DFD3] pb-6 mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                    01 · FESTIVAL LEADERSHIP
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#171717]">
                  Festival Convenors
                </h2>
              </div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 self-start sm:self-auto">
                LEADERSHIP (03)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {convenorLeadershipMembers.map((c, index) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex flex-col items-center p-7 rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* Circular Image Frame */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-md group-hover:shadow-[0_0_25px_rgba(183,122,39,0.25)] mb-5">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono tracking-widest text-[#B77A27] font-semibold uppercase">
                    LAF 3.0 · {c.badge}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-1">
                    {c.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5 font-medium">{c.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Core Committee & Team Members Grid */}
        <div>
          {currentCategoryKey === "core-committee" && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#D4AF37]/30 pb-5 mb-8 gap-4 bg-white/70 p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] shadow-xs">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B77A27] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                    02 · CORE COMMITTEE MEMBERS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717]">
                  Organizing Curators <span className="text-[#B77A27]">&</span> Core Members
                </h2>
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-100/70 px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-2xs self-start sm:self-auto">
                MEMBERS (06)
              </span>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentCategory.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
              >
                {/* Avatar ring */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-md group-hover:shadow-[0_0_22px_rgba(183,122,39,0.22)] mb-4">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <span className="text-[9.5px] font-mono tracking-widest text-[#B77A27] font-bold uppercase block truncate">
                    LAF 3.0 · #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3 className="font-serif text-base font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

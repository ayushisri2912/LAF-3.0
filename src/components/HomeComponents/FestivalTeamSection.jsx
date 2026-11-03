import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Award,
  GraduationCap,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* =========================================================
   SUBMENU DIRECTORY CARDS DATA FOR HOMEPAGE
========================================================= */
const submenuCards = [
  {
    key: "core-committee",
    title: "Core Committee & Convenors",
    count: "09",
    subtitle: "ORGANIZING LEADERSHIP & CONVENORS",
    icon: Users,
    desc: "Festival convenors, curators, and core leaders shaping themes, exhibitions, and architectural dialogues.",
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    borderLight: "#FED7AA",
    gradient: "linear-gradient(90deg, #EA580C, #F97316)",
  },
  {
    key: "advisors-mentors",
    title: "Advisors & Mentors",
    count: "15",
    subtitle: "VETERAN ARCHITECTS & ADVISORY BOARD",
    icon: Award,
    desc: "Senior mentors and joint convenors guiding LAF 3.0 with vision, wisdom, and industry experience.",
    accentColor: "#D91A5B",
    bgLight: "#FFF1F2",
    borderLight: "#FECDD3",
    gradient: "linear-gradient(90deg, #D91A5B, #F43F5E)",
  },
  {
    key: "student-volunteers",
    title: "Student Volunteers",
    count: "15",
    subtitle: "FUTURE ARCHITECTS & EXECUTION TEAM",
    icon: GraduationCap,
    desc: "Dedicated student volunteers and coordinators managing ground execution and logistics.",
    accentColor: "#7C2D92",
    bgLight: "#FAF5FF",
    borderLight: "#E9D5FF",
    gradient: "linear-gradient(90deg, #7C2D92, #9333EA)",
  },
];

export default function FestivalTeamSection() {
  const navigate = useNavigate();

  return (
    <section
      id="festival-team"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] py-12 sm:py-16 font-sans border-t border-[#E8E2D8]"
    >
      {/* Background Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217, 119, 6, 0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 119, 6, 0.07) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute -left-32 top-10 w-96 h-96 rounded-full bg-orange-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HERO / HEADER MATCHING FOCUS SECTORS THEME
        ====================================================== */}
        <div className="pb-10 sm:pb-12">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold text-[#EA580C] font-mono">07</span>
                <span className="w-10 h-px bg-[#EA580C]/60" />
                <span className="text-[10.5px] tracking-[0.25em] uppercase text-neutral-500 font-semibold font-mono">
                  LAF 3.0 · THE PEOPLE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.08] font-medium tracking-tight text-[#171717]">
                The Minds{" "}
                <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                  behind
                </span>
                <span className="block font-serif font-medium text-[#171717] mt-1 sm:mt-2">
                  the Festival.
                </span>
              </h2>

              {/* Gradient Pill Underline Bar matching Focus Sectors & Key Highlights */}
              <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-4" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <div className="border-l-4 border-[#EA580C] p-5 sm:p-6 bg-white/90 rounded-r-2xl border-y border-r border-[#E8E2D8] shadow-xs backdrop-blur-xs">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-700 font-normal">
                  The people shaping the conversations, connections and
                  experiences that bring LAF 3.0 to life.
                </p>

                <div className="flex items-center gap-3 mt-3 pt-3 border-t border-neutral-200/60">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#EA580C] font-bold">
                    CONVENORS · CURATORS · COORDINATORS
                  </span>
                  <span className="w-8 h-px bg-[#EA580C]/60" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            MINIMAL PREMIUM DIRECTORY CARDS GRID
        ====================================================== */}
        <div>
          <div className="flex items-center justify-between mb-6 border-b border-[#E8E2D8] pb-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#EA580C]" />
              <span className="text-[10.5px] font-mono font-bold tracking-[0.25em] uppercase text-[#EA580C]">
                TEAM DIRECTORIES
              </span>
            </div>
            <span className="text-xs text-neutral-500 font-mono hidden sm:flex items-center gap-1">
              Click any card to open full directory
              <ChevronRight size={14} className="text-[#EA580C]" />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {submenuCards.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => navigate(`/team/${item.key}`)}
                  className="group relative p-6 sm:p-7 rounded-[26px] bg-white border border-[#E8E2D8] hover:border-[#EA580C]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_36px_rgba(234,88,12,0.08)] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  {/* Top Color Accent Bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[4px] group-hover:h-[5px] transition-all duration-300"
                    style={{ background: item.gradient }}
                  />

                  {/* Ambient Hover Glow */}
                  <div
                    className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                    style={{ backgroundColor: item.accentColor }}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xs"
                        style={{
                          backgroundColor: item.bgLight,
                          borderColor: item.borderLight,
                          borderWidth: "1px",
                          color: item.accentColor,
                        }}
                      >
                        <IconComp size={22} strokeWidth={1.8} />
                      </div>

                      <div className="flex items-center gap-2">
                        <span
                          className="font-serif italic font-bold text-3xl sm:text-4xl transition-colors duration-300"
                          style={{ color: item.accentColor }}
                        >
                          {item.count}
                        </span>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: item.bgLight,
                            color: item.accentColor,
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <span
                      className="text-[9.5px] font-mono font-bold tracking-[0.22em] uppercase block mb-1.5"
                      style={{ color: item.accentColor }}
                    >
                      {item.subtitle}
                    </span>

                    <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight text-[#171717] group-hover:text-[#EA580C] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-700 transition-colors">
                    <span
                      className="transition-colors group-hover:underline underline-offset-4"
                      style={{ color: item.accentColor }}
                    >
                      Explore Directory
                    </span>
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                      style={{
                        backgroundColor: item.bgLight,
                        color: item.accentColor,
                      }}
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

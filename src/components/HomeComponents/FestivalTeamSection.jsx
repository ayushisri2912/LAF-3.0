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
  },
  {
    key: "advisors-mentors",
    title: "Advisors & Mentors",
    count: "15",
    subtitle: "VETERAN ARCHITECTS & ADVISORY BOARD",
    icon: Award,
    desc: "Senior mentors and joint convenors guiding LAF 3.0 with vision, wisdom, and industry experience.",
  },
  {
    key: "student-volunteers",
    title: "Student Volunteers",
    count: "15",
    subtitle: "FUTURE ARCHITECTS & EXECUTION TEAM",
    icon: GraduationCap,
    desc: "Dedicated student volunteers and coordinators managing ground execution and logistics.",
  },
];

export default function FestivalTeamSection() {
  const navigate = useNavigate();

  return (
    <section
      id="festival-team"
      className="relative overflow-hidden bg-[#FAF7F2] text-[#171717] py-16 sm:py-20 font-sans border-t border-[#E6DFD3]"
    >
      {/* Background Architectural Grid & Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180,140,60,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180,140,60,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HERO / HEADER
        ====================================================== */}
        <div className="pb-12 sm:pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold text-[#B77A27] font-mono">05</span>
                <span className="w-12 h-px bg-[#B77A27]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-500 font-mono font-semibold">
                  LAF 3.0 · THE PEOPLE
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] font-medium tracking-tight text-[#171717]">
                The Minds{" "}
                <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2 font-normal">
                  behind the
                </span>
                <span className="block font-serif font-medium text-[#171717] mt-1">
                  Festival.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 flex flex-col justify-end"
            >
              <div className="border-l-2 border-[#B77A27]/40 pl-6 py-3 bg-white/70 rounded-r-2xl border-y border-r border-[#E6DFD3] shadow-2xs backdrop-blur-xs">
                <p className="text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                  The people shaping the conversations, connections and
                  experiences that bring LAF 3.0 to life.
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B77A27] font-semibold">
                    CONVENORS · CURATORS · COORDINATORS
                  </span>
                  <span className="w-8 h-px bg-[#B77A27]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            MINIMAL PREMIUM DIRECTORY CARDS GRID
        ====================================================== */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-[#E6DFD3] pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#B77A27]" />
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                TEAM DIRECTORIES
              </span>
            </div>
            <span className="text-xs text-neutral-500 font-mono hidden sm:block">
              Click any card to open full directory →
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                  className="group relative p-8 rounded-3xl bg-white hover:bg-[#121214] text-neutral-900 hover:text-white border border-[#E6DFD3] hover:border-[#D4AF37]/60 shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 group-hover:bg-amber-400/10 rounded-full blur-2xl pointer-events-none transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-13 h-13 rounded-2xl bg-[#F7F4EE] group-hover:bg-neutral-800 border border-[#E6DFD3] group-hover:border-amber-400/40 flex items-center justify-center text-[#B77A27] group-hover:text-amber-400 transition-all duration-300">
                        <IconComp size={24} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-4xl font-semibold text-neutral-300 group-hover:text-amber-400 transition-colors">
                          {item.count}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <span className="text-[9.5px] font-mono font-bold tracking-[0.25em] text-[#B77A27] group-hover:text-amber-400 uppercase block mb-1.5">
                      {item.subtitle}
                    </span>

                    <h3 className="font-serif text-2xl font-semibold leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 group-hover:text-neutral-300 mt-3 leading-relaxed transition-colors font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-100 group-hover:border-neutral-800 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-700 group-hover:text-amber-300 transition-colors">
                    <span>Explore Directory</span>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
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
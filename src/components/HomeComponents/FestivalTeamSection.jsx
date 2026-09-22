import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Award,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

/* =========================================================
   OFFICIAL LAF IMAGE ASSETS FOR CONVENORS
========================================================= */
const BASE_URL = "https://lucknowarchitecturefestival.in/img/comm1/";

const convenors = [
  { id: 1, name: "Convenor 1", role: "Festival Convenor", src: `${BASE_URL}con1.png` },
  { id: 2, name: "Convenor 2", role: "Festival Convenor", src: `${BASE_URL}con2.png` },
  { id: 3, name: "Convenor 3", role: "Festival Convenor", src: `${BASE_URL}con3.png` },
];

/* =========================================================
   SUBMENU DIRECTORY CARDS DATA
========================================================= */
const submenuCards = [
  {
    key: "core-committee",
    title: "Core Committee",
    count: "06",
    subtitle: "ORGANIZING LEADERSHIP & CREATIVE DIRECTION",
    icon: Users,
    desc: "Curators and core leaders shaping themes, exhibitions, and architectural dialogues.",
  },
  {
    key: "advisors-mentors",
    title: "Advisors & Mentors",
    count: "15",
    subtitle: "VETERAN ARCHITECTS & ADVISORY BOARD",
    icon: Award,
    desc: "Senior mentors and joint convenors guiding LAF 3.0 with vision and industry wisdom.",
  },
  {
    key: "student-volunteers",
    title: "Student Volunteers",
    count: "15",
    subtitle: "FUTURE ARCHITECTS & EXECUTION TEAM",
    icon: GraduationCap,
    desc: "Dedicated student volunteers and coordinators managing ground execution.",
  },
];

export default function FestivalTeamSection() {
  const navigate = useNavigate();

  return (
    <section
      id="festival-team"
      className="relative overflow-hidden bg-[#FAF7F2] text-[#171717] py-16 sm:py-20 lg:py-24 font-sans border-t border-[#E6DFD3]"
    >
      {/* Background Architectural Grid & Watermark */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.24]"
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
            HERO / HEADER (MATCHING USER SCREENSHOT)
        ====================================================== */}
        <div className="pb-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-5">
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
              <div className="border-l-2 border-[#B77A27]/40 pl-6 py-3 bg-white/60 rounded-r-2xl border-y border-r border-[#E6DFD3] shadow-2xs">
                <p className="text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                  The people shaping the conversations, connections and
                  experiences that bring LAF 3.0 to life.
                </p>

                <div className="flex items-center gap-3 mt-5">
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
            CONVENORS PART (KEPT ON HOMEPAGE AS REQUESTED)
        ====================================================== */}
        <div className="mb-16 bg-white/70 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6DFD3] pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                  01 · LEADERSHIP
                </span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#171717]">
                Convenors
              </h3>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200/60 self-start sm:self-auto">
              FESTIVAL CONVENORS (03)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {convenors.map((c, index) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(183,122,39,0.2)] mb-4">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                    <img
                      src={c.src}
                      alt={c.name}
                      className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
                <span className="text-[9px] font-mono tracking-widest text-[#B77A27] font-semibold uppercase">
                  LAF 3.0 · CONVENOR 0{index + 1}
                </span>
                <h4 className="font-serif text-base font-semibold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-0.5">
                  {c.name}
                </h4>
                <p className="text-xs text-neutral-500 mt-0.5">{c.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            SUBMENU DIRECTORIES CARDS (NAVBAR TEAM SUBMENUS)
        ====================================================== */}
        <div className="pt-4">
          <div className="flex items-center justify-between mb-8 border-b border-[#E6DFD3] pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                NAVBAR TEAM DIRECTORIES
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#171717] mt-0.5">
                Explore Team Submenus
              </h3>
            </div>
            <span className="text-xs text-neutral-500 hidden sm:block">
              Click any menu card to open full directory page →
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  className="group relative p-7 rounded-3xl bg-white hover:bg-[#121214] text-neutral-900 hover:text-white border border-[#E6DFD3] hover:border-[#D4AF37]/50 shadow-sm hover:shadow-2xl transition-all duration-400 cursor-pointer overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 group-hover:bg-amber-400/10 rounded-full blur-2xl pointer-events-none transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 group-hover:bg-neutral-800 border border-neutral-200 group-hover:border-amber-400/30 flex items-center justify-center text-[#B77A27] group-hover:text-amber-400 transition-all duration-300">
                        <IconComp size={22} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-4xl font-medium text-neutral-300 group-hover:text-amber-400 transition-colors">
                          {item.count}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <span className="text-[9px] font-mono font-bold tracking-[0.25em] text-[#B77A27] group-hover:text-amber-400 uppercase block mb-1">
                      {item.subtitle}
                    </span>

                    <h4 className="font-serif text-2xl font-semibold leading-tight group-hover:text-white transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-neutral-600 group-hover:text-neutral-300 mt-2.5 leading-relaxed transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-100 group-hover:border-neutral-800 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-700 group-hover:text-amber-300 transition-colors">
                    <span>View Directory</span>
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
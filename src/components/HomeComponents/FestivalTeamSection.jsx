import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  Sparkles,
  Network,
  Award,
} from "lucide-react";

/* =========================================================
   OFFICIAL LAF IMAGE ASSETS
========================================================= */

const BASE_URL = "https://lucknowarchitecturefestival.in/img/comm1/";

const convenors = Array.from(
  { length: 3 },
  (_, index) => `${BASE_URL}con${index + 1}.png`
);

const curators = Array.from(
  { length: 6 },
  (_, index) => `${BASE_URL}cu${index + 1}.png`
);

const coordinators = Array.from(
  { length: 15 },
  (_, index) => `${BASE_URL}co${index + 1}.png`
);

const jointConvenors = Array.from(
  { length: 15 },
  (_, index) => `${BASE_URL}jc${index + 1}.png`
);

/* =========================================================
   REUSABLE TEAM MEMBER CARD (ELEGANT CIRCULAR AVATARS)
========================================================= */

function TeamMemberCard({ src, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: Math.min((index % 6) * 0.04, 0.25),
      }}
      className="
        group flex flex-col items-center justify-center
        p-4 sm:p-5 rounded-2xl
        bg-white/50 hover:bg-white
        border border-[#D9D0C2]/60 hover:border-[#B77A27]/40
        shadow-2xs hover:shadow-xl
        transition-all duration-300
        cursor-pointer
      "
    >
      {/* Outer subtle gold gradient ring */}
      <div className="
        relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1
        bg-gradient-to-b from-[#D9D0C2] to-transparent
        group-hover:from-[#B77A27] group-hover:to-amber-300
        transition-all duration-300 shadow-sm
        group-hover:shadow-[0_0_22px_rgba(183,122,39,0.25)]
      ">
        <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center border-2 border-white">
          <img
            src={src}
            alt="LAF Festival Team Member"
            className="w-full h-full object-contain rounded-full group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   FESTIVAL TEAM SECTION
========================================================= */

export default function FestivalTeamSection() {
  return (
    <section
      id="festival-team"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHING HIGHLIGHTS & AGENDA)
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {/* Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(120,90,40,0.07) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(120,90,40,0.07) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Large Decorative Circles */}
        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -right-40 bottom-40 w-[550px] h-[550px] rounded-full border border-[#B8893A]/10" />

        {/* Vertical Construction Lines */}
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#B8893A]/10" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#B8893A]/10" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HERO / HEADER
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
                <span className="text-xs font-bold text-[#B77A27]">05</span>
                <span className="w-12 h-px bg-[#B77A27]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
                  LAF 3.0 · THE PEOPLE
                </span>
              </div>

              {/* CRISP HIGH-CONTRAST HEADING */}
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] font-medium tracking-tight text-[#171717]">
                The Minds{" "}
                <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
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
              <div className="border-l-2 border-[#B77A27]/40 pl-6 py-2 bg-white/40 rounded-r-2xl border-y border-r border-y-white/20 border-r-white/20 shadow-2xs">
                <p className="text-base sm:text-lg leading-relaxed text-neutral-700 font-normal">
                  The people shaping the conversations, connections and
                  experiences that bring LAF 3.0 to life.
                </p>

                <div className="flex items-center gap-3 mt-6">
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
            QUICK STATS / CATEGORY SUMMARY
        ====================================================== */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: "03", label: "CONVENORS", icon: UsersRound },
            { number: "06", label: "CURATORS", icon: Sparkles },
            { number: "15", label: "COORDINATORS", icon: Network },
            { number: "15", label: "JOINT CONVENORS", icon: Award },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="p-6 rounded-2xl bg-white/60 hover:bg-white border border-[#D9D0C2] hover:border-[#B77A27]/40 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900/90 flex items-center justify-center text-amber-400">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-serif text-3xl font-medium text-[#D9D0C2]">
                    {item.number}
                  </span>
                </div>
                <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] mt-4 uppercase">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            CONVENORS
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">
          <div className="flex items-center justify-between border-b border-[#D9D0C2] pb-6 mb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                01 · LEADERSHIP
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717] mt-1">
                Convenors
              </h3>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase hidden sm:block">
              FESTIVAL LEADERSHIP
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {convenors.map((src, index) => (
              <TeamMemberCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* =====================================================
            CURATORS
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">
          <div className="flex items-center justify-between border-b border-[#D9D0C2] pb-6 mb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                02 · DIRECTION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717] mt-1">
                Curators
              </h3>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase hidden sm:block">
              CREATIVE DIRECTION
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {curators.map((src, index) => (
              <TeamMemberCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* =====================================================
            COORDINATORS
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">
          <div className="flex items-center justify-between border-b border-[#D9D0C2] pb-6 mb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                03 · EXECUTION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717] mt-1">
                Coordinators
              </h3>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase hidden sm:block">
              15 MEMBERS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {coordinators.map((src, index) => (
              <TeamMemberCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* =====================================================
            JOINT CONVENORS
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">
          <div className="flex items-center justify-between border-b border-[#D9D0C2] pb-6 mb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                04 · COLLABORATION
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717] mt-1">
                Joint Convenors
              </h3>
            </div>
            <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase hidden sm:block">
              15 MEMBERS
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {jointConvenors.map((src, index) => (
              <TeamMemberCard key={src} src={src} index={index} />
            ))}
          </div>
        </div>

        {/* =====================================================
            CLOSING COLLECTIVE STRIP
        ====================================================== */}

        <div className="pb-16 sm:pb-20">
          <div className="relative overflow-hidden bg-[#121214] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400">✦</span>
                  <span className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
                    LAF 3.0 · THE COLLECTIVE
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white font-medium">
                  Many minds.{" "}
                  <span className="italic text-[#D4AF37] block sm:inline">
                    One festival.
                  </span>
                </h3>
              </div>

              <div className="lg:col-span-4 flex items-center">
                <div className="border-l-2 border-[#D4AF37]/50 pl-5">
                  <p className="text-sm leading-relaxed text-neutral-300">
                    Convenors, curators, coordinators and joint convenors
                    working together to shape the LAF 3.0 experience.
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="font-mono text-[9.5px] tracking-[0.25em] text-[#D4AF37] uppercase">
                      LUCKNOW · INDIA
                    </span>
                    <span className="w-8 h-px bg-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
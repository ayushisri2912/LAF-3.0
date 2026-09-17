import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  UsersRound,
  Presentation,
  Handshake,
  Lightbulb,
  ShoppingBag,
  Database,
  MessageCircle,
  TrendingUp,
  Radio,
  Newspaper,
  Megaphone,
  Smartphone,
  Mail,
  Building2,
  Landmark,
  GraduationCap,
  UserRound,
  Download,
  Sparkles,
} from "lucide-react";

/* =========================================================
   BOUQUET OF OPPORTUNITIES DATA
========================================================= */

const opportunities = [
  {
    number: "01",
    title: "CONNECT",
    text: "Connect to architects, institutional buyers, experts, interior designers and other professionals.",
    icon: UsersRound,
  },
  {
    number: "02",
    title: "SHOWCASE",
    text: "Showcase your competitive advantage in terms of product design, features, and cost benefits.",
    icon: Presentation,
  },
  {
    number: "03",
    title: "EXPERIENCE",
    text: "Connect with your end users directly to make them experience the touch.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "INNOVATE",
    text: "Opportunity to present your innovations and new range of products.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "EXPAND",
    text: "Simultaneously reach out to potential agents, distributors and wholesalers.",
    icon: ShoppingBag,
  },
  {
    number: "06",
    title: "TRADE",
    text: "Consolidate trade relationships and opportunity to book on-spot orders.",
    icon: TrendingUp,
  },
  {
    number: "07",
    title: "DISCOVER",
    text: "Meet key buying decision makers from different segments of prospective buyers.",
    icon: UserRound,
  },
  {
    number: "08",
    title: "BUILD",
    text: "Build a database of potential buyers.",
    icon: Database,
  },
  {
    number: "09",
    title: "FEEDBACK",
    text: "Get instant feedback on products, prices and innovations.",
    icon: MessageCircle,
  },
  {
    number: "10",
    title: "UNDERSTAND",
    text: "Gain first-hand knowledge of different market segments, trends, consumer preferences and retailers needs.",
    icon: Sparkles,
  },
];

/* =========================================================
   PRE-PUBLICITY DATA
========================================================= */

const outreachItems = [
  {
    title: "AV VANS",
    text: "2 AV Vans will cover the entire potential market",
    icon: Radio,
  },
  {
    title: "OUTDOOR",
    text: "Hoarding, Banners, Posters, etc. will be put across City & nearby",
    icon: Megaphone,
  },
  {
    title: "PRINT",
    text: "Lucky draw leaflets will be distributed through Newspaper Ads, Inserts, Pre-promotion Vans, etc.",
    icon: Newspaper,
  },
  {
    title: "RADIO",
    text: "Radio jingles & Ads",
    icon: Radio,
  },
  {
    title: "NEWSPAPER",
    text: "Newspaper Ads",
    icon: Newspaper,
  },
  {
    title: "ACTIVATION",
    text: "Mall & Market activation",
    icon: Building2,
  },
  {
    title: "EDITORIAL",
    text: "Publicity through print advertisement and editorials etc",
    icon: Presentation,
  },
  {
    title: "PRESS",
    text: "Press conference",
    icon: Megaphone,
  },
  {
    title: "NEWS",
    text: "News channel ticker",
    icon: Radio,
  },
  {
    title: "SOCIAL",
    text: "Social Media promotion via Facebook, Instagram, Twitter, Linkedin etc",
    icon: Smartphone,
  },
  {
    title: "VIRAL",
    text: "Buzz / Viral promotion",
    icon: Sparkles,
  },
  {
    title: "DIRECT",
    text: "SMS / E-mail blasting and many more",
    icon: Mail,
  },
];

/* =========================================================
   VISITOR PROFILE DATA
========================================================= */

const visitorProfiles = [
  {
    title: "ARCHITECTS",
    icon: Building2,
  },
  {
    title: "BUILDERS & PROMOTERS",
    icon: Building2,
  },
  {
    title: "CIVIL & STRUCTURAL ENGINEERS",
    icon: Presentation,
  },
  {
    title: "CONTRACTORS",
    icon: Handshake,
  },
  {
    title: "CONSULTANTS",
    icon: UsersRound,
  },
  {
    title: "DEALERS & DISTRIBUTORS",
    icon: ShoppingBag,
  },
  {
    title: "END USERS / BUYERS",
    icon: UserRound,
  },
  {
    title: "INTERIOR DESIGNERS",
    icon: Sparkles,
  },
  {
    title: "LARGE WAREHOUSE BUILDERS",
    icon: Building2,
  },
  {
    title: "GOVT. OFFICIALS",
    icon: Landmark,
  },
  {
    title: "FACULTIES & STUDENTS",
    icon: GraduationCap,
  },
  {
    title: "GENERAL PUBLIC",
    icon: UsersRound,
  },
  {
    title: "PROSPECTIVE HOME BUYERS",
    icon: UserRound,
  },
];

export default function ParticipationSection() {
  return (
    <section
      id="participation"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          BACKGROUND (MATCHING HIGHLIGHTS & AGENDA SECTIONS)
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
        <div className="absolute -right-40 top-96 w-[550px] h-[550px] rounded-full border border-[#B8893A]/10" />

        {/* Vertical Construction Lines */}
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#B8893A]/10" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#B8893A]/10" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* =====================================================
            HERO / SECTION HEADER (HIGH CONTRAST BOLD TYPOGRAPHY)
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
                <span className="text-xs font-bold text-[#B77A27]">04</span>
                <span className="w-12 h-px bg-[#B77A27]" />
                <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
                  PARTICIPATION
                </span>
              </div>

              {/* CRISP HIGH-CONTRAST HEADING */}
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] font-medium tracking-tight text-[#171717]">
                Opportunities{" "}
                <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
                  for connection
                </span>
                <span className="block font-serif font-medium text-[#171717] mt-1">
                  &amp; growth.
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
                  LAF 3.0 creates a platform where brands, professionals,
                  buyers, experts and communities come together through
                  meaningful interaction.
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#B77A27] font-semibold">
                    CONNECT · SHOWCASE · DISCOVER
                  </span>
                  <span className="w-8 h-px bg-[#B77A27]" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* =====================================================
            OPPORTUNITIES HEADER
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12">

          <div className="pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                  01 · BOUQUET OF OPPORTUNITIES
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
                Connect. <span className="italic text-[#B77A27]">Showcase.</span> Grow.
              </h3>
            </div>

            <span className="font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-[#B77A27]">
              10 OPPORTUNITIES
            </span>
          </div>

          {/* =====================================================
              OPPORTUNITY GRID (ENHANCED PREMIUM CARDS)
          ====================================================== */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">

            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: (index % 5) * 0.04,
                  }}
                  className="
                    group relative min-h-[260px]
                    p-6 rounded-2xl
                    bg-white/60 hover:bg-white
                    border border-[#D9D0C2] hover:border-[#B77A27]/40
                    shadow-2xs hover:shadow-xl
                    transition-all duration-300
                    flex flex-col justify-between
                    cursor-pointer overflow-hidden
                  "
                >
                  {/* Top hairline hover indicator */}
                  <div className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#B77A27] to-amber-400 group-hover:w-full transition-all duration-500" />

                  {/* Header Row: Icon + Number Watermark */}
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="
                        w-10 h-10
                        rounded-xl
                        border border-[#D9D0C2]
                        bg-neutral-900/90
                        flex items-center justify-center
                        text-amber-400
                        group-hover:border-[#B77A27]
                        group-hover:bg-[#B77A27]
                        group-hover:text-white
                        transition-all duration-300
                        shadow-2xs
                      ">
                        <Icon
                          size={18}
                          strokeWidth={1.5}
                        />
                      </div>

                      <span className="font-serif text-3xl font-medium text-[#D9D0C2] group-hover:text-[#B77A27]/30 transition-colors select-none">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-6">
                      <h4 className="font-serif text-2xl font-semibold text-[#171717] group-hover:text-[#B77A27] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs leading-relaxed text-neutral-600 group-hover:text-neutral-700 mt-2.5">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="mt-4 flex items-center justify-end">
                    <div className="w-7 h-7 rounded-full border border-neutral-300 group-hover:border-[#B77A27] group-hover:bg-[#B77A27] flex items-center justify-center transition-all duration-300 text-neutral-400 group-hover:text-white">
                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.5}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            DARK IMPACT STRIP (PREMIUM LUXURY DARK CONTAINER)
        ====================================================== */}

        <div className="py-16 sm:py-20">

          <div className="relative overflow-hidden bg-[#121214] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 sm:p-12 lg:p-16">

            <div className="absolute -right-20 -top-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute right-[-80px] top-[-100px] w-[320px] h-[320px] rounded-full border border-white/10 pointer-events-none" />
            <div className="absolute right-[40px] top-[40px] w-[180px] h-[180px] rounded-full border border-[#B77A27]/25 pointer-events-none" />

            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-amber-400">✦</span>
                  <span className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
                    LAF 3.0 · THE CONNECTION
                  </span>
                </div>

                <h3 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white font-medium">
                  Reach the right{" "}
                  <span className="italic text-[#D4AF37] block sm:inline">
                    people.
                  </span>
                </h3>
              </div>

              <div className="lg:col-span-5 flex items-center">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300 border-l-2 border-[#D4AF37]/50 pl-5">
                  Exchange ideas with stakeholders and participants from
                  industry, profession, academy, real estate, financial
                  institutions and policy makers.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            PRE-PUBLICITY
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                02 · PRE-PUBLICITY
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#171717] mt-3">
                Reach{" "}
                <span className="italic text-[#B77A27] block">
                  beyond
                </span>
                the venue.
              </h3>

              <div className="mt-8 border-l-2 border-[#B77A27] pl-5 py-1">

                <span className="font-serif text-5xl sm:text-6xl leading-none text-[#171717] font-semibold">
                  7–10
                </span>

                <p className="font-mono text-[9.5px] font-bold tracking-[0.25em] text-[#B77A27] uppercase mt-2">
                  DAYS BEFORE THE EVENT
                </p>

              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">

              <p className="text-base leading-relaxed text-neutral-700 mb-8 font-normal">
                A multi-channel communication network designed to create
                visibility across the city and surrounding market.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">

                {outreachItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 3) * 0.03 }}
                      className="
                        group min-h-[135px]
                        p-5 rounded-xl
                        bg-white/60 hover:bg-white
                        border border-[#D9D0C2] hover:border-[#B77A27]/40
                        shadow-2xs hover:shadow-md
                        transition-all duration-300
                        flex flex-col justify-between
                        cursor-pointer
                      "
                    >

                      <div className="flex justify-between items-center">

                        <div className="
                          w-8 h-8
                          rounded-lg
                          border border-[#D9D0C2]
                          bg-neutral-900/90
                          flex items-center justify-center
                          text-amber-400
                          group-hover:bg-[#B77A27]
                          group-hover:text-white
                          group-hover:border-[#B77A27]
                          transition-colors duration-300
                        ">
                          <Icon
                            size={15}
                            strokeWidth={1.5}
                          />
                        </div>

                        <span className="font-mono text-[9px] font-bold text-neutral-400 group-hover:text-[#B77A27] transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                      </div>

                      <div className="mt-4">
                        <h4 className="text-xs tracking-[0.15em] font-bold uppercase text-[#171717] group-hover:text-[#B77A27] transition-colors">
                          {item.title}
                        </h4>

                        <p className="text-[11px] leading-relaxed text-neutral-600 mt-1.5 line-clamp-2">
                          {item.text}
                        </p>
                      </div>

                    </motion.div>
                  );
                })}

              </div>

            </div>
          </div>
        </div>

        {/* =====================================================
            VISITOR PROFILE
        ====================================================== */}

        <div className="border-t border-[#D9D0C2] pt-12 pb-16">

          <div className="grid lg:grid-cols-12 gap-10 items-start">

            {/* TITLE */}

            <div className="lg:col-span-4">

              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                03 · VISITOR PROFILE
              </span>

              <h3 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#171717] mt-3">
                Who is{" "}
                <span className="italic text-[#B77A27] block">
                  at LAF?
                </span>
              </h3>

              <p className="text-sm leading-relaxed text-neutral-600 mt-5 max-w-sm">
                A diverse community of professionals, decision makers,
                learners, buyers and the general public.
              </p>

            </div>

            {/* PROFILE GRID */}

            <div className="lg:col-span-8">

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">

                {visitorProfiles.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: (index % 3) * 0.03,
                      }}
                      className="
                        group relative
                        min-h-[115px]
                        p-4 rounded-xl
                        bg-white/60 hover:bg-white
                        border border-[#D9D0C2] hover:border-[#B77A27]/40
                        shadow-2xs hover:shadow-md
                        transition-all duration-300
                        flex flex-col justify-between
                        cursor-pointer
                      "
                    >

                      <div className="flex items-center justify-between">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900/90 flex items-center justify-center text-amber-400 group-hover:bg-[#B77A27] group-hover:text-white transition-colors duration-300">
                          <Icon size={16} strokeWidth={1.5} />
                        </div>
                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.5}
                          className="text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-[#B77A27] transition-all duration-300"
                        />
                      </div>

                      <p className="text-[10.5px] tracking-[0.12em] leading-snug font-semibold text-[#171717] group-hover:text-[#B77A27] transition-colors mt-3 uppercase">
                        {item.title}
                      </p>

                    </motion.div>
                  );
                })}

              </div>

              <div className="mt-4 text-right">
                <span className="font-mono text-[9.5px] font-bold tracking-[0.25em] text-[#B77A27] uppercase">
                  ✦ AND MANY MORE
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* =====================================================
            DOWNLOAD / PARTICIPATION CTA (PREMIUM DARK BUTTONS)
        ====================================================== */}

        <div className="pb-20">

          <div className="bg-[#121214] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">

              <div className="lg:col-span-6">

                <span className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37] uppercase font-semibold block mb-3">
                  LAF 3.0 · PARTICIPATE
                </span>

                <h3 className="font-serif text-3xl sm:text-5xl leading-tight text-white font-medium">
                  Take the next{" "}
                  <span className="italic text-[#D4AF37]">
                    step.
                  </span>
                </h3>

              </div>

              <div className="lg:col-span-6">

                <p className="text-sm leading-relaxed text-neutral-300 mb-6">
                  Explore the official event documents and discover the
                  opportunities available through LAF 3.0.
                </p>

                <div className="grid sm:grid-cols-3 gap-3">

                  <a
                    href="#"
                    className="
                      group flex items-center justify-between
                      px-4 py-3.5 rounded-xl
                      bg-gradient-to-r from-[#D4AF37] to-amber-500
                      hover:from-amber-400 hover:to-orange-500
                      text-black font-bold
                      shadow-md hover:shadow-xl
                      transition-all duration-300
                    "
                  >
                    <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                      BROCHURE
                    </span>
                    <Download size={15} />
                  </a>

                  <a
                    href="#"
                    className="
                      group flex items-center justify-between
                      px-4 py-3.5 rounded-xl
                      bg-white/10 hover:bg-[#D4AF37]
                      border border-white/20 hover:border-[#D4AF37]
                      text-white hover:text-black font-bold
                      transition-all duration-300
                    "
                  >
                    <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                      PARTICIPATE
                    </span>
                    <ArrowUpRight size={15} />
                  </a>

                  <a
                    href="#"
                    className="
                      group flex items-center justify-between
                      px-4 py-3.5 rounded-xl
                      bg-white/10 hover:bg-[#D4AF37]
                      border border-white/20 hover:border-[#D4AF37]
                      text-white hover:text-black font-bold
                      transition-all duration-300
                    "
                  >
                    <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                      LAYOUT
                    </span>
                    <Download size={15} />
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
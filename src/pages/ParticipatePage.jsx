import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronRight,
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
  ShieldCheck,
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
  { title: "ARCHITECTS", icon: Building2 },
  { title: "BUILDERS & PROMOTERS", icon: Building2 },
  { title: "CIVIL & STRUCTURAL ENGINEERS", icon: Presentation },
  { title: "CONTRACTORS", icon: Handshake },
  { title: "CONSULTANTS", icon: UsersRound },
  { title: "DEALERS & DISTRIBUTORS", icon: ShoppingBag },
  { title: "END USERS / BUYERS", icon: UserRound },
  { title: "INTERIOR DESIGNERS", icon: Sparkles },
  { title: "LARGE WAREHOUSE BUILDERS", icon: Building2 },
  { title: "GOVT. OFFICIALS", icon: Landmark },
  { title: "FACULTIES & STUDENTS", icon: GraduationCap },
  { title: "GENERAL PUBLIC", icon: UsersRound },
  { title: "PROSPECTIVE HOME BUYERS", icon: UserRound },
];

export default function ParticipatePage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30">
      {/* Background Architectural Watermark Grid */}
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
            <span className="text-[#B77A27] font-bold">PARTICIPATE</span>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end bg-white/70 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#B77A27] font-semibold uppercase">
                04 · FESTIVAL PARTICIPATION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[#171717] leading-[1.08]">
              Opportunities{" "}
              <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
                for connection
              </span>
              <span className="block font-serif font-medium text-[#171717] mt-1">
                &amp; growth.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl font-normal">
              LAF 3.0 creates an unprecedented platform where brands, professionals,
              buyers, experts, and communities converge for high-value engagement and architectural dialogue.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <div className="p-6 rounded-2xl bg-[#121214] text-white border border-[#D4AF37]/30 shadow-md w-full sm:w-auto min-w-[240px]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase font-bold">ENGAGEMENT</span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="font-serif text-3xl font-medium text-amber-400 mt-2">
                10+ SECTORS
              </div>
              <div className="text-[10.5px] text-neutral-400 tracking-widest uppercase mt-1 font-mono">
                CONNECT · SHOWCASE · DISCOVER
              </div>
            </div>
          </div>
        </div>

        {/* Bouquet of Opportunities */}
        <div className="mb-16 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#E6DFD3] pb-6 mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                  01 · BOUQUET OF OPPORTUNITIES
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#171717]">
                Connect. <span className="italic text-[#B77A27]">Showcase.</span> Grow.
              </h2>
            </div>

            <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-50 px-4 py-2 rounded-full border border-amber-200/60 self-start sm:self-auto">
              10 OPPORTUNITIES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {opportunities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className="group relative p-6 rounded-2xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#B77A27] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-1.5 pt-0.5 shrink-0">
                      <span className="font-mono text-xs font-bold text-[#B77A27]">
                        {item.number}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-[#171717] text-[#B77A27] group-hover:bg-[#B77A27] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] group-hover:text-[#B77A27] transition-colors">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="text-neutral-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#B77A27] transition-all duration-300 shrink-0"
                        />
                      </div>

                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-800 transition-colors">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dark Luxury Impact Container */}
        <div className="mb-16">
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

                <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-white font-medium">
                  Reach the right{" "}
                  <span className="italic text-[#D4AF37] block sm:inline">
                    people.
                  </span>
                </h2>
              </div>

              <div className="lg:col-span-5 flex items-center">
                <p className="text-sm sm:text-base leading-relaxed text-neutral-300 border-l-2 border-[#D4AF37]/50 pl-5">
                  Exchange ideas with stakeholders and participants from
                  industry, profession, academy, real estate, financial
                  institutions, and policy makers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Publicity Section */}
        <div className="mb-16 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                02 · PRE-PUBLICITY
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#171717] mt-3 font-medium">
                Reach{" "}
                <span className="italic text-[#B77A27] block">
                  beyond
                </span>
                the venue.
              </h2>

              <div className="mt-8 border-l-2 border-[#B77A27] pl-5 py-1">
                <span className="font-serif text-5xl sm:text-6xl leading-none text-[#171717] font-semibold">
                  7–10
                </span>
                <p className="font-mono text-[9.5px] font-bold tracking-[0.25em] text-[#B77A27] uppercase mt-2">
                  DAYS BEFORE THE EVENT
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <p className="text-base leading-relaxed text-neutral-700 mb-8 font-normal">
                A multi-channel communication network designed to create maximum visibility across the region and target markets.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {outreachItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: (index % 3) * 0.03 }}
                      className="group min-h-[110px] p-4 rounded-xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="flex justify-between items-center">
                        <div className="w-8 h-8 rounded-lg bg-neutral-900 text-amber-400 flex items-center justify-center group-hover:bg-[#B77A27] group-hover:text-white transition-colors duration-300">
                          <Icon size={15} strokeWidth={1.5} />
                        </div>
                        <span className="font-mono text-[9px] font-bold text-neutral-400 group-hover:text-[#B77A27] transition-colors">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h3 className="text-xs tracking-[0.15em] font-bold uppercase text-[#171717] group-hover:text-[#B77A27] transition-colors">
                          {item.title}
                        </h3>
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

        {/* Visitor Profile Section */}
        <div className="mb-16 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                03 · VISITOR PROFILE
              </span>

              <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight text-[#171717] mt-3 font-medium">
                Who is{" "}
                <span className="italic text-[#B77A27] block">
                  at LAF?
                </span>
              </h2>

              <p className="text-sm leading-relaxed text-neutral-600 mt-5 max-w-sm">
                A diverse community of architects, decision makers, institutional buyers, and key industry leaders.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {visitorProfiles.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.97 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index % 3) * 0.03 }}
                      className="group p-3.5 rounded-xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-7 h-7 rounded-lg bg-neutral-900 text-amber-400 flex items-center justify-center group-hover:bg-[#B77A27] group-hover:text-white transition-colors duration-300">
                          <Icon size={14} strokeWidth={1.5} />
                        </div>
                        <ArrowUpRight
                          size={13}
                          className="text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:text-[#B77A27] transition-all duration-300"
                        />
                      </div>

                      <p className="text-[10.5px] tracking-[0.08em] leading-snug font-bold text-[#171717] group-hover:text-[#B77A27] transition-colors mt-2.5 uppercase">
                        {item.title}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-5 text-right">
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60">
                  ✦ AND MANY MORE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Download Banner */}
        <div className="bg-[#121214] text-white rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-6">
              <span className="text-[10px] font-mono tracking-[0.35em] text-[#D4AF37] uppercase font-semibold block mb-3">
                LAF 3.0 · PARTICIPATE
              </span>

              <h2 className="font-serif text-3xl sm:text-5xl leading-tight text-white font-medium">
                Take the next{" "}
                <span className="italic text-[#D4AF37]">
                  step.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-sm leading-relaxed text-neutral-300 mb-6">
                Download the official festival documents and explore opportunities available through LAF 3.0.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-orange-500 text-black font-bold shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                    BROCHURE
                  </span>
                  <Download size={15} />
                </a>

                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] border border-white/20 hover:border-[#D4AF37] text-white hover:text-black font-bold transition-all duration-300"
                >
                  <span className="text-[9px] tracking-[0.14em] uppercase font-bold">
                    PARTICIPATE
                  </span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href="#"
                  className="group flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] border border-white/20 hover:border-[#D4AF37] text-white hover:text-black font-bold transition-all duration-300"
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
  );
}

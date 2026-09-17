import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Utensils,
  Landmark,
  Presentation,
  Users,
  Palette,
  Trophy,
  Film,
  Building2,
  Download,
  Sparkles,
} from "lucide-react";

const agendaDays = [
  {
    number: "01",
    label: "DAY ONE",
    title: "FOUNDATIONS",
    subtitle: "Ideas · Urbanism · Exchange",
    events: [
      {
        time: "09:00 – 10:00",
        title: "Arrival of Delegates and Registrations at Venue",
        category: "REGISTRATION",
        icon: Users,
      },
      {
        time: "10:00 – 11:30",
        title: "Inaugural Session of LAF 3.0",
        category: "OPENING SESSION",
        icon: Landmark,
        featured: true,
      },
      {
        time: "11:30 – 13:00",
        title:
          "Technical Session 1: The Future of Urban Development: How Green Buildings are Shaping Sustainable Cities",
        category: "TECHNICAL SESSION",
        icon: Building2,
        featured: true,
      },
      {
        time: "13:00 – 14:00",
        title: "Networking Lunch",
        category: "NETWORKING",
        icon: Utensils,
      },
      {
        time: "14:00 – 15:00",
        title:
          "Technical Session 2: Public Spaces for the Future Designing Inclusive and Adaptive Urban Areas",
        category: "TECHNICAL SESSION",
        icon: Building2,
      },
      {
        time: "15:00 – 16:00",
        title: "Live Workshops",
        category: "WORKSHOP",
        icon: Palette,
      },
      {
        time: "16:00 – 17:00",
        title: "Delegates Visit to Exhibition Pavilion",
        category: "EXHIBITION",
        icon: Landmark,
      },
      {
        time: "17:30 Onwards",
        title: "Cultural Programmes",
        category: "CULTURE",
        icon: Palette,
      },
      {
        time: "19:00 Onwards",
        title: "Architects Grand Dinner",
        category: "DINNER",
        icon: Utensils,
      },
    ],
  },

  {
    number: "02",
    label: "DAY TWO",
    title: "INNOVATION",
    subtitle: "Technology · Sustainability · Exchange",
    events: [
      {
        time: "10:00 – 10:30",
        title: "Film Screening",
        category: "SCREENING",
        icon: Film,
      },
      {
        time: "10:30 – 11:00",
        title: "Delegates Visit to Exhibition Pavilion",
        category: "EXHIBITION",
        icon: Landmark,
      },
      {
        time: "11:00 – 12:00",
        title:
          "Technical Session 1: Energy Efficiency in Green Buildings: Best Practices and Emerging Technologies",
        category: "TECHNICAL SESSION",
        icon: Building2,
        featured: true,
      },
      {
        time: "12:00 – 13:00",
        title:
          "Technical Session 2: The 15-Minute City – Designing Urban Areas for Accessibility and Local Living",
        category: "TECHNICAL SESSION",
        icon: Building2,
      },
      {
        time: "13:00 – 14:00",
        title: "Networking Lunch",
        category: "NETWORKING",
        icon: Utensils,
      },
      {
        time: "14:00 – 14:30",
        title: "Key Note Presentation",
        category: "KEYNOTE",
        icon: Presentation,
      },
      {
        time: "14:30 – 15:30",
        title:
          "Technical Session 3: Adaptive Reuse and Regeneration - Transforming Heritage Buildings into Modern Urban Spaces",
        category: "TECHNICAL SESSION",
        icon: Building2,
        featured: true,
      },
      {
        time: "15:30 – 16:30",
        title: "Live Workshops",
        category: "WORKSHOP",
        icon: Palette,
      },
      {
        time: "16:30 – 17:30",
        title: "Delegates Visit to Exhibition Pavilion",
        category: "EXHIBITION",
        icon: Landmark,
      },
      {
        time: "17:30 Onwards",
        title: "Cultural Programmes",
        category: "CULTURE",
        icon: Palette,
      },
      {
        time: "19:00 Onwards",
        title: "Gala Dinner of LAF 3.0",
        category: "DINNER",
        icon: Utensils,
        featured: true,
      },
    ],
  },

  {
    number: "03",
    label: "DAY THREE",
    title: "HERITAGE",
    subtitle: "History · Future · Celebration",
    events: [
      {
        time: "06:30 – 09:30",
        title: "Heritage Walk",
        category: "HERITAGE",
        icon: Landmark,
        featured: true,
      },
      {
        time: "10:00 – 11:00",
        title: "Jury Panel for ADC",
        category: "JURY PANEL",
        icon: Users,
      },
      {
        time: "11:00 – 11:30",
        title: "Key Note Presentation",
        category: "KEYNOTE",
        icon: Presentation,
      },
      {
        time: "11:30 – 12:30",
        title:
          "Technical Session 1: Beyond Skyscrapers - Rethinking High-Density Urban Design",
        category: "TECHNICAL SESSION",
        icon: Building2,
        featured: true,
      },
      {
        time: "12:30 – 13:30",
        title:
          "Technical Session 2: Urban Mobility and Connectivity - Designing Cities for the Future of Transportation",
        category: "TECHNICAL SESSION",
        icon: Building2,
      },
      {
        time: "13:30 – 14:30",
        title: "Networking Lunch",
        category: "NETWORKING",
        icon: Utensils,
      },
      {
        time: "14:30 – 15:30",
        title: "Delegates Visit to Exhibition Pavilion",
        category: "EXHIBITION",
        icon: Landmark,
      },
      {
        time: "15:30 – 16:00",
        title: "Preview of LAA & Future events",
        category: "PREVIEW",
        icon: ArrowUpRight,
      },
      {
        time: "16:00 – 17:30",
        title: "Valedictory Ceremony",
        category: "CLOSING CEREMONY",
        icon: Trophy,
        featured: true,
      },
      {
        time: "17:30 – 17:45",
        title:
          "Vote of Thanks by Ar. Prashant P. Singh, President - LAA",
        category: "VOTE OF THANKS",
        icon: Users,
      },
      {
        time: "17:45 Onwards",
        title: "Cultural Programmes",
        category: "CULTURE",
        icon: Palette,
      },
    ],
  },
];

const AgendaSection = () => {
  const [activeDay, setActiveDay] = useState("01");

  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHING HIGHLIGHTS SECTION)
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
            SECTION HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-end mb-16 lg:mb-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-5">
              <span className="text-xs font-bold text-[#B77A27]">03</span>
              <span className="w-12 h-px bg-[#B77A27]" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-mono">
                 PROGRAMME
              </span>
            </div>

            {/* FIXED OVERLAPPING HEADING */}
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-[#171717]">
              Agenda{" "}
              <span className="block font-serif italic text-[#B77A27] mt-1 sm:mt-2">
                of Ideas.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-16 bg-[#B77A27]/60" />
              <span className="font-mono text-[10.5px] tracking-[0.25em] uppercase text-[#B77A27]">
                03 DAYS / 01 FESTIVAL
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600">
              A three-day programme of architecture, urbanism,
              sustainability, technology, heritage, professional
              exchange and cultural expression.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {[
                "ARCHITECTURE",
                "URBANISM",
                "CULTURE",
                "SUSTAINABILITY",
                "HERITAGE",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[#B8893A]/30 bg-white/50 px-3.5 py-1.5 text-[9.5px] font-bold tracking-[0.18em] text-[#80581B] rounded-full shadow-2xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            DAY SELECTOR (PREMIUM CURSOR HOVER & TABS)
        ====================================================== */}

        <div className="grid border-y border-[#D9D0C2] md:grid-cols-3 gap-px bg-[#D9D0C2] rounded-2xl overflow-hidden shadow-sm">
          {agendaDays.map((day) => {
            const isActive = activeDay === day.number;
            return (
              <a
                href={`#agenda-day-${day.number}`}
                key={day.number}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDay(day.number);
                  const el = document.getElementById(`agenda-day-${day.number}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className={`group relative overflow-hidden px-7 py-7 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white border-b-2 border-b-[#B77A27]"
                    : "bg-[#F7F4EE] hover:bg-white/90"
                }`}
              >
                {/* Top gold accent bar on hover/active */}
                <div className={`absolute top-0 left-0 h-[3px] bg-gradient-to-r from-[#B77A27] to-amber-400 transition-all duration-300 ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
                
                {/* Giant watermark number */}
                <span className="absolute -right-2 -top-4 font-serif text-8xl font-medium text-[#E6DFC5]/40 transition-all duration-500 group-hover:scale-105 group-hover:text-[#B77A27]/15 select-none pointer-events-none">
                  {day.number}
                </span>

                <div className="relative z-10">
                  <span className="text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#B77A27]">
                    {day.label}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#171717] group-hover:text-[#B77A27] transition-colors duration-200">
                    {day.title}
                  </h3>

                  <p className="mt-1 text-[10.5px] uppercase tracking-[0.16em] text-neutral-500 group-hover:text-neutral-700 transition-colors">
                    {day.subtitle}
                  </p>
                </div>

                <div className={`absolute bottom-6 right-6 w-8 h-8 rounded-full border transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "border-[#B77A27] bg-[#B77A27] text-white"
                    : "border-neutral-300 group-hover:border-[#B77A27] group-hover:bg-[#B77A27] text-neutral-400 group-hover:text-white"
                }`}>
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </a>
            );
          })}
        </div>

        {/* =====================================================
            TIMELINE DAYS LISTING
        ====================================================== */}

        <div className="mt-20 space-y-24">
          {agendaDays.map((day) => (
            <div
              key={day.number}
              id={`agenda-day-${day.number}`}
              className="scroll-mt-28"
            >
              {/* DAY HEADER */}
              <div className="mb-8 flex items-end justify-between border-b border-[#D9D0C2] pb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B77A27]">
                      {day.label}
                    </span>
                    <span className="h-px w-10 bg-[#B77A27]" />
                  </div>

                  <h3 className="mt-3 font-serif text-4xl sm:text-5xl tracking-tight text-[#171717]">
                    {day.title}
                  </h3>

                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {day.subtitle}
                  </p>
                </div>

                <div className="hidden text-right md:block">
                  <span className="block font-serif text-7xl font-light text-[#D9D0C2]">
                    {day.number}
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                    LAF 3.0
                  </span>
                </div>
              </div>

              {/* TIMELINE */}
              <div className="relative">
                {/* Timeline vertical guide line */}
                <div className="absolute bottom-0 left-[140px] top-0 hidden w-px bg-[#D9D0C2] md:block" />

                <div className="space-y-2">
                  {day.events.map((event, index) => {
                    const Icon = event.icon;

                    return (
                      <motion.div
                        key={`${day.number}-${index}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.4, delay: index * 0.025 }}
                        className={`group relative grid border-b border-[#D9D0C2]/80 transition-all duration-300 md:grid-cols-[140px_1fr] cursor-pointer rounded-xl px-3 sm:px-4 py-2 ${
                          event.featured
                            ? "bg-[#B77A27]/[0.05] border-l-4 border-l-[#B77A27] hover:bg-white hover:shadow-md"
                            : "hover:bg-white/90 hover:shadow-sm"
                        }`}
                      >
                        {/* TIME */}
                        <div className="relative z-10 py-3 md:py-4 md:pr-6 flex items-center">
                          <span className="font-mono text-xs font-bold tracking-wide text-[#B77A27]">
                            {event.time}
                          </span>
                          {/* timeline dot */}
                          <span className="absolute -right-[5px] top-1/2 -translate-y-1/2 hidden h-[9px] w-[9px] rounded-full border-2 border-[#F7F4EE] bg-[#B77A27] group-hover:scale-125 transition-transform md:block" />
                        </div>

                        {/* CONTENT */}
                        <div className="flex items-center gap-4 py-3 md:py-4 md:px-6">
                          {/* icon badge */}
                          <div
                            className={`hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 md:flex ${
                              event.featured
                                ? "border-[#B77A27] bg-[#B77A27] text-white shadow-[0_4px_12px_rgba(183,122,39,0.25)]"
                                : "border-neutral-300/80 bg-white/70 text-neutral-600 group-hover:border-[#B77A27] group-hover:bg-[#B77A27]/10 group-hover:text-[#B77A27]"
                            }`}
                          >
                            <Icon size={18} strokeWidth={1.5} />
                          </div>

                          <div className="min-w-0 flex-1">
                            {/* Category & Badge */}
                            <div className="mb-1 flex flex-wrap items-center gap-2">
                              <span className="text-[9.5px] font-bold tracking-[0.25em] uppercase text-[#B77A27]">
                                {event.category}
                              </span>

                              {event.featured && (
                                <span className="border border-[#B77A27]/40 bg-[#B77A27]/10 px-2 py-0.5 text-[8px] font-bold tracking-[0.18em] text-[#B77A27] rounded-sm uppercase">
                                  FEATURED
                                </span>
                              )}
                            </div>

                            {/* Title */}
                            <h4 className="text-base font-semibold leading-snug text-[#171717] group-hover:text-[#B77A27] transition-colors duration-200">
                              {event.title}
                            </h4>
                          </div>

                          {/* Hover Arrow */}
                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.5}
                            className="hidden shrink-0 text-neutral-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#B77A27] transition-all duration-300 md:block"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-14 border-y border-[#D9D0C2] py-6 sm:py-8"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <span className="text-[9.5px] font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                THE FESTIVAL EXPERIENCE
              </span>

              <h3 className="mt-3 max-w-3xl font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight text-[#171717]">
                Exhibitions, installations, symposia, lectures and
                workshops celebrating architecture's contribution to
                culture, sustainability and economy.
              </h3>
            </div>

            <div className="hidden md:block">
              <div className="h-20 w-20 rounded-full border border-[#B77A27]/40 p-2">
                <div className="flex h-full w-full items-center justify-center rounded-full border border-[#B77A27]/30 bg-[#B77A27]/10 text-[#B77A27]">
                  <Sparkles size={22} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            PREMIUM DOWNLOAD BUTTONS
        ====================================================== */}

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "DOWNLOAD EVENT BROCHURE",
            "DOWNLOAD PARTICIPATION FORM",
            "DOWNLOAD LAYOUT PLAN",
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="group flex items-center justify-between bg-[#151515] border border-[#B77A27]/30 hover:border-[#B77A27] px-6 py-5 text-white transition-all duration-300 hover:bg-[#1c1c1f] shadow-sm hover:shadow-xl rounded-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B77A27] group-hover:w-1.5 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#B77A27] uppercase">
                  DOCUMENT
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-200 group-hover:text-white transition-colors">
                  {label}
                </span>
              </div>
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#B77A27]/50 group-hover:bg-[#B77A27] group-hover:text-black flex items-center justify-center transition-all duration-300 text-[#B77A27]">
                <Download size={16} />
              </div>
            </a>
          ))}
        </div>

        {/* =====================================================
            FOOTER META
        ====================================================== */}

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#D9D0C2] pt-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <Clock3 size={15} strokeWidth={1.5} className="text-[#B77A27]" />
            <span className="text-[9.5px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
              THREE DAYS OF IDEAS &amp; EXCHANGE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={15} strokeWidth={1.5} className="text-[#B77A27]" />
            <span className="text-[9.5px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
              LUCKNOW · INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

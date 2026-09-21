import React from "react";
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
        time: "17:45 Onwards",
        title: "Cultural Programmes",
        category: "CULTURE",
        icon: Palette,
      },
    ],
  },
];

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-14 sm:py-16 lg:py-20"
    >
      {/* ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
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

        <div className="absolute -left-40 top-40 w-[500px] h-[500px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -left-20 top-60 w-[350px] h-[350px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -right-40 bottom-20 w-[550px] h-[550px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute right-[10%] top-[24%] h-[320px] w-[320px] rounded-full border border-[#B8893A]/10" />

        <div className="absolute left-[8%] top-[15%] h-24 w-24 border-l border-t border-[#B8893A]/20" />
        <div className="absolute bottom-[10%] right-[8%] h-24 w-24 border-b border-r border-[#B8893A]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] items-end mb-12 lg:mb-16">
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
              A three-day programme of architecture, urbanism, sustainability,
              technology, heritage, professional exchange and cultural
              expression.
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

        {/* 3 SIDE-BY-SIDE COLUMNS FOR DAY ONE, DAY TWO, DAY THREE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {agendaDays.map((day) => (
            <div
              key={day.number}
              id={`agenda-day-${day.number}`}
              className="bg-[#F7F4EE] border border-[#D9D0C2] rounded-2xl overflow-hidden shadow-sm flex flex-col h-full"
            >
              {/* COLUMN DAY HEADER */}
              <div className="relative p-6 sm:p-7 bg-white border-b border-[#D9D0C2] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#B77A27] via-amber-500 to-[#B77A27]" />

                <span className="absolute -right-2 -top-4 font-serif text-8xl font-medium text-[#E6DFC5]/40 select-none pointer-events-none">
                  {day.number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10.5px] font-bold tracking-[0.28em] uppercase text-[#B77A27]">
                      {day.label}
                    </span>
                    <span className="h-px w-6 bg-[#B77A27]/40" />
                    <span className="text-[9px] font-mono text-neutral-400">
                      LAF 3.0
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif font-semibold tracking-tight text-[#171717]">
                    {day.title}
                  </h3>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-neutral-500 font-mono">
                    {day.subtitle}
                  </p>
                </div>
              </div>

              {/* EVENTS TIMELINE LIST FOR THIS DAY */}
              <div className="p-4 sm:p-5 space-y-3 flex-1">
                {day.events.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <motion.div
                      key={`${day.number}-${index}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className={`group relative p-4 rounded-xl border transition-all duration-300 flex flex-col gap-2 ${
                        event.featured
                          ? "bg-[#B77A27]/[0.06] border-[#B77A27]/50 shadow-xs hover:bg-white hover:shadow-md"
                          : "bg-white/80 border-[#D9D0C2]/70 hover:bg-white hover:border-[#B77A27]/40 hover:shadow-sm"
                      }`}
                    >
                      {/* Time & Category Header */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-mono text-[11px] font-bold tracking-wide text-[#B77A27] bg-[#B77A27]/10 px-2 py-0.5 rounded-md">
                          {event.time}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <span className="text-[9px] font-bold tracking-[0.18em] uppercase text-neutral-500 group-hover:text-[#B77A27] transition-colors">
                            {event.category}
                          </span>
                          {event.featured && (
                            <span className="bg-[#B77A27] text-white px-1.5 py-0.5 text-[7.5px] font-bold tracking-[0.15em] rounded-xs uppercase">
                              FEATURED
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-start gap-3 mt-1">
                        <div
                          className={`h-8 w-8 shrink-0 flex items-center justify-center rounded-lg border transition-all duration-300 ${
                            event.featured
                              ? "border-[#B77A27] bg-[#B77A27] text-white"
                              : "border-neutral-200 bg-[#F7F4EE] text-neutral-600 group-hover:border-[#B77A27] group-hover:bg-[#B77A27]/10 group-hover:text-[#B77A27]"
                          }`}
                        >
                          <Icon size={14} strokeWidth={1.5} />
                        </div>

                        <h4 className="text-xs sm:text-sm font-semibold leading-snug text-[#171717] group-hover:text-[#B77A27] transition-colors duration-200">
                          {event.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
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
                Exhibitions, installations, symposia, lectures and workshops
                celebrating architecture's contribution to culture,
                sustainability and economy.
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

        {/* DOWNLOAD BUTTONS */}
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

        {/* FOOTER META */}
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

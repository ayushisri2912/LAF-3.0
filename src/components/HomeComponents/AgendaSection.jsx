import React from "react";
import { motion } from "framer-motion";
import { Clock3, MapPin, Download } from "lucide-react";
import LAFLogo from "../LAFLogo";

const agendaDays = [
  {
    dayNumber: "01",
    label: "DAY 1",
    events: [
      {
        time: "9:00 - 10:00",
        title: "Arrival of Delegate and Registrations at Venue",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "10:00 - 11:30",
        title: "Inaugural Session of LAF 3.0",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "11:30 - 13:00",
        title: "Technical Session 1:",
        subtitle: "The Future of Urban Development",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "13:00 - 14:00",
        title: "Networking Lunch",
        dotColor: "#16A34A", // Green
      },
      {
        time: "14:00 - 15:00",
        title: "Technical Session 2:",
        subtitle: "Public Spaces for the Future",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "15:00 - 16:00",
        title: "Live Workshops",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "16:00 - 17:00",
        title: "Delegates Visit to Exhibition Pavilion",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "17:30 Onwards",
        title: "Cultural Programmes",
        dotColor: "#16A34A", // Green
      },
      {
        time: "19:00 Onwards",
        title: "Architects Grand Dinner",
        dotColor: "#06B6D4", // Teal / Cyan
      },
    ],
  },
  {
    dayNumber: "02",
    label: "DAY 2",
    events: [
      {
        time: "6:30 - 10:30",
        title: "Film Screening",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "10:00 - 11:00",
        title: "Delegates Visit to Exhibition Pavilion",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "11:00 - 11:30",
        title: "Technical Session 1:",
        subtitle: "Energy Efficiency in Green Buildings",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "11:30 - 12:30",
        title: "Technical Session 2:",
        subtitle: "The 15-Minute City",
        dotColor: "#16A34A", // Green
      },
      {
        time: "12:30 - 13:30",
        title: "Networking Lunch",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "13:30 - 14:30",
        title: "Key Note Presentation",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "14:30 - 15:30",
        title: "Technical Session 3:",
        subtitle: "Adaptive Reuse & Regeneration",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "15:30 - 16:00",
        title: "Live Workshops",
        dotColor: "#16A34A", // Green
      },
      {
        time: "16:00 - 17:30",
        title: "Delegates Visit to Exhibition Pavilion",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "17:30 - 17:45",
        title: "Cultural Programmes",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "17:45 Onwards",
        title: "Gala Dinner of LAF 3.0",
        dotColor: "#EAB308", // Yellow / Amber
      },
    ],
  },
  {
    dayNumber: "03",
    label: "DAY 3",
    events: [
      {
        time: "10:00 - 10:30",
        title: "Heritage Walk",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "10:30 - 11:00",
        title: "Jury Panel for ADC",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "11:00 - 12:00",
        title: "Key Note Presentation",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "12:00 - 13:00",
        title: "Technical Session 1:",
        subtitle: "Beyond Skyscrapers - High-Density Design",
        dotColor: "#16A34A", // Green
      },
      {
        time: "13:00 - 14:00",
        title: "Technical Session 2:",
        subtitle: "Urban Mobility & Connectivity",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "14:00 - 14:30",
        title: "Networking Lunch",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "14:30 - 15:30",
        title: "Delegates Visit to Exhibition Pavilion",
        dotColor: "#EAB308", // Yellow / Amber
      },
      {
        time: "15:30 - 16:30",
        title: "Preview of LAA & Future events",
        dotColor: "#16A34A", // Green
      },
      {
        time: "16:30 - 17:30",
        title: "Valedictory Ceremony",
        dotColor: "#5B21B6", // Deep Purple
      },
      {
        time: "17:30 Onwards",
        title: "Vote of Thanks by Ar. Repunjay Patel President- LAA",
        dotColor: "#06B6D4", // Teal / Cyan
      },
      {
        time: "19:00 Onwards",
        title: "Cultural Programmes",
        dotColor: "#EAB308", // Yellow / Amber
      },
    ],
  },
];

const AgendaSection = () => {
  return (
    <section
      id="agenda"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 pb-16 sm:pb-20"
    >
      {/* ARCHITECTURAL BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 119, 6, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient atmospheric warm glow gradients */}
        <div className="absolute -left-32 top-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/20 to-pink-200/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* SECTION HEADER MATCHING FOCUS SECTORS THEME */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
          

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] text-[#171717] font-semibold tracking-tight leading-tight">
              Agenda:{" "}
              <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                LAF 3.0
              </span>
            </h2>

            {/* Gradient Pill Underline Bar */}
            <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3 sm:mt-3.5" />
          </motion.div>

          {/* Right Logo matching Image 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-5 self-start lg:self-auto"
          >
            <div className="w-[1.5px] h-14 bg-[#EA580C]/30 hidden sm:block" />
            <div className="flex items-center gap-3">
              <LAFLogo className="h-14 sm:h-16 w-auto" />
            </div>
          </motion.div>
        </div>

        {/* 3 SIDE-BY-SIDE COLUMNS (DAY 1, DAY 2, DAY 3) MATCHING IMAGE 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {agendaDays.map((day, dayIdx) => (
            <motion.div
              key={day.dayNumber}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIdx * 0.1 }}
              className="bg-white/95 backdrop-blur-xs rounded-[28px] border border-[#E8E2D8] p-5 sm:p-6 lg:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_35px_rgba(234,88,12,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Pill Header matching Image 3 */}
              <div className="flex justify-center mb-6 sm:mb-7">
                <div className="inline-flex items-center justify-center px-10 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-extrabold text-base sm:text-lg tracking-wider shadow-md shadow-orange-500/25">
                  {day.label}
                </div>
              </div>

              {/* TIMELINE LIST: Left timing | Center connecting line & dots | Right text */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 flex-1">
                {day.events.map((event, index) => (
                  <div
                    key={index}
                    className="group relative flex items-center gap-3 sm:gap-3.5 py-1.5 sm:py-2 px-2 rounded-xl transition-all duration-200 hover:bg-orange-50/50"
                  >
                    {/* Left: Timing */}
                    <div className="w-[84px] sm:w-[96px] shrink-0 text-right font-bold text-xs sm:text-[13px] text-[#1E293B] tracking-tight group-hover:text-[#EA580C] transition-colors">
                      {event.time}
                    </div>

                    {/* Center: Timeline Connecting Line & Colored Dot */}
                    <div className="relative self-stretch flex items-center justify-center w-5 shrink-0">
                      {/* Top connecting line segment */}
                      {index !== 0 && (
                        <div className="absolute top-0 bottom-1/2 w-[2px] bg-[#FDA4AF]" />
                      )}
                      {/* Bottom connecting line segment */}
                      {index !== day.events.length - 1 && (
                        <div className="absolute top-1/2 bottom-0 w-[2px] bg-[#FDA4AF]" />
                      )}
                      {/* Colored Dot on Timeline */}
                      <span
                        className="relative z-10 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs group-hover:scale-125 transition-transform duration-200 shrink-0"
                        style={{ backgroundColor: event.dotColor }}
                      />
                    </div>

                    {/* Right: Event Title & Subtitle */}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-[13px] font-bold text-[#111827] leading-snug group-hover:text-[#EA580C] transition-colors">
                        {event.title}
                      </p>
                      {event.subtitle && (
                        <p className="text-[11px] text-neutral-500 font-medium mt-0.5 leading-snug">
                          {event.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DOWNLOAD BUTTONS WITH FESTIVAL THEME */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-3"
        >
          {[
            "DOWNLOAD EVENT BROCHURE",
            "DOWNLOAD PARTICIPATION FORM",
            "DOWNLOAD LAYOUT PLAN",
          ].map((label) => (
            <a
              key={label}
              href="#"
              className="group flex items-center justify-between bg-white border border-[#E8E2D8] hover:border-[#EA580C] px-6 py-4 text-[#171717] transition-all duration-300 hover:shadow-lg rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#EA580C] to-[#D91A5B] group-hover:w-2 transition-all duration-300" />
              <div>
                <span className="block text-[9px] font-bold tracking-[0.25em] text-[#EA580C] uppercase">
                  OFFICIAL DOCUMENT
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-semibold tracking-wide text-neutral-800 group-hover:text-[#EA580C] transition-colors">
                  {label}
                </span>
              </div>
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 group-hover:border-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white flex items-center justify-center transition-all duration-300 text-[#EA580C]">
                <Download size={16} />
              </div>
            </a>
          ))}
        </motion.div>

        {/* FOOTER META */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-[#E8E2D8] pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <Clock3 size={15} strokeWidth={1.5} className="text-[#EA580C]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-neutral-500 uppercase">
              THREE DAYS OF IDEAS &amp; ARCHITECTURAL EXCHANGE
            </span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={15} strokeWidth={1.5} className="text-[#EA580C]" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
              LUCKNOW · INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

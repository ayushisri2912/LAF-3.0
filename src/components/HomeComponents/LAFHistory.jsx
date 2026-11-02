import React, { useEffect, useRef, useState } from "react";

import laf2022 from "../../assets/images/history1.png";
import laf2025 from "../../assets/images/history2.png";
import laf2027 from "../../assets/images/history3.png";

const editions = [
  {
    id: "2022",
    version: "LAF 1.0",
    year: "2022",
    logoPosition: "left", // LAF 1.0: Circular logo on Left, Text panel on Right
    logo: laf2022,
    title: "Avirbhav – Lucknow Architecture Festival 2022",
    theme: "Heritage • Architecture • Design",
    paragraphs: [
      `Lucknow Architecture Festival (LAF) has emerged as an important platform for the architecture, design, construction and urban-development fraternity of Uttar Pradesh. The first major edition, “Avirbhav - Lucknow Architecture Festival 2022,” was held from 4–6 November 2022 at Ekana International Stadium, Lucknow.`,
      `Organised by the Lucknow Architects Association (LAA) in association with industry and knowledge partners, the three-day festival brought together eminent architects, academicians, government representatives and industry leaders. Major attractions included an extensive design and lifestyle exhibition with 80+ exhibitors, the Tana-Bana symposium, architecture design competition, Best Thesis Awards, heritage walk, art and cultural programmes, film screening and workshops on sustainable materials and practices.`,
      `Eminent speakers included Ar. Habeeb Khan, Ar. Salil Ranadive, Dr. M. Kailasa Rao, Ar. Jai Kartikeya, Ar. Shubhrajit Das, Ar. Rajesh Advani, Ar. Biju Kuriakose, Ar. Amit Gupta and Ar. Britta Knobel, among others.`,
    ],
  },
  {
    id: "2025",
    version: "LAF 2.0",
    year: "2025",
    logoPosition: "right", // LAF 2.0: Circular logo on Right, Text panel on Left
    logo: laf2025,
    title: "Lucknow Architecture Festival 2.0",
    theme: "Sustainability • State Capital Region • Urban Growth",
    paragraphs: [
      `Building on the success of 2022, Lucknow Architecture Festival 2.0 (LAF 2.0) was organised from 10–12 January 2025 at Ekana International Stadium, Lucknow, with a stronger focus on sustainable urban development and the future of Lucknow and the State Capital Region (SCR).`,
      `The festival featured a large Build Expo with 100+ participating companies, knowledge sessions, panel discussions, workshops, heritage and urban sketching activities, architecture competitions, student model-making and photography competitions, cultural programmes and networking events. The programme brought together senior government officials, architects, planners, academicians and industry leaders, including Dr. Balkar Singh, Divakar Tripathi (Retd. IAS), Inderjit Singh, Ar. Sabina Singh, Ar. Shubhra Mittal, Ar. Rajesh Advani, Ar. Sanjay Kavinde, Ar. Gurmeet Sangha Rai and Prof. Shubhrajit Das, among others.`,
      `The event was kickstarted with the auspicious Sundarkand Path by the renowned Shri Rasraj Ji Maharaj, while the second day was inaugurated by Hon'ble MSME Minister Shri Rakesh Sachan. The three-day festival concluded with the valedictory ceremony graced by Hon'ble Deputy Chief Minister Shri Brajesh Pathak, marking the successful culmination of LAF 2.0 and reinforcing its vision for a more sustainable, resilient and future-ready Lucknow and State Capital Region.`,
    ],
  },
  {
    id: "2027",
    version: "LAF 3.0",
    year: "2027",
    logoPosition: "left", // LAF 3.0: Circular logo on Left, Text panel on Right
    logo: laf2027,
    title: "The Next Chapter – Lucknow Architecture Festival 3.0",
    theme: "Multidisciplinary Collaboration • Future of UP",
    upcoming: true,
    paragraphs: [
      `Together, the 2022 and 2025 editions established LAF as a multidisciplinary platform connecting architecture, urban planning, construction, interiors, technology, sustainability, policy, academia and industry.`,
      `With the participation of prominent government dignitaries, professional institutions, corporate partners, sponsors, exhibitors and students, the festival has evolved beyond a conventional architecture conference into a comprehensive celebration of Lucknow's architectural heritage, contemporary design and vision for sustainable urban growth.`,
    ],
  },
];

const EditionCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const logoOnLeft = item.logoPosition === "left";

  return (
    <article ref={cardRef} className="relative w-full">
      {/* Central Connector Node on Desktop */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
        {/* Horizontal Connector to Logo */}
        <div
          className={`absolute h-[1.5px] bg-gradient-to-r ${
            logoOnLeft
              ? "right-1/2 from-transparent to-[#B77A27]/40 w-10 lg:w-16"
              : "left-1/2 from-[#B77A27]/40 to-transparent w-10 lg:w-16"
          }`}
        />
        {/* Node Center Badge */}
        <div className="w-3.5 h-3.5 rounded-full border-2 border-[#B77A27] bg-white shadow-xs flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B77A27]" />
        </div>
      </div>

      {/* Main Grid: 2 Columns on Desktop, Single Column on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* CIRCULAR LOGO FRAME */}
        <div
          className={`w-full flex items-center justify-center order-1 ${
            logoOnLeft ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="group relative flex items-center justify-center">
            {/* Outer delicate dashed decorative outline */}
            <div className="absolute -inset-2.5 sm:-inset-3.5 rounded-full border border-dashed border-[#B77A27]/40 pointer-events-none transition-transform duration-1000 group-hover:rotate-45" />

            {/* Circular Frame Container */}
            <div className="relative w-[210px] h-[210px] sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px] rounded-full border border-[#D4AF37]/35 bg-white shadow-[0_12px_40px_rgba(183,122,39,0.08)] flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-700 group-hover:border-[#B77A27] group-hover:shadow-[0_20px_50px_rgba(183,122,39,0.18)]">
              {/* Inner Circular Well */}
              <div className="w-full h-full rounded-full overflow-hidden bg-[#FAF9F6] border border-neutral-100 flex items-center justify-center p-4 sm:p-5 relative">
                <img
                  src={item.logo}
                  alt={`${item.version} Official Logo`}
                  loading="lazy"
                  className="w-full h-full object-contain select-none transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Decorative Gold Accent Compass Dot */}
              <span className="absolute top-4 right-6 w-2.5 h-2.5 rounded-full bg-[#B77A27] ring-4 ring-[#B77A27]/15" />

              {/* Edition-Year Badge Below Circle matching Home Page State Highlights style */}
              <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1 sm:px-5 sm:py-1 bg-[#FAF7F2] border-2 border-[#B77A27] text-[#B77A27] font-mono text-[11px] sm:text-xs font-bold tracking-[2px] shadow-xs uppercase rounded-full group-hover:bg-[#B77A27] group-hover:text-white transition-all duration-300 z-20">
                {item.year}
              </div>
            </div>
          </div>
        </div>

        {/* UNFOLDING EDITORIAL TEXT PANEL */}
        <div
          className={`w-full order-2 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            logoOnLeft
              ? "md:order-2 md:origin-left"
              : "md:order-1 md:origin-right"
          } ${
            revealed
              ? "max-h-[2200px] opacity-100 visible pointer-events-auto translate-y-0 scale-y-100 md:translate-x-0 md:scale-x-100 overflow-visible"
              : "max-h-0 md:max-h-none opacity-0 invisible pointer-events-none -translate-y-4 scale-y-95 md:scale-y-100 overflow-hidden " +
                (logoOnLeft
                  ? "md:-translate-x-12 md:scale-x-95"
                  : "md:translate-x-12 md:scale-x-95")
          }`}
          style={{
            transitionDelay: revealed ? `${index * 120}ms` : "0ms",
          }}
        >
          <div className="relative w-full p-6 sm:p-8 lg:p-9 bg-white/95 backdrop-blur-sm border border-[#E6DFD3] rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] hover:border-[#B77A27]/60 hover:shadow-2xl transition-all duration-500 overflow-hidden">
            {/* Subtle Vertical Gold Accent Line on Leading Edge */}
            <div className="absolute left-0 top-8 bottom-8 w-1.5 rounded-r-full bg-[#B77A27]" />

            {/* Header: Edition Number and Section Label */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pl-2">
              <div className="flex items-center gap-3">
                <span className="text-[#B77A27] font-mono font-bold text-xs tracking-widest">
                  [ 0{index + 1} ]
                </span>
                <span className="w-8 h-px bg-[#B77A27]" />
                <span className="text-neutral-400 text-[9.5px] sm:text-[10px] font-semibold tracking-[3px] uppercase font-mono">
                  THE JOURNEY OF LAF
                </span>
              </div>

              {item.upcoming && (
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-[#B77A27] text-[9.5px] font-bold tracking-wider uppercase border border-amber-500/25">
                  Upcoming Edition
                </span>
              )}
            </div>

            {/* Serif Heading */}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-[30px] leading-[1.22] text-[#171717] font-medium mb-5 pl-2">
              {item.title}
            </h3>

            {/* Complete Edition Description in Readable Paragraphs */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-[14.5px] leading-[1.8] font-normal pl-2 text-justify">
              {item.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer with Edition Name and Year */}
            <div className="flex justify-between items-center mt-7 pt-4 border-t border-[#E6DFD3]/70 pl-2">
              <span className="text-[#B77A27] font-mono font-bold text-xs tracking-[2px] uppercase">
                {item.version}
              </span>
              <span className="text-neutral-400 font-mono text-xs tracking-widest">
                {item.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const LAFHistory = () => {
  return (
    <section
      id="laf-history"
      className="relative py-20 sm:py-28 lg:py-36 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 lg:mb-28">
          <div className="inline-flex items-center gap-3 text-[#B77A27] text-[10.5px] sm:text-xs font-mono font-bold tracking-[0.3em] uppercase mb-4">
            <span className="w-8 sm:w-10 h-px bg-[#B77A27]" />
            <span>02 · CHRONICLE • THREE EDITIONS</span>
            <span className="w-8 sm:w-10 h-px bg-[#B77A27]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171717] font-medium leading-[1.15]">
            History of Lucknow{" "}
            <span className="italic font-serif text-[#B77A27] block sm:inline">
              Architecture Festival
            </span>
          </h2>

          <p className="mt-5 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Trace the remarkable journey of Uttar Pradesh's landmark
            architecture and design festival — from its groundbreaking inception
            to the upcoming future-ready chapter.
          </p>
        </div>

        {/* Timeline Container with Center Spine Line on Desktop */}
        <div className="relative max-w-6xl mx-auto space-y-20 md:space-y-28 lg:space-y-36">
          {/* Subtle Vertical Timeline Spine on Desktop */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-[1.5px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#B77A27]/35 to-transparent pointer-events-none z-0" />

          {/* Editions List */}
          {editions.map((item, index) => (
            <EditionCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* Closing Legacy Banner matching site styling */}
        <div className="max-w-3xl mx-auto mt-24 sm:mt-32 py-12 px-6 border border-[#E6DFD3] text-center relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-sm">
          <span className="text-[#B77A27] font-mono text-[10px] tracking-[4px] font-bold uppercase">
            The Journey Continues
          </span>

          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mt-4 leading-snug text-[#171717]">
            From heritage to{" "}
            <span className="italic font-serif text-[#B77A27]">
              a future of possibilities.
            </span>
          </h3>

          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mt-4 max-w-xl mx-auto font-normal">
            Lucknow Architecture Festival continues to bring together ideas,
            people and perspectives to shape a more sustainable, resilient and
            inspiring architectural future for Uttar Pradesh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LAFHistory;

import React from "react";

import laf2022 from "../../assets/images/history1.png";
import laf2025 from "../../assets/images/history2.png";
import laf2027 from "../../assets/images/history3.png";

import h1 from "../../assets/images/h1_user_orig.png";
import h2 from "../../assets/images/h2.png";
import h3 from "../../assets/images/h3.png";

import bgHist from "../../assets/images/bg-hist.png";

const editions = [
  {
    id: "2022",
    version: "LAF 1.0 — 2022",
    year: "2022",
    badgeBg: "bg-[#D96204]",
    barBg: "bg-[#D96204]",
    cardBorder: "border-[#F0A956]",
    ringBorder: "border-[#E67E00]/40",
    logo: laf2022,
    photo: h1,
    title: "Avirbhav – Lucknow Architecture Festival 2022",
    description:
      "Lucknow Architecture Festival (LAF) has emerged as an important platform for the architecture, design, construction and urban-development fraternity of Uttar Pradesh. The first major edition, “Avirbhav - Lucknow Architecture Festival 2022,” was held from 4–6 November 2022 at Ekana International Stadium, Lucknow. Organised by the Lucknow Architects Association (LAA) in association with industry and knowledge partners, the three-day festival brought together eminent architects, academicians, government representatives and industry leaders. Major attractions included an extensive design and lifestyle exhibition with 80+ exhibitors, the Tana-Bana symposium, architecture design competition, Best Thesis Awards, heritage walk, art and cultural programmes, film screening and workshops on sustainable materials and practices. Eminent speakers included Ar. Habeeb Khan, Ar. Salil Ranadive, Dr. M. Kailasa Rao, Ar. Jai Kartikeya, Ar. Shubhrajit Das, Ar. Rajesh Advani, Ar. Biju Kuriakose, Ar. Amit Gupta and Ar. Britta Knobel, among others.",
    upcoming: false,
    isReversed: false,
  },
  {
    id: "2025",
    version: "LAF 2.0 — 2025",
    year: "2025",
    badgeBg: "bg-[#5B1A83]",
    barBg: "bg-[#5B1A83]",
    cardBorder: "border-[#8B5CF6]/50",
    ringBorder: "border-[#6B1E99]/40",
    logo: laf2025,
    photo: h2,
    title: "Lucknow Architecture Festival 2.0",
    description:
      "Building on the success of 2022, Lucknow Architecture Festival 2.0 (LAF 2.0) was organised from 10–12 January 2025 at Ekana International Stadium, Lucknow, with a stronger focus on sustainable urban development and the future of Lucknow and the State Capital Region (SCR). The festival featured a large Build Expo with 100+ participating companies, knowledge sessions, panel discussions, workshops, heritage and urban sketching activities, architecture competitions, student model-making and photography competitions, cultural programmes and networking events. The programme brought together senior government officials, architects, planners, academicians and industry leaders, including Dr. Balkar Singh, Divakar Tripathi (Retd. IAS), Inderjit Singh, Ar. Sabina Singh, Ar. Shubhra Mittal, Ar. Rajesh Advani, Ar. Sanjay Kavinde, Ar. Gurmeet Sangha Rai and Prof. Shubhrajit Das, among others. The event was kickstarted with the auspicious Sundarkand Path by the renowned Shri Rasraj Ji Maharaj, while the second day was inaugurated by Hon'ble MSME Minister Shri Rakesh Sachan. The three-day festival concluded with the valedictory ceremony graced by Hon'ble Deputy Chief Minister Shri Brajesh Pathak, marking the successful culmination of LAF 2.0 and reinforcing its vision for a more sustainable, resilient and future-ready Lucknow and State Capital Region.",
    upcoming: false,
    isReversed: true,
  },
  {
    id: "2027",
    version: "LAF 3.0 — 2027",
    year: "2027",
    badgeBg: "bg-[#C21458]",
    barBg: "bg-[#C21458]",
    cardBorder: "border-[#EC4899]/50",
    ringBorder: "border-[#D81B60]/40",
    logo: laf2027,
    photo: h3,
    title: "The Next Chapter – Lucknow Architecture Festival 3.0",
    description:
      "Together, the 2022 and 2025 editions established LAF as a multidisciplinary platform connecting architecture, urban planning, construction, interiors, technology, sustainability, policy, academia and industry. With the participation of prominent government dignitaries, professional institutions, corporate partners, sponsors, exhibitors and students, the festival has evolved beyond a conventional architecture conference into a comprehensive celebration of Lucknow's architectural heritage, contemporary design and vision for sustainable urban growth.",
    upcoming: true,
    isReversed: false,
  },
];

const LAFHistory = () => {
  return (
    <section
      id="laf-history"
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden bg-[#FAF8F5] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgHist})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Diagonal Ribbon (Top Left) matching Image 1 */}
      <svg
        className="absolute top-0 left-0 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cornerTL" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C21458" />
            <stop offset="50%" stopColor="#E67E00" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
        <polygon points="0,0 100,0 0,100" fill="url(#cornerTL)" />
      </svg>

      {/* Decorative Diagonal Ribbon (Bottom Right) matching Image 1 */}
      <svg
        className="absolute bottom-0 right-0 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cornerBR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C21458" />
            <stop offset="50%" stopColor="#E67E00" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
        <polygon points="100,0 100,100 0,100" fill="url(#cornerBR)" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Top subtle golden tracked label with flanking lines */}
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="w-10 sm:w-16 h-px bg-[#D4AF37]/60" />
            <span className="text-[#C27827] font-sans font-bold text-xs sm:text-[13px] tracking-[0.25em] uppercase">
              THE JOURNEY OF LAF
            </span>
            <span className="w-10 sm:w-16 h-px bg-[#D4AF37]/60" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171717] font-normal leading-[1.2] tracking-tight">
            History of Lucknow{" "}
            <span className="italic font-serif text-[#F26522]">Architecture</span>{" "}
            <span className="italic font-serif text-[#5B1A83]">Festival</span>
          </h2>

          {/* Underline gradient accent bar */}
          <div className="w-24 sm:w-32 h-[3.5px] rounded-full bg-gradient-to-r from-[#F26522] to-[#5B1A83] mx-auto mt-3.5" />
        </div>

        {/* Stacked Row Cards (Alternating Layout as per Image 1) */}
        <div className="space-y-6 sm:space-y-8">
          {editions.map((item) => {
            const isReversed = item.isReversed;

            return (
              <div
                key={item.id}
                className={`relative p-5 sm:p-6 lg:p-7 rounded-[32px] sm:rounded-[40px] lg:rounded-[48px] bg-white border ${item.cardBorder} shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 lg:gap-8">
                  {/* Circular Logo Container (Enlarged + Only 1 Outer Ring) */}
                  <div
                    className={`order-1 ${
                      isReversed ? "md:order-3" : "md:order-1"
                    } flex-shrink-0 flex items-center justify-center`}
                  >
                    <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-52 xl:h-52 flex items-center justify-center">
                      {/* Exactly ONE outer ring around the logo circle */}
                      <div
                        className={`absolute inset-0 rounded-full border ${item.ringBorder}`}
                      />

                      {/* Enlarged inner white circle containing logo */}
                      <div className="relative w-[88%] h-[88%] rounded-full bg-white shadow-xs border border-neutral-200/70 flex items-center justify-center p-3 sm:p-4 overflow-hidden">
                        <img
                          src={item.logo}
                          alt={`${item.version} Logo`}
                          loading="lazy"
                          className="w-full h-full object-contain select-none transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Content Block */}
                  <div className="order-2 md:order-2 flex-1 min-w-0">
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      {/* Solid colored vertical accent bar */}
                      <div
                        className={`w-1 self-stretch rounded-full ${item.barBg} flex-shrink-0 mt-0.5 mb-1`}
                      />

                      <div className="flex-1 min-w-0">
                        {/* Edition Badge */}
                        <span
                          className={`inline-block px-3.5 py-1 rounded-[4px] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase ${item.badgeBg}`}
                        >
                          {item.version}
                        </span>

                        {/* Heading */}
                        <h3 className="font-sans font-bold text-base sm:text-lg lg:text-[19px] text-[#111827] mt-2 mb-2 leading-snug">
                          {item.title}
                        </h3>

                        {/* Full Description from Image 3 */}
                        <p className="text-neutral-600 text-xs sm:text-[13px] lg:text-[13.5px] leading-relaxed font-normal text-justify sm:text-left">
                          {item.description}
                        </p>

                        {/* Upcoming Edition Badge (for LAF 3.0) */}
                        {item.upcoming && (
                          <div className="mt-3">
                            <span className="inline-block px-3.5 py-1 rounded-full bg-[#FDE8EF] text-[#D81B60] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border border-[#FBCFE8] shadow-xs">
                              UPCOMING EDITION
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Photo Frame displaying full panoramic image cleanly */}
                  <div
                    className={`order-3 ${
                      isReversed ? "md:order-1" : "md:order-3"
                    } w-full md:w-[350px] lg:w-[410px] xl:w-[470px] flex-shrink-0 flex items-center justify-center group`}
                  >
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="w-full h-auto object-contain select-none transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LAFHistory;

import React from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  Train,
  TrendingUp,
  Trophy,
  Compass,
  Utensils,
  Building2,
  Award,
  Users,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const AboutSection = () => {
 const sectors = [
  {
    id: "pilgrimage",
    name: "PILGRIMAGE",
    desc: "Sacred architecture, spiritual destinations & grand temple developments.",
    icon: Landmark,
    color: "#F59E0B",
    soft: "rgba(245,158,11,0.13)",
    glow: "rgba(245,158,11,0.22)",
  },
  {
    id: "transportation",
    name: "TRANSPORTATION",
    desc: "Expressways, metro networks, airports & next-generation mobility.",
    icon: Train,
    color: "#3B82F6",
    soft: "rgba(59,130,246,0.12)",
    glow: "rgba(59,130,246,0.22)",
  },
  {
    id: "economy",
    name: "ECONOMY",
    desc: "Real estate growth, investment corridors & expanding urban markets.",
    icon: TrendingUp,
    color: "#10B981",
    soft: "rgba(16,185,129,0.12)",
    glow: "rgba(16,185,129,0.22)",
  },
  {
    id: "sports",
    name: "SPORTS",
    desc: "International stadiums, athletic hubs & modern sports infrastructure.",
    icon: Trophy,
    color: "#C026D3",
    soft: "rgba(192,38,211,0.12)",
    glow: "rgba(192,38,211,0.22)",
  },
  {
    id: "tourism",
    name: "TOURISM",
    desc: "Heritage destinations, Awadhi architecture & experiential tourism.",
    icon: Compass,
    color: "#F97316",
    soft: "rgba(249,115,22,0.12)",
    glow: "rgba(249,115,22,0.22)",
  },
  {
    id: "cuisine",
    name: "CUISINE",
    desc: "Nawabi gastronomy, culinary heritage & hospitality culture.",
    icon: Utensils,
    color: "#EAB308",
    soft: "rgba(234,179,8,0.13)",
    glow: "rgba(234,179,8,0.22)",
  },
];

  const highlights = [
    {
      number: "01",
      title: "Highest MSMEs",
      subtitle: "Organized & Unorganized",
      icon: Building2,
    },
    {
      number: "02",
      title: "Ease of Doing Business",
      subtitle: "Investor Friendly Ecosystem",
      icon: TrendingUp,
    },
    {
      number: "03",
      title: "One Trillion Dollar Economy",
      subtitle: "Ambitious Growth Vision",
      icon: Landmark,
    },
    {
      number: "04",
      title: "Largest State by Area",
      subtitle: "A Vast Urban Landscape",
      icon: Users,
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#181818]"
    >

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120,90,40,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,90,40,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Giant arch */}
        <div className="absolute left-[-220px] top-[260px] w-[600px] h-[650px] rounded-t-full border border-[#A98952]/10" />

        <div className="absolute right-[-220px] top-[400px] w-[600px] h-[650px] rounded-t-full border border-[#A98952]/10" />

        {/* center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#A98952]/[0.08] hidden lg:block" />

      </div>


      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">


        {/* =========================================================
            HEADER
        ========================================================== */}

        <div className="max-w-5xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-4 mb-6"
          >

            <span className="h-px w-12 bg-[#B8893A]" />

            <span className="text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-[#9B6B24]">
              About Uttar Pradesh
            </span>

            <span className="h-px w-12 bg-[#B8893A]" />

          </motion.div>


          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              font-serif
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              font-semibold
              tracking-tight
            "
          >
            A LANDSCAPE OF
            <span className="block text-[#B77A27]">
              CULTURE & GROWTH
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              max-w-2xl
              mx-auto
              mt-7
              text-sm
              sm:text-base
              leading-7
              text-neutral-500
            "
          >
            Uttar Pradesh brings together heritage, architecture,
            infrastructure and a rapidly evolving urban economy —
            creating a distinctive landscape for future development.
          </motion.p>

        </div>



        {/* =========================================================
            INTRODUCTION
        ========================================================== */}

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mt-20 lg:mt-28">


          {/* LEFT TEXT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >

            <div className="flex items-center gap-3 mb-5">

              <span className="text-xs font-bold tracking-[0.2em] text-[#B77A27]">
                01
              </span>

              <span className="h-px w-12 bg-[#B77A27]" />

              <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                The Opportunity
              </span>

            </div>


            <h3 className="font-serif text-3xl sm:text-4xl leading-tight">
              Where heritage meets
              <span className="text-[#B77A27]"> contemporary ambition.</span>
            </h3>


            <p className="mt-6 text-sm sm:text-base text-neutral-600 leading-7">
              The economic transformation of Uttar Pradesh has created
              significant opportunities across real estate, infrastructure,
              tourism and urban development. Lucknow, as the state capital,
              represents an important intersection of culture, commerce and
              contemporary urban growth.
            </p>


            <p className="mt-5 text-sm sm:text-base text-neutral-600 leading-7">
              Its historic identity combined with modern development
              creates a distinctive environment for architects, designers,
              developers and the wider built environment ecosystem.
            </p>


            {/* small signature line */}

            <div className="mt-8 flex items-center gap-4">

              <div className="w-10 h-10 rounded-full border border-[#C49A55] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#B77A27]" />
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  LUCKNOW
                </div>

                <div className="text-xs text-neutral-400 mt-1">
                  Heritage • Architecture • Future
                </div>
              </div>

            </div>

          </motion.div>



          {/* RIGHT IMAGE / VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7"
          >

            <div className="relative">

              {/* decorative frame */}

              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#B8893A]/40" />

              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#B8893A]/40" />


              <div className="relative bg-white/70 border border-[#DED5C6] p-5 sm:p-8 overflow-hidden">

                <div className="flex justify-between items-center mb-6">

                  <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400">
                    Uttar Pradesh
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#B77A27]">
                    Growth Landscape
                  </span>

                </div>


                <img
                  src="https://lucknowarchitecturefestival.in/img/about0.png"
                  alt="Uttar Pradesh Growth Sectors"
                  className="
                    w-full
                    max-h-[520px]
                    object-contain
                    mix-blend-multiply
                  "
                />


                <div className="absolute bottom-5 right-7 text-[70px] sm:text-[110px] font-serif font-bold text-[#B8893A]/[0.05] select-none">
                  UP
                </div>

              </div>

            </div>

          </motion.div>

        </div>



        {/* =========================================================
            SECTOR INDEX
        ========================================================== */}
       {/* =========================================================
    PREMIUM KEY GROWTH SECTORS
========================================================= */}

<section className="relative mt-16 lg:mt-20">

  {/* =======================================================
      SECTION HEADER
  ======================================================== */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center mb-14 lg:mb-20"
  >

    {/* Small Label */}

    <div className="flex items-center justify-center gap-4 mb-5">

      <span className="w-12 h-px bg-[#C58B2B]" />

      <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-[#A66A16]">
        Growth Sectors
      </span>

      <span className="w-12 h-px bg-[#C58B2B]" />

    </div>


    {/* Main Heading */}

    <h3
      className="
        font-serif
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-[54px]
        font-medium
        leading-tight
        text-[#171717]
      "
    >
      The many dimensions{" "}

      <span className="text-[#B77A27]">
        of Uttar Pradesh.
      </span>
    </h3>


    {/* Underline */}

    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="h-[2px] bg-[#C58B2B] mx-auto mt-6"
    />


    <p className="max-w-2xl mx-auto mt-5 text-sm text-neutral-500 leading-6">
      From heritage and pilgrimage to transportation, tourism and
      emerging economic corridors — Uttar Pradesh is shaping a new
      architectural and urban future.
    </p>

  </motion.div>



  {/* =======================================================
      MAIN EDITORIAL SECTOR LAYOUT
  ======================================================== */}

  <div className="relative max-w-6xl mx-auto">


    {/* =====================================================
        ARCHITECTURAL BACKGROUND
    ====================================================== */}

    <div className="absolute inset-0 pointer-events-none hidden lg:block">

      {/* Main horizontal architectural line */}

      <div
        className="
          absolute
          left-0
          right-0
          top-1/2
          h-px
          bg-[#B8893A]/10
        "
      />


      {/* Center vertical line */}

      <div
        className="
          absolute
          left-1/2
          top-0
          bottom-0
          w-px
          bg-[#B8893A]/10
        "
      />


      {/* Outer circle */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[300px]
          h-[300px]
          rounded-full
          border
          border-[#B8893A]/10
        "
      />


      {/* Inner circle */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[220px]
          h-[220px]
          rounded-full
          border
          border-dashed
          border-[#B8893A]/10
        "
      />

    </div>



    {/* =====================================================
        DESKTOP TWO COLUMN LAYOUT
    ====================================================== */}

    <div
      className="
        relative
        grid
        grid-cols-1
        lg:grid-cols-2
      "
    >


      {/* ===================================================
          LEFT COLUMN
      ==================================================== */}

      <div className="relative">

        {sectors.slice(0, 3).map((sector, index) => {

          const Icon = sector.icon;

          return (

            <motion.div
              key={sector.id}
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative"
            >

              <div
                className="
                  relative
                  min-h-[175px]
                  sm:min-h-[190px]
                  lg:min-h-[175px]
                  px-5
                  sm:px-7
                  lg:px-8
                  py-8
                  border-b
                  border-[#D9D0C2]
                  transition-all
                  duration-500
                  overflow-hidden
                  bg-transparent
                  group-hover:bg-white/70
                "
              >

                {/* =================================================
                    HOVER COLOR BACKGROUND
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 10% 50%,
                        ${sector.glow},
                        transparent 55%
                      )
                    `,
                  }}
                />


                {/* =================================================
                    HOVER LEFT ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    left-0
                    top-0
                    bottom-0
                    w-[3px]
                    scale-y-0
                    group-hover:scale-y-100
                    origin-center
                    transition-transform
                    duration-500
                  "
                  style={{
                    backgroundColor: sector.color,
                  }}
                />


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-6
                  "
                >

                  {/* ICON */}

                  <div
                    className="
                      flex-shrink-0
                      w-[78px]
                      h-[78px]
                      sm:w-[82px]
                      sm:h-[82px]
                      rounded-full
                      bg-white
                      border
                      flex
                      items-center
                      justify-center
                      shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                    "
                    style={{
                      borderColor: `${sector.color}45`,
                      boxShadow: `0 8px 28px ${sector.glow}`,
                    }}
                  >

                    {/* Dashed Circle */}

                    <div
                      className="
                        absolute
                        w-[66px]
                        h-[66px]
                        rounded-full
                        border
                        border-dashed
                        opacity-40
                        group-hover:opacity-90
                        group-hover:rotate-180
                        transition-all
                        duration-700
                      "
                      style={{
                        borderColor: sector.color,
                      }}
                    />

                    <Icon
                      className="
                        relative
                        z-10
                        w-8
                        h-8
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                      style={{
                        color: sector.color,
                      }}
                      strokeWidth={1.5}
                    />

                  </div>



                  {/* TEXT */}

                  <div className="min-w-0">

                    <div className="flex items-center gap-3">

                      <h4
                        className="
                          text-base
                          sm:text-lg
                          font-black
                          tracking-[0.12em]
                          text-[#191919]
                          transition-all
                          duration-500
                          group-hover:tracking-[0.16em]
                        "
                      >
                        {sector.name}
                      </h4>


                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          opacity-0
                          -translate-x-2
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          transition-all
                          duration-500
                        "
                        style={{
                          color: sector.color,
                        }}
                      />

                    </div>


                    <p
                      className="
                        mt-3
                        text-xs
                        sm:text-sm
                        leading-6
                        text-neutral-500
                        max-w-[330px]
                      "
                    >
                      {sector.desc}
                    </p>


                    {/* Bottom Accent */}

                    <div
                      className="
                        mt-5
                        h-[2px]
                        w-8
                        group-hover:w-14
                        transition-all
                        duration-500
                      "
                      style={{
                        backgroundColor: sector.color,
                      }}
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>



      {/* ===================================================
          RIGHT COLUMN
      ==================================================== */}

      <div className="relative">

        {sectors.slice(3, 6).map((sector, index) => {

          const Icon = sector.icon;

          return (

            <motion.div
              key={sector.id}
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group relative"
            >

              <div
                className="
                  relative
                  min-h-[175px]
                  sm:min-h-[190px]
                  lg:min-h-[175px]
                  px-5
                  sm:px-7
                  lg:px-8
                  py-8
                  border-b
                  border-[#D9D0C2]
                  transition-all
                  duration-500
                  overflow-hidden
                  bg-transparent
                  group-hover:bg-white/70
                "
              >

                {/* =================================================
                    HOVER COLOR BACKGROUND
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    pointer-events-none
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 90% 50%,
                        ${sector.glow},
                        transparent 55%
                      )
                    `,
                  }}
                />


                {/* =================================================
                    HOVER RIGHT ACCENT
                ================================================== */}

                <div
                  className="
                    absolute
                    right-0
                    top-0
                    bottom-0
                    w-[3px]
                    scale-y-0
                    group-hover:scale-y-100
                    origin-center
                    transition-transform
                    duration-500
                  "
                  style={{
                    backgroundColor: sector.color,
                  }}
                />


                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-6
                  "
                >


                  {/* ICON */}

                  <div
                    className="
                      flex-shrink-0
                      w-[78px]
                      h-[78px]
                      sm:w-[82px]
                      sm:h-[82px]
                      rounded-full
                      bg-white
                      border
                      flex
                      items-center
                      justify-center
                      shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                    "
                    style={{
                      borderColor: `${sector.color}45`,
                      boxShadow: `0 8px 28px ${sector.glow}`,
                    }}
                  >

                    {/* Dashed Circle */}

                    <div
                      className="
                        absolute
                        w-[66px]
                        h-[66px]
                        rounded-full
                        border
                        border-dashed
                        opacity-40
                        group-hover:opacity-90
                        group-hover:rotate-180
                        transition-all
                        duration-700
                      "
                      style={{
                        borderColor: sector.color,
                      }}
                    />

                    <Icon
                      className="
                        relative
                        z-10
                        w-8
                        h-8
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                      style={{
                        color: sector.color,
                      }}
                      strokeWidth={1.5}
                    />

                  </div>



                  {/* TEXT */}

                  <div className="min-w-0">

                    <div className="flex items-center gap-3">

                      <h4
                        className="
                          text-base
                          sm:text-lg
                          font-black
                          tracking-[0.12em]
                          text-[#191919]
                          transition-all
                          duration-500
                          group-hover:tracking-[0.16em]
                        "
                      >
                        {sector.name}
                      </h4>


                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          opacity-0
                          -translate-x-2
                          group-hover:opacity-100
                          group-hover:translate-x-0
                          transition-all
                          duration-500
                        "
                        style={{
                          color: sector.color,
                        }}
                      />

                    </div>


                    <p
                      className="
                        mt-3
                        text-xs
                        sm:text-sm
                        leading-6
                        text-neutral-500
                        max-w-[330px]
                      "
                    >
                      {sector.desc}
                    </p>


                    {/* Bottom Accent */}

                    <div
                      className="
                        mt-5
                        h-[2px]
                        w-8
                        group-hover:w-14
                        transition-all
                        duration-500
                      "
                      style={{
                        backgroundColor: sector.color,
                      }}
                    />

                  </div>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>



  

  </div>



  {/* =======================================================
      BOTTOM LABEL
  ======================================================== */}

  <motion.div
    initial={{
      opacity: 0,
      y: 15,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{
      once: true,
    }}
    transition={{
      duration: 0.6,
      delay: 0.3,
    }}
    className="
      flex
      flex-col
      sm:flex-row
      items-center
      justify-center
      gap-4
      mt-10
      lg:mt-14
    "
  >

    <span className="h-px w-10 bg-[#D0C6B7]" />

    <span
      className="
        text-[9px]
        sm:text-[10px]
        uppercase
        tracking-[0.3em]
        text-neutral-400
      "
    >
      Heritage
      <span className="mx-2 text-[#C58B2B]">•</span>
      Infrastructure
      <span className="mx-2 text-[#C58B2B]">•</span>
      Innovation
      <span className="mx-2 text-[#C58B2B]">•</span>
      Growth
    </span>

    <span className="h-px w-10 bg-[#D0C6B7]" />

  </motion.div>

</section>
       



        {/* =========================================================
            HIGHLIGHTS / ACHIEVEMENTS
        ========================================================== */}

        <div className="mt-28 lg:mt-36">

          <div className="grid lg:grid-cols-12 gap-12 items-center">


            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >

              <div className="relative">

                <div className="absolute -inset-5 border border-[#B8893A]/10" />

                <div className="relative bg-white p-5 sm:p-8 border border-[#DDD4C5]">

                  <img
                    src="https://lucknowarchitecturefestival.in/img/about01.png"
                    alt="Uttar Pradesh achievements"
                    className="
                      w-full
                      max-h-[650px]
                      object-contain
                      mix-blend-multiply
                    "
                  />

                </div>

              </div>

            </motion.div>



            {/* Content */}

            <div className="lg:col-span-7">

              <div className="flex items-center gap-3 mb-4">

                <span className="text-xs font-bold text-[#B77A27]">
                  03
                </span>

                <span className="h-px w-10 bg-[#B77A27]" />

                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400">
                  State Highlights
                </span>

              </div>


              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
                A state building
                <span className="block text-[#B77A27]">
                  at scale.
                </span>
              </h3>


              <p className="mt-5 max-w-xl text-sm sm:text-base text-neutral-500 leading-7">
                A combination of economic ambition, demographic strength,
                infrastructure and cultural identity is shaping the future
                of the state's built environment.
              </p>



              <div className="mt-10">

                {highlights.map((item, index) => {

                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-5
                        py-5
                        border-b
                        border-[#DDD5C7]
                      "
                    >

                      <span className="font-serif text-2xl text-[#B8893A]/50">
                        {item.number}
                      </span>


                      <div
                        className="
                          w-10
                          h-10
                          rounded-full
                          border
                          border-[#D8CCBA]
                          flex
                          items-center
                          justify-center
                          group-hover:bg-[#171717]
                          group-hover:border-[#171717]
                          transition-all
                        "
                      >
                        <Icon
                          className="
                            w-4
                            h-4
                            text-[#B77A27]
                            group-hover:text-[#D4AF37]
                          "
                        />
                      </div>


                      <div className="flex-1">

                        <h4 className="text-sm font-bold tracking-wide">
                          {item.title}
                        </h4>

                        <p className="text-xs text-neutral-400 mt-1">
                          {item.subtitle}
                        </p>

                      </div>


                      <ArrowUpRight
                        className="
                          w-4
                          h-4
                          text-[#B77A27]
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                        "
                      />

                    </motion.div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>



        {/* =========================================================
            FINAL QUOTE
        ========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-12
            lg:mt-14
            text-center
            border-t
            border-b
            border-[#D8D0C2]
            py-8
          "
        >

          <div className="text-[10px] uppercase tracking-[0.3em] text-[#B77A27] mb-5">
            The LAF Perspective
          </div>

          <blockquote
            className="
              max-w-4xl
              mx-auto
              font-serif
              text-2xl
              sm:text-3xl
              md:text-4xl
              leading-relaxed
              text-[#242424]
            "
          >
            “Combining rich cultural heritage with contemporary
            architecture, sustainable development and a vision for the future.”
          </blockquote>

        </motion.div>


      </div>

    </section>
  );
};

export default AboutSection;
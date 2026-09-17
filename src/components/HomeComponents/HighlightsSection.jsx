import React from "react";
import { motion } from "framer-motion";
import highlightImage from "../../assets/images/image-6.jpg";
import {
  Megaphone,
  UsersRound,
  Newspaper,
  MessageSquareText,
  BriefcaseBusiness,
  Sparkles,
  ArrowUpRight,
  Building2,
  Palette,
  Boxes,
  Leaf,
  Cpu,
  Wrench,
  ShieldCheck,
  GraduationCap,
  Landmark,
  Store,
  Handshake,
  Presentation,
  WalletCards,
  MousePointerClick,
  Gift,
} from "lucide-react";

const HighlightsSection = () => {
  const experiences = [
    {
      icon: Megaphone,
      title: "Brand Reach",
      text: "A platform for brands to reach their target audience.",
      color: "#F97316",
    },
    {
      icon: UsersRound,
      title: "Engagement",
      text: "Engagement activities designed around the target group.",
      color: "#8B5CF6",
    },
    {
      icon: Newspaper,
      title: "Media Amplification",
      text: "Wide-ranging pre-promotional and media opportunities.",
      color: "#3B82F6",
    },
    {
      icon: MessageSquareText,
      title: "Seminars & Workshops",
      text: "Architects, experts and professionals meet to exchange ideas.",
      color: "#10B981",
    },
    {
      icon: BriefcaseBusiness,
      title: "Financing Facilities",
      text: "Opportunities for on-spot financing and financial interaction.",
      color: "#EAB308",
    },
    {
      icon: Sparkles,
      title: "Art & Culture",
      text: "Display of art, culture, heritage and creative expression.",
      color: "#EC4899",
    },
  ];

  const sectors = [
    {
      name: "ART",
      icon: Palette,
    },
    {
      name: "ARCHITECTURE",
      icon: Building2,
    },
    {
      name: "INTERIORS",
      icon: Sparkles,
    },
    {
      name: "CONSTRUCTION",
      icon: Wrench,
    },
    {
      name: "BUILDING MATERIALS",
      icon: Boxes,
    },
    {
      name: "GREEN TECH",
      icon: Leaf,
    },
    {
      name: "NEW TECHNOLOGIES",
      icon: Cpu,
    },
    {
      name: "BUILDING EQUIPMENTS",
      icon: Wrench,
    },
    {
      name: "BUILDING TECHNIQUES",
      icon: Building2,
    },
    {
      name: "SUSTAINABILITY",
      icon: Leaf,
    },
    {
      name: "SMART BUILDING",
      icon: ShieldCheck,
    },
    {
      name: "REAL ESTATE",
      icon: Landmark,
    },
    {
      name: "ACADEMICS",
      icon: GraduationCap,
    },
    {
      name: "GOVERNMENT SCHEMES & DEPARTMENTS",
      icon: Landmark,
    },
  ];

  const keyHighlights = [
  {
    number: "01",
    icon: Store,
    title: "MARKETERS PLATFORM",
    text: "A platform for marketers to showcase their products and services.",
  },
  {
    number: "02",
    icon: Handshake,
    title: "ARCHITECTS MEET",
    text: "Architects meet, seminars and workshops for professional exchange.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "EXPERTS INTERFACE",
    text: "Experts interface, knowledge sharing and interactive workshops.",
  },
  {
    number: "04",
    icon: WalletCards,
    title: "FINANCING FACILITY",
    text: "On-spot loan and financing facility for relevant participants.",
  },
  {
    number: "05",
    icon: MousePointerClick,
    title: "BRAND REACH",
    text: "A platform for brands to reach out to their target audience.",
  },
  {
    number: "06",
    icon: Gift,
    title: "ENGAGEMENT ACTIVITY",
    text: "Engagement activities with the target group, including lucky draws and more.",
  },
  {
    number: "07",
    icon: Palette,
    title: "ART & CULTURE",
    text: "Display of art, culture, heritage and creative expression.",
  },
  {
    number: "08",
    icon: Newspaper,
    title: "MEDIA AMPLIFICATION",
    text: "Wide arrays of pre-promotional tools and media opportunities.",
  },
];

  return (
    <section
      id="highlights"
      className="
        relative
        overflow-hidden
        bg-[#F7F4EE]
        text-[#171717]
        py-14
        sm:py-16
        lg:py-20
      "
    >

      {/* =====================================================
          ARCHITECTURAL BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}

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

        {/* Large circles */}

        <div
          className="
            absolute
            -left-40
            top-40
            w-[500px]
            h-[500px]
            rounded-full
            border
            border-[#B8893A]/10
          "
        />

        <div
          className="
            absolute
            -left-20
            top-60
            w-[350px]
            h-[350px]
            rounded-full
            border
            border-[#B8893A]/10
          "
        />

        <div
          className="
            absolute
            -right-40
            bottom-20
            w-[550px]
            h-[550px]
            rounded-full
            border
            border-[#B8893A]/10
          "
        />

      </div>



      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">


        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >

          <div className="flex items-center gap-4 mb-5">

            <span className="text-xs font-bold text-[#B77A27]">
              02
            </span>

            <span className="w-12 h-px bg-[#B77A27]" />

            <span
              className="
                text-[10px]
                tracking-[0.3em]
                uppercase
                text-neutral-400
              "
            >
              Festival Highlights
            </span>

          </div>


          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <h2
                className="
                  font-serif
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  leading-tight
                  font-medium
                "
              >
            

                <span className="text-[#B77A27]">
                  {" "}Highlights.
                </span>
              </h2>


              <div className="w-16 h-[2px] bg-[#C58B2B] mt-6" />

            </div>


           

          </div>

        </motion.div>



        {/* =====================================================
            HERO HIGHLIGHT
        ====================================================== */}

        <div
          className="
            grid
            lg:grid-cols-12
            gap-8
            lg:gap-12
            items-stretch
          "
        >


          {/* ===================================================
              LEFT VISUAL PANEL
          ==================================================== */}

          {/* LEFT ARCHITECTURAL CARD */}
   {/* LEFT ARCHITECTURAL CARD */}
<div className="relative min-h-[560px] overflow-hidden bg-[#151515] p-4 lg:col-span-4">

  {/* Outer Border */}
  <div className="pointer-events-none absolute inset-3 border border-[#B77A27]/40" />

  {/* LAF Label */}
  <div className="absolute left-7 top-7 z-20">
    <span className="text-[9px] uppercase tracking-[0.4em] text-[#C58B2B]">
      LAF 2.0
    </span>
  </div>

  {/* Architectural Image */}
  <div className="relative mx-auto mt-6 h-[245px] w-[82%] overflow-hidden rounded-t-[150px]">

    <img
      src={highlightImage}
      alt="Lucknow Architecture"
      className="
        h-full
        w-full
        object-cover
        grayscale
        contrast-125
        transition-transform
        duration-700
        hover:scale-105
      "
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-[#151515]/90" />

    {/* Gold Overlay */}
    <div className="absolute inset-0 bg-[#B77A27]/10 mix-blend-overlay" />

  </div>

  {/* Architectural Border */}
  <div
    className="
      pointer-events-none
      absolute
      left-[9%]
      right-[9%]
      top-6
      h-[245px]
      rounded-t-[150px]
      border
      border-[#B77A27]/50
    "
  />

  {/* Main Content */}
  <div className="relative z-10 px-7 pt-7">

    <p className="text-[10px] uppercase tracking-[0.35em] text-[#C58B2B]">
      International Flavour
    </p>

    <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-gray-400">
      3 Days Of
    </p>

    <h3 className="mt-1 font-serif text-4xl text-[#F5F1E8]">
      Extravaganza
    </h3>

    <div className="mt-4 h-[2px] w-12 bg-[#C58B2B]" />

    <p className="mt-7 max-w-xs text-sm leading-6 text-gray-400">
      A platform for architecture, design, business,
      culture and meaningful professional exchange.
    </p>

    {/* Bottom Info */}
    <div className="mt-6 flex items-center gap-3">

      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[#B77A27]/60
          text-[#C58B2B]
        "
      >
        ↗
      </div>

      <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500">
        Architecture · Culture · Ideas
      </span>

    </div>

  </div>

  {/* Decorative Circle */}
  <div
    className="
      pointer-events-none
      absolute
      -bottom-24
      -right-24
      h-64
      w-64
      rounded-full
      border
      border-[#B77A27]/20
    "
  />

  {/* Small Decorative Circle */}
  <div
    className="
      pointer-events-none
      absolute
      -bottom-10
      right-10
      h-40
      w-40
      rounded-full
      border
      border-[#B77A27]/10
    "
  />

  {/* Location */}
  <div className="absolute bottom-5 right-6 z-20">
    <span className="text-[8px] uppercase tracking-[0.35em] text-white/30">
      Lucknow / India
    </span>
  </div>

</div>

          {/* ===================================================
              RIGHT CONTENT
          ==================================================== */}

          <div className="lg:col-span-8">


            {/* =================================================
                INTRO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                border-b
                border-[#D9D0C2]
                pb-8
              "
            >

              <div className="flex items-center justify-between gap-5">

                <div>

                  <span
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#B77A27]
                    "
                  >
                    The Experience
                  </span>


                  <h3
                    className="
                      mt-3
                      font-serif
                      text-3xl
                      sm:text-4xl
                      leading-tight
                    "
                  >
                    Ideas that connect
                    <span className="text-[#B77A27]">
                      {" "}people &amp; possibilities.
                    </span>
                  </h3>

                </div>


                <div
                  className="
                    hidden
                    sm:flex
                    w-16
                    h-16
                    rounded-full
                    border
                    border-[#D4C6B2]
                    items-center
                    justify-center
                  "
                >

                  <Sparkles className="w-5 h-5 text-[#B77A27]" />

                </div>

              </div>


              <p
                className="
                  mt-5
                  max-w-3xl
                  text-sm
                  leading-7
                  text-neutral-500
                "
              >
                The festival programme brings together exhibitions,
                installations, symposia, lectures and workshops,
                celebrating architecture's contribution to culture,
                sustainability and the economy.
              </p>

            </motion.div>



            {/* =================================================
                SIX EXPERIENCE ITEMS
            ================================================== */}

            <div
              className="
                grid
                sm:grid-cols-2
                lg:grid-cols-3
                gap-0
                mt-2
              "
            >

              {experiences.map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group"
                  >

                    <div
                      className="
                        relative
                        min-h-[190px]
                        px-5
                        py-7
                        border-b
                        border-r
                        border-[#D9D0C2]
                        overflow-hidden
                        transition-all
                        duration-500
                        hover:bg-white/70
                      "
                    >

                      {/* hover glow */}

                      <div
                        className="
                          absolute
                          inset-0
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                        "
                        style={{
                          background: `
                            radial-gradient(
                              circle at 20% 20%,
                              ${item.color}18,
                              transparent 60%
                            )
                          `,
                        }}
                      />


                      <div className="relative z-10">

                        <div
                          className="
                            w-11
                            h-11
                            rounded-full
                            border
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-500
                            group-hover:scale-110
                          "
                          style={{
                            borderColor: `${item.color}55`,
                            backgroundColor: `${item.color}0D`,
                          }}
                        >

                          <Icon
                            className="w-5 h-5"
                            style={{
                              color: item.color,
                            }}
                          />

                        </div>


                        <h4
                          className="
                            mt-5
                            text-xs
                            font-black
                            uppercase
                            tracking-[0.13em]
                          "
                        >
                          {item.title}
                        </h4>


                        <p
                          className="
                            mt-2
                            text-xs
                            leading-5
                            text-neutral-500
                          "
                        >
                          {item.text}
                        </p>


                        <div
                          className="
                            mt-5
                            h-[2px]
                            w-6
                            group-hover:w-12
                            transition-all
                            duration-500
                          "
                          style={{
                            backgroundColor: item.color,
                          }}
                        />

                      </div>

                    </div>

                  </motion.div>

                );

              })}

            </div>

          </div>

        </div>



        {/* =====================================================
            FOCUS SECTORS
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-16 lg:mt-20"
        >

          {/* Header */}

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
              mb-8
            "
          >

            <div>

              <div className="flex items-center gap-3">

                <span className="text-xs font-bold text-[#B77A27]">
                  03
                </span>

                <span className="w-10 h-px bg-[#B77A27]" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-neutral-400
                  "
                >
                  Focus Areas
                </span>

              </div>


              <h3
                className="
                  mt-4
                  font-serif
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Built around the
                <span className="text-[#B77A27]">
                  {" "}future of design.
                </span>
              </h3>

            </div>


            <div className="text-right">

              <div
                className="
                  font-serif
                  text-4xl
                  text-[#B77A27]
                "
              >
                14
              </div>

              <div
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-neutral-400
                "
              >
                Focus Sectors
              </div>

            </div>

          </div>



          {/* Sector Grid */}

          <div
            className="
              border-t
              border-l
              border-[#D9D0C2]
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {sectors.map((sector, index) => {

              const Icon = sector.icon;

              return (

                <motion.div
                  key={sector.name}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                  className="
                    group
                    relative
                    min-h-[95px]
                    border-r
                    border-b
                    border-[#D9D0C2]
                    px-6
                    py-6
                    flex
                    items-center
                    gap-4
                    overflow-hidden
                    transition-all
                    duration-500
                    hover:bg-white
                  "
                >

                  {/* Hover line */}

                  <div
                    className="
                      absolute
                      left-0
                      bottom-0
                      h-[2px]
                      w-0
                      group-hover:w-full
                      transition-all
                      duration-500
                      bg-[#B77A27]
                    "
                  />


                  <div
                    className="
                      w-9
                      h-9
                      rounded-full
                      border
                      border-[#D9CBB7]
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      transition-all
                      duration-500
                      group-hover:border-[#B77A27]
                      group-hover:bg-[#B77A27]
                    "
                  >

                    <Icon
                      className="
                        w-4
                        h-4
                        text-[#B77A27]
                        group-hover:text-white
                        transition-colors
                      "
                    />

                  </div>


                  <span
                    className="
                      text-[11px]
                      sm:text-xs
                      font-bold
                      tracking-[0.1em]
                      text-[#333]
                    "
                  >
                    {sector.name}
                  </span>


                  <ArrowUpRight
                    className="
                      ml-auto
                      w-4
                      h-4
                      text-[#B77A27]
                      opacity-0
                      -translate-x-2
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      transition-all
                    "
                  />

                </motion.div>

              );

            })}

          </div>

        </motion.div>

          {/* =====================================================
    KEY HIGHLIGHTS
====================================================== */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-24 lg:mt-32"
>

  {/* Header */}
  <div className="mb-10 lg:mb-14">

    <div className="flex items-center gap-3">

      <span className="text-xs font-bold text-[#B77A27]">
        04
      </span>

      <span className="h-px w-10 bg-[#B77A27]" />

      <span className="
        text-[10px]
        uppercase
        tracking-[0.28em]
        text-neutral-400
      ">
        Festival Experience
      </span>

    </div>


    <div className="
      mt-5
      flex
      flex-col
      gap-5
      lg:flex-row
      lg:items-end
      lg:justify-between
    ">

      <h3 className="
        max-w-2xl
        font-serif
        text-4xl
        leading-tight
        sm:text-5xl
        lg:text-6xl
      ">
        Key
        <span className="text-[#B77A27]">
          {" "}Highlights.
        </span>
      </h3>

    </div>

  </div>
  
      <p className="
        max-w-md
        text-sm
        leading-7
        text-neutral-500
      ">
        A curated experience connecting brands,
        professionals, experts, culture and the
        wider built-environment ecosystem.
      </p>
       <br/>


  {/* Highlights Grid */}
  <div className="
    border-t
    border-l
    border-[#D9D0C2]
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
  ">

    {keyHighlights.map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.div
          key={item.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          className="group relative"
        >

          <div className="
            relative
            min-h-[250px]
            overflow-hidden
            border-r
            border-b
            border-[#D9D0C2]
            bg-transparent
            px-6
            py-7
            transition-all
            duration-500
            hover:bg-white/70
          ">

            {/* Background Number */}
            <span className="
              pointer-events-none
              absolute
              right-4
              top-2
              font-serif
              text-6xl
              leading-none
              text-[#B77A27]/[0.06]
              transition-all
              duration-500
              group-hover:text-[#B77A27]/[0.12]
            ">
              {item.number}
            </span>


            {/* Icon */}
            <div className="
              relative
              z-10
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[#D9CBB7]
              bg-[#F7F4EE]
              transition-all
              duration-500
              group-hover:border-[#B77A27]
              group-hover:bg-[#B77A27]
            ">

              <Icon
                className="
                  h-5
                  w-5
                  text-[#B77A27]
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              />

            </div>


            {/* Content */}
            <div className="relative z-10 mt-7">

              <div className="
                mb-3
                flex
                items-center
                gap-2
              ">

                <span className="
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  text-[#B77A27]
                ">
                  {item.number}
                </span>

                <span className="
                  h-px
                  w-5
                  bg-[#D9D0C2]
                " />

              </div>


              <h4 className="
                text-[11px]
                font-black
                uppercase
                tracking-[0.14em]
                text-[#222]
              ">
                {item.title}
              </h4>


              <p className="
                mt-3
                text-xs
                leading-6
                text-neutral-500
              ">
                {item.text}
              </p>

            </div>


            {/* Bottom Accent */}
            <div className="
              absolute
              bottom-0
              left-0
              h-[2px]
              w-0
              bg-[#B77A27]
              transition-all
              duration-500
              group-hover:w-full
            " />


            {/* Corner Arrow */}
            <ArrowUpRight
              className="
                absolute
                bottom-6
                right-5
                h-4
                w-4
                text-[#B77A27]
                opacity-0
                -translate-x-2
                translate-y-2
                transition-all
                duration-500
                group-hover:translate-x-0
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            />

          </div>

        </motion.div>

      );

    })}

  </div>


  {/* Bottom Statement */}
  <div className="
    mt-8
    flex
    items-center
    justify-between
    gap-5
  ">

    <div className="h-px flex-1 bg-[#D9D0C2]" />

    <span className="
      text-[9px]
      uppercase
      tracking-[0.3em]
      text-neutral-400
    ">
      Architecture · Industry · Culture · Ideas
    </span>

    <div className="h-px flex-1 bg-[#D9D0C2]" />

  </div>

</motion.div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-12
            lg:mt-14
            border-t
            border-b
            border-[#D9D0C2]
            py-6
            sm:py-8
            text-center
          "
        >

          <p
            className="
              max-w-4xl
              mx-auto
              font-serif
              text-xl
              sm:text-2xl
              md:text-3xl
              leading-relaxed
            "
          >
            A meeting ground for
            <span className="text-[#B77A27]">
              {" "}architecture, industry, academia
            </span>
            {" "}and culture.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default HighlightsSection;
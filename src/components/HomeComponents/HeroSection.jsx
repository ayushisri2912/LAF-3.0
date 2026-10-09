import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import heroBgImage from '../../assets/images/hero2.png';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[650px] sm:h-[700px] lg:h-[740px] overflow-hidden bg-[#101820] font-sans">

      {/* ================= BACKGROUND IMAGE ================= */}
      {/* <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBgImage})`,
        }}
      /> */}

      {/* ================= DARK CENTER OVERLAY ================= */}
      {/* Keeps image bright but makes text readable */}
      {/* <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-[#071421]/10
          via-[#071421]/16
          to-[#071421]/20
        "
      /> */}


      
{/* ================= BACKGROUND IMAGE ================= */}
<div
  className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
  style={{
    backgroundImage: `url(${heroBgImage})`,
  }}
/>

{/* ================= SOFT BRIGHT OVERLAY ================= */}
<div
  className="
    absolute inset-0
    bg-gradient-to-b
    from-white/10
    via-transparent
    to-[#111111]/10
  "
/>


      {/* Center readability */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(8,18,28,0.48)_0%,rgba(8,18,28,0.18)_45%,rgba(8,18,28,0)_75%)]
        "
      />

      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          z-10
          h-full
          max-w-[1400px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          flex
          flex-col
          items-center
          justify-center
          text-center
          pt-4
        "
      >

        {/* ================= MAIN HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-6xl
            text-[32px]
            sm:text-[44px]
            md:text-[54px]
            lg:text-[66px]
            xl:text-[72px]
            font-extrabold
            text-white
            leading-[0.98]
            tracking-[-0.025em]
            drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]
          "
        >
          North India's Largest{' '}

          {/* Design */}
          <span
            className="
              font-serif
              italic
              font-medium
              text-[#fbc551]
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]
            "
          >
            Design,
          </span>

          <br />

          {/* Luxury */}
          <span
            className="
              font-serif
              italic
              font-medium
               text-[#fbc551]
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.7)]
            "
          >
            Luxury
          </span>{' '}

          & Lifestyle Conclave
        </motion.h1>


        {/* ================= LAF 3.0 ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-3 sm:mt-4"
        >

          <div className="flex items-center justify-center gap-3 sm:gap-5">

            {/* Left Line */}
            <span
              className="
                hidden
                sm:block
                w-10
                md:w-16
                h-[2px]
                bg-gradient-to-r
                from-transparent
                to-[#d3b154]
              "
            />

            {/* LAF */}
            <span
              className="
                text-[48px]
                sm:text-[60px]
                md:text-[70px]
                lg:text-[82px]
                font-black
                tracking-[0.08em]
                leading-none
                text-[#cbab53]
                drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]
              "
            >
              LAF
            </span>

            {/* 3.0 */}
            <span
              className="
                text-[38px]
                sm:text-[48px]
                md:text-[58px]
                lg:text-[68px]
                font-serif
                italic
                font-semibold
                leading-none
                text-[#E0B83F]
                drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]
              "
            >
              3.0
            </span>

            {/* Right Line */}
            <span
              className="
                hidden
                sm:block
                w-10
                md:w-16
                h-[2px]
                bg-gradient-to-l
                from-transparent
                to-[#D4A72C]
              "
            />

          </div>

          {/* Festival Name */}
          <p
            className="
              mt-1
              text-[8px]
              sm:text-[10px]
              md:text-[11px]
              uppercase
              tracking-[0.32em]
              font-semibold
              text-white
              drop-shadow-[0_2px_5px_rgba(0,0,0,1)]
            "
          >
            Lucknow Architecture Festival
          </p>

        </motion.div>


        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-4
            sm:mt-5
            w-full
            max-w-[820px]
            px-5
            sm:px-8
            py-3
            sm:py-3.5
            rounded-xl
            bg-[#101010]/70
            backdrop-blur-md
            border
            border-[#D4A72C]/35
            shadow-[0_8px_30px_rgba(0,0,0,0.55)]
          "
        >

          <p
            className="
              text-xs
              sm:text-sm
              md:text-base
              lg:text-[17px]
              text-white
              leading-relaxed
              font-medium
              drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
            "
          >
            A Symposium of{' '}

            <span
              className="
                text-[#D4A72C]
                font-bold
                uppercase
                tracking-wide
              "
            >
              Emerging Architects
            </span>{' '}

            Think Tank for Sustainable Urban Development & Vision SCR – U.P.
          </p>

        </motion.div>


        {/* ================= DATE BADGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="
            mt-4
            sm:mt-5
            flex
            items-center
            justify-center
            gap-4
            sm:gap-6
            px-5
            sm:px-7
            py-2.5
            sm:py-3
            rounded-xl
            bg-[#0D1115]/90
            backdrop-blur-md
            border
            border-[#D4A72C]/55
            shadow-[0_8px_25px_rgba(0,0,0,0.6)]
          "
        >

          {/* Dates */}
          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              text-2xl
              sm:text-3xl
              md:text-4xl
              font-serif
              font-bold
              text-[#D4A72C]
            "
          >
            <span>22</span>

            <span className="text-white/30 text-xl font-light">
              |
            </span>

            <span>23</span>

            <span className="text-white/30 text-xl font-light">
              |
            </span>

            <span>24</span>
          </div>


          {/* Date Details */}
          <div
            className="
              pl-4
              sm:pl-6
              border-l
              border-white/20
              text-left
            "
          >

            <span
              className="
                flex
                items-center
                gap-1
                text-[8px]
                sm:text-[10px]
                uppercase
                tracking-[0.15em]
                font-bold
                text-[#D4A72C]
              "
            >
              <Calendar className="w-3 h-3" />
              Event Dates
            </span>

            <span
              className="
                block
                mt-0.5
                text-xs
                sm:text-sm
                md:text-base
                font-bold
                text-white
              "
            >
              January 2027
            </span>

          </div>

        </motion.div>


        {/* ================= BUTTONS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mt-5
            sm:mt-6
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >

          {/* REGISTER BUTTON */}
          <Link
            to="/register"
            className="
              group
              relative
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              sm:px-8
              py-3
              rounded-full
              font-bold
              text-[11px]
              sm:text-xs
              uppercase
              tracking-wider
              text-[#111]
              bg-gradient-to-r
              from-[#E0B83F]
              via-[#F0C64A]
              to-[#D99A16]
              border
              border-[#F3D36A]
              shadow-[0_0_22px_rgba(212,167,44,0.45)]
              hover:shadow-[0_0_32px_rgba(212,167,44,0.7)]
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              overflow-hidden
            "
          >

            {/* Shine */}
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-transparent
                via-white/40
                to-transparent
                -translate-x-full
                group-hover:translate-x-full
                transition-transform
                duration-700
              "
            />

            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4 fill-[#111]" />
              Register Now
            </span>

          </Link>


          {/* EXPLORE AGENDA */}
          <a
            href="#agenda"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-2
              px-6
              sm:px-8
              py-3
              rounded-full
              font-bold
              text-[11px]
              sm:text-xs
              uppercase
              tracking-wider
              text-white
              bg-[#0A0D10]/65
              backdrop-blur-md
              border
              border-white/40
              hover:border-[#D4A72C]
              hover:bg-[#0A0D10]/85
              hover:scale-105
              active:scale-95
              transition-all
              duration-300
              shadow-lg
            "
          >

            Explore Agenda

            <ArrowRight
              className="
                w-4
                h-4
                group-hover:translate-x-1
                transition-transform
              "
            />

          </a>

        </motion.div>

      </div>


      {/* ================= BOTTOM GOLD LINE ================= */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#D4A72C]
          to-transparent
        "
      />

    </section>
  );
};

export default HeroSection;
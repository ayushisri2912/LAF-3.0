import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Trophy,
  Coffee,
  Palette,
  CalendarDays,
  UsersRound,
  Newspaper,
  PenLine,
  Scale,
  HeartHandshake,
  Landmark,
  UserRound,
  Sparkles,
} from "lucide-react";

const committees = [
  {
    number: "01",
    title: "Academic Committee",
    subtitle: "KNOWLEDGE · EDUCATION · IDEAS",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Edu-Formation Committee",
    subtitle: "LEARNING · DEVELOPMENT",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Sports Committee",
    subtitle: "COMMUNITY · ENERGY",
    icon: Trophy,
  },
  {
    number: "04",
    title: "Hospitality & Welfare",
    subtitle: "PEOPLE · EXPERIENCE",
    icon: Coffee,
  },
  {
    number: "05",
    title: "Cultural & Exhibition",
    subtitle: "ART · CULTURE · EXHIBITION",
    icon: Palette,
  },
  {
    number: "06",
    title: "Event Management",
    subtitle: "PLANNING · EXECUTION",
    icon: CalendarDays,
  },
  {
    number: "07",
    title: "Membership & Directory",
    subtitle: "NETWORK · COMMUNITY",
    icon: UsersRound,
  },
  {
    number: "08",
    title: "Media & Protocol",
    subtitle: "MEDIA · COMMUNICATION",
    icon: Newspaper,
  },
  {
    number: "09",
    title: "Editorial & Graphics",
    subtitle: "PUBLICATION · DESIGN",
    icon: PenLine,
  },
  {
    number: "10",
    title: "Legal Committee",
    subtitle: "GOVERNANCE · PRACTICE",
    icon: Scale,
  },
  {
    number: "11",
    title: "Spouses Committee",
    subtitle: "COMMUNITY · SUPPORT",
    icon: HeartHandshake,
  },
  {
    number: "12",
    title: "LAA Social Responsibility",
    subtitle: "COMMUNITY · IMPACT",
    icon: HeartHandshake,
  },
  {
    number: "13",
    title: "Government Interaction",
    subtitle: "POLICY · PROFESSIONAL PRACTICE",
    icon: Landmark,
  },
];

const leadership = [
  {
    label: "MENTOR",
    name: "Lucknow Architects Association",
    icon: Sparkles,
  },
  {
    label: "PATRONS",
    name: "Leadership & Advisory",
    icon: UserRound,
  },
  {
    label: "OFFICE BEARERS",
    name: "LAA Office Bearers",
    icon: UsersRound,
  },
];

export default function PeopleSection() {
  return (
    <section
      id="people"
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717]"
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(40,35,30,0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(40,35,30,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />

        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#d8cfbf]/60" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#d8cfbf]/60" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            HERO
        ====================================================== */}
        <div className="pt-28 sm:pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-end">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7"
            >
              <div className="flex items-center gap-4 mb-7">
                <span className="w-14 h-px bg-[#F15A24]" />

                <span className="text-[10px] tracking-[0.38em] text-[#F15A24] font-semibold">
                  LAF 2.0 · PEOPLE
                </span>
              </div>

              <h2 className="font-serif text-[62px] sm:text-[80px] lg:text-[96px] leading-[0.84] tracking-[-0.055em]">
                The People
              </h2>

              <h3 className="font-serif italic text-[52px] sm:text-[68px] lg:text-[78px] leading-none text-[#777067] ml-8 sm:ml-14 mt-2">
                behind the
              </h3>

              <h3 className="font-serif text-[62px] sm:text-[80px] lg:text-[96px] leading-[0.88] tracking-[-0.055em]">
                Festival.
              </h3>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 lg:pb-2"
            >
              <div className="border-l border-[#cec4b5] pl-7">
                <p className="text-[18px] sm:text-[20px] leading-[1.6] text-[#6d665e]">
                  A collective of architects, professionals and creative minds
                  bringing ideas, culture and architectural exchange together.
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <span className="text-[9px] tracking-[0.3em] text-[#8b8379]">
                    PEOPLE · IDEAS · COMMUNITY
                  </span>

                  <span className="w-10 h-px bg-[#F15A24]" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            LEADERSHIP STRIP
        ====================================================== */}
        <div className="border-y border-[#d6cdbc]">
          <div className="grid md:grid-cols-3">

            {leadership.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`
                    relative p-7 sm:p-9 group
                    ${
                      index !== 2
                        ? "border-b md:border-b-0 md:border-r border-[#d6cdbc]"
                        : ""
                    }
                    hover:bg-[#F0EBE2] transition-colors duration-300
                  `}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-11 h-11 border border-[#cec4b5] flex items-center justify-center bg-[#F7F4EE]">
                      <Icon
                        size={19}
                        strokeWidth={1.4}
                        className="text-[#F15A24]"
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.3}
                      className="text-[#aaa197] group-hover:text-[#F15A24] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>

                  <p className="text-[9px] tracking-[0.3em] text-[#F15A24] mt-8">
                    {item.label}
                  </p>

                  <h4 className="font-serif text-[25px] mt-2 leading-tight">
                    {item.name}
                  </h4>

                  {/* photo placeholder */}
                  <div className="mt-7 h-32 border border-[#d5cbbb] bg-[#EEE8DE] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={45}
                        strokeWidth={0.8}
                        className="text-[#c4baaa]"
                      />
                    </div>

                    <span className="absolute bottom-3 left-3 text-[8px] tracking-[0.25em] text-[#8c8378]">
                      LAF · {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            SECTION INTRO
        ====================================================== */}
        <div className="py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <p className="text-[10px] tracking-[0.35em] text-[#F15A24] font-semibold">
                02 · COLLECTIVE
              </p>

              <h3 className="font-serif text-[50px] sm:text-[62px] leading-[0.95] tracking-[-0.04em] mt-5">
                Many disciplines.
                <br />
                <span className="italic text-[#777067]">
                  One vision.
                </span>
              </h3>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#716a61] max-w-2xl">
                LAF brings together different professional and creative
                communities through dedicated committees working across
                education, culture, media, events, social responsibility and
                professional practice.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            COMMITTEE GRID
        ====================================================== */}
        <div className="border-t border-[#d6cdbc]">

          <div className="flex items-end justify-between py-8">
            <div>
              <p className="text-[9px] tracking-[0.35em] text-[#F15A24] mb-3">
                LAA · COMMITTEES
              </p>

              <h3 className="font-serif text-[42px] sm:text-[54px] leading-none">
                The Collective
              </h3>
            </div>

            <span className="hidden sm:block text-[9px] tracking-[0.3em] text-[#8a8278]">
              13 COMMITTEES
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#d6cdbc]">
            {committees.map((committee, index) => {
              const Icon = committee.icon;

              return (
                <motion.div
                  key={committee.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 3) * 0.06,
                  }}
                  className="group relative min-h-[225px] p-7 sm:p-8 border-r border-b border-[#d6cdbc] hover:bg-[#EEE8DE] transition-all duration-300"
                >
                  {/* number */}
                  <span className="absolute right-5 top-4 font-serif text-[42px] leading-none text-[#ded6c9]">
                    {committee.number}
                  </span>

                  {/* icon */}
                  <div className="relative w-12 h-12 border border-[#cfc5b6] flex items-center justify-center bg-[#F7F4EE] group-hover:border-[#F15A24] transition-colors">
                    <Icon
                      size={20}
                      strokeWidth={1.35}
                      className="text-[#F15A24]"
                    />
                  </div>

                  <div className="relative mt-8">
                    <h4 className="font-serif text-[25px] leading-tight pr-8">
                      {committee.title}
                    </h4>

                    <p className="text-[8px] tracking-[0.25em] text-[#8b8379] mt-3">
                      {committee.subtitle}
                    </p>
                  </div>

                  {/* hover arrow */}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.3}
                    className="absolute bottom-7 right-7 text-[#aaa197] opacity-0 group-hover:opacity-100 group-hover:text-[#F15A24] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}
        <div className="py-24">
          <div className="bg-[#181716] text-[#F7F4EE] relative overflow-hidden">

            {/* decorative line */}
            <div className="absolute right-[-40px] top-[-40px] w-56 h-56 rounded-full border border-[#F7F4EE]/10" />
            <div className="absolute right-[25px] top-[25px] w-36 h-36 rounded-full border border-[#F15A24]/30" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 items-end">

                <div className="lg:col-span-8">
                  <p className="text-[9px] tracking-[0.35em] text-[#F15A24] mb-5">
                    LAF 2.0 · COMMUNITY
                  </p>

                  <h3 className="font-serif text-[40px] sm:text-[54px] lg:text-[64px] leading-[0.98] tracking-[-0.04em]">
                    Architecture is built
                    <br />
                    <span className="italic text-[#aaa197]">
                      together.
                    </span>
                  </h3>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <p className="text-[13px] leading-6 text-[#bcb5ac]">
                    A shared platform for people, ideas, professional
                    exchange and cultural expression.
                  </p>

                  <div className="flex lg:justify-end items-center gap-3 mt-7">
                    <span className="text-[9px] tracking-[0.3em] text-[#F7F4EE]">
                      LUCKNOW · INDIA
                    </span>

                    <span className="w-8 h-px bg-[#F15A24]" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import con1Img from "../assets/images/conveners-1.png";
import con2Img from "../assets/images/conveners-2.png";
import con3Img from "../assets/images/conveners-3.png";

import cc1Img from "../assets/images/cc-1.png";
import cc2Img from "../assets/images/cc-2.png";
import cc3Img from "../assets/images/cc-3.png";
import cc4Img from "../assets/images/cc-4.png";
import cc5Img from "../assets/images/cc-5.png";
import cc6Img from "../assets/images/cc-6.png";

import jc1Img from "../assets/images/am1-1.png";
import jc2Img from "../assets/images/am1-2.png";
import jc3Img from "../assets/images/am2-1.png";
import jc4Img from "../assets/images/am2-2.png";
import jc5Img from "../assets/images/am3-1.png";
import jc6Img from "../assets/images/am3-2.png";
import jc7Img from "../assets/images/am4-1.png";
import jc8Img from "../assets/images/am4-2.png";
import jc9Img from "../assets/images/am5-1.png";
import jc10Img from "../assets/images/am5-2.png";
import jc11Img from "../assets/images/am6-1.png";
import jc12Img from "../assets/images/am6-2.png";
import jc13Img from "../assets/images/am7-1.png";
import jc14Img from "../assets/images/am7-2.png";
import jc15Img from "../assets/images/am8-1.png";
import jc16Img from "../assets/images/am9-1.png";
import jc17Img from "../assets/images/am9-2.png";
import jc18Img from "../assets/images/am10-1.png";
import jc19Img from "../assets/images/am10-2.png";
import jc20Img from "../assets/images/am11-1.png";
import jc21Img from "../assets/images/am11-2.png";
import jc22Img from "../assets/images/am12-1.png";
import jc23Img from "../assets/images/am12-2.png";
import jc24Img from "../assets/images/am13-1.png";
import jc25Img from "../assets/images/am13-2.png";
import jc26Img from "../assets/images/am14-2.png";
import jc27Img from "../assets/images/am16-2.png";
import jc28Img from "../assets/images/am17-1.png";
import jc29Img from "../assets/images/am17-2.png";

import sv1Img from "../assets/images/sv-1.png";
import sv2Img from "../assets/images/sv-2.png";
import sv3Img from "../assets/images/sv-3.png";
import sv4Img from "../assets/images/sv-4.png";
import sv5Img from "../assets/images/sv-5.png";
import sv6Img from "../assets/images/sv-6.png";
import sv7Img from "../assets/images/sv-7.png";
import sv8Img from "../assets/images/sv-8.png";
import sv9Img from "../assets/images/sv-9.png";
import sv10Img from "../assets/images/sv-10.png";
import sv11Img from "../assets/images/sv-11.png";
import sv12Img from "../assets/images/sv-12.png";
import sv13Img from "../assets/images/sv-13.png";
import sv14Img from "../assets/images/sv-14.png";
import sv15Img from "../assets/images/sv-15.png";
import sv16Img from "../assets/images/sv-16.png";
import sv17Img from "../assets/images/sv-17.png";
import sv18Img from "../assets/images/sv-18.png";
import sv19Img from "../assets/images/sv-19.png";
import sv20Img from "../assets/images/sv-20.png";
import sv21Img from "../assets/images/sv-21.png";
import sv22Img from "../assets/images/sv-22.png";
import sv23Img from "../assets/images/sv-23.png";
import sv24Img from "../assets/images/sv-24.png";
import sv25Img from "../assets/images/sv-25.png";
import sv26Img from "../assets/images/sv-26.png";
import sv27Img from "../assets/images/sv-27.png";
import sv28Img from "../assets/images/sv-28.png";
import sv29Img from "../assets/images/sv-29.png";

export const convenorLeadershipMembers = [
  {
    id: "con-1",
    name: "Ar.Rajat Kant Mittal",
    role: "Festival Convenor",
    image: con1Img,
    badge: "CONVENOR 01",
  },
  {
    id: "con-2",
    name: "Ar.Ranjan Shukla",
    role: "Festival Convenor",
    image: con2Img,
    badge: "CONVENOR 02",
  },
  {
    id: "con-3",
    name: "Ar.Anupam Mittal",
    role: "Festival Convenor",
    image: con3Img,
    badge: "CONVENOR 03",
  },
];

export const teamCategories = {
  "core-committee": {
    id: "core-committee",
    title: "Core Committee & Convenors",
    tagline: "ORGANIZING LEADERSHIP & CREATIVE DIRECTION",
    subtitle: "01 · CORE COMMITTEE",
    description: "The core committee, convenors, and curators driving the architectural themes, creative direction, and organization of LAF 3.0.",
    icon: Users,
    countLabel: "09 MEMBERS",
    members: [
      { id: "cc-1", name: "Ar.Jagbir Singh", role: "Lead Curator", image: cc1Img },
      { id: "cc-2", name: "Ar.Sabina Singh", role: "Lead Curator", image: cc2Img },
      { id: "cc-3", name: "Ar.Jitendra Kr.Tripathi", role: "Lead Curator", image: cc3Img },
      { id: "cc-4", name: "Ar.Vipul Vashneya", role: "Core Committee Member", image: cc4Img },
      { id: "cc-5", name: "Ar.Aninda Sircar", role: "Core Committee Member", image: cc5Img },
      { id: "cc-6", name: "Ar.vijay Sinha", role: "Core Committee Member", image: cc6Img },
    ],
  },
  "advisors-mentors": {
    id: "advisors-mentors",
    title: "Advisors & Mentors",
    tagline: "VETERAN ARCHITECTS & ADVISORY BOARD",
    subtitle: "02 · ADVISORS & MENTORS",
    description: "Senior architects, advisors, and joint convenors guiding LAF 3.0 with vision, wisdom, and industry experience.",
    icon: Award,
    countLabel: "15 MEMBERS",
   members: [
  { id: "jc-1", name: "Dr. Arun Kanpur", role: "Senior Advisory Member", image: jc1Img },
  { id: "jc-2", name: "Ar. Ashish Gupta", role: "Senior Advisory Member", image: jc2Img },
  { id: "jc-3", name: "Ar. Faraz Usmani", role: "Senior Advisory Member", image: jc3Img },
  { id: "jc-4", name: "Ar. Vishal Mathur", role: "Senior Advisory Member", image: jc4Img },
  { id: "jc-5", name: "Ar. Alok Kumar", role: "Senior Advisory Member", image: jc5Img },
  { id: "jc-6", name: "Ar. Rajarshi", role: "Senior Advisory Member", image: jc6Img },
  { id: "jc-7", name: "Ar. Aviral Agrawal", role: "Senior Advisory Member", image: jc7Img },
  { id: "jc-8", name: "Ar. Vishal Jain", role: "Senior Advisory Member", image: jc8Img },
  { id: "jc-9", name: "Ar. Sandeep Negi", role: "Senior Advisory Member", image: jc9Img },
  { id: "jc-10", name: "Ar.Layak Singh", role: "Senior Advisory Member", image: jc10Img },
  { id: "jc-11", name: "Ar Pragya Singh", role: "Senior Advisory Member", image: jc11Img },
  { id: "jc-12", name: "Ar. Chhaya Shukla", role: "Senior Advisory Member", image: jc12Img },
  { id: "jc-13", name: "Ar Paarul Saxena ", role: "Senior Advisory Member", image: jc13Img },
  { id: "jc-14", name: "Ar. Rajit Agrawal", role: "Senior Advisory Member", image: jc14Img },
  { id: "jc-15", name: "Ar. Devyani Dayal", role: "Senior Advisory Member", image: jc15Img },
  { id: "jc-16", name: "Ar. Shikhar Singh ", role: "Senior Advisory Member", image: jc16Img },
  { id: "jc-17", name: "Ar. Sweksha Yadav", role: "Senior Advisory Member", image: jc17Img },
  { id: "jc-18", name: "Ar. Gopal Tripathi", role: "Senior Advisory Member", image: jc18Img },
  { id: "jc-19", name: "Ar. Rohit Gupta", role: "Senior Advisory Member", image: jc19Img },
  { id: "jc-20", name: "Ar. Umesh Gupta", role: "Senior Advisory Member", image: jc20Img },
  { id: "jc-21", name: "Ar. Pankaj Mishra", role: "Senior Advisory Member", image: jc21Img },
  { id: "jc-22", name: "Ar. Karan Dev ", role: "Senior Advisory Member", image: jc22Img },
  { id: "jc-23", name: "Ar. Ashutosh Gupta", role: "Senior Advisory Member", image: jc23Img },
  { id: "jc-24", name: "Ar. Deepti Pandey", role: "Senior Advisory Member", image: jc24Img },
  { id: "jc-25", name: "Ar. Swati Bhatia", role: "Senior Advisory Member", image: jc25Img },
  { id: "jc-26", name: "Ar. Yati Kumar Mishra", role: "Senior Advisory Member", image: jc26Img },
  { id: "jc-27", name: "Ar. Nishant Upadhyay", role: "Senior Advisory Member", image: jc27Img },
  { id: "jc-28", name: "Ar. Anjaneya Sharma", role: "Senior Advisory Member", image: jc28Img },
  { id: "jc-29", name: "Ar. Chandra Bhushan Chaudhary", role: "Senior Advisory Member", image: jc29Img }


],
  },
  "student-volunteers": {
    id: "student-volunteers",
    title: "Student Volunteers & Coordinators",
    tagline: "FUTURE ARCHITECTS & EXECUTION TEAM",
    subtitle: "03 · VOLUNTEERS & COORDINATORS",
    description: "The enthusiastic coordinators and student volunteers leading logistics, guest relations, and ground execution.",
    icon: GraduationCap,
    countLabel: "29 MEMBERS",
    members: [
      { id: "sv-1", name: "Ar. D. P. Singh", role: "Event Coordinator", image: sv1Img },
      { id: "sv-2", name: "Ar. Sanjay Mathur", role: "Event Coordinator", image: sv2Img },
      { id: "sv-3", name: "Ar. Anita Srivastva", role: "Event Coordinator", image: sv3Img },
      { id: "sv-4", name: "Ar. Neeraj Kushwaha", role: "Event Coordinator", image: sv4Img },
      { id: "sv-5", name: "Ar. Avinash Ghai", role: "Event Coordinator", image: sv5Img },
      { id: "sv-6", name: "Ar. Ritu Gulati", role: "Event Coordinator", image: sv6Img },
      { id: "sv-7", name: "Ar. Shubra Mittal", role: "Event Coordinator", image: sv7Img },
      { id: "sv-8", name: "Ar. Anshu Singh", role: "Event Coordinator", image: sv8Img },
      { id: "sv-9", name: "Ar. Prashant K. Singh", role: "Event Coordinator", image: sv9Img },
      { id: "sv-10", name: "Ar. Alok Verma", role: "Event Coordinator", image: sv10Img },
      { id: "sv-11", name: "Ar. Shubhendra Vajpayee", role: "Event Coordinator", image: sv11Img },
      { id: "sv-12", name: "Ar. Vaibhav Goel", role: "Event Coordinator", image: sv12Img },
      { id: "sv-13", name: "Ar. Brijesh", role: "Event Coordinator", image: sv13Img },
      { id: "sv-14", name: "Ar. Rahul Jadon", role: "Event Coordinator", image: sv14Img },
      { id: "sv-15", name: "Ar. Krishna Mohan Prajapati", role: "Event Coordinator", image: sv15Img },
      { id: "sv-16", name: "Ar. Rohit Parmar", role: "Event Coordinator", image: sv16Img },
      { id: "sv-17", name: "Ar. Amit Singh", role: "Event Coordinator", image: sv17Img },
      { id: "sv-18", name: "Ar. Shipra Singh", role: "Event Coordinator", image: sv18Img },
      { id: "sv-19", name: "Ar. Juwairia Qummurudin", role: "Event Coordinator", image: sv19Img },
      { id: "sv-20", name: "Ar. Awadhesh Verma", role: "Event Coordinator", image: sv20Img },
      { id: "sv-21", name: "Ar. Himanshu Diwaker", role: "Event Coordinator", image: sv21Img },
      { id: "sv-22", name: "Ar. Vandana Patel", role: "Event Coordinator", image: sv22Img },
      { id: "sv-23", name: "Ar. Naveen Singh", role: "Event Coordinator", image: sv23Img },
      { id: "sv-24", name: "Ar. Kabir", role: "Event Coordinator", image: sv24Img },
      { id: "sv-25", name: "Ar. Shriyak Singh", role: "Event Coordinator", image: sv25Img },
      { id: "sv-26", name: "Ar. Roli Singh", role: "Event Coordinator", image: sv26Img },
      { id: "sv-27", name: "Ar. Namit Tandon", role: "Event Coordinator", image: sv27Img },
      { id: "sv-28", name: "Ar. Anil Rastogi", role: "Event Coordinator", image: sv28Img },
      { id: "sv-29", name: "Ar. Akhilesh Pal", role: "Event Coordinator", image: sv29Img },
    ],
  },
};

export default function TeamPage() {
  const { submenu } = useParams();
  const navigate = useNavigate();

  const currentCategoryKey = submenu && teamCategories[submenu] ? submenu : "core-committee";
  const currentCategory = teamCategories[currentCategoryKey];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [submenu]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30">
      {/* Background Architectural Watermark & Lines */}
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
            <span>TEAM</span>
            <ChevronRight className="w-3 h-3 text-[#B77A27]" />
            <span className="text-[#B77A27] font-bold">{currentCategory.title}</span>
          </div>
        </div>

        {/* Submenu Category Switcher Tabs */}
        <div className="mb-12 border-b border-[#D4AF37]/25 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            {Object.keys(teamCategories).map((key) => {
              const cat = teamCategories[key];
              const isActive = key === currentCategoryKey;
              const IconComp = cat.icon;

              return (
                <button
                  key={key}
                  onClick={() => navigate(`/team/${key}`)}
                  className={`
                    relative flex items-center gap-2.5 px-5 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#121214] text-amber-400 shadow-lg border border-[#D4AF37]/50"
                        : "bg-white/70 hover:bg-white text-neutral-600 hover:text-neutral-900 border border-[#E6DFD3] hover:border-[#D4AF37]/40 shadow-2xs"
                    }
                  `}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-[#B77A27]"}`} />
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Header for current category */}
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end bg-white/60 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#B77A27] font-semibold uppercase">
                {currentCategory.subtitle}
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#171717]">
              {currentCategory.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-600 max-w-2xl">
              {currentCategory.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <div className="p-4 rounded-2xl bg-[#121214] text-white border border-[#D4AF37]/30 shadow-md w-full sm:w-auto min-w-[200px]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">TOTAL</span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="font-serif text-3xl font-medium text-amber-400 mt-1">
                {currentCategoryKey === "core-committee"
                  ? (convenorLeadershipMembers.length + currentCategory.members.length).toString().padStart(2, "0")
                  : currentCategory.members.length.toString().padStart(2, "0")}
              </div>
              <div className="text-[10px] text-neutral-400 tracking-wider uppercase mt-0.5">
                {currentCategory.tagline}
              </div>
            </div>
          </div>
        </div>

        {/* If Core Committee page, show Convenors at the top of the Core Committee page */}
        {currentCategoryKey === "core-committee" && (
          <div className="mb-14 bg-white/80 rounded-3xl p-8 sm:p-10 border border-[#E6DFD3] shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E6DFD3] pb-6 mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#B77A27] font-mono">
                    01 · FESTIVAL LEADERSHIP
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#171717]">
                  Festival Convenors
                </h2>
              </div>
              <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200/60 self-start sm:self-auto">
                LEADERSHIP (03)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {convenorLeadershipMembers.map((c, index) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group flex flex-col items-center p-7 rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* Circular Image Frame */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-md group-hover:shadow-[0_0_25px_rgba(183,122,39,0.25)] mb-5">
                    <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                      <img
                        src={c.image}
                        alt={c.name}
                        className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <span className="text-[9.5px] font-mono tracking-widest text-[#B77A27] font-semibold uppercase">
                    LAF 3.0 · {c.badge}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-1">
                    {c.name}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-0.5 font-medium">{c.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Core Committee & Team Members Grid */}
        <div>
          {currentCategoryKey === "core-committee" && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-[#D4AF37]/30 pb-5 mb-8 gap-4 bg-white/70 p-6 sm:p-8 rounded-3xl border border-[#E6DFD3] shadow-xs">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B77A27] animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase text-[#B77A27]">
                    02 · CORE COMMITTEE MEMBERS
                  </span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#171717]">
                  Organizing Curators <span className="text-[#B77A27]">&</span> Core Members
                </h2>
              </div>
              <span className="font-mono text-xs font-bold tracking-[0.25em] text-[#B77A27] uppercase bg-amber-100/70 px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-2xs self-start sm:self-auto">
                MEMBERS (06)
              </span>
            </div>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {currentCategory.members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col items-center p-6 rounded-2xl bg-white hover:bg-[#FDFBF7] border border-[#E6DFD3] hover:border-[#B77A27]/50 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
              >
                {/* Avatar ring */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-b from-[#E6DFD3] via-[#D4AF37]/50 to-transparent group-hover:from-[#B77A27] group-hover:to-amber-300 transition-all duration-300 shadow-md group-hover:shadow-[0_0_22px_rgba(183,122,39,0.22)] mb-4">
                  <div className="w-full h-full rounded-full bg-white overflow-hidden border-2 border-white flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <span className="text-[9.5px] font-mono tracking-widest text-[#B77A27] font-bold uppercase block truncate">
                    LAF 3.0 · #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <h3 className="font-serif text-base font-bold text-neutral-900 group-hover:text-[#B77A27] transition-colors mt-1 leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-1">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

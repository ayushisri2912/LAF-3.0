import React from "react";
import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Download,
  Sparkles,
  Calendar,
  Handshake,
  Building2,
  Users,
  Image as ImageIcon,
  Award,
  FileText,
} from "lucide-react";

import LAFLogo from "../assets/images/logo.jpeg";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const quickLinks = [
  { label: "Highlights", href: "#highlights", icon: Sparkles },
  { label: "Agenda", href: "#agenda", icon: Calendar },
  { label: "Participate", href: "#participation", icon: Handshake },
  { label: "About LAA", href: "#about", icon: Building2 },
  { label: "Team", href: "#festival-team", icon: Users },
  { label: "Gallery", href: "#gallery", icon: ImageIcon },
];

const festivalLinks = [
  { label: "Committees", href: "#committees", icon: Users },
  { label: "Location", href: "#location", icon: MapPin },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "Registration", href: "#registration", icon: Award },
];

const downloads = [
  { label: "Event Brochure", href: "#" },
  { label: "Participation Form", href: "#" },
  { label: "Event Layout", href: "#" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#111114] text-white border-t border-[#D4AF37]/30">
      {/* Top Hairline Gold Gradient Indicator */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      {/* =====================================================
          TOP CTA (COMPACT HEIGHT)
      ====================================================== */}

      <div className="relative border-b border-white/10">
        <div className="pointer-events-none absolute right-[-80px] top-[-100px] h-[300px] w-[300px] rounded-full border border-white/5" />
        <div className="pointer-events-none absolute right-[40px] top-[-50px] h-[180px] w-[180px] rounded-full border border-[#D4AF37]/20" />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
          <div className="grid items-center gap-6 lg:grid-cols-12">
            
            <div className="lg:col-span-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#D4AF37]" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                  LUCKNOW ARCHITECTURE FESTIVAL 3.0
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
                Let's build the{" "}
                <span className="italic text-[#D4AF37]">
                  next conversation.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-4 lg:flex lg:justify-end">
              <a
                href="#registration"
                className="
                  group inline-flex items-center gap-3
                  bg-gradient-to-r from-[#D4AF37] to-amber-500
                  hover:from-amber-400 hover:to-orange-500
                  px-6 py-3.5 rounded-full
                  text-xs font-bold uppercase tracking-wider text-black
                  shadow-[0_0_20px_rgba(212,175,55,0.3)]
                  hover:shadow-[0_0_28px_rgba(212,175,55,0.5)]
                  transition-all duration-300
                "
              >
                <span>LAF REGISTRATION</span>
                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
          MAIN FOOTER CONTENT (COMPACT SPACING & ICONS)
      ====================================================== */}

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* ================= BRAND COLUMN ================= */}
          <div className="lg:col-span-4">
            <a href="#" className="group inline-flex items-center gap-3.5">
              <img
                src={LAFLogo}
                alt="LAF 3.0 Logo"
                className="h-14 w-auto object-contain rounded-xl border border-[#D4AF37]/40 p-1 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="font-serif text-2xl font-semibold leading-none text-white">
                  Lucknow
                </h3>
                <p className="mt-1.5 font-mono text-[9px] tracking-[0.25em] text-[#D4AF37] font-semibold uppercase">
                  ARCHITECTURE FESTIVAL 3.0
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-relaxed text-neutral-400">
              A platform bringing architecture, design, culture,
              sustainability and professional exchange together in Lucknow.
            </p>

            <div className="mt-4 flex items-center gap-2.5 text-neutral-400 text-xs">
              <MapPin size={15} className="text-[#D4AF37] shrink-0" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>

            {/* REAL SOCIAL ICONS WITH HOVER GLOW */}
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="
                      w-9 h-9 rounded-xl
                      bg-neutral-900 border border-white/10
                      flex items-center justify-center
                      text-neutral-400
                      hover:text-black hover:bg-[#D4AF37] hover:border-[#D4AF37]
                      hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]
                      transition-all duration-300
                    "
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= EXPLORE COLUMN WITH ICONS ================= */}
          <div className="lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              EXPLORE
            </p>

            <ul className="space-y-2.5">
              {quickLinks.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center gap-2.5 text-xs text-neutral-300 hover:text-amber-400 transition-colors"
                    >
                      <LinkIcon className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-amber-400 transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= FESTIVAL COLUMN WITH ICONS ================= */}
          <div className="lg:col-span-2">
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              FESTIVAL
            </p>

            <ul className="space-y-2.5">
              {festivalLinks.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between text-xs text-neutral-300 hover:text-amber-400 transition-colors"
                    >
                      <span className="flex items-center gap-2.5">
                        <LinkIcon className="w-3.5 h-3.5 text-[#D4AF37]/70 group-hover:text-amber-400 transition-colors" />
                        <span>{link.label}</span>
                      </span>
                      <ArrowUpRight
                        size={12}
                        className="text-[#D4AF37] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= DOWNLOADS COLUMN ================= */}
          <div className="lg:col-span-4">
            <p className="mb-4 font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              EVENT DOCUMENTS
            </p>

            <div className="space-y-2">
              {downloads.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group flex items-center justify-between
                    rounded-xl border border-white/10 bg-white/[0.02]
                    px-3.5 py-2.5
                    hover:border-[#D4AF37]/50 hover:bg-white/[0.05]
                    transition-all duration-200
                  "
                >
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-[#D4AF37]" />
                    <span className="text-xs font-medium text-neutral-300 group-hover:text-white transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <Download
                    size={14}
                    className="text-neutral-400 group-hover:text-[#D4AF37] transition-all group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= CONTACT STRIP (COMPACT) ================= */}
        <div className="mt-8 border-y border-white/10 py-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            <a
              href="tel:+918874184076"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                <Phone size={15} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[8px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                  TASK MARKETING SOLUTIONS
                </p>
                <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                  +91 8874 1840 76
                </span>
              </div>
            </a>

            <a
              href="tel:+919335210024"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                <Phone size={15} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[8px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                  LUCKNOW ARCHITECTS ASSOCIATION
                </p>
                <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors">
                  +91 9335 2100 24
                </span>
              </div>
            </a>

            <a
              href="mailto:info@taskmarketingsolutions.in"
              className="group flex items-center gap-3.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                <Mail size={15} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[8px] font-mono tracking-[0.2em] text-neutral-400 uppercase">
                  EMAIL ENQUIRIES
                </p>
                <span className="text-xs font-semibold text-neutral-200 group-hover:text-amber-400 transition-colors break-all">
                  info@taskmarketingsolutions.in
                </span>
              </div>
            </a>

          </div>
        </div>

        {/* ================= BOTTOM BAR (COMPACT) ================= */}
        <div className="flex flex-col items-center justify-between gap-4 py-5 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] text-neutral-400 md:justify-start font-mono">
            <span>© {new Date().getFullYear()} LUCKNOW ARCHITECTURE FESTIVAL 3.0</span>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <a href="#" className="hover:text-amber-400 transition-colors">PRIVACY POLICY</a>
            <span className="hidden h-3 w-px bg-white/10 sm:block" />
            <a href="#" className="hover:text-amber-400 transition-colors">TERMS OF USE</a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] text-neutral-400 hover:text-amber-400 transition-colors"
          >
            <span>BACK TO TOP</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/10 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
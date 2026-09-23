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
import CCWSLogo from "../assets/images/CodeCrafterlogo.webp";

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
  { label: "Participate", href: "/participate", icon: Handshake },
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
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0e0e11] text-white border-t border-[#D4AF37]/30 shadow-2xl">
      {/* Top Hairline Gold Gradient Indicator */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80" />

      {/* =====================================================
          MAIN FOOTER CONTENT (COMPACT LOW-HEIGHT LAYOUT)
      ====================================================== */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 py-6 sm:py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* ================= BRAND COLUMN ================= */}
          <div className="lg:col-span-4 space-y-3">
            <a href="#" className="group inline-flex items-center gap-3">
              <img
                src={LAFLogo}
                alt="LAF 3.0 Logo"
                className="h-14 sm:h-16 w-auto object-contain rounded-xl border border-[#D4AF37]/40 p-1 bg-white shadow-sm group-hover:scale-105 transition-all duration-300"
              />
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-none text-white tracking-tight">
                  Lucknow
                </h3>
                <p className="mt-1 font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[#D4AF37] font-bold uppercase">
                  ARCHITECTURE FESTIVAL 3.0
                </p>
              </div>
            </a>

            <p className="text-xs sm:text-sm leading-relaxed text-neutral-300 font-light max-w-sm pt-0.5">
              A platform bringing architecture, design, culture, sustainability and
              professional exchange together in Lucknow.
            </p>

            <div className="flex items-center gap-2 text-xs text-neutral-300 font-medium">
              <MapPin size={14} className="text-[#D4AF37] shrink-0" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 border border-white/15 text-neutral-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-3 pb-0.5 border-b border-[#D4AF37]/20 inline-block">
              EXPLORE
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    >
                      <Icon size={13} className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= FESTIVAL SECTIONS ================= */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-3 pb-0.5 border-b border-[#D4AF37]/20 inline-block">
              FESTIVAL
            </h4>
            <ul className="space-y-2">
              {festivalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    >
                      <Icon size={13} className="text-[#D4AF37]/70 group-hover:text-[#D4AF37] transition-colors" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ================= DOWNLOADS ================= */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs tracking-[0.2em] text-[#D4AF37] font-bold uppercase mb-3 pb-0.5 border-b border-[#D4AF37]/20 inline-block">
              EVENT DOCUMENTS
            </h4>
            <div className="space-y-2">
              {downloads.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl bg-neutral-900/90 border border-white/15 px-3 py-2 text-xs sm:text-sm text-neutral-200 hover:border-[#D4AF37]/60 hover:bg-neutral-900 transition-all duration-300"
                >
                  <div className="flex items-center gap-2.5">
                    <FileText size={14} className="text-[#D4AF37]" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <Download size={13} className="text-neutral-400 group-hover:text-[#D4AF37] transition-colors" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= CONTACT STRIP (COMPACT) ================= */}
        <div className="mt-5 pt-4 border-t border-white/10">
          <div className="grid gap-3 md:grid-cols-3">
            <a
              href="tel:+918874184076"
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all duration-300 shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D4AF37] font-bold uppercase">
                  TASK MARKETING SOLUTIONS
                </p>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                  +91 8874 1840 76
                </span>
              </div>
            </a>

            <a
              href="tel:+919335210024"
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all duration-300 shrink-0">
                <Phone size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D4AF37] font-bold uppercase">
                  LUCKNOW ARCHITECTS ASSOCIATION
                </p>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                  +91 9335 2100 24
                </span>
              </div>
            </a>

            <a
              href="mailto:info@taskmarketingsolutions.in"
              className="group flex items-center gap-3 py-1 px-2 rounded-xl hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-900 border border-[#D4AF37]/30 text-[#D4AF37] group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/15 transition-all duration-300 shrink-0">
                <Mail size={15} />
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.18em] text-[#D4AF37] font-bold uppercase">
                  EMAIL ENQUIRIES
                </p>
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors break-all">
                  info@taskmarketingsolutions.in
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* ================= BOTTOM BAR WITH TRANSPARENT THEMED CCWS LOGO ================= */}
        <div className="flex flex-col items-center justify-between gap-3 py-3.5 md:flex-row border-t border-white/10 mt-4 text-neutral-300 font-mono text-xs">
          {/* Left: Copyright */}
          <div>
            <span>© {new Date().getFullYear()} LUCKNOW ARCHITECTURE FESTIVAL 3.0</span>
          </div>

          {/* Center: Precision Crafted Credit with Transparent Gold-Themed CCWS Logo */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-neutral-300 font-mono">
            <span className="text-[#D4AF37] font-bold text-xs font-mono">&lt;/&gt;</span>
            <span className="tracking-tight">Precision Crafted with Digital Intelligence by</span>
            <a
              href="https://codecrafter.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={CCWSLogo}
                alt="CodeCrafter Web Solutions"
                className="h-6 w-auto object-contain brightness-0 invert sepia-100 saturate-[500%] hue-rotate-[15deg] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all duration-300"
              />
            </a>
          </div>

          {/* Right: Privacy Policy & Terms of Use */}
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">PRIVACY POLICY</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-[#D4AF37] transition-colors">TERMS OF USE</a>
          </div>
        </div>

      </div>

      {/* Floating UI Side Back To Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to Top"
        className={`fixed bottom-6 right-6 z-50 group flex items-center justify-center w-11 h-11 rounded-full bg-[#111114]/90 border border-[#D4AF37]/70 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:scale-110 active:scale-95 shadow-[0_4px_25px_rgba(212,175,55,0.3)] backdrop-blur-md transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
}
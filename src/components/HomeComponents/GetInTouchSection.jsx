import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Download,
  ArrowUpRight,
  Share2,
  CheckCircle2,
} from "lucide-react";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/share/r/14tqyZYGyx5/", icon: FacebookIcon },
  { label: "Twitter", href: "https://x.com/LucnowA/status/2098022161361625279?s=20", icon: TwitterIcon },
  { label: "Instagram", href: "https://www.instagram.com/reel/DdGzeFOApim/", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/feed/update/urn:li:activity:7503787276993429504", icon: LinkedinIcon },
  { label: "YouTube", href: "https://youtube.com/shorts/Wcr1sJ3jdPg?feature=share", icon: YoutubeIcon },
];

const documentDownloads = [
  {
    label: "DOWNLOAD EVENT BROCHURE",
    href: "https://lucknowarchitecturefestival.in/download/brochure-LAF2.0.pdf",
  },
  {
    label: "DOWNLOAD PARTICIPATION FORM",
    href: "https://lucknowarchitecturefestival.in/download/sponsorship-LAF2.0.pdf",
  },
  {
    label: "DOWNLOAD LAYOUT",
    href: "https://lucknowarchitecturefestival.in/download/layout-LAF2.0.pdf",
  },
];

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: "", contactNumber: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAF8F5] text-[#171717] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 font-sans border-t border-[#E8E2D8]"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHES ALL HOMEPAGE SECTIONS)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Signature Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.32]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(217, 119, 6, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217, 119, 6, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Ambient Warm & Purple Atmosphere Glows */}
        <div className="absolute -left-32 top-16 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-orange-200/20 to-amber-200/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-16 w-[460px] h-[460px] rounded-full bg-gradient-to-tl from-purple-200/20 to-pink-200/10 blur-3xl pointer-events-none" />

        {/* Decorative Corner Brackets */}
        <div className="absolute left-[5%] top-[5%] h-16 w-16 border-l border-t border-[#EA580C]/20" />
        <div className="absolute right-[5%] bottom-[5%] h-16 w-16 border-r border-b border-[#EA580C]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            SECTION TITLE & SUBHEADING
        ====================================================== */}
        <div className="mb-12 sm:mb-14 grid lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#0B1536]">
              Get in{" "}
              <span className="font-serif italic font-bold bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] bg-clip-text text-transparent">
                Touch.
              </span>
            </h2>
            {/* Gradient Pill Underline Bar matching other sections */}
            <div className="w-28 sm:w-36 h-[5px] rounded-full bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] mt-3 sm:mt-3.5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 border-l-2 border-[#EA580C] pl-4">
              Have questions regarding festival participation, stall booking, or technical sessions? Connect directly with our team.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN FORM & CONTACT INFO GRID
        ====================================================== */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-12 items-stretch">
          
          {/* ================= LEFT COLUMN: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[32px] border border-[#E8E2D8] hover:border-[#EA580C]/40 p-6 sm:p-10 shadow-[0_4px_30px_rgba(249,115,22,0.06)] hover:shadow-[0_10px_35px_rgba(249,115,22,0.12)] relative overflow-hidden h-full flex flex-col justify-between transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-36 h-36 bg-radial from-[#EA580C]/10 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E5E7EB]">
              <h3 className="font-serif text-2xl font-bold text-[#0B1536]">
                Send Us a Message
              </h3>
              <span className="text-[10px] font-bold font-mono uppercase tracking-widest text-[#EA580C] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/80">
                Direct Inquiry
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center bg-gradient-to-br from-orange-50/60 via-white to-pink-50/40 rounded-2xl border border-orange-200 p-8"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#EA580C] to-[#D91A5B] flex items-center justify-center text-white shadow-md">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="font-serif text-2xl font-bold text-[#0B1536]">
                  Thank You!
                </h4>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto">
                  Your message has been submitted successfully. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* FIRST NAME */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                        Your first name <span className="text-[#E11D48]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#EA580C] focus:bg-white focus:ring-2 focus:ring-[#EA580C]/20 transition-all duration-300"
                      />
                    </div>

                    {/* CONTACT NUMBER */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                        Your contact number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your contact number"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#EA580C] focus:bg-white focus:ring-2 focus:ring-[#EA580C]/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Your e-mail <span className="text-[#E11D48]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Your e-mail"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#EA580C] focus:bg-white focus:ring-2 focus:ring-[#EA580C]/20 transition-all duration-300"
                    />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-600 mb-2">
                      Message <span className="text-[#E11D48]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E2D9CC] text-sm text-[#0F172A] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#EA580C] focus:bg-white focus:ring-2 focus:ring-[#EA580C]/20 transition-all duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-gradient-to-r from-[#EA580C] via-[#D91A5B] to-[#7C2D92] hover:opacity-95 text-white text-xs font-bold uppercase tracking-[0.25em] transition-all duration-300 shadow-md hover:shadow-[0_8px_25px_rgba(234,88,12,0.35)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <span>SUBMIT</span>
                    <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* ================= RIGHT COLUMN: CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 h-full"
          >
            {/* CONTACT DETAILS CARD */}
            <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-[#E8E2D8] hover:border-[#EA580C]/40 p-6 sm:p-10 shadow-[0_4px_30px_rgba(249,115,22,0.06)] hover:shadow-[0_10px_35px_rgba(249,115,22,0.12)] space-y-6 h-full flex flex-col justify-between transition-all duration-300">
              
              {/* FOLLOW US */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Share2 size={16} className="text-[#EA580C]" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0B1536]">
                    Follow Us
                  </span>
                </div>
                <div className="flex items-center gap-2.5 pt-1">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl bg-orange-50/70 border border-orange-200/70 flex items-center justify-center text-[#0B1536] hover:text-white hover:bg-gradient-to-r hover:from-[#EA580C] hover:to-[#D91A5B] hover:border-transparent transition-all duration-300 shadow-2xs hover:scale-105"
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* POSTAL ADDRESS */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF5EB] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0 mt-0.5 shadow-2xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1536] mb-1.5">
                      Postal Address
                    </h4>
                    <a
                      href="https://maps.app.goo.gl/UQLY4PHADL96UGU86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#EA580C] leading-relaxed block transition-colors group"
                    >
                      Ekana International Stadium<br />
                      Bharat Ratna Shri Atal Bihari Vajpayee<br />
                      Sector 7, Gomti Nagar, Amar Shaheed Path,<br />
                      Lucknow 226010, Uttar Pradesh, INDIA.
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#EA580C] font-mono mt-1 font-semibold group-hover:underline">
                        View on Map <ArrowUpRight size={12} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PHONES */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EEFD] border border-purple-200 flex items-center justify-center text-[#7E22CE] shrink-0 mt-0.5 shadow-2xs">
                    <Phone size={18} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1536]">
                      Phones
                    </h4>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                        Task Marketing Solutions
                      </p>
                      <a
                        href="tel:+918874184076"
                        className="text-sm font-semibold text-[#0F172A] hover:text-[#EA580C] transition-colors"
                      >
                        +91 8874 1840 76
                      </a>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                        Lucknow Architects Association
                      </p>
                      <a
                        href="tel:+919335210024"
                        className="text-sm font-semibold text-[#0F172A] hover:text-[#EA580C] transition-colors"
                      >
                        +91 9335 2100 24
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="pt-5 border-t border-[#E5E7EB]">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F4] border border-rose-200 flex items-center justify-center text-[#E11D48] shrink-0 mt-0.5 shadow-2xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0B1536] mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@taskmarketingsolutions.in"
                      className="text-sm font-semibold text-[#0F172A] hover:text-[#EA580C] transition-colors break-all"
                    >
                      info@taskmarketingsolutions.in
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM DOWNLOAD BUTTONS STRIP
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-10 border-t border-[#E8E2D8]"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-gradient-to-r from-[#EA580C] to-[#D91A5B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#EA580C] font-mono">
              OFFICIAL FESTIVAL DOCUMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {documentDownloads.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#0B1536] via-[#111C44] to-[#0B1536] border border-[#EA580C]/40 hover:border-[#EA580C] shadow-[0_4px_22px_rgba(11,21,54,0.12)] hover:shadow-[0_10px_30px_rgba(234,88,12,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                {/* Vibrant Orange/Crimson Shimmer Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA580C]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                <div className="flex items-center gap-3.5 min-w-0 z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-[#EA580C]/40 flex items-center justify-center text-[#EA580C] group-hover:bg-gradient-to-r group-hover:from-[#EA580C] group-hover:to-[#D91A5B] group-hover:text-white group-hover:border-transparent transition-all duration-300 shrink-0 shadow-xs">
                    <Download className="w-4.5 h-4.5 group-hover:translate-y-0.5 transition-transform" />
                  </div>

                  <div className="text-left truncate">
                    <div className="text-[11.5px] sm:text-[12.5px] font-bold uppercase tracking-wider text-white group-hover:text-[#FDBA74] transition-colors truncate">
                      {doc.label}
                    </div>
                    <div className="text-[10.5px] text-neutral-400 truncate mt-0.5">
                      PDF Document
                    </div>
                  </div>
                </div>

                <div className="z-10 ml-2 shrink-0">
                  <ArrowUpRight className="w-4.5 h-4.5 text-[#FED7AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Send,
  Download,
  ArrowUpRight,
  Sparkles,
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
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Twitter", href: "#", icon: TwitterIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
  { label: "YouTube", href: "#", icon: YoutubeIcon },
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
      className="relative overflow-hidden bg-[#F7F4EE] text-[#171717] py-16 sm:py-24 lg:py-32 font-sans border-t border-[#D9D0C2]"
    >
      {/* =====================================================
          ARCHITECTURAL BACKGROUND (MATCHES ALL HOMEPAGE SECTIONS)
      ====================================================== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Signature Architectural Grid */}
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120,90,40,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120,90,40,0.07) 1px, transparent 1px)
            `,
            backgroundSize: "44px 44px",
          }}
        />

        {/* Decorative Circles */}
        <div className="absolute -left-40 bottom-10 w-[500px] h-[500px] rounded-full border border-[#B8893A]/10" />
        <div className="absolute -right-32 top-20 w-[420px] h-[420px] rounded-full border border-[#B8893A]/10" />

        {/* Corner Brackets */}
        <div className="absolute left-[5%] top-[5%] h-16 w-16 border-l border-t border-[#B8893A]/20" />
        <div className="absolute right-[5%] bottom-[5%] h-16 w-16 border-r border-b border-[#B8893A]/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            TOP SECTION LABEL & HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-center justify-between border-b border-[#D9D0C2] pb-6"
        >
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-[#B77A27] font-mono">10</span>
            <span className="w-12 h-px bg-[#B77A27]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B77A27]">
              GET IN TOUCH
            </span>
          </div>

          <span className="hidden sm:inline font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            LAF 3.0 · ENQUIRIES & DELEGATES
          </span>
        </motion.div>

        {/* =====================================================
            SECTION TITLE & SUBHEADING
        ====================================================== */}
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[0.96] tracking-[-0.03em] text-[#171717]">
              Get in{" "}
              <span className="italic text-[#B77A27] font-normal">
                Touch.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="text-base sm:text-lg leading-relaxed text-neutral-600 border-l-2 border-[#B77A27] pl-4">
              Have questions regarding festival participation, stall booking, or technical sessions? Connect directly with our team.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN FORM & CONTACT INFO GRID
        ====================================================== */}
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* ================= LEFT COLUMN: FORM ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-xs p-8 sm:p-12 rounded-3xl border border-[#D9D0C2] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#B77A27]/10 to-transparent pointer-events-none" />

            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#D9D0C2]/60">
              <h3 className="font-serif text-2xl font-light text-[#171717]">
                Send Us a Message
              </h3>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#B77A27] bg-[#B77A27]/10 px-3 py-1 rounded-full border border-[#B77A27]/20">
                Direct Inquiry
              </span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center bg-[#F7F4EE] rounded-2xl border border-[#B77A27]/30 p-8"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#B77A27]/15 flex items-center justify-center text-[#B77A27]">
                  <CheckCircle2 size={30} />
                </div>
                <h4 className="font-serif text-2xl font-normal text-[#171717]">
                  Thank You!
                </h4>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm mx-auto">
                  Your message has been submitted successfully. Our team will get back to you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* FIRST NAME */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Your first name <span className="text-[#B77A27]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F4EE]/70 border border-[#D9D0C2] text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#B77A27] focus:bg-white transition-all duration-300"
                    />
                  </div>

                  {/* CONTACT NUMBER */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Your contact number
                    </label>
                    <input
                      type="tel"
                      placeholder="Your contact number"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F7F4EE]/70 border border-[#D9D0C2] text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#B77A27] focus:bg-white transition-all duration-300"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Your e-mail <span className="text-[#B77A27]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7F4EE]/70 border border-[#D9D0C2] text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#B77A27] focus:bg-white transition-all duration-300"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                    Message <span className="text-[#B77A27]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F7F4EE]/70 border border-[#D9D0C2] text-sm text-[#171717] placeholder:text-neutral-400 focus:outline-hidden focus:border-[#B77A27] focus:bg-white transition-all duration-300 resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-[#B77A27] hover:bg-[#99641D] text-white text-xs font-semibold uppercase tracking-[0.25em] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                >
                  <span>SUBMIT</span>
                  <Send size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* ================= RIGHT COLUMN: CONTACT INFO ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* CONTACT DETAILS CARD */}
            <div className="bg-white/80 backdrop-blur-xs p-8 sm:p-10 rounded-3xl border border-[#D9D0C2] shadow-sm space-y-8">
              
              {/* FOLLOW US */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Share2 size={16} className="text-[#B77A27]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#171717]">
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
                        aria-label={social.label}
                        className="w-10 h-10 rounded-xl bg-[#F7F4EE] border border-[#D9D0C2] flex items-center justify-center text-neutral-600 hover:text-white hover:bg-[#B77A27] hover:border-[#B77A27] transition-all duration-300 shadow-2xs hover:scale-105"
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* POSTAL ADDRESS */}
              <div className="pt-6 border-t border-[#D9D0C2]/60">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B77A27]/10 border border-[#B77A27]/20 flex items-center justify-center text-[#B77A27] shrink-0 mt-0.5">
                    <MapPin size={17} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-1.5">
                      Postal Address
                    </h4>
                    <a
                      href="https://maps.app.goo.gl/UQLY4PHADL96UGU86"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#B77A27] leading-relaxed block transition-colors group"
                    >
                      Ekana International Stadium<br />
                      Bharat Ratna Shri Atal Bihari Vajpayee<br />
                      Sector 7, Gomti Nagar, Amar Shaheed Path,<br />
                      Lucknow 226010, Uttar Pradesh, INDIA.
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#B77A27] font-mono mt-1 group-hover:underline">
                        View on Map <ArrowUpRight size={12} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* PHONES */}
              <div className="pt-6 border-t border-[#D9D0C2]/60">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B77A27]/10 border border-[#B77A27]/20 flex items-center justify-center text-[#B77A27] shrink-0 mt-0.5">
                    <Phone size={17} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717]">
                      Phones
                    </h4>
                    <div>
                      <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase">
                        Task Marketing Solutions
                      </p>
                      <a
                        href="tel:+918874184076"
                        className="text-sm font-medium text-[#171717] hover:text-[#B77A27] transition-colors"
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
                        className="text-sm font-medium text-[#171717] hover:text-[#B77A27] transition-colors"
                      >
                        +91 9335 2100 24
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="pt-6 border-t border-[#D9D0C2]/60">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B77A27]/10 border border-[#B77A27]/20 flex items-center justify-center text-[#B77A27] shrink-0 mt-0.5">
                    <Mail size={17} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@taskmarketingsolutions.in"
                      className="text-sm font-medium text-[#171717] hover:text-[#B77A27] transition-colors break-all"
                    >
                      info@taskmarketingsolutions.in
                    </a>
                  </div>
                </div>
              </div>

              {/* EVENT DATE */}
              <div className="pt-6 border-t border-[#D9D0C2]/60">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#B77A27]/10 border border-[#B77A27]/20 flex items-center justify-center text-[#B77A27] shrink-0 mt-0.5">
                    <Calendar size={17} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-1">
                      Event Date
                    </h4>
                    <p className="text-sm font-serif font-normal text-[#171717]">
                      10, 11, 12 January 2025
                    </p>
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
          className="mt-16 pt-10 border-t border-[#D9D0C2]"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#B77A27]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B77A27] font-mono">
              OFFICIAL FESTIVAL DOCUMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {documentDownloads.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-[#B77A27] hover:bg-[#99641D] text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Download size={17} className="text-white/80 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-semibold tracking-wider font-mono">
                    {doc.label}
                  </span>
                </div>
                <ArrowUpRight size={16} className="text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouchSection;

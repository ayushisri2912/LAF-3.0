import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#171717] font-sans selection:bg-[#D4AF37]/30 relative">
      {/* Background Architectural Watermark Grid matching the rest of the website */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(180, 140, 60, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(180, 140, 60, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute left-[5%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
        <div className="absolute right-[5%] top-0 bottom-0 w-px bg-[#D4AF37]/15" />
      </div>

      <div className="relative z-10 overflow-hidden">
        <AboutHero />
     
      </div>
    </div>
  );
};

export default About;

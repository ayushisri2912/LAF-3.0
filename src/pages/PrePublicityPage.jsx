import React, { useEffect } from "react";
import PrePublicitySection from "../components/HomeComponents/PrePublicitySection";

const PrePublicityPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <PrePublicitySection />
    </div>
  );
};

export default PrePublicityPage;

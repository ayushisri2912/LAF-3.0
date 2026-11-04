import React, { useEffect } from "react";
import OpportunitiesSection from "../components/HomeComponents/OpportunitiesSection";

const OpportunitiesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <OpportunitiesSection />
    </div>
  );
};

export default OpportunitiesPage;

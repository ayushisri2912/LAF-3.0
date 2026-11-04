import React, { useEffect } from "react";
import VisitorsProfileSection from "../components/HomeComponents/VisitorsProfileSection";

const VisitorsProfilePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <VisitorsProfileSection />
    </div>
  );
};

export default VisitorsProfilePage;

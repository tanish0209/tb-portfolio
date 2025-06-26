import React from "react";
import Coming_Soon from "../components/Coming_Soon";
import ExperienceContent from "../components/Experience/ExperienceContent";

const Experience = () => {
  return (
    <div className="min-h-screen py-[1px]">
      <div className="py-[6vh] mx-[4vw] mt-4 md:mt-20 overflow-visible">
        <p className="text-[var(--text-secondary)] text-2xl sm:text-4xl font-extrabold place-self-center">
          Professional Exposure
        </p>
        <ExperienceContent />
      </div>
    </div>
  );
};

export default Experience;

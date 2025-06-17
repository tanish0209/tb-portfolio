import React from "react";
import HomeSection from "../components/Landing/HomeSection";
import SkillsSection from "../components/Landing/SkillsSection";
import ExperienceSection from "../components/Landing/ExperienceSection";
import ProjectsSection from "../components/Landing/ProjectsSection";
import OverviewSection from "../components/Landing/OverviewSection";

const Landing = () => {
  return (
    <div className="min-h-screen py-[1px]">
      <HomeSection />
      <OverviewSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
};

export default Landing;

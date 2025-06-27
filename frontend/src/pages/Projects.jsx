import React, { useState, useMemo, useRef, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
import ProjectBox from "../components/Projects/ProjectBox";
import ProjectsData from "../assets/Projects";

// Get unique technologies
const getAllUniqueTechnologies = (projects) => {
  const techSet = new Set();
  Object.values(projects).forEach((project) => {
    project.tech.forEach((t) => techSet.add(t));
  });
  return Array.from(techSet).sort();
};

const Projects = () => {
  const allProjects = Object.values(ProjectsData);
  const allTechnologies = useMemo(
    () => getAllUniqueTechnologies(ProjectsData),
    []
  );

  const [selectedTechs, setSelectedTechs] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const buttonRef = useRef(null);
  const filterRef = useRef(null);

  const handleCheckboxChange = (tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProjects =
    selectedTechs.length === 0
      ? allProjects
      : allProjects.filter((project) =>
          selectedTechs.every((tech) => project.tech.includes(tech))
        );

  return (
    <div className="relative min-h-screen py-[1px]">
      <div className="py-[2vh] mx-[4vw] mt-4 md:mt-20 overflow-visible relative">
        {/* Heading and Filter Toggle */}
        <div className="flex justify-between items-start flex-wrap gap-4 relative z-50">
          <p className="text-[var(--text-secondary)] text-2xl sm:text-4xl font-extrabold">
            Projects I've Worked On
          </p>

          {/* Filter Button */}
          <div className="relative" ref={buttonRef}>
            <div
              onClick={() => setShowFilters(!showFilters)}
              className={`text-[var(--text-primary)] flex gap-3 px-4 py-2 rounded-xl font-bold border items-center cursor-pointer 
              ${
                showFilters
                  ? "bg-[var(--text-secondary)] text-black"
                  : "bg-[#1e1e1e] hover:bg-[var(--text-secondary)] hover:text-black"
              } 
              border-[#424242] duration-300`}
            >
              <CiFilter className="scale-150" />
              <p>Filter by Technology</p>
            </div>

            {/* Animated Dropdown Filter */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  ref={filterRef}
                  className="absolute right-0 mt-2 bg-[#1e1e1e] border border-[#424242] rounded-xl w-64 p-4 shadow-lg z-50 max-h-[300px] overflow-y-auto custom-scroll"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col gap-3">
                    {allTechnologies.map((tech) => (
                      <label
                        key={tech}
                        className="flex items-center gap-3 text-base text-white font-medium"
                      >
                        <input
                          type="checkbox"
                          value={tech}
                          checked={selectedTechs.includes(tech)}
                          onChange={() => handleCheckboxChange(tech)}
                          className="w-5 h-5 bg-[#1e1e1e] border border-[#424242] rounded-sm accent-lime-400 cursor-pointer"
                        />
                        {tech}
                      </label>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Filtered Projects */}
        <div className="mt-10 flex flex-col gap-14 relative z-10">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectBox key={index} {...project} />
            ))
          ) : (
            <p className="text-gray-400 mt-10 text-center">
              No projects match the selected technologies.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";
import rightup from "../../assets/right-up.png";

const ProjectBox = ({ name, tech, desc, images, github, links }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full mt-10 bg-[#1e1e1e] border border-[#424242] rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-lg"
    >
      {/* Image Slider */}
      <div className="w-full md:w-[45%] p-3 sm:p-4 min-h-[220px]">
        <div className="w-full h-full">
          <ImageSlider
            images={images}
            width="100%"
            height="100%"
            aspectRatio="4/3"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className="w-full md:w-[55%] px-4 py-4 flex flex-col justify-center gap-4 text-white">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-[var(--text-secondary)]">
          {name}
        </h2>
        <p className="text-sm sm:text-base md:text-sm lg:text-lg xl:text-2xl text-gray-300">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tech.map((t, i) => (
            <span
              key={i}
              className="text-xs sm:text-sm md:text-base px-3 py-1 rounded-full border border-[#424242]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 border bg-[var(--text-secondary)] border-black flex items-center font-bold gap-2 rounded-2xl"
            >
              <p className="text-black text-sm md:text-base">GitHub</p>
              <img src={rightup} className="w-4 h-4" alt="GitHub" />
            </a>
          )}
          {Array.isArray(links) &&
            links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1 border bg-[var(--text-secondary)] border-black flex items-center font-bold gap-2 rounded-2xl"
              >
                <p className="text-black text-sm md:text-base">{link.label}</p>
                <img src={rightup} className="w-4 h-4" alt="Live Demo" />
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectBox;

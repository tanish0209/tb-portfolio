import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/arrow.svg";
import html from "../../assets/Tech_Logos/html.png";
import css from "../../assets/Tech_Logos/css.png";
import js from "../../assets/Tech_Logos/js.png";
import react from "../../assets/Tech_Logos/react.png";
import nodejs from "../../assets/Tech_Logos/nodejs.png";
import express from "../../assets/Tech_Logos/express.png";
import mongodb from "../../assets/Tech_Logos/mongodb.png";
import git from "../../assets/Tech_Logos/git.png";
import git_hub from "../../assets/Tech_Logos/git_hub.png";
import vscode from "../../assets/Tech_Logos/vscode.png";
import postman from "../../assets/Tech_Logos/postman.svg";
import { useNavigate } from "react-router";

const skills = {
  frontend: [
    { src: html, label: "HTML" },
    { src: css, label: "CSS" },
    { src: js, label: "JavaScript" },
    { src: react, label: "React" },
  ],
  backend: [
    { src: js, label: "JavaScript" },
    { src: nodejs, label: "Node.JS" },
    { src: express, label: "Express.JS" },
    { src: mongodb, label: "MongoDB" },
  ],
  tools: [
    { src: git_hub, label: "GitHub" },
    { src: git, label: "Git" },
    { src: postman, label: "Postman" },
    { src: vscode, label: "VS Code" },
  ],
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const headingVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const buttonVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const SkillsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[calc(2vh+5px)] px-[4vw]">
      <motion.div
        className="py-[5vh] w-full max-w-[99vw] rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div
          className="flex justify-between items-center flex-wrap gap-4"
          variants={headingVariant}
          custom={0}
        >
          <div className="text-[var(--text-secondary)] text-[clamp(1.8rem,5vw,3.5rem)] font-black">
            My Skills.
          </div>
          <motion.button
            onClick={() => navigate("/skills")}
            className="group bg-[#1e1e1e] px-6 py-3 text-[var(--text-primary)] text-[clamp(0.9rem,1.5vw,1.2rem)] font-bold rounded-2xl border border-[#424242] flex items-center gap-3 transition-colors duration-300 hover:bg-[var(--text-secondary)] hover:text-black"
            variants={buttonVariant}
            custom={1}
          >
            See All Skills
            <img
              src={arrow}
              alt="arrow"
              className="w-5 h-5 transition duration-300 invert group-hover:invert-0"
            />
          </motion.button>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-rows-6 place-items-center text-[var(--text-primary)] sm:mt-6 sm:gap-y-6">
          {["frontend", "backend", "tools"].map((category, catIdx) => (
            <React.Fragment key={category}>
              <div className="text-[clamp(1.5rem,4vw,3rem)] border-b-2 font-bold border-[var(--text-secondary)]">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-2 sm:gap-10 md:gap-20"
              >
                {skills[category].map((skill, index) => (
                  <motion.li
                    key={index}
                    className="flex flex-col items-center justify-center"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="p-3 md:p-4 size-15 sm:size-20 md:size-[5rem] bg-[#1E1E1E] hover:bg-[var(--text-secondary)] duration-300 border border-[#424242] rounded-2xl flex items-center justify-center">
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className={
                          skill.label === "Postman"
                            ? "scale-110 mr-1.5"
                            : "max-w-full max-h-full"
                        }
                      />
                    </div>
                    <p className="text-[var(--text-primary)] text-[clamp(0.7rem,1vw,1.1rem)] font-bold mt-3">
                      {skill.label}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;

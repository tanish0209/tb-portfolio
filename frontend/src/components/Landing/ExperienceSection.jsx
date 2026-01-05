import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    position: "Web Development Intern",
    company: "Sopra Steria India",
    duration: "July 2025 - November 2025",
    isActive: false,
  },
  {
    id: 2,
    position: "Graphic Designing Intern",
    company: "GWave Innovations Pvt. Ltd.",
    duration: "April 2024 - July 2024",
    isActive: false,
  },
  {
    id: 3,
    position: "Full Stack Development Summer Trainee",
    company: "Brain Mentors Pvt. Ltd.",
    duration: "June 2024 - July 2024",
    isActive: false,
  },
];

const fadeInUp = {
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

function ExperienceSection() {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-15 border-b border-b-black/10 min-h-[40vh] md:min-h-[20vh]">
      <motion.h2
        variants={fadeInUp}
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-[var(--text-secondary)] text-[clamp(2rem,5vw,3rem)] font-black mb-6"
      >
        My Experience.
      </motion.h2>

      <div className="py-6 sm:py-8 md:py-12 px-2 sm:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Timeline wrapper */}
          <div className="relative">
            {/* Vertical line — Desktop center */}
            <div
              className="hidden lg:block absolute left-1/2 top-1.5 w-0.5 border-l-2 border-dashed border-white/60 -translate-x-1/2"
              style={{ height: `calc(100% - 4rem)` }}
            ></div>

            {/* Vertical line — Mobile left */}
            <div
              className="lg:hidden absolute left-4 sm:left-6 top-1.5 w-0.5 border-l-2 border-dashed border-white/60"
              style={{ height: `calc(100% - 6rem)` }}
            ></div>
            {/* Vertical line — Mobile Large Height left */}
            <div
              className="hidden md:block lg:hidden absolute left-4 sm:left-6 top-1.5 w-0.5 border-l-2 border-dashed border-white/60"
              style={{ height: `calc(100% - 4rem)` }}
            ></div>

            {/* Timeline items */}
            <div className="space-y-10 sm:space-y-12 lg:space-y-16">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Dot — Desktop center */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1}
                      className="w-7 h-7 rounded-full border-2 border-dashed border-[var(--text-primary)] flex items-center justify-center shadow-lg"
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${
                          exp.isActive
                            ? "bg-[#1e1e1e]"
                            : "bg-[var(--text-secondary)]"
                        }`}
                      ></div>
                    </motion.div>
                  </div>

                  {/* Dot — Mobile left */}
                  <div className="lg:hidden absolute left-4 sm:left-6 -translate-x-1/2">
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1}
                      className="w-6 h-6 rounded-full border-2 border-dashed border-[var(--text-primary)] flex items-center justify-center shadow-lg"
                    >
                      <div
                        className={`w-3 h-3 rounded-full ${
                          exp.isActive
                            ? "bg-[#1e1e1e]"
                            : "bg-[var(--text-secondary)]"
                        }`}
                      ></div>
                    </motion.div>
                  </div>

                  {/* Layout Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                    {/* Mobile / Tablet Content */}
                    <div className="lg:hidden pl-10 sm:pl-14">
                      <motion.h3
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold text-[var(--text-primary)] leading-tight mb-1"
                      >
                        {exp.position}
                      </motion.h3>

                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(1rem,1.5vw,1.6rem)] font-medium text-[var(--text-primary)]"
                      >
                        {exp.company}
                      </motion.p>

                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(0.8rem,1.2vw,1.2rem)] text-gray-300"
                      >
                        {exp.duration}
                      </motion.p>
                    </div>

                    {/* Desktop — Position (Left) */}
                    <div className="hidden lg:block text-right pr-10">
                      <motion.h3
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold text-[var(--text-primary)] leading-tight"
                      >
                        {exp.position}
                      </motion.h3>
                    </div>

                    {/* Desktop — Company & Duration (Right) */}
                    <div className="hidden lg:block pl-10">
                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(1rem,1.5vw,1.6rem)] font-medium text-[var(--text-primary)]"
                      >
                        {exp.company}
                      </motion.p>

                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(0.8rem,1.2vw,1.2rem)] text-gray-300"
                      >
                        {exp.duration}
                      </motion.p>
                    </div>
                  </div>

                  {/* Connecting dashed line (Desktop & Mobile)
                  {i < experiences.length - 1 && (
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1.5}
                      className="hidden lg:block absolute left-1/2 top-7 -translate-x-1/2 border-l-2 border-dashed border-white h-20"
                    />
                  )}

                  {i < experiences.length - 1 && (
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1.5}
                      className="lg:hidden border-l-2 border-dashed border-white h-12 ml-5 sm:ml-6"
                    />
                  )} */}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;

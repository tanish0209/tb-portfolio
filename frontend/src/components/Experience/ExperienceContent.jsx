import React from "react";
import { motion } from "framer-motion";

const ExperienceContent = () => {
  const experiences = [
    {
      position: "Web Development Intern",
      company: "Sopra Steria India",
      duration: "July 2025 - November 2025",
      desc: ` Developed a task management platform scalable with secure multi-role access.\n Designed 8+ normalized PostgreSQL schemas using Prisma ORM for users, projects and tasks.\n Built 40+ server-side APIs covering authentication, workflows and collaboration features.\n Implemented JWT authentication and authorization to ensure secure access across 4+ roles.`,
      isActive: false,
    },
    {
      position: "Graphic Designing Intern",
      company: "GWave Innovations Pvt. Ltd.",
      duration: "April 2024 - July 2024",
      desc: `Designed professional business cards that aligned with the company's branding.\nCreated engaging social media posts and stories for product promotions and brand awareness.\nDeveloped the company's profile, ensuring it accurately represented the brand.\nDesigned a comprehensive product catalogue, showcasing the company's offerings in a visually appealing way.`,
      isActive: false,
    },
    {
      position: "Full Stack Development Summer Trainee",
      company: "Brain Mentors Pvt. Ltd.",
      duration: "June 2024 - July 2024",
      desc: `Designed professional business cards that aligned with the company's branding.\nCreated engaging social media posts and stories for product promotions and brand awareness.\nDeveloped the company's profile, ensuring it accurately represented the brand.\nDesigned a comprehensive product catalogue, showcasing the company's offerings in a visually appealing way.`,
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

  return (
    <div className="mt-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="md:py-[5vh] w-full max-w-[99vw] rounded-2xl"
      >
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop – centered vertical line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-white/60"
            style={{ height: `calc(100% - 22rem)` }}
          ></div>

          {/* Mobile / Tablet – left vertical line */}
          <div
            className="lg:hidden absolute left-4 sm:left-6 top-0 w-0.5 border-l-2 border-dashed border-white/60"
            style={{ height: `calc(100% - 26rem)` }}
          ></div>

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                {/* DOT — Desktop center */}
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

                {/* DOT — Mobile left */}
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

                {/* GRID LAYOUT (orientation preserved) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
                  {/* Mobile / Tablet — stacked */}
                  <div className="lg:hidden pl-10 sm:pl-14">
                    <motion.h3
                      variants={fadeInUp}
                      custom={i + 1}
                      className="text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold text-[var(--text-secondary)]"
                    >
                      {exp.position}
                    </motion.h3>

                    <motion.p
                      variants={fadeInUp}
                      custom={i + 1}
                      className="text-[clamp(1rem,1.5vw,1.6rem)] font-medium text-gray-200"
                    >
                      {exp.company}
                    </motion.p>

                    {exp.duration && (
                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(0.7rem,1.3vw,1.4rem)] text-gray-300 mb-3"
                      >
                        {exp.duration}
                      </motion.p>
                    )}
                  </div>

                  {/* Desktop LEFT — Position / Company / Duration */}
                  <div className="hidden lg:block text-left pr-10">
                    <motion.h3
                      variants={fadeInUp}
                      custom={i + 1}
                      className="text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold text-[var(--text-secondary)]"
                    >
                      {exp.position}
                    </motion.h3>

                    <motion.p
                      variants={fadeInUp}
                      custom={i + 1}
                      className="text-[clamp(1rem,1.5vw,1.6rem)] font-medium text-gray-200"
                    >
                      {exp.company}
                    </motion.p>

                    {exp.duration && (
                      <motion.p
                        variants={fadeInUp}
                        custom={i + 1}
                        className="text-[clamp(0.7rem,1.3vw,1.4rem)] text-gray-300"
                      >
                        {exp.duration}
                      </motion.p>
                    )}
                  </div>

                  {/* Desktop RIGHT — Description */}
                  <div className="pl-10">
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1}
                      className="text-[clamp(0.9rem,1.5vw,1.4rem)] font-medium text-[var(--text-primary)]"
                    >
                      {exp.desc.split("\n").map((line, index) => (
                        <li key={index} className="mb-2 [padding-left:1em]">
                          {line.trim()}
                        </li>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Connecting timeline lines */}
                {i < experiences.length - 1 && (
                  <>
                    {/* Desktop */}
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1.5}
                      className="hidden lg:block absolute h-24"
                    />

                    {/* Mobile */}
                    <motion.div
                      variants={fadeInUp}
                      custom={i + 1.5}
                      className="lg:hidden  h-16"
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceContent;

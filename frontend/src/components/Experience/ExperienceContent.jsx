import React from "react";
import { motion } from "framer-motion";
const ExperienceContent = () => {
  const experiences = [
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
    {
      position: "Actively Looking",
      company: "",
      duration: "",
      desc: "Open to Opportunities",
      isActive: true,
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
        className=" md:py-[5vh]  w-full max-w-[99vw] rounded-2xl"
      >
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-[20%_80%] md:grid-cols-[45%_10%_45%] items-start md:gap-0 relative"
            >
              {/* Position */}
              <motion.div
                variants={fadeInUp}
                custom={i + 1}
                className="col-start-2 row-start-1 md:col-start-1 md:row-start-auto order-2 md:order-1 text-[clamp(1.2rem,2vw,1.8rem)] font-extrabold text-[var(--text-primary)] "
              >
                {exp.position}
                <div className="text-[clamp(1rem,1.5vw,1.6rem)] font-medium text-gray-300">
                  {exp.company}
                </div>
                {exp.duration && (
                  <div className="text-[clamp(0.7rem,1.3vw,1.4rem)] text-gray-400 mb-3  md:mb-30">
                    {exp.duration}
                  </div>
                )}
              </motion.div>

              {/* Timeline (dot) */}
              <div className="col-start-1 row-start-1 md:col-start-2 md:row-start-auto order-1 md:order-2 flex flex-col items-center">
                <motion.div
                  variants={fadeInUp}
                  custom={i + 1}
                  className="rounded-full w-10 h-10 flex justify-center items-center border-2 border-dashed border-[var(--text-primary)]"
                >
                  <div
                    className={`rounded-full w-6 h-6 ${
                      exp.isActive
                        ? "bg-[#1e1e1e]"
                        : "bg-[var(--text-secondary)]"
                    } z-10`}
                  ></div>
                </motion.div>

                {/* Vertical Line for md+ */}
                {i < experiences.length - 1 && (
                  <motion.div
                    variants={fadeInUp}
                    custom={i + 1.5}
                    className=" md:block border-l-2 border-dashed border-white h-24 min-[450px]:h-17 sm:h-17 md:h-60 lg:h-90"
                  />
                )}
              </div>

              {/* Vertical Line for mobile (below md) */}
              {i < experiences.length - 1 && (
                <motion.div
                  variants={fadeInUp}
                  custom={i + 1.5}
                  className="block md:hidden col-start-1 row-start-2 border-l-2 border-dashed border-white h-full mx-auto"
                />
              )}

              {/* Description */}
              <motion.div
                variants={fadeInUp}
                custom={i + 1}
                className="col-start-2 row-start-2 md:col-start-3 md:row-start-auto order-3 md:order-3 flex flex-col gap-1 pb-20 md:pb-0"
              >
                <div className="text-[clamp(0.9rem,1.5vw,1.4rem)] font-medium text-[var(--text-primary)]">
                  {exp.desc.split("\n").map((line, index) => (
                    <li
                      key={index}
                      className="mb-2 [text-indent:-1.5em] [padding-left:1em]"
                    >
                      {line.trim()}
                    </li>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperienceContent;

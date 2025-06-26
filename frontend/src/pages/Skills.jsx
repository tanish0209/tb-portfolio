import { motion } from "framer-motion";
import skills from "../assets/Skills.js";
import SkillCard from "../components/Skills/skills_card.jsx";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const SkillsGrid = () => {
  return (
    <div className="min-h-screen py-[1px]">
      <div className="py-[6vh] mx-[4vw] m-10 md:mt-20 overflow-visible flex flex-col gap-8">
        {/* Row 1: Frontend Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="inline-block text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--text-secondary)]">
            Frontend
          </h2>
        </motion.div>

        {/* Row 2: Frontend Skills */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.frontend.map((skill) => (
            <motion.div key={skill.name} variants={headingVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Row 3: Backend Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="inline-block text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--text-secondary)]">
            Backend
          </h2>
        </motion.div>

        {/* Row 4: Backend Skills */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.backend.map((skill) => (
            <motion.div key={skill.name} variants={headingVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* Row 5: Tools Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="inline-block text-3xl font-bold text-[var(--text-primary)] border-b-2 border-[var(--text-secondary)]">
            Tools
          </h2>
        </motion.div>

        {/* Row 6: Tools Skills */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.tools.map((skill) => (
            <motion.div key={skill.name} variants={headingVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsGrid;

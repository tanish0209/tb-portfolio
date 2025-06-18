import React from "react";
import { motion } from "framer-motion";

const AboutText = () => {
  return (
    <div className="py-[6vh] mx-[4vw] overflow-visible">
      <div className=" w-full">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl md:mt-20 font-bold text-[var(--text-primary)]"
        >
          <p>Hi, I'm Tanish Bajaj</p>
        </motion.div>

        {/* Main paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg md:text-2xl mt-10 font-medium flex"
        >
          <p className="text-[var(--text-primary)]">
            I'm a{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              Fullstack Developer
            </span>{" "}
            with hands-on experience in the{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              MERN stack
            </span>{" "}
            , and a strong command of{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              JavaScript, TypeScript, Java, and PostgreSQL.
            </span>{" "}
            My programming journey began with a{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              certification in Data Structures and Algorithms using Java
            </span>{" "}
            , which built a solid foundation in problem-solving.
            <br />
            <br />
            I'm also a passionate hackathon enthusiast, having participated in
            events like{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              EY Techathon 5.0 (qualified till Round 2), Amazon HackOn, Flipkart
              Grid 6.0, and GDG Hackathon.
            </span>{" "}
            <br />
            <br />
            I'm always eager to build, learn, and collaborate in fast-paced,
            innovative environments. I love problem-solving and consistently
            sharpen my skills by{" "}
            <span className="text-[var(--text-secondary)] font-bold">
              solving challenges on LeetCode, where I've tackled a wide range of
              DSA questions.
            </span>
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-[90vw] grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center mt-10 gap-3"
        >
          <div className="flex justify-center items-center">
            <a
              className="text-[var(--text-secondary)] text-sm md:text-lg px-4 py-2 hover:bg-[#1e1e1e] rounded-xl hover:border border-[#424242] transition duration-300 text-center"
              href="https://github.com/tanish0209"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile: github.com/tanish0209
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="text-[var(--text-secondary)] text-sm md:text-lg px-4 py-2 hover:bg-[#1e1e1e] rounded-xl hover:border border-[#424242] transition duration-300 text-center"
              href="https://www.linkedin.com/in/tanish-bajaj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile: linkedin.com/in/tanish-bajaj
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a
              className="text-[var(--text-secondary)] text-sm md:text-lg px-4 py-2 hover:bg-[#1e1e1e] rounded-xl hover:border border-[#424242] transition duration-300 text-center"
              href="https://leetcode.com/u/TanishBajaj02/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leetcode Profile: leetcode.com/u/TanishBajaj02
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutText;

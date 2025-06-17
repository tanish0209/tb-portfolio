import React from "react";
import { motion } from "framer-motion";

const OverviewSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center items-center my-10 sm:my-65 md:my-16 px-4"
    >
      {/* Glowing Border Wrapper */}
      <div className="relative rounded-2xl p-[3px] overflow-hidden">
        {/* Spinning Glowing Border */}
        <motion.div
          className="absolute inset-0 z-0 rounded-2xl bg-[conic-gradient(#b7ff00_0deg,_#b7ff00_180deg)] blur-md opacity-80"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 6,
          }}
        />

        {/* Content Card */}
        <div className="relative z-10 bg-[#0D0E0E] rounded-2xl px-[3vw] py-[5vh] w-[90vw] max-w-[99vw]">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-[clamp(1.8rem,5vw,3.5rem)] font-black text-[var(--text-secondary)]"
          >
            Overview.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            className="mt-[3vh] text-[4vw] sm:text-[3vw] md:text-[2.5vw] xl:text-[2vw] 2xl:text-[1.5vw] text-[var(--text-primary)]"
          >
            I'm a Full-Stack Developer specializing in the MERN stack (MongoDB,
            Express.js, React, Node.js). While I enjoy building end-to-end
            systems, my heart leans towards frontend magic—turning complex ideas
            into sleek, intuitive interfaces. <br />
            Beyond JavaScript, I also code in Java and love applying
            problem-solving skills to real-world challenges. Whether it's
            scaling an app or perfecting a pixel, I thrive on pushing tech
            boundaries and delivering seamless user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Tanish_Resume.pdf";
                link.download = "Tanish_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="mt-[6vh] px-4  py-2 md:px-10 md:py-4 hover:bg-[var(--text-secondary)] hover:text-black transition duration-300 rounded-xl font-bold text-lg sm:text-xl border border-[#424242] bg-[#1e1e1e] text-[var(--text-primary)]"
            >
              DOWNLOAD MY RESUME
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewSection;

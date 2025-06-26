import React from "react";
import { motion } from "framer-motion";
import tb from "../../assets/tb.png";
import curved_arrow from "../../assets/curved_arrow.png";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";

const HomeSection = () => {
  return (
    <div className="py-[2vh] mx-[4vw] overflow-visible">
      <div className="flex flex-col md:grid md:grid-cols-[30%_40%_30%] md:grid-rows-2 overflow-x-visible h-full md:h-[90vh] max-h-screen w-full gap-[3vh] md:gap-0">
        {/* 1. Col 1 - Row 1 */}
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="order-1 md:order-none text-[var(--text-primary)] flex items-end rounded-xl font-black text-[10vw] mt-2 md:m-0 md:text-[4vw] md:col-start-1 md:row-start-1"
        >
          Hi, I'm
          <br /> Tanish Bajaj
        </motion.div>

        {/* 2. Col 3 - Row 2 */}
        <motion.div
          initial={{ x: "10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="order-2 md:order-none rounded-xl pl-[1vw] md:col-start-3 md:row-start-2"
        >
          <p className="text-[6vw] md:text-[1.8vw] text-[var(--text-primary)] font-bold">
            I'm a
          </p>
          <p className="text-[8vw] md:text-[2.3vw] text-[var(--text-secondary)] font-extrabold">
            Full-Stack Developer
          </p>
          <p className="text-[6vw] md:text-[1.8vw] text-[var(--text-primary)] font-bold">
            with an eye for design and I'm passionate about building seamless,
            user-friendly applications.
          </p>
        </motion.div>

        {/* 3. Col 3 - Row 1 (Arrow) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="hidden md:order-none md:flex items-center justify-center relative md:col-start-3 md:row-start-1 h-[12vh] md:h-full" // ✅ fixed height
        >
          <img
            className="absolute  md:bottom-0 md:left-0 w-[40vw] md:w-[10vw] object-contain"
            src={curved_arrow}
            alt="arrow"
          />
        </motion.div>

        {/* 4. Col 2 (Image + Buttons) */}
        <motion.div
          initial={{ y: "10vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="order-4 md:order-none relative rounded-xl overflow-hidden p-[1vw] flex items-center justify-center md:col-start-2 md:row-start-1 md:row-span-2 min-h-[65vw] md:min-h-[40vh]" // ✅ min height
        >
          {/* Glow circle */}
          <div className="absolute -bottom-[10vh] left-1/2 translate-x-[-50%] w-[75vw] h-[75vw] md:w-[35vw] md:h-[35vw] rounded-full bg-[radial-gradient(circle,_white_20%,var(--text-secondary)_80%)]"></div>

          {/* Profile */}
          <img
            src={tb}
            className="absolute z-10 bottom-0 scale-150 w-[70vw] md:w-[33vw] lg:w-[25vw] object-contain h-[90%] lg:h-[80%] 2xl:h-[82%] max-h-[96%]" // ✅ object-fit + max height
            alt="profile"
          />

          {/* GitHub / LinkedIn Buttons */}
          <div className="absolute z-20 bottom-0 w-full h-[7vh] flex justify-center items-center gap-[4vw] bg-[#1e1e1e] border border-[#424242] rounded-xl">
            <button
              onClick={() =>
                window.open("https://github.com/tanish0209", "_blank")
              }
              className="px-[6vw] md:px-[3vw] py-[0.8vh] text-[var(--text-primary)] flex gap-[2vw] md:gap-[1vw] border hover:text-black hover:bg-[var(--text-secondary)] border-[#424242] rounded-xl ease-in-out duration-500"
            >
              <img src={github} alt="" className="w-[6vw] md:w-[1.8vw]" />
              <p className="text-[4vw] md:text-[1.2vw] font-medium">GitHub</p>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tanish-bajaj/",
                  "_blank"
                )
              }
              className="px-[6vw] md:px-[3vw] text-[var(--text-primary)] py-[0.8vh] flex gap-[2vw] md:gap-[1vw] border hover:text-black hover:bg-[var(--text-secondary)] border-[#424242] rounded-xl ease-in-out duration-500"
            >
              <img src={linkedin} alt="" className="w-[6vw] md:w-[1.8vw]" />
              <p className="text-[4vw] md:text-[1.2vw] font-medium">LinkedIn</p>
            </button>
          </div>
        </motion.div>

        {/* 5. Col 1 - Row 2 */}
        <motion.div
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          className="order-5 md:order-none flex items-center text-[var(--text-secondary)] text-[7vw] md:text-[2.5vw] font-bold rounded-xl md:col-start-1 md:row-start-2"
        >
          If you can think it,
          <br />I can probably code it.
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSection;

import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const skills_card = ({ name, logo, proficiency }) => {
  const stars = Math.round((proficiency / 10) * 5);

  return (
    <div className="group flex items-center gap-4 bg-[#111] p-4 rounded-xl shadow-md transition duration-300 w-full max-w-md hover:bg-[var(--text-secondary)]/80 hover:scale-105">
      <img src={logo} alt={name} className="w-12 h-12 object-contain" />

      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-black">
          {name}
        </h3>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) =>
            index < stars ? (
              <FaStar
                key={index}
                className="text-yellow-400 group-hover:text-black"
              />
            ) : (
              <FaRegStar
                key={index}
                className="text-gray-500 group-hover:text-black"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default skills_card;

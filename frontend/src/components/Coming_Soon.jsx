import React from "react";
import inProgress from "../assets/in-progress.png";
const Coming_Soon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-[var(--text-primary)] px-4">
      <img className="size-26 mb-6 " src={inProgress} alt="" />

      <p className="text-3xl sm:text-4xl font-bold">
        Pages under construction — full portfolio coming soon!
      </p>
      <br />
      <p className="text-xl sm:text-2xl font-bold">
        I'm actively building this portfolio as I grow and learn.
      </p>
    </div>
  );
};

export default Coming_Soon;

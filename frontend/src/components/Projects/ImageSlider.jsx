import { useEffect, useRef, useState } from "react";

const ImageSlider = ({ images, delay = 4000 }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(next, delay);
    return () => resetTimeout();
  }, [index]);

  return (
    <div className="relative w- h-auto aspect-square sm:aspect-[4/3] overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full flex-shrink-0">
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-[100vw] h-full sm:h-auto sm:w-[65vh] md:w-[80vh] lg:w-[60vh] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 text-white p-1 sm:p-2 rounded-full z-10"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 text-white p-1 sm:p-2 rounded-full z-10"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;

import { useEffect } from "react";
import { useState } from "react";
import { CarouselImages } from "./CarouselImages";

export const CarouselItems = ({ slides, autoSlide = false, autoSlideInterval = 3000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="overflow-hidden relative w-screen">
      {/* SLIDES FROM CAROUSEL */}
      <div
        className="flex transition-transform ease-out duration-500 w-max h-104 relative"
        style={{ transform: `translateX(-${curr * 100}vw)` }}
      >
        <CarouselImages slides={slides} />
      </div>

      {/* BUTTONS OF CAROUSEL */}
      <div className="absolute inset-0 flex items-center justify-between p-4 px-12">
        <button onClick={prev} className="p-1 rounded-full bg-white/30 text-blue hover:bg-white">
          <svg
            className="w-10 h-10 p-1 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
        </button>
        <button onClick={next} className="p-1 rounded-full bg-white/30 text-blue hover:bg-white">
          <svg
            className="w-10 h-10 p-1 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      </div>

      {/* GUIDE OF CAROUSEL */}
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${curr === i ? "p-1.5" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

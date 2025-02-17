"use client"

import React, { useState } from "react";

const images = ["/one.jpg", "/two.jpg", "/three.jpg", "/four.jpg"];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[1200px] flex justify-center items-center mt-10">
    <div id="controls-carousel" className="relative w-full flex flex-col items-center">
      <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-96">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className={`absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px] h-[400px] object-cover transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons (Positioned at Bottom) */}
      <div className="flex justify-center gap-4 mt-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 bg-white/30 rounded-full group hover:bg-white/50"
        >
          <svg
            className="w-6 h-6 text-gray-800 group-hover:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 bg-white/30 rounded-full group hover:bg-white/50"
        >
          <svg
            className="w-6 h-6 text-gray-800 group-hover:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
    </div>
  );
}

export default Carousel;

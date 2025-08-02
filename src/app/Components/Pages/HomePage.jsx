"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    title: "Visit Indonesia",
    text: "Explore breathtaking landscapes, rich culture, and warm hospitality.",
    image:
      "https://elitevoyage.com/wp-content/uploads/2022/07/Indonesia-Comp-5-1-e1679388646174.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem totam dolores mollitia cumque distinctio quaerat repudiandae, alias odit molestiae exercitationem placeat saepe libero quas dolorem incidunt hic vel dolore.",
  },
  {
    title: "Mountains & Adventure",
    text: "Discover Indonesia's majestic volcanoes and mountain treks.",
    image:
      "https://pictures.altai-travel.com/1920x1040/volcano-mountain-rinjani-of-indonesia-adobe-stock-2678.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem totam dolores mollitia cumque distinctio quaerat repudiandae, alias odit molestiae exercitationem placeat saepe libero quas dolorem incidunt hic vel dolore.",
  },
  {
    title: "Island Paradise",
    text: "Relax on pristine beaches and experience island life like never before.",
    image:
      "https://lp-cms-production.imgix.net/2025-05/shutterstock1107896189-crop.jpg?auto=format,compress&q=72&w=1440&h=810&fit=crop",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem totam dolores mollitia cumque distinctio quaerat repudiandae, alias odit molestiae exercitationem placeat saepe libero quas dolorem incidunt hic vel dolore.",
  },
  {
    title: "Cultural Wonders",
    text: "Experience Indonesia’s rich history and colorful traditions.",
    image: "https://cdn.mybalitrips.com/common/blog_mbt/Javawonders/16.jpg",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem totam dolores mollitia cumque distinctio quaerat repudiandae, alias odit molestiae exercitationem placeat saepe libero quas dolorem incidunt hic vel dolore.",
  },
  {
    title: "Wildlife Encounters",
    text: "Meet the Komodo dragons and rare species in Indonesian rainforests.",
    image:
      "https://www.tngholidays.com/uploads/0000/1/2024/12/26/cm-overnight-elephant-chiangmai.webp",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem totam dolores mollitia cumque distinctio quaerat repudiandae, alias odit molestiae exercitationem placeat saepe libero quas dolorem incidunt hic vel dolore.",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const handleSwipe = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="w-full h-screen min-h-[600px] overflow-hidden relative">
      {/* Slides Container */}
      <motion.div
        className="flex w-[500vw] h-full"
        animate={{ x: `-${index * 100}vw` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-screen h-full relative flex-shrink-0"
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center sm:items-start px-4 sm:px-8 md:px-20 text-white text-center sm:text-left">
              <motion.h1
                key={index + "-title"}
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                key={index + "-text"}
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mb-4 sm:mb-6"
              >
                {slide.text}
              </motion.p>

              <motion.p
                key={index + "-description"}
                initial={{ opacity: 0, x: 100, y: -100 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mb-6"
              >
                {slide.description}
              </motion.p>

              <button
                onClick={handleSwipe}
                className="bg-transparent border border-white px-5 py-2 text-xs sm:text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                SWIPE &gt;&gt;
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Dot Navigation */}
      <div className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 flex flex-col items-end gap-2 sm:gap-3 pr-2 sm:pr-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className="relative flex items-center group focus:outline-none"
          >
            <span
              className={`transition-all duration-300 font-bold ${
                index === i
                  ? "text-white text-base opacity-100"
                  : "text-gray-300 text-xs opacity-40"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            {index === i && (
              <div className="w-10 sm:w-16 h-0.5 bg-white ml-2 transition-all duration-300" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

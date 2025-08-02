import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";

const Travel = () => {
  return (
    <div className="w-full min-h-screen relative text-white">
      {/* Background Image */}
      <img
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        src="https://elitevoyage.com/wp-content/uploads/2022/07/Indonesia-Comp-5-1-e1679388646174.jpg"
        alt="Indonesia"
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_2%,_rgba(0,0,0,1)_100%)] z-10 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-20 px-4 py-12 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-start items-start">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
          TRAVEL AND <br /> ENJOY YOUR HOLIDAY
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <MdSlowMotionVideo className="text-2xl sm:text-3xl" />
          <p className="text-base sm:text-lg">Choose your fun holiday</p>
        </div>

        <p className="max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem
          totam dolores mollitia cumque distinctio quaerat repudiandae, alias
          odit molestiae exercitationem placeat saepe libero quas dolorem
          incidunt hic vel dolore.
        </p>

        {/* Video Thumbnails */}
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* Thumbnail 1 */}
          <div className="relative w-full sm:w-1/2">
            <img
              src="https://www.planetware.com/photos-large/INA/indonesia-borobudur.jpg"
              alt="Borobudur"
              className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <MdSlowMotionVideo className="absolute inset-0 m-auto text-white text-4xl sm:text-5xl opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Thumbnail 2 */}
          <div className="relative w-full sm:w-1/2">
            <img
              src="https://resources.thomascook.in/images/holidays/staticPage/ThingsToDo/PuraUlunbali.jpg"
              alt="Pura Ulun Danu"
              className="w-full h-64 sm:h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
            />
            <MdSlowMotionVideo className="absolute inset-0 m-auto text-white text-4xl sm:text-5xl opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;

import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import FormatDate from "./FormatDate";
import DarkModeContext from "../context/DarkModeContext";

function EventCard({ event }) {
  const { title, category, date, time, location, description, image } = event;
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`sm:w-[90vw] w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden ${
        darkMode ? "bg-[#000000]" : "bg-white"
      }`}
    >
      {/* Event Image with Blurred Overlay */}
      <div className="h-64 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden relative transform transition-transform duration-500 hover:scale-105 animate-fade-in">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-500 hover:opacity-0"></div>
      </div>

      {/* Event Details with Glassmorphism Effect */}
      <div
        className={`${
          darkMode
            ? "md:bg-black/40 bg-black/40 text-white"
            : "md:bg-white/80 bg-white/60"
        } relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-20 mx-4 sm:mx-6 md:mx-8 p-6 sm:p-8 md:backdrop-blur-xl backdrop-blur-3xl lg:rounded-b-none rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between`}
      >
        <div className="flex flex-col">
          {/* Category */}
          <span
            className={`text-sm font-semibold uppercase tracking-widest
              ${darkMode ? "text-[#b0aba3]" : "text-neutral-900 "}
              `}
          >
            {category}
          </span>

          {/* Title */}
          <h2
            className={`my-2 text-2xl sm:text-3xl md:text-4xl font-bold ${
              darkMode ? "text-[#DFDBD5]" : "text-gray-900"
            }`}
          >
            {title}
          </h2>

          {/* Meta Information */}
          <div
            className={`${
              darkMode ? "text-[#cbc4b7]" : "text-gray-700"
            } flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-base sm:text-lg`}
          >
            <span>
              <FormatDate dateString={date} />
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{time}</span>
            <span className="hidden sm:inline">•</span>
            <span>{location}</span>
          </div>

          {/* Description */}
          <p
            className={`${
              darkMode ? "text-[#9f978d]" : "text-gray-700"
            } my-2 text-base sm:text-lg leading-relaxed`}
          >
            {description}
          </p>
        </div>
        <NavLink
          to={`/detail/${event?.id}`}
          className={`cursor-pointer ${
            darkMode
              ? "from-white/5 via-white/10 to-black/40 hover:from-black/90 hover:via-black/90 hover:to-white/10 text-gray-200 hover:text-white"
              : "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          } w-full md:w-auto h-12 flex items-center justify-center sm:w-auto px-6 py-2 sm:px-8 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-colors duration-300 bg-gradient-to-r shadow-lg hover:shadow-xl`}
        >
          Details
        </NavLink>
      </div>
    </div>
  );
}

export default EventCard;

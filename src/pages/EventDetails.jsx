import { useParams } from "react-router-dom";
import eventsData from "../data/data.json";
import RSVPButton from "../components/RSVPButton";
import useRSVP from "../hooks/useRSVP";
import QRCodeDisplay from "../components/QRCodeDisplay";
import CancelRSVPButton from "../components/CancelRSVPButton";
import FormatDate from "../components/FormatDate";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import BackButton from "../components/BackButton";

function EventDetails() {
  const { id } = useParams();
  const event = eventsData.find((ev) => ev.id === Number(id));
  const { myEvent, qrData, handleRSVP, handleCancelRSVP } = useRSVP(event?.id);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`w-screen mx-auto mb-4 rounded-2xl shadow-2xl overflow-hidden ${
        darkMode ? "bg-[#212121] text-white" : "bg-white text-black"
      }`}
    >
      <BackButton darkMode={darkMode} />
      <div className="h-64 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden relative">
        <img
          src={event?.image}
          alt={event?.title}
          className="w-full h-full object-cover"
        />

        {/* Blurred Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-100 transition-opacity duration-500 hover:opacity-0"></div>
      </div>
      {/* Event Details with Glassmorphism Effect */}
      <div
        className={`${
          darkMode
            ? "md:bg-black/60 bg-black/40 text-white"
            : "md:bg-white/80 bg-white/60"
        } relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-20 mx-4 sm:mx-6 md:mx-8 p-6 sm:p-8 md:backdrop-blur-xl backdrop-blur-3xl rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between`}
      >
        <div className="flex md:flex-row flex-col justify-between items-center w-full mx-4">
          <div
            className={`flex flex-col md:pr-4 ${
              darkMode ? "text-[#b0aba3]" : " text-neutral-900"
            }`}
          >
            {/* Category */}
            <span className="text-sm font-semibold uppercase tracking-widest">
              {event?.category}
            </span>

            {/* Title */}
            <h2
              className={`my-2 text-2xl sm:text-3xl md:text-4xl font-bold ${
                darkMode ? "text-[#DFDBD5]" : "text-gray-900"
              }`}
            >
              {event?.title}
            </h2>

            {/* Meta Information (Date, Time, Location) */}
            <div
              className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-base sm:text-lg ${
                darkMode ? "text-[#cbc4b7]" : "text-gray-700"
              }`}
            >
              <span>
                <FormatDate dateString={event?.date} />
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{event?.time}</span>
              <span className="hidden sm:inline">•</span>
              <span>{event?.location}</span>
            </div>

            {/* Description */}
            <p
              className={`my-2 text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-[#9f978d]" : "text-gray-700"
              }`}
            >
              {event?.description}
            </p>

            <div
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 ${
                darkMode ? "text-[#cdb892]" : "text-gray-700"
              }`}
            >
              <div className="flex gap-4 sm:gap-6 text-base sm:text-lg ">
                <span>Popularity: {event?.popularity}</span>
                <span>Seats: {myEvent?.seatsAvailable}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <RSVPButton
              onClick={handleRSVP}
              disabled={myEvent?.rsvpStatus || myEvent?.seatsAvailable <= 0}
            />

            {myEvent?.rsvpStatus && qrData && (
              <>
                <QRCodeDisplay data={qrData} />
                <CancelRSVPButton onClick={handleCancelRSVP} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

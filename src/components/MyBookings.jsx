import { useState, useEffect, useContext } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DarkModeContext from "../context/DarkModeContext";
import BackButton from "./BackButton";
function MyBookings() {
  const [bookedEvents, setBookedEvents] = useState([]);
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const rsvpEvents = [];

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("myEvent-")) {
        const event = JSON.parse(localStorage.getItem(key));
        if (event?.rsvpStatus) {
          rsvpEvents.push(event);
        }
      }
    });

    setBookedEvents(rsvpEvents);
  }, []);

  return (
    <div
      className={`w-full mb-4 mx-auto  ${
        darkMode ? "bg-[#212121] text-white" : "text-gray-800 bg-[#ffffff]"
      }`}
    >
      <BackButton darkMode={darkMode} />
      <h2 className="md:text-4xl text-2xl font-semibold text-center  my-4">
        My Bookings
      </h2>

      {bookedEvents.length === 0 ? (
        <p
          className={`${
            darkMode ? "text-[#888888]" : "text-gray-500"
          } text-center text-lg`}
        >
          You haven’t booked any events yet.
          <span
            className={`block ${
              darkMode ? "text-[#b5b5b5]" : "text-gray-600"
            } mt-1`}
          >
            Explore upcoming events and reserve your spot!
          </span>
        </p>
      ) : (
        <div className="flex justify-center flex-wrap gap-6">
          {bookedEvents.map((event) => (
            <div
              key={event?.id}
              className={`${
                darkMode
                  ? "bg-[#181818]  border-neutral-700"
                  : "bg-white border-gray-200"
              } border rounded-3xl p-6 shadow-lg relative overflow-hidden hover:scale-105 transition-transform duration-500 w-full max-w-[450px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[450px]`}
            >
              {/* Status Badge */}
              <span className="absolute bottom-8 right-4 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2 animate-pulse">
                <FaCheckCircle /> Confirmed
              </span>
              {/* Event Image */}
              <img
                src={event?.image}
                alt={event?.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              {/* Event Title */}
              <h3
                className={`text-2xl font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                } my-3`}
              >
                {event?.title}
              </h3>

              {/* Event Details */}
              <div
                className={`${
                  darkMode ? "text-[#b5b5b5]" : "text-gray-600"
                } space-y-2`}
              >
                <p className="flex items-center gap-2 text-lg">
                  <FaCalendarAlt className="text-blue-500" /> {event?.date}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <FaMapMarkerAlt className="text-red-500" /> {event?.location}
                </p>
              </div>
              {/* view */}
              <NavLink
                to={`/detail/${event?.id}`}
                className={`inline-block mt-5 ${
                  darkMode
                    ? "bg-[#242424] text-[#d9d9d9] hover:bg-[#2b2b2b]"
                    : "text-gray-800 bg-gray-100 hover:bg-gray-200"
                } font-semibold  px-4 py-2 rounded-lg  transition-transform duration-300`}
              >
                View Details →
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;

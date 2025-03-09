import { useContext, useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import eventsData from "../data/data.json";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import DarkModeContext from "../context/DarkModeContext";

function Home() {
  const { darkMode } = useContext(DarkModeContext);

  const [filters, setFilters] = useState(
    sessionStorage.getItem("eventFilters")
      ? JSON.parse(sessionStorage.getItem("eventFilters"))
      : { category: "All", date: "All", popularity: "All" }
  );

  useEffect(() => {
    sessionStorage.setItem("eventFilters", JSON.stringify(filters));
  }, [filters]);

  // Get unique values for filters
  const categories = [
    "All",
    ...new Set(eventsData.map((event) => event?.category)),
  ];
  const dates = ["All", ...new Set(eventsData.map((event) => event?.date))];
  const popularities = [
    "All",
    ...new Set(eventsData.map((event) => event?.popularity)),
  ];

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetFilters = () => {
    setFilters({
      category: "All",
      date: "All",
      popularity: "All",
    });
    sessionStorage.removeItem("eventFilters");
  };

  const filteredEvents = eventsData.filter(
    (ev) =>
      (filters?.category === "All" || ev?.category === filters?.category) &&
      (filters?.date === "All" || ev?.date === filters?.date) &&
      (filters?.popularity === "All" ||
        ev?.popularity === Number(filters?.popularity))
  );

  const renderEventCards = () => {
    return filteredEvents.map((event) => (
      <EventCard key={event?.id} event={event} />
    ));
  };

  return (
    <div className="flex flex-col gap-4 items-center mt-4">
      <h1 className="font-semibold md:text-4xl text-2xl text-center">
        Upcoming Events
      </h1>

      <FilterBar
        filters={filters}
        handleFilterChange={handleFilterChange}
        categories={categories}
        dates={dates}
        popularities={popularities}
        resetFilters={resetFilters}
        darkMode={darkMode}
      />

      {filteredEvents.length > 0 ? (
        renderEventCards()
      ) : (
        <h1>No events available.</h1>
      )}
      <div className="footer">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default Home;

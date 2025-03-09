import FormatDate from "./FormatDate";
import { MdRefresh } from "react-icons/md";
function FilterBar({
  filters,
  handleFilterChange,
  categories,
  dates,
  popularities,
  resetFilters,
  darkMode,
}) {
  return (
    <div
      className={`flex flex-col shadow-sm border rounded-xl ${
        darkMode ? "bg-[#1c1c1c] border-gray-900" : "bg-white border-gray-100 "
      }`}
    >
      <div
        className={`filter-container md:flex md:gap-2 rounded-xl lg:gap-4 gap-4 grid grid-cols-1 md:p-4 md:px-6 p-4 px-8  ${
          darkMode ? "bg-[#1c1c1c] text-white" : "bg-white text-gray-600"
        }`}
      >
        {/* Filter by: Label */}
        <div className="flex justify-center">
          <button
            className={`text-sm text-center w-fit font-medium ${
              darkMode
                ? "text-[#dadada] bg-[#212121] hover:bg-[#292929]"
                : "text-gray-900 hover:bg-gray-200 bg-gray-100"
            } px-4 py-2 rounded-lg`}
          >
            Filter by:
          </button>
        </div>
        {/* Category Filter */}
        <div className="category flex items-center gap-2 ">
          <label htmlFor="category" className="text-sm font-medium">
            Category:
          </label>
          <select
            className={`${
              darkMode
                ? "bg-[#313131] text-white border-[#585858] focus:ring-[#696969]"
                : "bg-white text-gray-700 border-gray-200 focus:ring-[#6c6c6c]"
            }  p-2 rounded-lg border focus:outline-none focus:ring-2  shadow-sm cursor-pointer`}
            id="category"
            name="category"
            value={filters?.category}
            onChange={handleFilterChange}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="cursor-pointer">
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* Date Filter */}
        <div className="date flex items-center gap-2">
          <label htmlFor="date" className="text-sm font-medium">
            Date:
          </label>
          <select
            className={`${
              darkMode
                ? "bg-[#313131] text-white border-[#585858] focus:ring-[#696969]"
                : "bg-white text-gray-700 border-gray-200 focus:ring-[#6c6c6c]"
            }  p-2 rounded-lg border focus:outline-none focus:ring-2  shadow-sm cursor-pointer`}
            id="date"
            name="date"
            value={filters?.date}
            onChange={handleFilterChange}
          >
            {dates.map((d, index) => (
              <option
                key={`${d}-${index}`}
                value={d}
                className="cursor-pointer"
              >
                {d === "All" ? "All" : <FormatDate dateString={d} />}
              </option>
            ))}
          </select>
        </div>
        {/* Popularity Filter */}
        <div className="popularity flex items-center gap-2">
          <label htmlFor="popularity" className="text-sm font-medium">
            Popularity:
          </label>
          <select
            className={`${
              darkMode
                ? "bg-[#313131] text-white border-[#585858] focus:ring-[#696969]"
                : "bg-white text-gray-700 border-gray-200 focus:ring-[#6c6c6c]"
            }  p-2 rounded-lg border focus:outline-none focus:ring-2  shadow-sm cursor-pointer`}
            id="popularity"
            name="popularity"
            value={filters?.popularity}
            onChange={handleFilterChange}
          >
            {popularities.map((pop) => (
              <option key={pop} value={pop} className="cursor-pointer">
                {pop}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Reset Filters button */}
      <div className="flex justify-center pb-4">
        <button
          className={`flex items-center justify-center gap-2 px-4 py-2 ${
            darkMode
              ? "bg-[#212121] text-white border-[#414141] hover:bg-[#292929]"
              : " bg-blue-50 text-blue-600 hover:text-blue-700 border-blue-100 hover:bg-blue-100"
          } rounded-full border w-fit cursor-pointer`}
          onClick={resetFilters}
        >
          <MdRefresh size={20} className="flex-shrink-0" />
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
}

export default FilterBar;

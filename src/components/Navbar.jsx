import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

function Navbar() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <nav
      className={`flex sticky justify-around w-full py-2 ${
        darkMode ? "bg-[#1b1b1b] text-white" : "bg-[#d1d6e14a] text-black"
      } font-semibold items-center`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-[#8d5353] after:absolute after:bottom-[1px] after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-[#8d5353] after:rounded-full"
              : "text-[#7a7a7a] hover:text-[#8d5353]"
          }`
        }
      >
        Home
      </NavLink>

      <span>
        <DarkModeToggle />
      </span>

      <NavLink
        to="/my-bookings"
        className={({ isActive }) =>
          `relative px-4 py-2 transition-all duration-300 ${
            isActive
              ? "text-[#8d5353] after:absolute after:bottom-[1px] after:left-1/2 after:-translate-x-1/2 after:w-6 after:h-[2px] after:bg-[#8d5353] after:rounded-full"
              : "text-[#7a7a7a] hover:text-[#8d5353]"
          }`
        }
      >
        My Bookings
      </NavLink>
    </nav>
  );
}

export default Navbar;

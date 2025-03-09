import { useContext } from "react";
import { LuMoonStar } from "react-icons/lu";
import DarkModeContext from "../context/DarkModeContext";
import { BsSun } from "react-icons/bs";

function DarkModeToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`p-2 cursor-pointer rounded-full ${
        darkMode ? "bg-gray-900 text-white " : "bg-gray-200 text-black"
      } transition-transform duration-300 ease-in-out`}
    >
      <span className="transition-opacity duration-300">
        {darkMode ? (
          <BsSun size={16} className="text-yellow-100" />
        ) : (
          <LuMoonStar size={16} className="text-gray-500" />
        )}
      </span>
    </button>
  );
}

export default DarkModeToggle;

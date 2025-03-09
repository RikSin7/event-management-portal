import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { useContext } from "react";
import DarkModeContext from "./context/DarkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        darkMode ? "bg-[#212121] text-white" : "bg-white text-black "
      }`}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

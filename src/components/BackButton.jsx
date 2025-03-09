import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

function BackButton({ darkMode }) {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
      <button
        onClick={handleBack}
        className={`${
          darkMode
            ? "bg-[#181818] border-neutral-800 hover:bg-[#131313] hover:border-neutral-700"
            : " bg-white border-gray-300 hover:bg-gray-50 hover:border-gray-400"
        } flex items-center justify-center px-4 py-2 text-sm font-semibold border rounded-lg hover:shadow-md cursor-pointer m-2`}
      >
        <HiArrowLeft className="h-6 w-6 mr-2" />
        Back
      </button>
  );
}

export default BackButton;

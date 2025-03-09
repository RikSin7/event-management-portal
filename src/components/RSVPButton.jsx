function RSVPButton({ onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`md:mt-0 text-nowrap mt-4 px-6 py-2 font-semibold rounded-lg backdrop-blur-md ${
        disabled
          ? "bg-green-500/20 text-green-600 border border-green-500/30 cursor-not-allowed"
          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl cursor-pointer "
      }`}
    >
      {disabled ? "RSVP Confirmed" : "RSVP Now"}
    </button>
  );
}

export default RSVPButton;

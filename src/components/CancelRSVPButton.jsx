function CancelRSVPButton({ onClick }) {
  const handleCancel = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to cancel your RSVP? This action cannot be undone."
    );
    if (!isConfirmed) return;
    onClick();
  };

  return (
    <button
      onClick={handleCancel}
      className="mt-4 px-8 py-2 w-full lg:text-lg font-semibold text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
    >
      Cancel RSVP
    </button>
  );
}

export default CancelRSVPButton;

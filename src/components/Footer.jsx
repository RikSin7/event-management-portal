import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer({ darkMode }) {
  const links = [
    { icon: FaFacebookF, link: "https://www.facebook.com" },
    { icon: FaTwitter, link: "https://www.x.com" },
    { icon: FaInstagram, link: "https://www.instagram.com/rikxsin" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/in/ritik-singhh" },
  ];
  return (
    <footer
      className={`${
        darkMode ? "bg-[#121212] text-white" : " bg-gray-100 text-gray-800"
      } py-10 px-6 md:px-12 lg:px-20 w-[95vw] mt-8 rounded-t-2xl`}
    >
      <div className="w-full  mx-auto flex flex-col md:flex-row justify-between items-center md:items-center">
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Events Management Portal</h2>
          <p
            className={` mt-2 max-w-sm ${
              darkMode ? "text-[#b5b5b5]" : "text-gray-600"
            }`}
          >
            Streamline your events effortlessly with our management system.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col md:flex-row items-center md:gap-6 mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-3 md:mb-0">Follow Us On</h3>
          <div className="flex gap-4">
            {links.map(({ icon: Icon, link }, index) => (
              <a
                target="_blank"
                key={index}
                href={link}
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition duration-300"
              >
                <Icon size={20} className="text-gray-700" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        className={`border-t  my-6 ${
          darkMode ? "border-gray-600" : "border-gray-300"
        }`}
      ></div>

      {/* Copyright Section */}
      <div
        className={`text-center ${
          darkMode ? " text-[#818181]" : "text-gray-600"
        } text-sm`}
      >
        &copy; {new Date().getFullYear()} Ritik Singh. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

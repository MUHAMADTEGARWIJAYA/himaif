import  { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
    
  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position
      if (window.scrollY > 50) {
        setIsVisible(false); // Hide when scrolled down
      } else {
        setIsVisible(true); // Show when at top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex items-center p-4 bg-transparent justify-between space-x-5 text-white transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Bagian Kiri */}
        <div className="grid grid-cols-2 items-center">
            <img
              src="image.jpg" // Gunakan default jika avatar kosong
              alt="User Avatar"
              className="w-8 h-8 bg-black rounded-full mr-0"
            />
            <img
              src="image.jpg" // Gunakan default jika avatar kosong
              alt="User Avatar"
              className="w-8 h-8 bg-black rounded-full"
            />
          <span className="text-lg font-bold text-black">HIMA IF</span>
        </div>

        {/* Bagian Kanan */}
        <div className="flex items-center relative space-x-5">
          <button className="text-gray-600 hover:text-gray-800">
            <FaHome className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <MdOutlineEmail className="w-6 h-6" />
          </button>
          {/* Avatar */}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;

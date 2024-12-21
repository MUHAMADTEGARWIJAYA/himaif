
import { FaHome } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import himaImg from '../assets/images/hima.png';
import usahidImg from '../assets/images/Usahid.png';

const Navbar = () => {


  return (
    <div className="relative">
      <div
        className={`flex items-center p-4 bg-gray-300 justify-between space-x-5 text-white transition-transform duration-300 fixed top-0 left-0 w-full z-10`}
      >
        {/* Bagian Kiri */}
        <div className="flex space-x-2 items-center">
          <div className="flex space-x-2">
            <img
              src={himaImg}
              alt="User Avatar"
              className="w-9 h-9 rounded-full"
            />
            <img
              src={usahidImg}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <span className="text-lg font-bold text-black">HIMAIF</span>
        </div>

        {/* Bagian Kanan */}
        <div className="flex items-center relative space-x-5">
          <button className="text-gray-600 hover:text-gray-800">
            <FaHome className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <MdOutlineEmail className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

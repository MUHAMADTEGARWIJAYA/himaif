import { FaHome } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import himaImg from '../assets/images/hima.jpg';
import usahidImg from '../assets/images/Usahid.png';

const Navbar = () => {
  return (
    <div className="">
      <div
        className={`flex items-center p-4 bg-gray-900 justify-between space-x-5 text-white transition-transform duration-300 top-0 left-0 w-full z-10`}
      >
        {/* Bagian Kiri */}
     <a href="/"><div className="flex space-x-2 items-center">
          <div className="flex space-x-2">
            <img
              src={himaImg}
              alt="User Avatar"
              className="w-7 h-7 rounded-full"
            />
            <img
              src={usahidImg}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
          <span className="text-lg font-bold text-white">HIMAIF</span>
        </div> </a>

        {/* Bagian Kanan */}
        <div className="flex items-center relative space-x-5">
          <button className="text-gray-200 hover:text-white">
            <FaHome className="w-6 h-6" />
          </button>
          <button className="text-gray-200 hover:text-white">
            <MdOutlineEmail className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import himaImg from "../../assets/images/hima.jpg";

// icons
import { MdMenuOpen } from "react-icons/md";
import { LuCircleUser } from "react-icons/lu";
import { RiUser6Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaUsersLine } from "react-icons/fa6";
import { SlUserFemale } from "react-icons/sl";
import { CiLogout } from "react-icons/ci";

const menuItems = [
  { icons: <LuCircleUser size={30} />, label: "Inti", route: "/hima(12344)atur" },
  { icons: <RiUser6Fill size={30} />, label: "Humas", route: "/humas" },
  { icons: <FaUsersLine size={30} />, label: "Kominfo", route: "/kominfo" },
  { icons: <FaUserTie size={30} />, label: "Sekretaris", route: "/sekre" },
  { icons: <FaUserAstronaut size={30} />, label: "Minat bakat", route: "/mibat" },
  { icons: <GrUserWorker size={30} />, label: "PSDM", route: "/psdm" },
  { icons: <SlUserFemale size={30} />, label: "Bendahara", route: "/bendahara" },
  { icons: <CiLogout size={30} />, label: "Keluar", route: "/" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  // Close sidebar on mobile first load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
      }
    };
    handleResize(); // Run on initial load
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`shadow-md min-h-screen p-2 flex flex-col duration-500 bg-gray-900 text-white ${
        open ? "w-60" : "w-16"
      }`}
    >
      {/* Header */}
      <div className="px-3 py-2 h-20 flex justify-between items-center">
        <img
          src={himaImg}
          alt="Logo"
          className={`${open ? "w-10" : "w-0"} rounded-full`}
        />
        <div>
          <MdMenuOpen
            size={34}
            className={`duration-500 cursor-pointer ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {/* Body */}
      <ul className="flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.route}  // Wrap the entire <li> in <Link>
            className="px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
          >
            <div>{item.icons}</div>
            <p
              className={`${
                !open && "w-0 translate-x-24"
              } duration-500 overflow-hidden`}
            >
              {item.label}
            </p>
            <p
              className={`${
                open && "hidden"
              } absolute left-32 shadow-md rounded-md w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16`}
            >
              {item.label}
            </p>
          </Link>
        ))}
      </ul>

      {/* Footer */}
      <div className="flex items-center gap-2 px-3 py-2">
        <div>
          <FaUserCircle size={30} />
        </div>
        <div
          className={`leading-5 ${!open && "w-0 translate-x-24"} duration-500 overflow-hidden`}
        >
          
        </div>
      </div>
    </nav>
  );
}

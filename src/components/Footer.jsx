import { RiInstagramLine, RiWhatsappLine, RiMailLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-20">
      <div className="container mx-auto text-center">
        {/* Title with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-bold text-xl mb-8">Hubungi Kami</h1>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-8 mb-4">
          {/* Instagram */}
          <motion.div
            className="group relative inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="mailto:tegarmuhamad@gmail.com" className="focus:outline-none">
            <button className="focus:outline-none">
              <RiInstagramLine className="text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-blue-500" />
            </button>
            </a>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
              Instagram
            </span>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            className="group relative inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
              <a href="mailto:tegarmuhamad@gmail.com" className="focus:outline-none">
            <button className="focus:outline-none">
              <RiWhatsappLine className="text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-green-500" />
            </button>
            </a>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
              WhatsApp
            </span>
          </motion.div>

          {/* Email */}
          <motion.div
            className="group relative inline-block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            >
            <a href="mailto:tegarmuhamad@gmail.com" className="focus:outline-none">
                <button className="focus:outline-none">
                <RiMailLine className="text-3xl transform transition-transform duration-300 hover:scale-125 hover:text-red-500" />
                </button>
            </a>
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-white bg-gray-900 rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                Email
            </span>
            </motion.div>

        </div>

        {/* Address */}
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm mb-4">
            <strong>Alamat:</strong> Universitas Sahid Surakarta Jalan Adi Sucipto 54 Surakarta 57144 Surakarta Central Java
          </p>
          {/* Copyright */}
          <p className="text-sm w-48">
            &copy; {new Date().getFullYear()} Himpunan Mahasiswa Informatika Universitas Sahid Surakarta
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;


const WaveInput = () => {
  return (
 <div className="flex justify-center mt-44">
    <div className=" w-full max-w-7xl items-center h-72 bg-blue-500 rounded-lg  p-10">
       
      {/* Kontainer untuk Kritik dan Saran */}
      <div className="flex flex-col  justify-between max-w-4xl bg-white p-10 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Kritik dan Saran</h2>
          <p className="text-gray-600">Punya kritik dan saran? Yuk langsung diisi ya...</p>
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-4 mt-4">
          <input
            type="text"
            placeholder="Masukan Saranmu"
            className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="flex items-center justify-center bg-gradient-to-b from-cyan-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:translate-y-[-3px] hover:shadow-xl hover:py-0 hover:bg-gradient-to-b hover:from-cyan-300 hover:to-blue-300 active:scale-95 active:shadow-md">
      {/* Icon Wrapper */}
      <div className="svg-wrapper flex items-center justify-center w-8 h-8 rounded-full bg-white/20 transition-all duration-300 hover:bg-blue-400 hover:w-14 hover:h-14">
        <svg
          className="fill-white transition-all duration-300 hover:w-6 hover:h-6 hover:rotate-45"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
        </svg>
      </div>
      {/* Button Text */}
      <span className="ml-2 transition-all duration-300 group-hover:scale-0 group-hover:text-0 group-hover:opacity-0">
        Button
      </span>
    </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WaveInput;


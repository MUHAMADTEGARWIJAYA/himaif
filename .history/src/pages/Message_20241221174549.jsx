const WaveInput = () => {
    return (
      <div className="flex justify-center mt-44">
        <div className="w-full max-w-7xl items-center h-72 bg-blue-500 rounded-lg p-10">
          {/* Kontainer untuk Kritik dan Saran */}
          <div className="flex flex-col justify-between max-w-4xl bg-white p-10 rounded-lg shadow-lg">
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
              <button className="font-inherit text-[18px] bg-gradient-to-b from-[#4dc7d9] to-[#66a6ff] text-white py-[0.8em] px-[1.2em] border-none rounded-[25px] shadow-[0px_5px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0px_8px_15px_rgba(0,0,0,0.3)] hover:py-0 hover:bg-gradient-to-b hover:from-[#5bd9ec] hover:to-[#97c3ff] active:scale-95 active:shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
                {/* Icon Wrapper */}
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white/20 transition-all duration-300 hover:bg-[#2ba9e4e5] hover:w-[54px] hover:h-[54px]">
                  <svg
                    className="w-[18px] h-[18px] fill-white transition-all duration-300 hover:w-[25px] hover:h-[25px] hover:rotate-[45deg] hover:mr-[5px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 21l1.414-1.414L20.586 6H6V4h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2z" />
                  </svg>
                </div>
                {/* Button Text */}
                <span className="block ml-[0.4em] transition-all duration-300 group-hover:scale-0 group-hover:text-[0%] group-hover:opacity-0 group-hover:duration-500">
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
  
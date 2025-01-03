import { FaPaperPlane } from 'react-icons/fa';

const WaveInput = () => {
  return (
    <div className="flex justify-center mt-44">
      <div className="md:w-full w-80 max-w-6xl items-center h-72 bg-blue-500 rounded-lg p-10">
        {/* Kontainer untuk Kritik dan Saran */}
        <div className="text-left mb-4">
          <h2 className="text-3xl font-bold text-white mb-2">Kritik dan Saran</h2>
          <p className="text-white">Punya kritik dan saran? Yuk langsung diisi ya...</p>
        </div>

        <div className=" flex md:flex-row  max-w-5xl">
          <div className="flex flex-col justify-between w-full max-w-4xl bg-white rounded-lg shadow-lg">
            {/* Text Section */}
            <div className="flex items-center gap-4 p-4">
              <input
                type="text"
                placeholder="Masukan Saranmu"
                className="flex-grow md:px-4 md:py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"  // Menggunakan w-full untuk memperpanjang input
              />
            </div>
          </div>

          {/* Button Section placed outside of the input container */}
          <div className="flex justify-center ml-1 md:ml-4">
            <button className="font-inherit text-[8px] md:text-[18px] bg-gradient-to-b from-[#4dc7d9] to-[#66a6ff] text-white py-[0.8em] px-[2em] border-none rounded-[25px] shadow-[0px_5px_10px_rgba(0,0,0,0.2)] transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[0px_8px_15px_rgba(0,0,0,0.3)] hover:py-0 hover:bg-gradient-to-b hover:from-[#5bd9ec] hover:to-[#97c3ff] active:scale-95 active:shadow-[0px_2px_5px_rgba(0,0,0,0.2)]">
              {/* Icon and Text Wrapper */}
              <div className="flex items-center justify-center gap-2">
                <FaPaperPlane
                  className="w-[18px] h-[18px] fill-white transition-all duration-300 hover:w-[25px] hover:h-[25px] hover:rotate-[45deg] hover:mr-[5px]"
                />
                <span className="text-[18px]"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveInput;

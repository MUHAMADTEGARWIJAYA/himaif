

const WaveInput = () => {
  return (
    <div className=" h-60 bg-blue-500 flex items-center justify-center ">
     <div className="flex justify-center items-center bg-red-500 max-w-7xl">
      <div className="relative wave-group bg-black p-5 rounded-md shadow-lg">
        {/* Input Field */}
        <input
          type="text"
          required
          className="input text-base px-2 py-2 block w-64 border-0 border-b border-gray-600 bg-transparent focus:outline-none text-white"
        />
        {/* Label */}
        <label className="label text-gray-400 text-lg font-normal absolute left-2 top-2.5 flex pointer-events-none">
          {"Your Label".split("").map((char, index) => (
            <span
              key={index}
              className="label-char transition duration-200 ease-linear"
              style={{ "--index": index }}
            >
              {char}
            </span>
          ))}
        </label>
        {/* Bar */}
        <span className="bar relative block w-64">
          <span className="absolute h-0.5 w-0 bottom-0 left-1/2 bg-blue-600 transition-all duration-200 peer-focus:w-1/2 peer-focus:left-0"></span>
          <span className="absolute h-0.5 w-0 bottom-0 right-1/2 bg-blue-600 transition-all duration-200 peer-focus:w-1/2 peer-focus:right-0"></span>
        </span>
      </div>
      </div>
    </div>
  );
};

export default WaveInput;

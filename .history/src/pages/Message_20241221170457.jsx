

const WaveInput = () => {
  return (
    <div className="relative w-52">
      {/* Input Field */}
      <input
        type="text"
        required
        className="text-base px-2 py-2 w-full border-0 border-b border-gray-400 bg-transparent focus:outline-none peer"
      />
      {/* Label */}
      <label
        className="absolute left-2 top-2.5 text-gray-500 text-base transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-[-20px] peer-focus:text-sm peer-focus:text-blue-600"
      >
        Your Label
      </label>
      {/* Bar */}
      <span className="relative block w-full">
        <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 peer-focus:w-1/2 peer-focus:left-0"></span>
        <span className="absolute right-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-200 peer-focus:w-1/2 peer-focus:right-0"></span>
      </span>
    </div>
  );
};

export default WaveInput;

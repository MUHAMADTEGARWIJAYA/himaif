
const WaveInput = () => {
  return (
    <div className="flex justify-center items-center h-80 bg-blue-500 rounded-lg mx-36 p-10">
      {/* Kontainer untuk Kritik dan Saran */}
      <div className="flex flex-col  justify-between w-full max-w-4xl bg-white p-10 rounded-lg shadow-lg">
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
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaveInput;


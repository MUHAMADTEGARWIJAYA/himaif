import bendahara from '../assets/images/bendahara (1).png';
import humas from '../assets/images/humas.png';
import picture from '../assets/images/picture (1).png'
import sekretaris from '../assets/images/avatar (1).png';
import mibat from '../assets/images/girl.png';
import kominfo from '../assets/images/photography.png';


const OurSolution = () => {
  const solutions = [
    {
      id: 1,
      title: "Inti",
      description: "Bertanggung jawab secara internal maupun eksternal atas kinerja organisasi.",
      imgSrc: picture,
      color: "bg-blue-300",
    },
    {
      id: 2,
      title: "Sekretaris",
      description: " Mengelola administrasi dan surat-menyurat organisasi.",
      imgSrc: sekretaris,
      color: "bg-green-300",
    },
    {
      id: 3,
      title: "Bendahara",
      description: "Menyusun anggaran dan laporan keuangan secara berkala.",
      imgSrc: bendahara,
      color: "bg-red-300",
    },
    {
      id: 4,
      title: "Humas",
      description: "engelola hubungan eksternal dan internal organisasi.",
      imgSrc: humas,
      color: "bg-yellow-300",
    },
    {
      id: 5,
      title: "Minat dan Bakat",
      description: "Mengelola kegiatan yang berkaitan dengan minat dan bakat mahasiswa.",
      imgSrc: mibat,
      color: "bg-purple-300",
    },
    {
      id: 6,
      title: "Kominfo",
      description: "Mengelola dan mengadakan segala informasi keluar maupun masuk yang bersangkutan dengan organisasi.",
      imgSrc: kominfo,
      color: "bg-teal-300",
    },
  ];

  return (
    <div className="mt-24">
      <div>
        <h1 className="text-center font-semibold mb-8 text-xl">Devisi kami</h1>
      </div>
      {/* Solution Category */}
      <div className="flex flex-wrap justify-center items-center">
        {solutions.map((solution) => (
          <div key={solution.id} className="flex flex-col justify-center m-2">
            {/* Solution Card */}
            <div
              className={`flex-none w-96 shadow-lg rounded-lg m-2 p-4 relative overflow-hidden transition-all duration-1000 hover:scale-110 ${solution.color}`}
            >
              {/* Before Pseudo Element */}
              <div className="absolute w-[170px] h-[400px] top-[-23px] right-[-56px] bg-blue-900/15 rounded-[35px] transform rotate-[42deg] z-[-1]" />

              {/* Top Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={solution.imgSrc}
                  alt={solution.title}
                  className="w-10 h-12 object-contain"
                />
              </div>

              {/* Title */}
              <div className="text-gray-800 text-2xl mt-3 mb-3">
                <h3>{solution.title}</h3>
              </div>

              {/* Description */}
              <div className="text-gray-600 text-sm mb-3">
                <p>{solution.description}</p>
              </div>

              {/* Button */}
              <button className="bg-white text-blue-500 font-semibold text-lg py-2 px-4 rounded-md">
                Learn More
              </button>

              {/* Hover Color Bubble */}
              <div className="absolute bg-blue-500/15 w-[100rem] h-[100rem] left-[-18rem] top-[16rem] rounded-full transform rotate-[-36deg] transition-all duration-700 z-[-1]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSolution;

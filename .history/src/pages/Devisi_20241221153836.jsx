const OurSolution = () => {
    // Data array untuk solusi
    const solutions = [
      { id: 1, title: "Inti 1", description: "Deskripsi solusi 1.", imgSrc: "image1.jpg" },
      { id: 2, title: "Sekretaris", description: "Deskripsi solusi 2.", imgSrc: "image2.jpg" },
      { id: 3, title: "Bendahara", description: "Deskripsi solusi 3.", imgSrc: "image3.jpg" },
      { id: 4, title: "Inti 4", description: "Deskripsi solusi 4.", imgSrc: "image4.jpg" },
      { id: 5, title: "Inti 5", description: "Deskripsi solusi 5.", imgSrc: "image5.jpg" },
      { id: 6, title: "Inti 6", description: "Deskripsi solusi 6.", imgSrc: "image6.jpg" },
    ];
  
    return (
      <div className="mt-10">
        {/* Solution Category */}
        <div className="flex flex-wrap justify-center items-center">
          {/* Map melalui array solusi */}
          {solutions.map((solution) => (
            <div key={solution.id} className="flex flex-col justify-center m-2">
              {/* Solution Card */}
              <div className="flex-none w-96 bg-white shadow-lg rounded-lg m-2 p-4 relative overflow-hidden transition-all duration-1000 hover:bg-blue-300 hover:text-white hover:scale-110">
                {/* Before Pseudo Element */}
                <div className="absolute w-[170px] h-[400px] top-[-23px] right-[-56px] bg-blue-900/15 rounded-[35px] transform rotate-[42deg] z-[-1]" />
  
                {/* Top Icon */}
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center overflow-hidden">
                  <img src={solution.imgSrc} alt={solution.title} className="w-10 h-12 object-contain" />
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
                <button className="bg-gradient-to-r from-teal-400 to-teal-300 text-white font-semibold text-lg py-2 px-4 rounded-md">
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
  
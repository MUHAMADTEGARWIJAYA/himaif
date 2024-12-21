const OurSolution = () => {
    const solutions = [
      {
        id: 1,
        title: "Inti",
        description: "Solution description for Inti.",
        imgSrc: "image1.jpg",
        color: "hover:bg-blue-300",
      },
      {
        id: 2,
        title: "Sekretaris",
        description: "Solution description for Support.",
        imgSrc: "image2.jpg",
        color: "hover:bg-green-300",
      },
      {
        id: 3,
        title: "Bendahara",
        description: "Solution description for Growth.",
        imgSrc: "image3.jpg",
        color: "hover:bg-red-300",
      },
      {
        id: 4,
        title: "Humas",
        description: "Solution description for Innovation.",
        imgSrc: "image4.jpg",
        color: "bg-yellow-300",
      },
      {
        id: 5,
        title: "Minat dan Bakat",
        description: "Solution description for Efficiency.",
        imgSrc: "image5.jpg",
        color: "bg-purple-300",
      },
      {
        id: 6,
        title: "Kominfo",
        description: "Solution description for Sustainability.",
        imgSrc: "image6.jpg",
        color: "bg-teal-300",
      },
    ];
  
    return (
      <div className="mt-10">
        <div>
            <h1 className="text-center">Devisi kami</h1>
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
                    alt="Icon"
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
  
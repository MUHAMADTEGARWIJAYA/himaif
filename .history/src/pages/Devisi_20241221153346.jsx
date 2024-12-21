const OurSolution = () => {
    return (
      <div className="mt-10">  
        {/* Solution Category */}
        <div className="flex flex-wrap justify-center items-center">
          {/* Card Wrapper */}
          <div className="flex flex-col justify-center m-2">
            {/* Solution Card */}
            <div className="flex-none w-96 bg-[#41b3d357] shadow-lg rounded-lg m-2 p-4 relative overflow-hidden transition-all duration-1000 hover:bg-blue-300 hover:text-white hover:scale-110">
              {/* Before Pseudo Element */}
              <div className="absolute w-[170px] h-[400px] top-[-23px] right-[-56px] bg-blue-900/15 rounded-[35px] transform rotate-[42deg] z-[-1]" />
  
              {/* Top Icon */}
              <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center overflow-hidden">
                <img src="image.jpg" alt="Icon" className="w-10 h-12 object-contain" />
              </div>
  
              {/* Title */}
              <div className="text-gray-800 text-2xl mt-3 mb-3">
                <h3>Solution Title</h3>
              </div>
  
              {/* Description */}
              <div className="text-gray-600 text-sm mb-3">
                <p>Solution description goes here.</p>
              </div>
  
              {/* Button */}
              <button className="bg-gradient-to-r from-teal-400 to-teal-300 text-white font-semibold text-lg py-2 px-4 rounded-md">
                Learn More
              </button>
  
              {/* Hover Color Bubble */}
              <div className="absolute bg-blue-500/15 w-[100rem] h-[100rem] left-[-18rem] top-[16rem] rounded-full transform rotate-[-36deg] transition-all duration-700 z-[-1]" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurSolution;
  
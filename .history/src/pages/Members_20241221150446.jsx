const About = () => {
    return (
      <div className="flex flex-col h-96 bg-red-900 items-center mt-10">
        <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
       
          <h1 className="text-center font-bold text-2xl  mt-8">
            KABINET SINERGI KARSA
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque eius quae error harum! Veniam quidem vero quisquam quasi illo nostrum iure quae esse aliquam! Ratione laborum rem enim vitae.</p>
         <div className="bg-red-300 max-h-full">
                <img
                  src="image.jpg" // Gunakan default jika avatar kosong
                  alt="User Avatar"
                  className="w-30 h-30 bg-black rounded-full"
                />
         </div>
      </div>
      
    );
  };
  
  export default About;
  

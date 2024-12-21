import himaImg from '../assets/images/hima.png';
import usahidImg from '../assets/images/Usahid.png';


const About = () => {
    return (
      <div className="flex flex-col h-96 items-center mt-10">
        <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
       
          <h1 className="text-center font-bold text-2xl mt-3">
            KABINET SINERGI KARSA
          </h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque eius quae error harum! Veniam quidem vero quisquam quasi illo nostrum iure quae esse aliquam! Ratione laborum rem enim vitae.</p>
         <div className="flex gap-4 mt-10">
                <img
                  src={himaImg} // Gunakan default jika avatar kosong
                  alt="User Avatar"
                  className="w-36 h-36 rounded-full"
                />
                  <img
                  src={usahidImg} // Gunakan default jika avatar kosong
                  alt="User Avatar"
                  className="w-32 h-32  rounded-full"
                />
         </div>
      </div>
      
    );
  };
  
  export default About;
  

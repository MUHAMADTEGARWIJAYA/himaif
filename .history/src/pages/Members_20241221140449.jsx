import PropTypes from "prop-types";

const Card = ({ title, image }) => {
  return (
    
    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-black transform transition-transform hover:scale-105 hover:rotate-2">
      <div className="absolute inset-0.5 flex flex-col items-center justify-between text-white z-[1] opacity-90 rounded-xl bg-[#323132] p-2">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover rounded-lg"
        />
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const App = () => {
  const cards = [
    {
      title: "Ketua",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Wakil ketua",
      image: "https://via.placeholder.com/150",
    },
  ];


  return (
    <div className=" ">
       <h1 className="text-3xl font-bold mt-10 text-center bg-clip-text text-black font-thin">
        Ketua dan Wakil Ketua
        </h1>
                    {/*Ketua dan wakil  */}
                    <div className="flex flex-wrap justify-center gap-4 mt-3 p-4">
                    {cards.map((card, index) => (
                        <Card key={index} title={card.title} image={card.image} />
                    ))}
                    </div>
    </div>
  );
};

export default App;

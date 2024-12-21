
import PropTypes from "prop-types";

const Card = ({ title, image }) => {
  return (
    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#a52ba5] hover:first-line:marker:">
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
      title: "Card 1",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card 2",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card 3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Card 4",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} image={card.image} />
      ))}
    </div>
  );
};

export default App;

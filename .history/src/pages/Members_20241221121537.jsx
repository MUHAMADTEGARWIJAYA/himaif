

const categories = [
  {
    id: 1,
    title: "Customer Success",
    image: "https://via.placeholder.com/100", // Ganti dengan URL gambar Anda
  },
  {
    id: 2,
    title: "Technical Support",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    title: "Content Moderation",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    title: "Data Processing",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    title: "Professional Services",
    image: "https://via.placeholder.com/100",
  },
];

const Card = () => {
  return (
    <div className="flex gap-4 justify-center p-10 bg-[#fde8df]">
      {categories.map((category) => (
        <div
          key={category.id}
          className="relative w-48 h-64 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center"
        >
          <input
            type="checkbox"
            className="absolute top-2 right-2 w-5 h-5 text-[#f78154] rounded focus:ring focus:ring-orange-300"
          />
          <img
            src={category.image}
            alt={category.title}
            className="w-20 h-20 mb-4"
          />
          <h3 className="text-lg font-semibold">{category.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;

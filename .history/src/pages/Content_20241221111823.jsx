import { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/1920x600", // Ganti dengan URL gambar
      title: "Mudah & Transparan! Kambing Langsung dari Peternak",
      description:
        "Akses langsung ke peternak, harga transparan, dan kualitas terjamin. Pilih kambing untuk kebutuhan Anda hanya di sini!, jdsudvudvbduvbdvbdiobvbvsudvds",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1920x600", // Ganti dengan URL gambar
      title: "Harga Terjangkau & Berkualitas",
      description:
        "Berbagai pilihan kambing dengan harga terbaik langsung dari peternak terpercaya.",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1920x600", // Ganti dengan URL gambar
      title: "Pesan Sekarang, Nikmati Kemudahan",
      description:
        "Proses cepat, aman, dan terintegrasi untuk kebutuhan kambing Anda.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Ganti dengan waktu delay (ms)
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-[600px] flex-shrink-0 relative"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center mb-40 items-start p-10 text-white">
              <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;

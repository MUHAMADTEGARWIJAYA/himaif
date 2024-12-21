import { useState, useEffect } from "react";
import satu from '../assets/images/2024.jpeg'
import dua from '../assets/images/2023.jpg'
import tiga from '../assets/images/2022.jpeg'
const Slider = () => {
    const slides = [
      {
        id: 1,
        image: satu, // Ganti dengan gambar tema HIMA Informatika
        title: "Inovasi untuk Masa Depan Teknologi",
        description:
          "Bergabunglah dengan HIMA Informatika, wadah untuk mahasiswa yang ingin berinovasi dan mengembangkan teknologi untuk masa depan. Dari pengembangan perangkat lunak hingga proyek-proyek teknologi terkini.",
      },
      {
        id: 2,
        image: dua, // Ganti dengan gambar tema HIMA Informatika
        title: "Kolaborasi Antar Mahasiswa Informatika",
        description:
          "HIMA Informatika mempertemukan mahasiswa dengan berbagai latar belakang, membangun kolaborasi yang kuat untuk proyek-proyek teknologi dan kemajuan bersama.",
      },
      {
        id: 3,
        image: tiga, // Ganti dengan gambar tema HIMA Informatika
        title: "Peluang Pengembangan Diri di Dunia Teknologi",
        description:
          "Ikuti kegiatan yang mendukung pengembangan diri Anda di bidang teknologi, mulai dari seminar, hackathon, hingga pengembangan aplikasi yang bermanfaat.",
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
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center mb-48 items-start p-10 text-white">
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

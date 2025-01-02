import fixlogo from '../../assets/images/fixlogo.png'
import { motion } from 'framer-motion';
import bg1 from '../../assets/images/bg1.png'
import { useState,useEffect } from 'react';


const App = () => {
  const [background, setBackground] = useState(bg1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setBackground(null); // Hilangkan background pada layar kecil
      } else {
        setBackground(bg1); // Set background pada layar besar
      }
    };

    // Deteksi ukuran layar saat pertama kali dimuat
    handleResize();

    // Tambahkan event listener untuk resize
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen dibersihkan
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white flex md:flex-row flex-col items-center remove-background"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "700px",
      backgroundPositionX : "right",
      backgroundRepeat : "no-repeat"
      
    }}
    >
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-items-start text-start px-4 min-h-screen">
        {/* Bagian gambar dan brush */}
        <motion.div 
        className=" flex justify-center items-center"
      
        viewport={{ once: true }} // Animasi hanya terjadi sekali
        transition={{ duration: 2, delay: 0.2 }} // Durasi dan delay berdasarkan indeks
        initial={{ scale: 0 }} // Animasi scaling
        whileInView={{ scale: 1 }}
        >
          <img
            src={fixlogo}// Ganti dengan link gambar Anda
            alt="Person with plant"
            className=" rounded-full "
          />
        </motion.div>

        {/* Text utama */}
        <motion.div
        initial={{ opacity: 0, y: 50 }} // Posisi awal
        whileInView={{ opacity: 1, y: 0 }} // Posisi akhir saat terlihat
        viewport={{ once: true }} // Animasi hanya terjadi sekali
        transition={{ duration: 3, delay: 0.2 }} // Durasi dan delay berdasarkan indeks
        >
        <h1 className="text-5xl w-96 text-center md:text-start font-bold text-gray-900">
            KABINET SINERGI KARSA
        </h1>
        <p className="text-lg text-gray-600 mt-2 text-center  md:text-start">
         Ayo kenalan dengan kabinet <span className="text-indigo-700 font-bold text-lg">SINERGI KARSA!!!!</span>
        </p>
        </motion.div>
      </div>

      {/* Upload Section */}
      <motion.div 
       initial={{ opacity: 0, y: -50 }} // Posisi awal
       whileInView={{ opacity: 1, y: 0 }} // Posisi akhir saat terlihat
       viewport={{ once: true }} // Animasi hanya terjadi sekali
       transition={{ duration: 4, delay: 2 }} // Durasi dan delay berdasarkan indeks
      className="w-full flex flex-col items-center justify-center md:justify-end mt-10 px-4 min-h-96 ">
        {/* Card upload */}
        <div className="flex items-center w-3/4 flex-row my-8 py-6 pl-12 pr-4 isolate [unicode-bidi:isolate] bg-white shadow-2xl overflow-hidden rounded-2xl relative before:content-[''] before:absolute before:w-1 before:h-4/5 before:bg-[#373c3d] before:z-[10] before:left-6"  >
          <p className="white-space-pre-wrap [&amp;:not(:first-child)]:mt-3 text-black">
            <span className="font-semibold">ABOUT LOGO: <br /></span>  Logo ini mencerminkan semangat kolektif dari mahasiswa informatika yang bersatu dalam himpunan
        untuk bekerja sama dan berinovasi dengan penuh semangat dan dedikasi. Warna dan simbol yang digunakan
        menunjukkan nilai-nilai inti dari organisasi ini, yaitu kreativitas, kebijaksanaan, kerja sama, dan
        semangat yang tinggi untuk mencapai tujuan bersama. Logo ini bukan hanya menjadi identitas visual, tetapi
        juga mencerminkan nilai-nilai dan semangat yang diusung oleh Himpunan Mahasiswa Informatika dalam setiap
        aktivitas dan kontribusinya di bidang teknologi dan informasi.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default App;

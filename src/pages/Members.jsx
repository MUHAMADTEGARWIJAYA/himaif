import { motion } from "framer-motion";
import himaImg from "../assets/images/hima.png";

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center mt-10"
      initial={{ opacity: 0, y: 50 }} // Posisi awal animasi
      whileInView={{ opacity: 1, y: 0 }} // Posisi saat terlihat di viewport
      viewport={{ once: true }} // Animasi hanya terjadi sekali
      transition={{ duration: 0.8 }} // Durasi animasi
    >
      <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
      <h1 className="text-center font-bold text-2xl mt-3">KABINET SINERGI KARSA</h1>
      <div className="flex gap-4 rounded-full">
        <motion.img
          src={himaImg}
          alt="HIMA Logo"
          className="w-96 h-96 rounded-full"
          initial={{ scale: 0 }} // Animasi scaling
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
      <motion.p
        className="text-center max-w-4xl mx-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Logo ini mencerminkan semangat kolektif dari mahasiswa informatika yang bersatu dalam himpunan
        untuk bekerja sama dan berinovasi dengan penuh semangat dan dedikasi. Warna dan simbol yang digunakan
        menunjukkan nilai-nilai inti dari organisasi ini, yaitu kreativitas, kebijaksanaan, kerja sama, dan
        semangat yang tinggi untuk mencapai tujuan bersama. Logo ini bukan hanya menjadi identitas visual, tetapi
        juga mencerminkan nilai-nilai dan semangat yang diusung oleh Himpunan Mahasiswa Informatika dalam setiap
        aktivitas dan kontribusinya di bidang teknologi dan informasi.
      </motion.p>
    </motion.div>
  );
};

export default About;

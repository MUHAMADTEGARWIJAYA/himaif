import himaImg from '../assets/images/hima.png';

const About = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
      <h1 className="text-center font-bold text-2xl mt-3">KABINET SINERGI KARSA</h1>
      <div className="flex gap-4 rounded-full bg-black">
        <img
          src={himaImg} // Gunakan default jika avatar kosong
          alt="HIMA Logo"
          className="w-96 h-96 rounded-full"
        />
      </div>
      <p className="text-center max-w-4xl mx-5">
        Logo ini mencerminkan semangat kolektif dari mahasiswa informatika yang bersatu dalam himpunan
        untuk bekerja sama dan berinovasi dengan penuh semangat dan dedikasi. Warna dan simbol yang digunakan
        menunjukkan nilai-nilai inti dari organisasi ini, yaitu kreativitas, kebijaksanaan, kerja sama, dan
        semangat yang tinggi untuk mencapai tujuan bersama. Logo ini bukan hanya menjadi identitas visual, tetapi
        juga mencerminkan nilai-nilai dan semangat yang diusung oleh Himpunan Mahasiswa Informatika dalam setiap
        aktivitas dan kontribusinya di bidang teknologi dan informasi.
      </p>
     
    </div>
  );
};

export default About;

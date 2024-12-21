import himaImg from '../assets/images/hima.png';



const About = () => {
    return (
      <div className="flex flex-col h-96 items-center min-h-fit mt-10">
        <h3 className="text-center font-semibold text-xl">ABOUT US</h3>
       
          <h1 className="text-center font-bold text-2xl mt-3">
            KABINET SINERGI KARSA
          </h1>
          <br />
          <p className="text-center max-w-4xl mx-10">Logo ini mencerminkan semangat kolektif dari mahasiswa informatika yang bersatu dalam 
            himpunan untuk bekerja sama dan berinovasi dengan penuh semangat dan dedikasi. Warna 
            dan simbol yang digunakan menunjukkan nilai-nilai inti dari organisasi ini, yaitu kreativitas, 
            kebijaksanaan, kerja sama, dan semangat yang tinggi untuk mencapai tujuan bersama.
            <br />
            Logo ini bukan hanya menjadi identitas visual, tetapi juga mencerminkan nilai-nilai dan 
            semangat yang diusung oleh Himpunan Mahasiswa Informatika dalam setiap aktivitas dan 
            kontribusinya di bidang teknologi dan informasi.</p>
         <div className="flex gap-4 mt-10">
                <img
                  src={himaImg} // Gunakan default jika avatar kosong
                  alt="User Avatar"
                  className="w-96 h-96 rounded-full"
                />
         </div>
      </div>
      
    );
  };
  
  export default About;
  

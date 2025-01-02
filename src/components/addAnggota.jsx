import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddAnggota = () => {
  const [formData, setFormData] = useState({
    nama: "",
    foto: null,
    posisi: "",
    jabatan: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("Nama", formData.nama);
    data.append("imageUrl", formData.foto);
    data.append("Devisi", formData.posisi);
    data.append("Jabatan", formData.jabatan);

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("/api/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setSuccessMessage("Anggota berhasil ditambahkan!");
      setTimeout(() => {
        navigate("/hima(12344)atur");
      }, 2000); // Pengalihan setelah 2 detik
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Gagal menambahkan anggota!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Add Anggota</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama */}
          <div>
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Nama"
              required
            />
          </div>

          {/* Foto */}
          <div>
            <label htmlFor="foto" className="block text-sm font-medium text-gray-700">
              Foto
            </label>
            <input
              type="file"
              id="foto"
              name="foto"
              accept="image/*"
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none"
              required
            />
          </div>

          {/* Posisi */}
          <div>
            <label htmlFor="posisi" className="block text-sm font-medium text-gray-700">
              Devisi
            </label>
            <select
              id="posisi"
              name="posisi"
              value={formData.posisi}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                devisi
              </option>
              <option value="inti">inti</option>
              <option value="kominfo">kominfo</option>
              <option value="sekretaris">sekretaris</option>
              <option value="psdm">psdm</option>
              <option value="mibst">mibat</option>
              <option value="humas">humas</option>
              <option value="bendahara">bendahara</option>
            </select>
          </div>

          {/* Jabatan */}
          <div>
            <label htmlFor="jabatan" className="block text-sm font-medium text-gray-700">
              Sebagai Apa?
            </label>
            <input
              type="text"
              id="jabatan"
              name="jabatan"
              value={formData.jabatan}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Masukkan Jabatan"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 h-12 text-white font-semibold bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 duration-300 rounded-md shadow-lg"
            >
              Add Anggota
            </button>
          </div>
        </form>
      </div>

      {successMessage && (
        <div className="fixed top-20 z-50 flex w-3/4 max-w-96 h-24 bg-white rounded-xl overflow-hidden shadow-lg mt-4">
          <svg width="16" height="96" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 8 0 
               Q 4 4.8, 8 9.6 
               T 8 19.2 
               Q 4 24, 8 28.8 
               T 8 38.4 
               Q 4 43.2, 8 48 
               T 8 57.6 
               Q 4 62.4, 8 67.2 
               T 8 76.8 
               Q 4 81.6, 8 86.4 
               T 8 96 
               L 0 96 
               L 0 0 
               Z"
              fill="#66cdaa"
              stroke="#66cdaa"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
          <div className="mx-2.5 overflow-hidden w-full">
            <p className="mt-1.5 text-xl font-bold text-[#66cdaa] leading-8 mr-3 overflow-hidden text-ellipsis whitespace-nowrap">
              Success!
            </p>
            <p className="overflow-hidden leading-5 break-all text-zinc-400 max-h-10">
              Anggota berhasil ditambahkan.
            </p>
          </div>
          <button className="w-16 cursor-pointer focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="mediumseagreen"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddAnggota;
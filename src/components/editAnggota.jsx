import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditAnggotaPage() {
  const { id } = useParams(); // Tangkap ID dari URL
  const [formData, setFormData] = useState({
    Nama: "",
    Jabatan: "",
    Devisi: "",
    imageUrl: "",
  });
  const [popupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imagePreview, setImagePreview] = useState(); // Untuk preview gambar
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnggota = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token tidak ditemukan");

        const response = await axios.get(`/api/byid/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const anggota = response.data;
        if (!anggota) {
          throw new Error("Anggota tidak ditemukan");
        }

        setFormData({
          Nama: anggota.Nama || '',
          Jabatan: anggota.Jabatan || '',
          Devisi: anggota.Devisi || '',
          imageUrl: anggota.imageUrl || '',
        });

        // Set preview gambar saat ini jika ada
        if (anggota.imageUrl) {
          setImagePreview(anggota.imageUrl);
        }

      } catch (err) {
        console.error("Error fetching anggota:", err);
        setError(err.response?.data?.message || err.message || "Gagal memuat data anggota.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnggota();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, imageUrl: file }));

    // Set preview gambar baru jika ada
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("Nama", formData.Nama);
    form.append("Jabatan", formData.Jabatan);
    form.append("Devisi", formData.Devisi);
    if (formData.imageUrl) {
      form.append("imageUrl", formData.imageUrl);
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token tidak ditemukan");

      await axios.put(`/api/update/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setPopupVisible(true);
      setTimeout(() => {
        setPopupVisible(false);
        navigate("/humas");
      }, 2000);
    } catch (err) {
      console.error("Error updating anggota:", err);
      alert(err.response?.data?.message || "Gagal mengupdate anggota.");
    }
  };

  // Fungsi untuk menampilkan Loading Spinner
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center min-h-screen">
      <div className="loader border-t-4 border-green-400 rounded-full w-16 h-16"></div>
    </div>
  );

  // Fungsi untuk menampilkan Popup
  const Popup = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h3 className="text-center text-xl font-semibold">Anggota Berhasil Diperbarui</h3>
        <p className="text-center mt-4">Akan diarahkan ke halaman anggota...</p>
      </div>
    </div>
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Edit Anggota</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-600 font-medium mb-2">Nama Anggota</label>
            <input
              type="text"
              name="Nama"
              value={formData.Nama}
              onChange={handleChange}
              placeholder="Masukkan nama anggota"
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>

          <div>
            <label htmlFor="Devisi" className="block text-sm font-medium text-gray-700">
              Jabatan
            </label>
            <select
              id="Devisi"
              name="Devisi"
              value={formData.Devisi}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Devisi
              </option>
              <option value="inti">Inti</option>
              <option value="kominfo">Kominfo</option>
              <option value="sekretaris">Sekretaris</option>
              <option value="psdm">PSDM</option>
              <option value="mibat">Minat Bakat</option>
              <option value="humas">Humas</option>
              <option value="bendahara">Bendahara</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-2">Sebagai apa</label>
            <input
              type="text"
              name="Jabatan"
              value={formData.Jabatan}
              onChange={handleChange}
              placeholder="Masukkan devisi anggota"
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium mb-2">Foto Anggota</label>
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-md border-2 border-gray-400"
                />
              </div>
            )}
            <input
              type="file"
              name="imageUrl"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md p-2"
              accept="image/*"
            />
            <button
              type="button"
              onClick={() => setImagePreview(null)}
              className="mt-2 text-blue-600"
            >
              Ubah Foto
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-green-400 text-white font-semibold py-3 rounded-md hover:bg-green-700"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
      {popupVisible && <Popup />}
    </div>
  );
}

export default EditAnggotaPage;

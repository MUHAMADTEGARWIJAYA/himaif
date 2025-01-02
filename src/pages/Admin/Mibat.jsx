import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Akominfo = () => {
    const [members, setMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);  // State to manage modal visibility
    const [deleteId, setDeleteId] = useState(null);  // Store the ID of the member to delete
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("Token tidak ditemukan");
                const response = await axios.get("/api/devisi/mibat", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setMembers(response.data);
            } catch (error) {
                console.error("Error fetching members", error);
            }
        };
        fetchMembers();
    }, []);

    const handleDelete = (id) => {
        setDeleteId(id);  // Store the member ID to delete
        setShowModal(true);  // Show the modal
    };

    const confirmDelete = async () => {
        if (deleteId) {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("Token tidak ditemukan");
    
                await axios.delete(`/api/anggota/${deleteId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
    
                setMembers(members.filter((member) => member._id !== deleteId)); // Update state
                alert("Anggota berhasil dihapus");
            } catch (err) {
                console.error("Error deleting member:", err);
                alert("Gagal menghapus anggota");
            }
        }
        setShowModal(false); // Close the modal after confirmation
    };
    

    return (
        <div className="bg-white py-10 min-h-screen max-w-screen">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="font-bold text-2xl mb-5">MINAT BAKAT</h1>

                <button
                    className="flex my-5 justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#34d399] via-[#10b981] to-[#059669] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#059669] hover:to-[#34d399]"
                    onClick={() => navigate(`/add`)} // Ganti dengan route untuk menambah produk
                >
                <svg
                    className="w-6 h-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                        <path
                            d="M12 5v14M5 12h14"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                        ></path>
                 </svg>

                  Add

                </button>


                {members.length === 0 ? (
                    <div className="text-center text-gray-600 py-10">
                        <p className="text-lg">Belum Ada Anggota</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {members.map((member, index) => (
                            <div
                                key={member._id || index}
                                className="bg-white border rounded-lg shadow-md p-4"
                            >
                                <img
                                    src={
                                        member.image
                                            ? `http://localhost:3000/uploads/${member.image}`
                                            : "/path/to/default-image.jpg"
                                    }
                                    alt={member.name}
                                    className="w-full h-64 object-cover rounded-lg mb-4"
                                    onError={(e) => {
                                        e.target.src = "/path/to/default-image.jpg";
                                    }}
                                />
                                <h3 className="text-lg font-semibold">Nama: {member.Nama}</h3>
                                <p className="text-gray-500  h-16 text-sm">Jabatan: {member.Jabatan}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#38bdf8] via-[#0284c7] to-[#0369a1] hover:shadow-xl hover:shadow-blue-500 hover:scale-105 duration-300 hover:from-[#0369a1] hover:to-[#38bdf8]"
                                        onClick={() => navigate(`/edit/${member._id}`)}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M16.862 2.487a2.25 2.25 0 113.182 3.182L7.715 17.999l-3.182.707.707-3.182L16.862 2.487zM10.5 4.5l2.62 2.62m-1.22-1.22l-7.682 7.681m9.902-8.462l1.22 1.22M5.208 19.02h13.542"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                        Edit
                                    </button>

                                    <button
                                        className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                                        onClick={() => handleDelete(member._id)}
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                            ></path>
                                        </svg>
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Modal confirmation for deletion */}
            {showModal && (
                <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
                    <div className="group select-none w-[250px] flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg rounded-2xl">
                        <div className="">
                            <div className="text-center p-3 flex-auto justify-center">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="group-hover:animate-bounce w-12 h-12 flex items-center text-gray-600 fill-red-500 mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                      
                                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                       
                                    ></path>
                                </svg>
                                <h2 className="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                                <p className="font-bold text-sm text-gray-500 px-2">
                                    Do you really want to continue? This process cannot be undone.
                                </p>
                            </div>
                            <div className="p-2 mt-2 text-center space-x-1 md:block">
                                <button
                                    className="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-transparent px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 hover:border-red-500 text-white hover:text-red-500 rounded-full transition ease-in duration-300"
                                    onClick={confirmDelete}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Akominfo;

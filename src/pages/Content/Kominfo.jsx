import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                // Panggil endpoint backend untuk mendapatkan data anggota
                const response = await axios.get("/api/devisi/kominfo");
                setMembers(response.data); // Sesuaikan dengan struktur data backend
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching members", error);
            }
        };
        fetchMembers();
    }, []);

    return (
        <div className="bg-white">
            <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             viewport={{ once: true }}>
            <h1 className="text-center font-bold text-3xl py-20">DEVISI KOMINFO</h1>
            </motion.div>
            <div className="container mx-auto">
                {/* Ketua */}
                <motion.div
                    className="flex justify-center space-x-16 mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                > 
                   {members.slice(0, 1).map((member) => ( // Hanya mengambil 1 ketua
                        <div key={member.id || member.Nama} className="text-center"> {/* Menggunakan member.id atau member.Nama sebagai key */}
                            <img
                                src={
                                    member.image
                                        ? `http://localhost:3000/uploads/${member.image}`
                                        : "/path/to/default-image.jpg"
                                }
                                alt={member.Nama}
                                className="w-60 h-60 mx-auto rounded-lg object-cover"
                            />
                            <h2 className="text-blue-500 font-bold text-lg mt-4">
                                {member.Nama}
                            </h2>
                            <p className="text-gray-700">{member.Jabatan}</p>
                           
                        </div>
                    ))}
                </motion.div>

                {/* Anggota */}
                <motion.div
                    className="flex flex-wrap justify-center md:justify-between mt-20 gap-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {members.slice(1).map((member) => ( // Mengambil semua anggota selain ketua
                        <motion.div
                            key={member.id || member.Nama}  // Pastikan setiap anggota memiliki key unik
                            className="text-center w-full sm:w-1/2 md:w-1/3 px-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={
                                    member.image
                                        ? `http://localhost:3000/uploads/${member.image}`
                                        : "/path/to/default-image.jpg"
                                }
                                alt={member.Nama}
                                className="w-36 h-40 mx-auto rounded-lg object-cover"
                            />
                            <h2 className="text-blue-500 font-bold text-base mt-4">
                                {member.Nama}
                            </h2>
                            <p className="text-gray-700">{member.Jabatan}</p>
                            <p className="text-gray-500">{member.Devisi}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;

import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const MemberCard = ({ member, isLeader }) => (
    <motion.div
        className={`text-center ${isLeader ? "w-auto" : "w-full sm:w-1/2 md:w-1/3 px-4"}`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
    >
        <img
            src={
                member.image
                    ? `https://server-hima.vercel.app/uploads/${member.image}`
                    : "/path/to/default-image.jpg"
            }
            alt={member.Nama}
            className={`${
                isLeader ? "w-60 h-60" : "w-36 h-40"
            } mx-auto rounded-lg object-cover`}
            loading="lazy"
        />
        <h2 className="text-blue-500 font-bold text-lg mt-4">{member.Nama}</h2>
        <p className="text-gray-700">{member.Jabatan}</p>
        {!isLeader && <p className="text-gray-500">{member.Devisi}</p>}
    </motion.div>
);

// Validasi props untuk MemberCard
MemberCard.propTypes = {
    member: PropTypes.shape({
        image: PropTypes.string,
        Nama: PropTypes.string.isRequired,
        Jabatan: PropTypes.string.isRequired,
        Devisi: PropTypes.string,
    }).isRequired,
    isLeader: PropTypes.bool,
};

const TeamSection = () => {
    const [members, setMembers] = useState([]);
   
    const fetchMembers = useCallback(async () => {
        try {
            const response = await axios.get("/api/devisi/inti");
            setMembers(response.data);
        } catch (error) {
            console.error("Error fetching members", error);
          
        } 
    }, []);

    useEffect(() => {
        fetchMembers();
    }, [fetchMembers]);

  

    return (
        <div className="bg-white">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <h1 className="text-center font-bold text-3xl py-20">DEVISI INTI</h1>
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
                    {members.slice(0, 2).map((member) => (
                        <MemberCard key={member.id} member={member} isLeader />
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
                    {members.slice(2).map((member) => (
                        <MemberCard key={member.id} member={member} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default TeamSection;

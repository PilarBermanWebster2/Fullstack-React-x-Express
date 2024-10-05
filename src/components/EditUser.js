import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById(); // Panggil data user ketika komponen dimuat
    }, []);

    const getUserById = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/users/${id}`);
            console.log(response.data); // Lihat isi response untuk debugging
            if (response.data) {
                setName(response.data.name);   // pastikan key "name" ada dalam response
                setEmail(response.data.email); // pastikan key "email" ada dalam response
                setGender(response.data.gender); // pastikan key "gender" ada dalam response
            } else {
                console.error("User not found");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3001/users/${id}`, {
                name, email, gender // Mengirim data baru ke server
            });
            navigate("/"); // Kembali ke halaman utama setelah update
        } catch (error) {
            console.log("Error updating user:", error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input"
                                value={name} // Menampilkan name lama
                                onChange={(e) => setName(e.target.value)} // Ubah name baru
                                placeholder='Name' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input type="text" className="input"
                                value={email} // Menampilkan email lama
                                onChange={(e) => setEmail(e.target.value)} // Ubah email baru
                                placeholder='Email' />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender} // Menampilkan gender lama
                                    onChange={(e) => setGender(e.target.value)}> // Ubah gender baru
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditUser;

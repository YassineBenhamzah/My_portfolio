import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../axiosClient";

export default function InformationForm() {
    const { id } = useParams();
    const [preview, setPreview] = useState(null);
    const [errors, setErrors] = useState(null);
    const [form, setForm] = useState({
        user_id: "",
        name: "",
        description: "",
        phone_number: "",
        date_of_birth: "",
        social_links: {
            github: "",
            linkedin: "",
            facebook: "",
        },
        image: null,
    });
    // const navigate = useNavigate();
    const navigate = useNavigate();

    if (id) {
        useEffect(() => {
            axiosClient
                .get(`/informations/${id}`)
                .then(({ data }) => {
                    setForm(data);
                })
                .catch(() => {});
        }, []);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosClient
            .put(`/informations/${id}`, form) // backend should update singleton
            .then(() => {
                alert("Information updated successfully!");
                navigate("/admin/informations");
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            });
    };
    return (
        <>
            <form
                className="space-y-6 p-6 bg-white rounded-xl shadow-md max-w-2xl mx-auto"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <h2 className="text-2xl font-semibold mb-4">Update Information</h2>

                <div>
                    <label className="block mb-1 font-medium">Ttile</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter  Title"
                        onChange={(e) =>
                            setForm({ ...form, title: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your name"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Description</label>
                    <textarea
                        name="description"
                        value={form.description}
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        rows="3"
                        placeholder="Write something..."
                        onChange={(e) =>
                            setForm({ ...form, description: e.target.value })
                        }
                    ></textarea>
                </div>

                <div>
                    <label className="block mb-1 font-medium">Phone Number</label>
                    <input
                        name="phone_number"
                        value={form.phone_number}
                        type="text"
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="+212 6 00 00 00 00"
                        onChange={(e) =>
                            setForm({ ...form, phone_number: e.target.value })
                        }
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">Date of Birth</label>
                    <input
                        name="date_of_birth"
                        value={form.date_of_birth}
                        onChange={(e) =>
                            setForm({ ...form, date_of_birth: e.target.value })
                        }
                        type="date"
                        className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">GitHub</label>
                        <input
                            name="github"
                            value={form.social_links.github}
                            type="text"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="GitHub link"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    social_links: {
                                        ...form.social_links,
                                        github: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            LinkedIn
                        </label>
                        <input
                            name="linkedin"
                            value={form.social_links.linkedin}
                            type="text"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="LinkedIn link"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    social_links: {
                                        ...form.social_links,
                                        linkedin: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">
                            Facebook
                        </label>
                        <input
                            name="facebook"
                            value={form.social_links.facebook}
                            type="text"
                            className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Facebook link"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    social_links: {
                                        ...form.social_links,
                                        facebook: e.target.value,
                                    },
                                })
                            }
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Save
                </button>
            </form>
        </>
    );
}

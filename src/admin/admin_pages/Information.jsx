import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClient";
import { Link } from "react-router-dom";

export default function Information() {
    const [userInformations, setUserInformation] = useState([]);

    const getInformation = () => {
        axiosClient
            .get("/informations")
            .then(({ data }) => {
                setUserInformation(data.data);
            })
            .catch(() => {
                setUserInformation([]);
            });
    };

    useEffect(() => {
        getInformation();
    }, []);

    return (
        <div className="p-4">
            {/* Table for desktop & tablet */}
            <div className="overflow-x-auto rounded-lg border border-black shadow-sm hidden sm:block">
                <table className=" text-sm text-left">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-6 py-3 font-medium">Name</th>
                            <th className="px-6 py-3 font-medium hidden sm:table-cell">Description</th>
                            <th className="px-6 py-3 font-medium hidden sm:table-cell">Title</th>
                            <th className="px-6 py-3 font-medium hidden md:table-cell">LinkedIn</th>
                            <th className="px-6 py-3 font-medium hidden md:table-cell">GitHub</th>
                            <th className="px-6 py-3 font-medium hidden sm:table-cell">Phone</th>
                            <th className="px-6 py-3 font-medium hidden sm:table-cell">Birth Date</th>
                            <th className="px-6 py-3 font-medium">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {userInformations.map((i) => (
                            <tr key={i.id}>
                                <td className="px-6 py-4 font-medium">{i.name}</td>
                                <td className="px-6 py-4  hidden sm:table-cell">{i.description}</td>
                                <td className="px-6 py-4  hidden sm:table-cell">{i.title}</td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    {i.social_links?.linkedin && (
                                        <Link
                                            to={i.social_links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            LinkedIn
                                        </Link>
                                    )}
                                </td>
                                <td className="px-6 py-4 hidden md:table-cell">
                                    {i.social_links?.github && (
                                        <Link
                                            to={i.social_links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline"
                                        >
                                            GitHub
                                        </Link>
                                    )}
                                </td>
                                <td className="px-6 py-4 hidden sm:table-cell">{i.phone_number}</td>
                                <td className="px-6 py-4 hidden sm:table-cell">{i.date_of_birth}</td>
                                <td className="px-6 py-4">
                                    <Link
                                        to={`/admin/informations/${i.id}`}
                                        className="inline-flex   px-3 py-1.5 text-sm font-medium bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                                    >
                                        Edit
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Cards for mobile */}
            <div className="sm:hidden ">
                {userInformations.map((i) => (
                    <div key={i.id} className="bg-white rounded-lg shadow p-4 border border-gray-200">
                        <p><strong>Name:</strong> {i.name}</p>
                        <p><strong>Description:</strong> {i.description}</p>
                        <p><strong>Title:</strong> {i.title}</p>
                        {i.social_links?.linkedin && (
                            <p>
                                <strong>LinkedIn:</strong>{" "}
                                <Link
                                    to={i.social_links.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    LinkedIn
                                </Link>
                            </p>
                        )}
                        {i.social_links?.github && (
                            <p>
                                <strong>GitHub:</strong>{" "}
                                <Link
                                    to={i.social_links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    GitHub
                                </Link>
                            </p>
                        )}
                        <p><strong>Phone:</strong> {i.phone_number}</p>
                        <p><strong>Birth Date:</strong> {i.date_of_birth}</p>
                        <Link
                            to={`/admin/informations/${i.id}`}
                            className="inline-block mt-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-all"
                        >
                            Edit
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

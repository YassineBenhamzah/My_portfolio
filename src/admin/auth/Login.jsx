import React, { useRef, useState } from "react";
import messi from "../../images/messi.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";

export default function Login() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken, token } = useStateContext();
    const [errors, setErrors] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setErrors({}); //Before sending a new login request, you clear any old error messages from previous attempts (like “invalid credentials”).
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate("/admin");
            })
            .catch((error) => {
                console.log(error);
                const response = error.response;
                if (response) {
                    if (response.status === 422 && response.data.errors) {
                        // Validation errors (e.g., missing fields)
                        setErrors(response.data.errors); // Validation errors (e.g., missing fields)
                    } else if (response.status === 401) {
                        // Show the custom message
                        setErrors({ email: [response.data.message] }); // Unauthorized error (e.g., invalid credentials
                    }
                }
            });
    };

    // If token exists → don't show login page
    if (token) {
        return <Navigate to="/admin/dashboard" replace />;
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Left side image */}
                <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gray-200">
                    <img
                        src={messi}
                        alt="Login Visual"
                        className="max-w-full max-h-96 object-contain"
                    />
                </div>

                {/* Right side form */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
                        Admin Login
                    </h2>

                    <form className="space-y-4" onSubmit={onSubmit}>
                        {Object.keys(errors).length > 0 && (
                            <div className="text-red-600 mb-4">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        <div>
                            <label className="block mb-1 text-gray-600 font-medium">
                                Email
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="you@example.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block mb-1 text-gray-600 font-medium">
                                Password
                            </label>
                            <input
                                ref={passwordRef}
                                type="password"
                                placeholder="********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

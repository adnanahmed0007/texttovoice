import React, { useState } from 'react';
import "./Signup.css";
import axios from "axios";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:9923/authentication/api/signup",
                formData,
                { withCredentials: true }
            );
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });

            alert(response.data.message); // Show backend message
            console.log(response.data);

        } catch (error) {
            setFormData({
                name: "",
                email: "",
                phone: "",
                password: "",
                confirmPassword: ""
            });

            if (error.response?.data?.message) {
                alert(error.response.data.message);
            } else {
                alert("An unexpected error occurred");
            }
            console.log(error);
        }
    };

    return (
        <div className="signup-container">
            <h1 className="signup-title">Create an Account</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    autoComplete="new-password"
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;

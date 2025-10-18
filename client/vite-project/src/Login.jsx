import React, { useState } from 'react'
import "./Login.css"
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                "http://localhost:9923/authentication/api/login",
                formData, { withCredentials: true }
            );
            console.log(response.data);
            alert("Login successful");
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed");
        }
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete='email'
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    autoComplete='password'
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login


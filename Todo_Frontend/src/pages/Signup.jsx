import React, { useState, useContext } from "react";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

const Signup = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username.trim() || !email.trim() || !password.trim()) {
            setError('All Fields are required');
            setSuccess('');
            return;
        }


        try {
            const res = await axios.post(`${API_URL}/auth/signup`, { username, email, password });

            setToken(res.data.token);
            setSuccess('Signup Successful! Redirecting to login...');
            setError('');
            setTimeout(() => navigate('/login'), 2000);
        }
        catch (error) {
            setError(error.response?.data?.error || 'Signup Failed');
            setSuccess('');
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: '400px', backgroundColor: '#ffffff' }}>
                <h2 className="text-center mb-3">Sign Up</h2>


                {error && <p className="text-danger text-center">{error}</p>}
                {success && <p className="text-success text-center">{success}</p>}


                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button className="btn btn-success w-100 mb-2" type="submit">
                        Sign Up
                    </button>

                    </form>

                    <hr />
                    <p className="text-center">Already have an account?</p>
                    <button className="btn btn-primary w-100" onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Signup;
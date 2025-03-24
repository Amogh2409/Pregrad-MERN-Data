import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL;

const Login = () => {
    const { setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // ✅ New state for success message

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent form reload

        if (!email.trim() || !password.trim()) {
            setError('Email and Password are required');
            setSuccess(''); // Clear success message if error occurs
            return;
        }

        try {
            const res = await axios.post(`${API_URL}/auth/login`, { email, password });
            setToken(res.data.token);
            setSuccess('Login successful! Redirecting to dashboard...'); // ✅ Show success message
            setError(''); // Clear any previous error
            // setTimeout(() => navigate('/todos'), 2000); // Redirect after 2 sec
        } catch (error) {
            setError(error.response?.data?.error || 'Login failed');
            setSuccess(''); // Clear success message if error occurs
        }
    };

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-4 shadow-lg" style={{ width: '400px', backgroundColor: '#ffffff' }}>
                <h2 className="text-center mb-4">Login</h2>
                
                {/* ✅ Display messages */}
                {error && <p className="text-danger text-center">{error}</p>}
                {success && <p className="text-success text-center">{success}</p>} {/* ✅ Green success message */}

                <form onSubmit={handleLogin}>
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
                    <button className="btn btn-primary w-100 mb-2" type="submit">
                        Login
                    </button>
                </form>

                <hr />
                <button className="btn btn-success w-100" onClick={() => navigate('/signup')}>
                    Create New Account
                </button>
            </div>
        </div>
    );
};

export default Login;

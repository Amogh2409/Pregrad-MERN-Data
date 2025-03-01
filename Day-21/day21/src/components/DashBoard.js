import React from "react";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function Dashboard(){
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <div>
            <h2>Dashboard (protected Page)</h2>
            <button onClick={handleLogout}> Logout</button>
        </div>
    )
}
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate} from "react-router-dom";


export default function Login(){
    const {login} = useAuth();
    const navigate = useNavigate();


    const handleLogin = () => {
        login();  // set authification status to true
    
        navigate("/dashboard") // Redirect to dashboard
    };


    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}> Login</button>
        </div>
    );
}
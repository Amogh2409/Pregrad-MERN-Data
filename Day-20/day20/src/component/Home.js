import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    return (<div>
        <h1>
            Welcome to the Home Page
        </h1>
        <button onClick={() => navigate("/user/1")}>Go to user 1</button>
        <button onClick={() => navigate("/user/2")}>Go to user 2</button>
    </div>);
}
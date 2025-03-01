// 📂 src
//  ├── 📜 App.js
//  ├── 📂 components
//  │   ├── 📜 Home.js
//  │   ├── 📜 Dashboard.js
//  │   ├── 📜 Login.js
//  │   ├── 📜 ProtectedRoute.js
//  ├── 📂 context
//  │   ├── 📜 AuthContext.js
//  ├── 📜 index.js


import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Welcome to Our App</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

import React from "react";
import { Link, Outlet } from "react-router-dom";
import DashbaordRoutes from "./DashboardRoutes";

export default function Dashboard(){
    return(
        <div>
            <h1>DashBoard</h1>
            <nav>
                <Link to="profile">Profile</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <Outlet />
            <DashbaordRoutes />
        </div>
    );
}


// 📂 src
//  ├── 📜 App.js
//  ├── 📂 components
//  │   ├── 📜 Home.js
//  │   ├── 📜 Dashboard.js
//  │   ├── 📜 DashboardRoutes.js
//  │   ├── 📜 Profile.js
//  │   ├── 📜 Settings.js
//  ├── 📜 index.js




// -> Home
//dashboard -> Dashboard(default)
//dashboard/profile -> Dashboard + profile
//dashboard/settings -> Dashboard + settings

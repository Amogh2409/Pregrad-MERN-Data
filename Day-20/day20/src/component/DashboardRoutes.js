import React from "react";
import { Routes,Route } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";



export default function DashbaordRoutes(){
    return(
        <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
        </Routes>
    );
}
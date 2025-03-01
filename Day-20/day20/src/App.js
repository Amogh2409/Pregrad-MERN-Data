import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Dashboard from "./components/DashBoard";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoutes";


export default function App(){
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>

            {/* Protected Path (Onlt accessible if you logged in) */}

            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>

        </Routes>
      </Router>
    </AuthProvider>
  )
}
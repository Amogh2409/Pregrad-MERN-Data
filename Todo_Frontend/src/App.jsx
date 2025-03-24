import React from 'react';
import { AuthProvider, useAuth} from './context/AuthContext';
import { BrowserRouter as  Router, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {


  return (

    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" />}></Route>
          {/* <Route path="/todos" element={<ProtectedRoute><Todos /></ProtectedRoute>} /> */}
        </Routes>
      </Router>
    </AuthProvider>

  );
}

function ProtectedRoute({ children }){
  const {token} = useAuth();
  return token ? children : <Navigate to="/login" />;
}

export default App;

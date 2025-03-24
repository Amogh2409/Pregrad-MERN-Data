import React, { createContext, useState, useEffect, useContext } from 'react';


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('Token') || '');

    useEffect(()=>{
        if(token) {
            localStorage.setItem('token', token);
        }
        else{
            localStorage.removeItem('token');
        }
    }, [token]);


    const login = (newToken) => {
        setToken(newToken);
    }
    const logout = () => {
        setToken('');
    };

    return(
        <AuthContext.Provider value={{token, setToken, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
    

}

export const useAuth = () => {
    return useContext(AuthContext);
}
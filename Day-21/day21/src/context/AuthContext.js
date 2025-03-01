import React, {createContext, useState, useContext} from "react";

const AuthContext = createContext(); // This creates a context object

export function AuthProvider({ children}){  
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //function to login;

    const login = () => setIsAuthenticated(true);

    const logout = () => setIsAuthenticated(false);


    // here authcontext.provider is used to provide the authentication 
    // state to its children
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children} 
            
        </AuthContext.Provider>
    );
}

export function useAuth(){
    return useContext(AuthContext); // this provides the current authentication state
}
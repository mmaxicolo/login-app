import { createContext, useContext, useState, useEffect } from "react";

import { registerRequest, loginRequest } from "../api/auth.js";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const signup = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res);
            setUser(res.data)
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data);
        }
    }
    const login = async (user) => {
        try {
            const res = await loginRequest;
        } catch (error) {
            
        }
    }

    return (
        <AuthContext.Provider value={{
            signup,
            user,
            errors,
            isAuthenticated,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
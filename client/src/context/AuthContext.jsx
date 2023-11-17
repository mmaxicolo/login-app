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
            const res = await loginRequest(user);
            console.log(res);
            setUser(res.data);
            setIsAuthenticated(true);
            console.log(res.headers["set-cookie"]);
        } catch (error) {
            setErrors(error.response.data);
        }
    }
    useEffect(() => {
        if(errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer);
        }
    },[errors])

    return (
        <AuthContext.Provider value={{
            signup,
            login,
            user,
            errors,
            isAuthenticated,
        }}>
            {children}
        </AuthContext.Provider>
    )
}
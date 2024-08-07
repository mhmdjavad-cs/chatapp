import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('authToken'));
    const [IsAuthenticated, setIsAuthenticated] = useState(!!token);

    useEffect(() => {
      if(token){
        localStorage.setItem("authToken", token);
      }else{
        localStorage.removeItem("authToken");
      }
    
    }, [token])
    

    return <AuthContext.Provider value={{token, setToken, IsAuthenticated, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>


}






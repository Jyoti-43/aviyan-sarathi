import React, { createContext, useState , useContext} from 'react'
const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user , setUser] =useState(null);
    
    const login = (user)=>{
        setUser(user)
    }
    const logout = (user)=>{
        setUser(user)
    }
  return (
    <AuthContext.Provider value ={{user , login , logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () =>{
    return useContext
}
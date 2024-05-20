import React, { createContext, useState , useContext} from 'react'
import AuthContext from './AuthContext'; 



const AuthProvider = ({children}) => {
    const [user , setUser] =useState(null);
    
    const login = (user)=>{
        setUser(user)
    }
    const logout = (user)=>{
        setUser(user)
    }
  return (
    <AuthContext.Provider value ={{user , setUser ,login , logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider


import {Navigate, useLocation} from 'react-router-dom'
import AuthProvider from './AuthProvider'
import { useContext } from 'react'

const RequiredAuth = ({children}) => {
    const location =useLocation()
    const auth = useContext(AuthProvider)
    if(!auth.user){
        return <Navigate to ='/login' state={{path: location.pathname}}/>
    }
  return children
}

export default RequiredAuth
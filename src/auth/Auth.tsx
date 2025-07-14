import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
    const token = null
  return token ? <Outlet/> : <Navigate replace to="/login"/>
  
}

export default Auth
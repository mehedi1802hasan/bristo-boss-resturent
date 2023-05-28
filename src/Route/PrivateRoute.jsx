import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading){
return <progress className="w-56 progress"></progress>

    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
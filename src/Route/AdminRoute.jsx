import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading]=useAdmin()
    const location=useLocation()
    const {user,loading}=useContext(AuthContext)
    if(loading && isAdminLoading){
return <progress className="w-56 progress"></progress>

    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
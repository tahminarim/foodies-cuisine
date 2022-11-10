import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    if (loading) {
        return <>
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div></>
    }
    if (user) {
        return children;
    }
    if (!user) {
        return <button className="btn  text-4xl loading btn-warning">Please login</button>
    }

    return <Navigate state={{ from: location }} replace> </Navigate>
};

export default PrivateRoute;
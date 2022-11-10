import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    const location = useLocation();
if(loading){
    return <button className="btn loading btn-warning">loading</button>
}
    if(user){
        return children;
    }
    if(!user){
        return <button className="btn loading btn-warning">Please login</button>
    }
    
    return <Navigate state={{from:location}} replace> </Navigate>
};

export default PrivateRoute;
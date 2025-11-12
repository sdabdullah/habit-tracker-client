import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingSpiner from '../Pages/LoadingSpiner';

const PrivateRouter = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;
import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import PageLoader from '../Pages/PageLoader';

const PrivateRouter = ({ children }) => {

    const { user, loading } = use(AuthContext);

    const location = useLocation();

    if (loading) {
        return <PageLoader></PageLoader>
    }

    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRouter;
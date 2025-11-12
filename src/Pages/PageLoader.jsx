import React from 'react';
import { MoonLoader } from 'react-spinners';

const PageLoader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <MoonLoader></MoonLoader>
        </div>
    );
};

export default PageLoader;
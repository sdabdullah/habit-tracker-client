import React from 'react';
import { ClockLoader } from 'react-spinners';

const LoadingSpiner = () => {
    
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <ClockLoader color='#22d3ee' />
        </div>
    );
};

export default LoadingSpiner;
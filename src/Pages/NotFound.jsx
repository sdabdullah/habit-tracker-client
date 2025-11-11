import React from 'react';
import erroImg from '../assets/error-404.png'

const NotFound = () => {
    return (
        <div className='bg-[#f2f3ff] min-h-screen'>
            <div className='p-10'>
                <div className='flex justify-center items-center'>
                    <img className='lg:w-xl ' src={erroImg} alt="" />
                </div>
                <h2 className='text-center text-2xl text-gray-600 mt-5'>Oops! The page you're looking for doesn't exist. </h2>
            </div>

        </div>
    );
};

export default NotFound;
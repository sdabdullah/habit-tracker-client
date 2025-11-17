import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const HabitDetails = () => {
    const {user} = use(AuthContext)
    const recentHabitData = useLoaderData();

    return (
        <div className='bg-[#f7f9fb] py-15'>
            <div className='md:max-w-4xl mx-auto px-4'>

                <div className='rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden'>
                    <img className='w-full h-64 object-cover' src={user? recentHabitData.imageURL : "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800"} alt="" />

                    <div className='flex flex-col space-y-1.5 p-6'>
                        <div className='flex items-start justify-between'>
                            <div className=''>
                                <h2 className='font-semibold tracking-tight text-2xl mb-2'>{recentHabitData?.title}</h2>
                                <div className='flex items-center space-x-4 text-sm text-slate-600'>
                                    <h2 className='inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 font-medium'>{recentHabitData?.category}</h2>
                                    <span className='flex items-center'>Creator: {recentHabitData?.name}</span>
                                </div>
                            </div>
                            <div className='text-center'>
                                <span className='text-4xl font-bold text-violet-600'>1</span>
                                <h2 className='text-sm text-slate-600'>Day Streak</h2>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 pt-0 space-y-6'>
                        <h2 className='text-lg font-semibold text-slate-900 mb-2'>Discription</h2>
                        <p className='text-slate-600'>{recentHabitData?.description}</p>

                        <div className='flex justify-center'>
                            <button className='text-white cursor-pointer items-center justify-center text-sm font-medium  h-11 rounded-md bg-violet-600 px-8 w-full md:w-auto'>Mark as Complete Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HabitDetails;
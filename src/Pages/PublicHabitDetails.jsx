import React from 'react';
import { useLoaderData } from 'react-router';
// import { useLoaderData } from 'react-router';

const PublicHabitDetails = () => {
    const publicHabit = useLoaderData();
    console.log(publicHabit);
    

    return (
        <div className='bg-[#f7f9fb] py-15'>
            <div className='md:max-w-4xl mx-auto px-4'>

                <div className='rounded-lg border border-gray-300 bg-white shadow-sm overflow-hidden'>
                    <img className='w-full h-64 object-cover' src={publicHabit?.imageURL} alt="" />

                    <div className='flex flex-col space-y-1.5 p-6'>
                        <div className='flex items-start justify-between'>
                            <div className=''>
                                <h2 className='font-semibold tracking-tight text-3xl mb-2'>{publicHabit?.title}</h2>
                                <div className='flex items-center space-x-4 text-sm text-slate-600'>
                                    <h2 className='inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 font-medium'>{publicHabit?.category}</h2>
                                    <span className='flex items-center'>Createtor: {publicHabit?.name}</span>
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
                        <p className='text-slate-600'>{publicHabit?.description}</p>

                        <div className='flex justify-center'>
                            <button className='text-white items-center justify-center text-sm font-medium  h-11 rounded-md bg-violet-600 px-8 w-full md:w-auto'>Mark as Complete Today</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PublicHabitDetails;
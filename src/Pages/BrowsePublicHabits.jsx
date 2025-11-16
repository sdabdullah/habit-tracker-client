import React from 'react';
import { useLoaderData } from 'react-router';
import PublicHabitcard from '../component/publicHabitcard';

const BrowsePublicHabits = () => {
    const publicHabitData = useLoaderData()
    return (
        <div>
            <div className='py-20 bg-white'>
                <div className='w-11/12 mx-auto space-y-15'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl md:text-5xl font-bold'>Featured Habits</h2>
                        <p className='text-xl text-slate-600'>Discover the newest habits from our community</p>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                        {
                            publicHabitData.map(pub_habits => <PublicHabitcard key={pub_habits._id} pub_habits={pub_habits}></PublicHabitcard>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BrowsePublicHabits;
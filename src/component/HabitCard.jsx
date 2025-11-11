import React from 'react';

const HabitCard = () => {
    return (
        <div>
            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div>
                    <h2 className='text-2xl font-semibold '>Work</h2>
                    <p className='text-sm text-slate-500'>Work</p>
                </div>
                <p className=' text-slate-700'>Habit Short Description</p>

                <div className='flex justify-between'>
                    <p className='text-sm text-slate-500'>Creator Name</p>
                    <button className="bg-[#7b3aec] text-white rounded-md px-3 py-1">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default HabitCard;
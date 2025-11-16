import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const HabitCard = ({ rc_habits }) => {
    const { user } = use(AuthContext)

    return (
        <div>
            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div>
                    <h2 className='text-2xl font-semibold '>{rc_habits.title}</h2>
                    <p className='text-sm text-slate-500'>{rc_habits.category}</p>
                </div>
                <p className=' text-slate-700'>{rc_habits.description}</p>

                <div className='flex justify-between'>
                    <p className='text-sm text-slate-500'>{user?.displayName}</p>
                    <Link to='/habit-details'>
                        <button className="bg-[#7b3aec] text-white rounded-md px-3 py-1 cursor-pointer">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HabitCard;
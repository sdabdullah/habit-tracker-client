import { Link } from 'react-router';

const PublicHabitcard = ({ pubHabits }) => {
    
    return (
        <div>
            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div>
                    <h2 className='text-2xl font-semibold '>{pubHabits?.title}</h2>
                    <p className='text-sm text-slate-500'>{pubHabits?.category}</p>
                </div>
                <p className=' text-slate-700'>{pubHabits?.description}</p>

                <div className='flex justify-between'>
                    <p className='text-sm text-slate-500'>Createtor: {pubHabits?.creator_info}</p>
                    
                        <Link to={`/publicHabit-details/${pubHabits?._id}`} className="bg-[#7b3aec] text-white rounded-md px-3 py-1 cursor-pointer">View Details</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default PublicHabitcard;
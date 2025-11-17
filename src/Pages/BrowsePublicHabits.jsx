import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import PublicHabitcard from '../component/publicHabitcard';

const BrowsePublicHabits = () => {
    const publicHabitData = useLoaderData()
    console.log(publicHabitData);
    
    // const [habits, setHabits] = useState([]);
    // const [filteredHabits, setFilteredHabits] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // const [categoryFilter, setCategoryFilter] = useState('all');
    return (
        <div>
            <div className='py-15 bg-[#f5f8fa]'>
                <div className='w-11/12 mx-auto'>
                    <div className='mb-10'>
                        <h2 className='text-3xl md:text-4xl font-bold px-4'>Browse Public Habits</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mb-8 px-4">
                        <div className="relative flex-1">
                            <div>
                                <input
                                    placeholder="Search habits..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm pl-10 focus-visible:outline-none focus-visible:ring-2"
                                />
                            </div>
                        </div>
                        <div>

                            <select
                                className="select w-full border border-slate-300 h-10 rounded-md bg-white px-3 py-2 text-sm md:w-[200px]" name='category'>

                                <option>All Categories</option>
                                <option>Morning</option>
                                <option>Work</option>
                                <option>Fitness</option>
                                <option>Evening</option>
                                <option>Study</option>
                            </select>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                        {
                            publicHabitData.map(pubHabits => <PublicHabitcard key={pubHabits._id} pubHabits={pubHabits}></PublicHabitcard>)
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BrowsePublicHabits;
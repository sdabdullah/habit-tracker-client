import React, { use, useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';


const MyHabits = () => {
    const { user } = use(AuthContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://habit-tracker-api-sever.vercel.app/habits?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setHabits(data)
                })
        }
    }, [user?.email])

    // const myHabitsData = useLoaderData()

    const deleteSingleHabitFromTable = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://habit-tracker-api-sever.vercel.app/habits/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);

                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your habit has been deleted.",
                                icon: "success"
                            });

                            const getHabitsAfterDeleteFromTable = habits.filter(habit => habit._id !== _id);
                            setHabits(getHabitsAfterDeleteFromTable);
                        }

                    })


            }
        });
    }

    return (
        <div className='bg-[#f7f9fc] py-15'>
            <div className='w-11/12 mx-auto'>
                <div className='mb-10'>
                    <h2 className='text-3xl md:text-4xl font-bold px-4'>My Habits {habits.length}</h2>
                </div>

                <div className="overflow-x-auto rounded-box bg-base-100 rounded-lg border border-gray-300 shadow-sm">

                    <table className="table">
                        {/* head */}
                        <thead className='bg-slate-50 border-b'>
                            <tr>
                                <th></th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-slate-900'>Title</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-slate-900'>Category</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-slate-900'>Current Streak</th>
                                <th className='px-6 py-4 text-left text-sm font-semibold text-slate-900'>Created Date</th>
                                <th className='px-6 py-4 text-center text-sm font-semibold text-slate-900'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {/* row 1 */}
                            {
                                habits.map((habit, index) =>
                                    <tr key={habit._id}>
                                        <th>{index + 1}</th>
                                        <td className='px-6 py-6'>{habit.title}</td>
                                        <td className='px-6 py-6'>{habit.category}</td>
                                        <td className='px-6 py-6 text-sm'> <span className='inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-100 text-violet-800'>{habit.currentStreak}</span> </td>
                                        <td className='px-6 py-6'>{habit.createdDate}</td>

                                        <td className='px-6 py-6'>
                                            <div className='flex items-center justify-center space-x-2'>
                                                
                                                {/* -------------Habit Complete Button------------- */}
                                                <button
                                                    className='inline-flex items-center justify-center text-sm font-medium gap-1 border border-gray-300 h-9 rounded-md px-3 cursor-pointer'><BsCheck2Circle /> Complete
                                                </button>

                                                {/* -------------Update Habit Button------------- */}
                                                <div>
                                                    <Link to={`/update-habit/${habit._id}`}>
                                                        <button
                                                            className='inline-flex items-center justify-center text-sm font-medium gap-1 border border-gray-300 h-9 rounded-md px-3 cursor-pointer'><FiEdit />
                                                        </button>
                                                    </Link>
                                                </div>

                                                {/* -------------Habit Delete Button------------- */}
                                                <button onClick={() => deleteSingleHabitFromTable(habit._id)}
                                                    className='inline-flex items-center justify-center text-sm font-medium gap-1 border border-gray-300 h-9 rounded-md px-3 cursor-pointer'><RiDeleteBinLine />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyHabits;
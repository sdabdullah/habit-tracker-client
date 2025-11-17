import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateHabit = () => {

    const { user } = use(AuthContext);

    const updateHabitData = useLoaderData()
    const dataUpdate = updateHabitData;
    // console.log(updateHabitData);

    const handleUpdateHabitData = (e) => {
        e.preventDefault();

        const form = e.target;
        const habitTitle = form.habitTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const time = form.time.value;
        const imageURL = form.imageURL.value;
        

        // console.log({ habitTitle, description, category, time, email, name });

        const updateNewHabit = {
            title: habitTitle,
            description: description,
            category: category,
            reminder_time: time,
            imageURL: imageURL,
        }

        fetch(`http://localhost:3000/habits/${dataUpdate._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateNewHabit)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('After Puted Habit', data);
                if (data) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your habit has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!, Please check your internet connection",
                    });
                }
            })
    }


    return (
        <div className='bg-[#f6f9fb]'>
            <div className='flex justify-center items-center px-10 py-15'>
                <title>Habit Tracker - Login</title>

                <div className="card bg-[#ffffff] w-full max-w-2xl border shadow-sm border-[#e5e7eb]">

                    <div className="card-body">

                        <div>
                            <h2 className='font-bold text-3xl'>Update Habit</h2>
                            <p className='text-[16px] text-gray-500 my-2'>Make changes to your habit</p>
                        </div>

                        <form onSubmit={handleUpdateHabitData}>
                            <fieldset className="fieldset space-y-3 mt-2">

                                <div>
                                    <label className="label text-sm text-black">Habit Title</label>
                                    <input defaultValue={dataUpdate?.title}
                                        type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='habitTitle' placeholder="e.g., Morning walk" />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Description </label>

                                    <textarea defaultValue={dataUpdate?.description}
                                        className="textarea h-24 w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='description' placeholder="Describe your habit and why it's important to you...">
                                    </textarea>
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Category</label>

                                    <select required defaultValue={dataUpdate?.category}
                                        className="select w-full border-gray-300 mt-2" name='category'>

                                        <option disabled={true}>Select a category</option>
                                        <option>Morning</option>
                                        <option>Work</option>
                                        <option>Fitness</option>
                                        <option>Evening</option>
                                        <option>Study</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Reminder Time</label>

                                    <input
                                        defaultValue={dataUpdate?.reminder_time}
                                        id="reminderTime" type="time" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='time' />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Re-upload Image (Optional)</label>
                                    <input
                                        defaultValue={dataUpdate?.imageURL}
                                        type="url" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='imageURL' placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Email</label>
                                    <input readOnly value={user?.email}
                                        type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='email' placeholder={user?.email} />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Name</label>
                                    <input
                                        readOnly type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='name' defaultValue={user?.displayName}
                                    />
                                </div>


                                <div className='flex justify-between gap-5'>
                                    <div className='w-full'>
                                        <button type="submit" className="btn w-full text-white border-none rounded-lg mt-4 bg-[#7b3aec] border-0 text-sm">Update Habit</button>

                                    </div>
                                    <div className='w-full'>
                                        <Link to='/my-habits'>
                                            <button type="submit" className="btn w-full rounded-lg mt-4 bg-[#ffffff] border text-sm">Cancel</button>
                                        </Link>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateHabit;
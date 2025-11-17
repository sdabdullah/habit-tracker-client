import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const AddHabit = () => {
    const { user } = use(AuthContext);
    const navigate = useNavigate()

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [reminderTime, setReminderTime] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleAddNewHabit = (e) => {
        e.preventDefault();

        const form = e.target;
        const habitTitle = form.habitTitle.value;
        const description = form.description.value;
        const category = form.category.value;
        const time = form.time.value;
        const email = form.email.value;
        const name = form.name.value;

        console.log({ habitTitle, description, category, time, email, name });

        const addNewHabit = {
            title: habitTitle,
            description: description,
            category: category,
            reminder_time: time,
            imageURL: imageURL,
            email: email,
            name: name,
            created_at: new Date(),
            currentStreak: '12 days',
            creator_info: user?.displayName,
            createdDate: new Date().toLocaleDateString("en-GB")

        }

        fetch('http://localhost:3000/habits', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewHabit)
        })
            .then(res => res.json())
            .then(data => {
                console.log('After added Habit', data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your habit has been added",
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

                navigate('/my-habits')
            })
    }

    return (
        <div className='bg-[#f6f9fb]'>
            <div className='flex justify-center items-center px-10 py-15'>
                <title>Habit Tracker - Login</title>

                <div className="card bg-[#ffffff] w-full max-w-2xl border shadow-sm border-[#e5e7eb]">

                    <div className="card-body">

                        <div>
                            <h2 className='font-bold text-3xl'>Create New Habit</h2>
                            <p className='text-[16px] text-gray-500 my-2'>Start building a better you, one habit at a time</p>
                        </div>

                        <form onSubmit={handleAddNewHabit}>
                            <fieldset className="fieldset space-y-3 mt-2">

                                <div>
                                    <label className="label text-sm text-black">Habit Title</label>
                                    <input required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='habitTitle' placeholder="e.g., Morning walk"
                                    />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Description </label>

                                    <textarea required
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} className="textarea h-24 w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='description' placeholder="Describe your habit and why it's important to you...">
                                    </textarea>
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Category</label>

                                    <select required defaultValue="Select a category"
                                        value={category.option} onChange={setCategory} className="select w-full border-gray-300 mt-2" name='category'>

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

                                    <input required
                                        value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} id="reminderTime" type="time" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='time'
                                    />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Upload Image (Optional)</label>
                                    <input
                                        value={imageURL}
                                        onChange={(e) => setImageURL(e.target.value)} type="url" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='imageURL' placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Email</label>
                                    <input
                                        readOnly type="email" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='email' defaultValue={user?.email}
                                    />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Name</label>
                                    <input
                                        readOnly type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='name' defaultValue={user?.displayName}
                                    />
                                </div>

                                <button type="submit" className="btn text-white border-none rounded-lg mt-4 bg-[#7b3aec] border-0 text-sm">Create Habit</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHabit;
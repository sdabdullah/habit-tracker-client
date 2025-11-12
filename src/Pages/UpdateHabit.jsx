import React, { use, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const UpdateHabit = () => {

    const { user } = use(AuthContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [reminderTime, setReminderTime] = useState('');

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

                        <form>
                            <fieldset className="fieldset space-y-3 mt-2">

                                <div>
                                    <label className="label text-sm text-black">Habit Title</label>
                                    <input value={title}
                                        onChange={(e) => setTitle(e.target.value)} type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='habitTitle' placeholder="e.g., Morning walk" />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Description </label>

                                    <textarea value={description}
                                        onChange={(e) => setDescription(e.target.value)} className="textarea h-24 w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='description' placeholder="Describe your habit and why it's important to you...">
                                    </textarea>
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Category</label>

                                    <select value={category} onValueChange={setCategory} defaultValue="Select a category" className="select w-full border-gray-300 mt-2 placeholder: text-gray-800" name='category'>

                                        <option>Select a category</option>
                                        <option>Chrome</option>
                                        <option>FireFox</option>
                                        <option>Safari</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Reminder Time</label>

                                    <input value={reminderTime} onChange={(e) => setReminderTime(e.target.value)} id="reminderTime" type="time" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='time' />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Email</label>
                                    <input value={user?.email}
                                        disabled type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='photoURL' placeholder={user?.email} />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Your Name</label>
                                    <input value={user.name}
                                        disabled type="password" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='password' placeholder={user?.displayName} />
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

export default UpdateHabit;
import React, { use } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleSignOutUser = () => {
        signOutUser()
        .then(()=>{
            toast.success('Sign Out Success')
            navigate('/')
        })
        .catch((error)=> {
            console.log(error);
            toast.error('Somthing is wrong')
        })
    }

    const navLinks = <>
        <NavLink to='/' className='font-semibold p-3 text-[17px]' ><li> Home </li></NavLink>
        <NavLink to='/add-habit' className='p-3 text-[17px] font-semibold'><li>Add Habit</li></NavLink>
        <NavLink to='/my-habit' className='p-3 text-[17px] font-semibold'><li>My Habits</li></NavLink>
        <NavLink to='/browse-public-habits' className='p-3 text-[17px] font-semibold'><li>Browse Public Habits</li></NavLink>
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-[#7b3aec] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0} className="menu menu-sm dropdown-content bg-[#ffffff] border border-[#7b3aec] rounded-box z-10 mt-3 w-52 p-2 shadow">
                            {navLinks}

                        </ul>
                    </div>

                    <Link to='/'>
                        <div className="flex items-center space-x-2">
                            <div className="w-9 h-9 bg-linear-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">H</span>
                            </div>
                            <span className="text-xl font-bold">Habit Tracker</span>
                        </div>
                    </Link>

                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {
                    user ?
                        <div className='flex items-center gap-3'>
                            <div className="dropdown z-10 dropdown-end space-x-2">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL} />
                                    </div>
                                </div>

                                <ul tabIndex="-1" className="border menu menu-sm dropdown-content bg-base-100 shadow-sm rounded-box mt-3 w-52 p-2">

                                    <div className='space-y-2 text-[16px] px-3'>

                                        <p>{user?.displayName}</p>
                                        <p>{user?.email}</p>

                                        <p onClick={handleSignOutUser} className='cursor-pointer flex items-center gap-2'><FiLogOut />Logout</p>
                                    </div>

                                    {/* <button onClick={logOutUser} className="rounded-2xl font-semibold border-0 text-md">Logout</button> */}
                                </ul>
                            </div>
                        </div> :



                        <div className='flex items-center space-x-2'>
                            <NavLink to='/login' className='btn border-2 bg-white rounded-md font-semibold text-[16px]'>Login</NavLink>

                            <NavLink to='/register' className="bg-[#7b3aec] btn border-gray-300 text-white rounded-md  ">Signup</NavLink>
                        </div>
                }





            </div>
        </div>
    );
};

export default Navbar;
import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
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

                <div className='flex items-center gap-3'>
                    <div className="dropdown z-10 dropdown-end space-x-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src='https://scontent.fdac177-1.fna.fbcdn.net/v/t39.30808-1/431791220_2140807236256918_636841911573142717_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=NG_0Y8bVxVsQ7kNvwGn96ET&_nc_oc=AdnxQlz_cW5a8nIvQtUxpXIEEGx6Yk4eIe-ioORYujW-8IAtKmiKSqHFcQkGq-pqTZ0&_nc_zt=24&_nc_ht=scontent.fdac177-1.fna&_nc_gid=mDaDwwzobZYUPuvpJvK7Uw&oh=00_AfjCGL53ZBc9luNhIk6T03sYjpaQPnPyivQoMZk9XSiHHg&oe=6917EAF7' />
                            </div>
                        </div>

                        <ul tabIndex="-1" className="border menu menu-sm dropdown-content bg-base-100 shadow-sm rounded-box mt-3 w-52 p-2">

                            <div className='space-y-2 text-[16px] px-3'>

                                <p>Name</p>
                                <p>email</p>

                                <p className='cursor-pointer flex items-center gap-2'><FiLogOut />Logout</p>
                            </div>

                            {/* <button onClick={logOutUser} className="rounded-2xl font-semibold border-0 text-md">Logout</button> */}
                        </ul>
                    </div>

                    {/* <Link to='/my-profile'>
                        <img className='ring-primary ring-offset-base-100 w-10 lg:w-14 rounded-full border-2 border-[#22d3ee]' src={user?.photoURL} alt="" />
                    </Link> */}

                </div>



                <div className='flex items-center space-x-2'>
                    <NavLink to='/login' className='btn border-2 bg-white rounded-md font-semibold text-[16px]'>Login</NavLink>

                    <NavLink to='/register' className="bg-[#7b3aec] btn border-gray-300 text-white rounded-md  ">Signup</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
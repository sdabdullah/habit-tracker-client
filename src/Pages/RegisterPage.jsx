import React, { use, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const RegisterPage = () => {
    const { signInWithGoogle, createUser, updateUser, setUser } = use(AuthContext)
    const [showPassIcon, setShowPassIcon] = useState();
    const navigate = useNavigate();

    const [passwordValidation, setPasswordValidation] = useState('')

    const handleUserRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // console.log({ name, email, photoURL, password });

        const checkPasswordValidation = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (!checkPasswordValidation.test(password)) {
            setPasswordValidation('Please enter at least 6 characters and include at least one uppercase & lowercase letter.');
            return;
        } else {
            setPasswordValidation('');
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photoURL })
                        navigate('/browse-public-habits')
                        toast.success('Regitration Success')
                    })
                    .catch((error) => {
                        // console.log(error);
                        toast.error('Something is wrong in', error)
                    })
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage);
                toast.error('Something is wrong in', errorCode, errorMessage)
            })
    }

    const handleRegisterWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success('Login Success')
                // console.log(result.user);
            })
            .catch(error => {
                // console.log(error);
                toast.error('Incorrect login info', error)
            })
    }

    return (
        <div className='bg-[#f6f9fb]'>
            <div className='flex justify-center items-center px-10 py-15'>
                <title>Habit Tracker - Login</title>

                <div className="card bg-[#ffffff] w-full max-w-md border shadow-sm border-[#e5e7eb] pt-6">

                    <h2 className='font-semibold text-3xl text-center'>Create Account</h2>
                    <p className='text-center text-gray-500 mt-2'>Start your habit-building journey today</p>

                    <div className="card-body">
                        <form onSubmit={handleUserRegister}>
                            <fieldset className="fieldset space-y-3">

                                <div>
                                    <label className="label text-sm text-black">Name</label>
                                    <input type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='name' placeholder="Name" />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Email</label>
                                    <input type="email" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='email' placeholder="your@email.com" />
                                </div>

                                <div>
                                    <label className="label text-sm text-black">Photo URL</label>
                                    <input type="text" className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='photoURL' placeholder="Photo URL" />
                                </div>

                                <div className='relative'>
                                    <label className="label text-sm text-black">Password</label>
                                    <input type={showPassIcon ? "text" : "password"} className="input w-full border-gray-300 mt-2 placeholder:text-gray-800 text-black" name='password' placeholder="Password" />

                                    <span onClick={() => setShowPassIcon(!showPassIcon)} className="absolute top-[42px] right-[18px] cursor-pointer z-50">
                                        {showPassIcon ? <IoEyeOff size={15} ></IoEyeOff> : <FaEye size={15} ></FaEye>}
                                    </span>
                                </div>

                                {
                                    passwordValidation && <p className='text-red-600 text-sm'>{passwordValidation}</p>
                                }

                                <button type="submit" className="btn text-white border-none rounded-lg mt-4 bg-[#7b3aec] border-0 text-lg">Signup</button>

                                <div className="flex justify-center items-center text-center gap-2 mt-2 text-sm">
                                    <div className='h-px w-30 bg-gray-500'></div>
                                    <p className='text-gray-500'>Or continue with</p>
                                    <div className='h-px w-30 bg-gray-500'></div>
                                </div>
                            </fieldset>
                        </form>

                        <button

                            onClick={handleRegisterWithGoogle}

                            className="btn rounded bg-white border-gray-300">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>

                            Register with Google
                        </button>

                        <p className='text-center text-sm'> <span className="">Already have an account?</span> <Link className='font-semibold text-[#7b3aec] underline' to='/login'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
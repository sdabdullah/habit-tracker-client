import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { FiAward } from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';
import { SiStatista } from 'react-icons/si';

const WhyBuildCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div className='text-center space-y-5'>
                    <div className='mx-auto w-16 h-16 bg-linear-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
                        <span className=''><LuBrain size='40px' color='white'></LuBrain></span>
                    </div>

                    <h2 className='text-2xl font-semibold '>Better Focus</h2>

                    <p className=' text-slate-600 text-lg'>Build concentration and eliminate distractions through consistent daily practices.</p>
                </div>
            </div>

            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div className='text-center space-y-5'>
                    <div className='mx-auto w-16 h-16 bg-linear-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
                        <span className=''><FaRegHeart size='40px' color='white' /></span>
                    </div>
                    <h2 className='text-2xl font-semibold '>Reduced Stress</h2>
                    <p className=' text-slate-600 text-lg'>Create calming routines that help manage anxiety and promote mental wellness.</p>
                </div>
            </div>


            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div className='text-center space-y-5'>
                    <div className='mx-auto w-16 h-16 bg-linear-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
                        <span className=''> <SiStatista size='40px' color='white' /></span>
                    </div>
                    <h2 className='text-2xl font-semibold '>Increased Productivity</h2>
                    <p className=' text-slate-600 text-lg'>Accomplish more by establishing efficient workflows and time management habits.</p>
                </div>
            </div>



            <div className='rounded-lg bg-white border border-gray-200 text-slate-950 shadow-sm p-5 space-y-3 h-full hover:shadow-lg transition-shadow'>
                <div className='text-center space-y-5'>
                    <div className='mx-auto w-16 h-16 bg-linear-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mb-4'>
                        <span className=''> <FiAward size='40px' color='white' /></span>
                    </div>
                    <h2 className='text-2xl font-semibold '>Personal Growth</h2>
                    <p className=' text-slate-600 text-lg'>Transform yourself through small, consistent improvements every single day.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyBuildCard;
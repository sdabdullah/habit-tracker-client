import React from 'react';
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router';
import HabitCard from '../component/HabitCard';
import WhyBuildCard from '../component/WhyBuildCard';

const Home = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    className="h-[600px]"
                >
                    <SwiperSlide>
                        <div className="relative h-full bg-linear-to-r from-violet-600 to-indigo-600">
                            {/* <img className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="" /> */}

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Build{' '}
                                        <span className="text-yellow-300">
                                            <Typewriter
                                                words={['Better Habits', 'Stronger Streaks', 'Your Future']}
                                                loop={0}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={70}
                                                deleteSpeed={50}
                                                delaySpeed={1000}
                                            />
                                        </span>
                                    </h1>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Transform your life one habit at a time with our powerful tracking system
                                    </p>
                                    <Link to="/register">
                                        <button className="bg-white text-violet-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Start Your Journey
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full  bg-linear-to-r from-indigo-600 to-blue-600">
                            {/* <img className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="" /> */}

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Track Your Progress
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Visualize your streaks and celebrate every milestone
                                    </p>
                                    <Link to="/browse-public-habits">
                                        <button className="bg-white text-indigo-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Explore Habits
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative h-full bg-linear-to-r from-blue-600 to-cyan-600">
                            {/* <img className="absolute inset-0 w-full h-full object-cover opacity-20"
                                src="" /> */}

                            <div className="relative h-full flex items-center justify-center text-center px-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >
                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                        Join Our Community
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                        Share habits and inspire others on their journey
                                    </p>
                                    <Link to="/register">
                                        <button className="bg-white text-cyan-600 hover:bg-slate-100 rounded-lg px-4 py-2">
                                            Get Started Free
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Featured Habits Section */}

            <div className='py-20 bg-white'>
                <div className='w-11/12 mx-auto space-y-15'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl md:text-5xl font-bold'>Featured Habits</h2>
                        <p className='text-xl text-slate-600'>Discover the newest habits from our community</p>
                    </div>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                        <HabitCard></HabitCard>
                        <HabitCard></HabitCard>
                        <HabitCard></HabitCard>
                    </div>
                </div>


            </div>


            <div className='py-20  bg-[#f3f3ff]'>
                <div className='w-11/12 mx-auto space-y-15'>
                    <div className='text-center space-y-4'>
                        <h2 className='text-4xl md:text-5xl font-bold'>Why Build Habits?</h2>
                        <p className='text-xl text-slate-600'>Discover the transformative power of consistent daily practices</p>
                    </div>

                    <div className=''>
                        <WhyBuildCard></WhyBuildCard>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Home;
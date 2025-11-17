import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { LuLinkedin } from 'react-icons/lu';

const Footer = () => {
    return (
        <div>
            <footer className="bg-slate-900 text-white">
                <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-linear-to-br from-violet-600 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">H</span>
                                </div>
                                <span className="text-xl font-bold">Habit Tracker</span>
                            </div>
                            <p className="text-slate-400">
                                Build better habits, one day at a time. Track your progress and achieve your goals.
                            </p>
                        </div>


                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center space-x-2 text-slate-400">
                                    <CiMail size={16} />
                                    <span>contact@habitracker.com</span>
                                </li>
                                <li className="flex items-center space-x-2 text-slate-400">
                                    <FiPhone size={16} />
                                    <span>+880 1860 510096</span>
                                </li>
                                <li className="flex items-center space-x-2 text-slate-400">
                                    <CiLocationOn size={16} />
                                    <span>123 Airpot road, Rajshahi</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
                                >
                                    <FiFacebook size={20} />
                                </a>

                                <a
                                    href="https://x.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
                                >
                                    <FaXTwitter size={20} />
                                </a>

                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
                                >
                                    <FaInstagram size={20} />
                                </a>

                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
                                >
                                    <LuLinkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 text-sm">
                            © 2025 Habi Tracker. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-slate-400 text-sm transition-colors">
                                Terms & Conditions
                            </a>
                            <a href="#" className="text-slate-400 text-sm transition-colors">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
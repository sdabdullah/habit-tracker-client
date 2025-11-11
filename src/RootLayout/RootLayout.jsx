import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const RootLayout = () => {
    return (
        <div>
            <section>
                <header>
                    <Navbar></Navbar>
                </header>
            </section>

            <section>
                <main>
                    <Outlet></Outlet>
                </main>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default RootLayout;
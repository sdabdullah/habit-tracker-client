import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../component/Footer';
import PageLoader from '../Pages/PageLoader';

const RootLayout = () => {
    // const { state } = useNavigation();
    const navigation = useNavigation()
    return (
        <div>
            <section>
                <header>
                    <Navbar></Navbar>
                </header>
            </section>

            <section>
                <main>
                    {
                        navigation.state === 'loading' ? (<PageLoader></PageLoader>) :
                            <Outlet></Outlet>
                    }
                </main>
            </section>

            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default RootLayout;
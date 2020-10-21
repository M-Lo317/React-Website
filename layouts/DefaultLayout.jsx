import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </>

    );
};

export default DefaultLayout;
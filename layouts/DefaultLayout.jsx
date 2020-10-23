import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </>

    );
};

export default DefaultLayout;
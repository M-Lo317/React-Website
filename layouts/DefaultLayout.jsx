import React from 'react';

// Base
import '../pages/_app.jsx';

// Components
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const DefaultLayout = (props) => {
    return (
        <>
            <Header />
            <main className={props.classNames ? `page container ${props.classNames}` : `page container`}>
                {props.children}
            </main>
            <Footer />
        </>

    );
};

export default DefaultLayout;
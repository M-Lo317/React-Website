import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout.jsx';
import './_app.jsx';

const Home = () => {
    return (
        <DefaultLayout>
            <h2>
                Welcome to Mlo Art where you can buy a unique art. 
                <br/>
                No art piece is alike.
            </h2>
        </DefaultLayout>
    );
};

export default Home;
import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout.jsx';

const Home = () => {
    return (
        <DefaultLayout classNames="home">
            <h1>Welcome to Mlo Art</h1>
            <div className="row pt-5">
                <div className="col-md-8 col-xs-12 col-landing-image">
                    <img src="/images/homepage.jpg" className="image-fade-in" />
                </div>
                <div className="col-md-4 col-xs-12 col-landing-text">
                    <h2>You can buy a unique art, where no piece is alike.</h2> 
                </div>
            </div>
        </DefaultLayout>
    );
};

export default Home;
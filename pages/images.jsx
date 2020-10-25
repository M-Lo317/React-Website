import React from 'react';
import Carousel from '../components/Carousel';
import DefaultLayout from '../layouts/DefaultLayout';

const Images = () => {
    return(
        <DefaultLayout classNames="images">
            <h1>Completed Work</h1>
            <Carousel />
        </DefaultLayout>
    );
};

export default Images;
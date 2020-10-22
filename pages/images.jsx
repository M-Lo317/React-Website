import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { UncontrolledCarousel } from 'reactstrap';

const Images = () => {
    return(
        <DefaultLayout>
            <h1>Completed Work</h1>
        </DefaultLayout>
    );
};

const items = [
  {
    src: '/images/dream.jpg',
    altText: 'dream',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: '/images/peacock.jpg',
    altText: 'peacock',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: '/images/scream.jpg',
    altText: 'scream',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  },
  {
    src: '/images/trees/jpg',
    altText: 'trees',
    caption: 'Slide 4',
    header: 'Slide 4 Header',
    key: '4'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Images;
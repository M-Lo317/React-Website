import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = () => {
  
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
      src: '/images/trees.jpg',
      altText: 'trees',
      caption: 'Slide 4',
      header: 'Slide 4 Header',
      key: '4'
    }
  ];

  return(
    <div className="carousel-container">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default Carousel;
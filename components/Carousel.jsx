import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const Carousel = () => {
  
  const items = [
    {
      src: '/images/dream.jpg',
      altText: 'dream',
      caption: 'For Sale',
      header: 'Dream',
      key: '1'
    },
    {
      src: '/images/peacock.jpg',
      altText: 'peacock',
      caption: 'Sold',
      header: 'Eruption',
      key: '2'
    },
    {
      src: '/images/scream.jpg',
      altText: 'scream',
      caption: 'For Sale',
      header: 'Galaxy',
      key: '3'
    },
    {
      src: '/images/trees.jpg',
      altText: 'trees',
      caption: 'Sold',
      header: 'Trees',
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
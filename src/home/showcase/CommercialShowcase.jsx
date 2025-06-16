import React from 'react';
import Carousel from '../../shared/Carousel/Carousel';
import './styles.css';
import corp1 from './../../assets/corporate1.png';
import corp2 from './../../assets/corporate2.png';
import corp3 from './../../assets/corporate3.png';
import corp4 from './../../assets/corporate4.png';

const CommercialShowcase = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true };
  const corporate = [corp4, corp2, corp3, corp1];

  return (
    <div className='showcase_container'>
      <div id='showcase_banner' className='banner'>
        Commercial Solutions
      </div>
      <div className='commercial_showcase_carousel_container'>
        <Carousel slides={corporate} options={carouselOptions} identifier={'commercial'} />
      </div>
    </div>
  );
};

export default CommercialShowcase;
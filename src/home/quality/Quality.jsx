import React from 'react';
import './styles.css';
import showcase1 from './../../assets/showcase1.jpeg'
import showcase2 from './../../assets/showcase2.jpeg'
import showcase3 from './../../assets/showcase3.jpeg'

const Quality = () => {

  return (
    <div id='quality_showcase_container'>
      <div className='banner'>
        Affordable Quality, Built to Last
      </div>
      <div className='quality_showcase'>
        <img
          src={showcase1}
          className='quality_showcase_photo'
          alt='showcase1'
        />
        <img
          src={showcase2}
          className='quality_showcase_photo'
          alt='showcase2'
        />
        <img
          src={showcase3}
          className='quality_showcase_photo'
          alt='showcase3'
        />
      </div>
      <li className='quality_message'>
        All our products are manufactured in South Korea including the fabric!
      </li>
    </div>
  );
};

export default Quality;

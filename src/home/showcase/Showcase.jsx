import React from 'react';
import Carousel from './../../shared/Carousel/Carousel';
import './styles.css';
import banded_crosse from './../../assets/images/banded_crosse.jpeg';
import banded_diego from './../../assets/images/banded_diego.jpeg';
import banded_manresa_wide from './../../assets/images/banded_manresa_wide.jpeg';
import banded_nias from './../../assets/images/banded_nias.jpeg';
import banded_omaha from './../../assets/images/banded_omaha.jpeg';

const Showcase = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true };
  const bandedStyles = [
    { src: banded_nias, text: 'Nias' },
    { src: banded_crosse, text: 'Crosse' },
    { src: banded_diego, text: 'Diego' },
    { src: banded_manresa_wide, text: 'Manresa Wide' },
    { src: banded_omaha, text: 'Omaha' },
  ];

  return (
    <div id='showcase_container'>
      <div id='showcase_banner' className='banner'>
        THE LATEST TREND
      </div>
      <div className='subheader'>
        Transform your space with Banded Shades!
      </div>
      <div className='showcase_carousel_container'>
        <Carousel slides={bandedStyles} options={carouselOptions} />
      </div>
    </div>
  );
};

export default Showcase;

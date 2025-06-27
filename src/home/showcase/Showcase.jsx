import React from 'react';
import Carousel from './../../shared/Carousel/Carousel';
import './styles.css';
import banded_black_cottage from './../../assets/banded_black_cottage.jpeg';
import banded_crosse from './../../assets/banded_crosse.jpeg';
import banded_diego from './../../assets/banded_diego.jpeg';
import banded_manresa_wide from './../../assets/banded_manresa_wide.jpeg';
import banded_manresa from './../../assets/banded_manresa.jpeg';
import banded_nias from './../../assets/banded_nias.jpeg';
import banded_omaha from './../../assets/banded_omaha.jpeg';
import banded_rumoi_blackout from './../../assets/banded_rumoi_black_out.jpeg';
import banded_valleta_blackout_onetone from './../../assets/banded_valleta_black_out_one_tone.jpeg';
import banded_yola from './../../assets/banded_yola.jpeg';

const Showcase = ({ isMobile }) => {

  const carouselOptions = { align: 'start', loop: true };
  const bandedStyles = [
    { src: banded_nias, text: 'Nias' },
    { src: banded_crosse, text: 'Crosse' },
    { src: banded_black_cottage, text: 'Black Cottage' },
    { src: banded_diego, text: 'Diego' },
    { src: banded_manresa_wide, text: 'Manresa Wide' },
    { src: banded_manresa, text: 'Manresa' },
    { src: banded_yola, text: 'Yola' },
    { src: banded_omaha, text: 'Omaha' },
    { src: banded_rumoi_blackout, text: 'Rumoi Blackout' },
    { src: banded_valleta_blackout_onetone, text: 'Valletta Blackout' },
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

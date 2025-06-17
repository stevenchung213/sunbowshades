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
    banded_nias,
    banded_black_cottage,
    banded_crosse,
    banded_diego,
    banded_manresa_wide,
    banded_manresa,
    banded_yola,
    banded_omaha,
    banded_rumoi_blackout,
    banded_valleta_blackout_onetone,
  ];

  return (
    <div id='showcase_container'>
      <div id='showcase_banner' className='banner'>
        The Latest Trend, Banded Shades
      </div>
      <div className='showcase_carousel_container'>
        <Carousel slides={bandedStyles} options={carouselOptions} />
      </div>
    </div>
  );
};

export default Showcase;

import React from 'react';
import Carousel from './Carousel';
import banded_biskara from './../../assets/banded_biskara.jpeg';
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
import styles from './styles.css';

const Showcase = () => {

  const carouselOptions = { align: 'start' };
  const bandedStyles = [
    banded_biskara,
    banded_black_cottage,
    banded_crosse,
    banded_diego,
    banded_manresa_wide,
    banded_manresa,
    banded_nias,
    banded_omaha,
    banded_rumoi_blackout,
    banded_valleta_blackout_onetone,
    banded_yola
  ];

  return (
    <div className='showcase_container'>
      <div className='banner'>
        The Latest Trends
      </div>
      <Carousel slides={bandedStyles} options={carouselOptions} />
    </div>
  );
};

export default Showcase;

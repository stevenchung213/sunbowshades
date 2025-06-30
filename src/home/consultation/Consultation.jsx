import React from 'react';
import { NavLink } from 'react-router';
import './styles.css';
import quote1 from './../../assets/images/quote_image.png';

const Consultation = () => {

  return (
    <div id='consultation_container'>
      <div id='consultation_banner' className='banner'>
        REQUEST A FREE QUOTE
      </div>
      <div className='consultation_section'>
        <img src={quote1} alt='consultation' className='consultation_image' />
        <div className='consultation_info'>
          Experience the difference with our free in-home consultation!
          <br />
          Our local expert will visit your home to provide personalized advice and tailored solutions for your window treatment needs.
        </div>
      </div>
      <NavLink
        to='contact'
      >
        <button
          id='consultation_button'
          className='navbar_contact_button'
        >
          I'm Interested!
        </button>
      </NavLink>
    </div>
  );
};

export default Consultation;

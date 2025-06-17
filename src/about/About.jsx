import React from 'react';
import './styles.css';
import about1 from './../assets/background1_sm.jpg';

const About = ({ isMobile }) => {

  const message = [
    'At SunbowShades, we are proud to introduce our innovative line of premium window treatments, crafted with precision using high-quality fabrics sourced directly from South Korea.',
    <br key={0} />,
    <br key={1} />,
    'As a new company, we are committed to delivering luxury-quality designs that elevate your spaces while staying budget-friendly.',
    <br key={2} />,
    <br key={3} />,
    'Our rigorous testing in reputable labs ensures our fabrics meet the highest standards for factors such as dust reduction, deodorizing capabilities and, of course, UV protection—making them both safe and stylish.',
    <br key={4} />,
    <br key={5} />,
    'We pride ourselves on offering sophisticated solutions that blend elegance with affordability, helping you enhance your home or business without compromising on quality.'
  ];

  return (
    <div id='about_container'>

      <div className='about_info_container'>
        <p>
          {
            message
          }
        </p>
      </div>
      {
        !isMobile &&
        <div className='about_image_container'>
          <img src={about1} alt='about_image' className='about_image' />
        </div>
      }
    </div>
  );
};

export default About;

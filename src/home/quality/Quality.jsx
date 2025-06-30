import React from 'react';
import './styles.css';
import qualityIcon from './../../assets/icons/quality_icon.png';
import antibacterialIcon from './../../assets/icons/antibacterial_icon.png';
import labicon from './../../assets/icons/lab_icon.png';
import uvIcon from './../../assets/icons/uv_icon.png';

const Quality = () => {

  const message1 = [
    'All our products are crafted in South Korea, renowned for its innovation and advanced manufacturing. This ensures that our products exceed international standards, providing customers with high-quality solutions while being affordable.',
  ];
  const message2 = [
    'Our window treatments are designed with advanced materials that effectively block harmful UV rays, protecting your family\'s health and home from fading and discoloration. This ensures your interior remains vibrant and preserved over time.',
  ];

  const message3 = [
    'Each of our treatments is tested to filter out dust particles efficiently, contributing to a cleaner and healthier living environment. This feature is particularly beneficial for those with allergies or who prioritize air quality in their homes.',
  ];

  const message4 = [
    'We employ antibacterial fabrics that inhibit the growth of bacteria and microbes, making our products safer for use. This ensures your window treatments not only look good but also contribute to a hygienic living space.'
  ];

  const message5 = [
    'Visit our catalog to explore our products and discover how they can transform your home while offering the highest standards in protection and hygiene. Trust SunbowShades for your window treatment needs—because we trust only the best.'
  ];

  return (
    <div id='quality_showcase_container'>
      <div id='quality_showcase_banner' className='banner'>
        WHY CHOOSE US?
      </div>
      <div className='quality_showcase_section'>
        <div className='quality_showcase_info'>
          <div className='quality_showcase_icon_container'>
            <img src={qualityIcon} alt='lab_icon' className='quality_showcase_icon' id='lab_icon' />
          </div>
          {message1}
        </div>
        <div className='quality_showcase_info'>
          <div className='quality_showcase_icon_container'>
            <img src={uvIcon} alt='uv_icon' className='quality_showcase_icon' id='uv_icon' />
          </div>
          {message2}
        </div>
        <div className='quality_showcase_info'>
          <div className='quality_showcase_icon_container'>
            <img src={labicon} alt='dust_icon' className='quality_showcase_icon' id='dust_icon' />
          </div>
          {message3}
        </div>
        <div className='quality_showcase_info'>
          <div className='quality_showcase_icon_container'>
            <img src={antibacterialIcon} alt='antibacterial_icon' className='quality_showcase_icon' id='antibacterial_icon' />
          </div>
          {message4}
        </div>
      </div>
      <div className='quality_showcase_section'>
        <div className='quality_showcase_info_last'>
          {message5}
        </div>
      </div>
    </div>
  );
};

export default Quality;

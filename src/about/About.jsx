import React from 'react';
import './styles.css';
import about1 from './../assets/images/about_image.png';

const About = ({ isMobile }) => {

  const message = [
    'At SunbowShades, we are proud to introduce our innovative line of premium window treatments, crafted with precision using high-quality fabrics from South Korea.',
    ' As a new company, we are committed to delivering luxury-quality designs that elevate your spaces while staying budget-friendly.',
    <br key={1} />,
    <br key={2} />,
    'Rigorous testing in reputable labs ensures our fabrics meet the highest standards for factors such as dust reduction and UV protection—making them both safe and stylish.',
    ' We pride ourselves on offering sophisticated solutions that blend elegance with affordability, helping you enhance your home or business without compromising on quality.'
  ];

  const message4 = [
    'At SunbowShades, we are committed to enhancing your home experience by bringing innovative window treatments that prioritize style, functionality, and health. As a new company, we aim to set new standards in the industry through cutting-edge solutions designed to meet the evolving needs of modern households.',
    'Our product line introduces ATB-UV+ fabric, an advanced technology featured in select items. This innovative fabric offers antibacterial properties that inhibit bacterial growth and reduce odors, while providing robust protection against UV rays. By focusing on health and well-being, we aim to create a more comfortable living environment for our customers.',
    'Currently, we serve customers in California, Oregon, Washington, and Nevada, with plans to expand across the United States. Our growing collection features a variety of styles, each designed with precision to meet high standards of design and functionality. All products are thoughtfully crafted in South Korea, ensuring quality and innovation at every step.',
    'Explore our collection today and discover how we can transform your home experience. Contact us to learn more about our innovative window treatments and how we can bring style, performance, and health together for you.',
  ];

  const message5 = [
    'At SunbowShades, we are dedicated to transforming your home with innovative window treatments that combine style and functionality. Our mission is to provide high-quality solutions that not only enhance your living spaces but also meet the evolving needs of modern households.',
    <br key={1} />,
    <br key={2} />,
    'Our product line introduces ATB-UV+ fabric, an advanced technology featured in select items. This innovative fabric offers antibacterial properties that inhibit bacterial growth and reduce odors, while providing robust protection against UV rays. By focusing on health and well-being, we aim to create a more comfortable living environment for our customers.',
    <br key={3} />,
    <br key={4} />,
    'As a new company, we are driven by the goal of making premium window treatments accessible without compromising on quality. All products are thoughtfully crafted in South Korea, ensuring quality and innovation at every step.',
    <br key={5} />,
    <br key={6} />,
    'Contact us to learn more about how we can elevate your home or business!'
  ];

  const message6 = [
    'At [Your Company Name], we are pioneering innovative window treatments designed to elevate your home experience. As a new company, we are committed to bringing premium solutions that combine style with functionality, setting new standards in the industry.',
    'Our signature products utilize, ATB-UV+ fabric, exemplifies our dedication to innovation and quality. This advanced technology features antibacterial properties that inhibit bacterial growth and reduce odors, while providing robust protection against UV rays. The result is a durable and high-performing fabric that enhances both aesthetic appeal and practicality in your living spaces.',
    'Currently, we serve customers in California, Oregon, Washington, and Nevada, with ambitious plans to expand our reach across the United States. Our product line is crafted with precision, ensuring each piece meets rigorous standards of design and functionality.',
    'Explore our collection today and discover how [Your Company Name] can transform your home. Contact us to learn more about our innovative window treatments and how we can bring style and performance together for you.'
  ];


  return (
    <div id='about_container'>
      <div className='about_info_container'>
        <p>
          {
            message5
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

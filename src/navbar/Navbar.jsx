import React from 'react';
import styles from './styles.css';
import logo from './../assets/logo.png';

const Navbar = ({ handleLinkClick }) => {
  const links = ['Home', 'Products', 'Catalog', 'About Us'];
  return (
    <div className='navbar_container'>
      <div className='navbar_logo_container'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <div className='navbar_links_container'>
        {
          links.map((link, index) =>
            // handling for 'About Us' document view
            link === 'About Us' ? (
              <div
                key={index}
                className='navbar_link_container'
                onClick={() => handleLinkClick({ view: 'Documents', type: link })}
              >
                <a className='navbar_link'>{link}</a>
              </div>
            ) : // 
              (
                <div
                  key={index}
                  className='navbar_link_container'
                  onClick={() => handleLinkClick(link)}
                >
                  <a className='navbar_link'>{link}</a>
                </div>
              ))
        }
      </div >
      <div className='navbar_contact_button_container'>
        <button className='navbar_contact_button'>Contact</button>
      </div>
    </div >
  );
};

export default Navbar;

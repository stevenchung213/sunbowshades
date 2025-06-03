import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';
import logo from './../assets/logo.png';

const Navbar = ({ handleLinkClick }) => {
  const links = ['Home', 'Products', 'About Us'];
  return (
    <nav className='navbar_container'>
      <div className='navbar_logo_container'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <div className='navbar_links_container'>
        <nav
          className='navbar_link_container'
          onClick={() => handleLinkClick('Home')}
        >
          <Link
            to='/'
            className='navbar_link'
          >Home</Link>
        </nav>
        <nav
          className='navbar_link_container'
          onClick={() => handleLinkClick('Products')}
        >
          <Link
            to='/products'
            className='navbar_link'
          >Products</Link>
        </nav>
        <nav
          className='navbar_link_container'
          onClick={() => handleLinkClick({ view: 'Documents', type: 'About Us' })}
        >
          <Link
            to='/documents/about'
            className='navbar_link'
          >About</Link>
        </nav>
      </div >
      <div className='navbar_contact_button_container'>
        <Link
          to='contact'
        >
          <button
            className='navbar_contact_button'
            onClick={() => handleLinkClick('Email')}
          >Contact</button>
        </Link>
      </div>
    </nav >
  );
};

export default Navbar;

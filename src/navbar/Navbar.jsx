import React from 'react';
import { Link } from 'react-router';
import './styles.css';
import logo from './../assets/logo.png';

const Navbar = () => {
  const links = ['Home', 'Catalog', 'About'];
  return (
    <nav id='navbar_container'>
      <div className='navbar_logo_container'>
        <img className='logo' src={logo} alt='Logo' />
      </div>
      <div className='navbar_links_container'>
        <nav
          className='navbar_link_container'
        >
          <Link
            to='/'
            className='navbar_link'
          >Home</Link>
        </nav>
        <nav
          className='navbar_link_container'
        >
          <Link
            to='catalog'
            className='navbar_link'
          >Catalog</Link>
        </nav>
        <nav
          className='navbar_link_container'
        >
          <Link
            to='about'
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
          >Contact</button>
        </Link>
      </div>
    </nav >
  );
};

export default Navbar;

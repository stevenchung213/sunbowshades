import React, { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router';
import logo from './../assets/logo.png';
import hamburger from './../assets/nav.svg';
import { useClickOutside } from './../shared/hooks/helpers'
import './styles.css';

const Navbar = ({ isMobile }) => {
  const links = ['Home', 'Catalog', 'About'];
  const [showNav, setShowNav] = useState(false);
  const mobileNavRef = useRef();

  useClickOutside(mobileNavRef, () => {
    setShowNav(false);
  });

  return (
    <nav id='navbar_container' ref={mobileNavRef}>
      {
        !showNav &&
        <div className='navbar_logo_container'>
          <img className='logo' src={logo} alt='Logo' />
        </div>
      }
      {
        isMobile ?
          <>
            <img
              className={'mobile_nav_icon' + (showNav ? ' hide_nav_icon' : '')}
              src={hamburger}
              alt='mobile_nav_icon'
              onClick={() => setShowNav(state => !state)}
            />
            {
              showNav &&
              <>
                <div className='navbar_links_container'>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='/'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Home
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='catalog'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Catalog
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='about'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      About
                    </NavLink>
                  </nav>
                  <nav className='navbar_link_container'>
                    <NavLink
                      to='contact'
                      className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                      onClick={() => setShowNav(state => !state)}
                    >
                      Contact
                    </NavLink>
                  </nav>
                </div >
              </>
            }
          </>
          :
          <>
            <div className='navbar_links_container'>
              <nav className='navbar_link_container'>
                <NavLink
                  to='/'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  Home
                </NavLink>
              </nav>
              <nav
                className='navbar_link_container'
              >
                <NavLink
                  to='catalog'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  Catalog
                </NavLink>
              </nav>
              <nav className='navbar_link_container'>
                <NavLink
                  to='about'
                  className={({ isActive }) => isActive ? 'navbar_link active' : 'navbar_link'}
                >
                  About
                </NavLink>
              </nav>
            </div >

            <div className='navbar_contact_button_container'>
              <NavLink
                to='contact'
              >
                <button
                  className='navbar_contact_button'
                >
                  Contact
                </button>
              </NavLink>
            </div>
          </>
      }
    </nav >
  );
};

export default Navbar;

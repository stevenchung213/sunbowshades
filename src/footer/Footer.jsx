import React from 'react';
import { Link } from 'react-router';
import facebook from './../assets/facebook.png';
import instagram from './../assets/instagram.png';
import tiktok from './../assets/tiktok.png';
import './styles.css';

const Footer = () => {

  const footerItems = [
    {
      section: 'Customer Support',
      links: [
        { text: 'Frequently Asked Questions', link: 'faqs' },
        { text: 'Commercial Inquiries', link: 'commercial' }
      ]
    },
    {
      section: 'About Us',
      links: [
        { text: 'Who We Are', link: '/about' }
      ]
    },
    {
      section: 'Social Media',
      links: [
        { text: 'Facebook', src: facebook },
        { text: 'Instagram', src: instagram },
        { text: 'Tiktok', src: tiktok }
      ]
    },
    {
      section: 'Contact Us',
      links: [
        { text: 'Email', link: 'email', value: 'sunbowshades@gmail.com' },
        { text: 'Phone', link: 'phone', value: '(323) 577-5705' }
      ]
    },
    {
      section: 'Legal Information',
      links: [
        { text: 'Privacy Policy', link: 'privacy_policy' },
        { text: 'Terms of Use', link: 'terms_of_use' }
      ]
    }
  ];

  return (
    <footer id='footer_container'>
      {
        footerItems.map((item, index) => {
          return (
            <div key={index} className='footer_section_container'>
              <h3>{item.section}</h3>
              <ul>
                { // conditional rendering for Social Media footer items
                  item.section === 'Social Media' ? item.links.map((link, linkIndex) =>
                  (// render social media icons
                    // TODO
                    // add links to social media pages (new tab)
                    <li
                      key={linkIndex}
                      className='footer_section_link unclickable social_media_link'
                    >
                      {
                        link.text
                      }
                      <img
                        src={link.src}
                        alt={link.text}
                        className='social_media_icon'
                      />
                      <div className='social_media_link_tooltip'>
                        Coming soon..
                      </div>
                    </li>
                  )) // contact us section link handling
                    : item.section === 'Contact Us' ? item.links.map((link, linkIndex) =>
                    (
                      <div
                        key={linkIndex}
                        className={`footer_section_link ${link.text.toLowerCase()}_link`}
                      >
                        <Link
                          className={`${link.text.toLowerCase()}_link`}
                          to='contact'
                        >
                          {
                            link.text
                          }
                        </Link>
                        <div className={`${link.text.toLowerCase()}_link_tooltip`}>
                          {
                            link.value
                          }
                        </div>
                      </div>
                    ))
                      : // render all other standard footer items
                      item.links.map((link, linkIndex) =>
                      (
                        <Link
                          to={link.link}
                          key={linkIndex}
                          className='footer_section_link'
                        >
                          {
                            link.text
                          }
                        </Link>
                      ))
                }
              </ul>
            </div>
          );
        })
      }
    </footer>
  );
};

export default Footer;

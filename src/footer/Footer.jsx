import React from 'react';
import { Link } from 'react-router';
import facebook from './../assets/facebook.png';
import instagram from './../assets/instagram.png';
import tiktok from './../assets/tiktok.png';
import styles from './styles.css';

const Footer = ({ handleLinkClick }) => {

  const footerItems = [
    {
      section: 'Customer Support',
      links: [
        { text: 'Frequently Asked Questions', link: 'documents/faqs' },
        { text: 'Commercial Inquiries', link: 'documents/commercial' }
      ]
    },
    {
      section: 'About Us',
      links: [
        { text: 'Our Team & Vision', link: 'documents/about' }
      ]
    },
    {
      section: 'Social Media',
      links: [
        { text: 'Coming Soon', src: null },
        { text: 'Facebook', src: facebook },
        { text: 'Instagram', src: instagram },
        { text: 'Tiktok', src: tiktok }
      ]
    },
    {
      section: 'Contact Us',
      links: [
        { text: 'Email', link: 'email' },
        { text: 'Phone (323) 577-5705', link: 'phone' }
      ]
    },
    {
      section: 'Legal Information',
      links: [
        { text: 'Privacy Policy', link: 'documents/privacy_policy' },
        { text: 'Terms of Use', link: 'documents/terms_of_use' }
      ]
    }
  ];

  return (
    <footer className='footer_container'>
      {
        footerItems.map((item, index) => {
          return (
            <div key={index} className='footer_section_container'>
              <h3>{item.section}</h3>
              <ul>
                { // conditional rendering for Social Media footer items
                  item.section === 'Social Media' ? item.links.map((link, linkIndex) =>
                    linkIndex === 0 ?
                      ( // 'Coming Soon' message in italics
                        <div
                          key={linkIndex}
                          className='footer_section_link'
                          style={{ fontStyle: 'italic', cursor: 'default' }}
                        >
                          {
                            link.text
                          }
                        </div>
                      )
                      :
                      ( // render social media icons
                        // TODO
                        // add links to social media pages (new tab)
                        <li key={linkIndex} className='footer_section_link unclickable'>
                          {
                            link.text
                          }
                          <img
                            src={link.src}
                            alt={link.text}
                            className='social_media_icon'
                          />
                        </li>
                      )
                  ) // contact us section link handling
                    : item.section === 'Contact Us' ? item.links.map((link, linkIndex) =>
                      // email link
                      link.text === 'Email' ?
                        (
                          <Link
                            to='contact'
                            key={linkIndex}
                            className='footer_section_link email_link'
                          >
                            {
                              link.text
                            }
                          </Link>
                        ) : // phone link
                        (
                          <div
                            key={linkIndex}
                            className='footer_section_link'
                          >
                            <a
                              href='tel:13235775705'
                              className='phone_link'
                            >
                              {
                                link.text
                              }
                            </a>
                          </div>
                        )
                    )
                      : // render all other standard footer items
                      item.links.map((link, linkIndex) =>
                      (
                        <Link
                          to={link.link}
                          key={linkIndex}
                          className='footer_section_link'
                          onClick={() => handleLinkClick({ view: 'Documents', type: link })}
                        >
                          {
                            link.text
                          }
                        </Link>
                      )
                      )
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

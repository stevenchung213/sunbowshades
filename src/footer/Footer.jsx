import React from 'react';
import facebook from './../assets/facebook.png';
import instagram from './../assets/instagram.png';
import tiktok from './../assets/tiktok.png';
import styles from './styles.css';

const Footer = ({ handleLinkClick }) => {

  const footerItems = [
    {
      section: 'Customer Support',
      links: [
        'Frequently Asked Questions',
        'Commercial Inquiries',
      ]
    },
    {
      section: 'About Us',
      links: [
        'Our Team & Vision'
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
        'Email',
        'Phone',
      ]
    },
    {
      section: 'Legal Information',
      links: [
        'Privacy Policy',
        'Terms of Use'
      ]
    }
  ];

  return (
    <div className='footer_container'>
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
                      linkIndex === 0 ?
                        (
                          <div
                            key={linkIndex}
                            className='footer_section_link email_link'
                          >
                            {
                              link
                            }
                          </div>
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
                                link
                              }
                            </a>
                          </div>
                        )
                    )
                      : // render all other standard footer items
                      item.links.map((link, linkIndex) =>
                      (
                        <li
                          key={linkIndex}
                          className='footer_section_link'
                          onClick={() => handleLinkClick({ view: 'Documents', type: link })}
                        >
                          {
                            link
                          }
                        </li>
                      )
                      )
                }
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};

export default Footer;

import React from 'react';
import About from './about/About';
import PrivacyPolicy from './privacy/Privacy';
import Terms from './terms/Terms';
import styles from './styles.css';

const Documents = ({ currentDoc }) => {
  return (
    <div id='documents_container'>
      {
        currentDoc === 'Privacy Policy' && <PrivacyPolicy />
      }
      {
        currentDoc === 'Terms of Use' && <Terms />
      }
      {
        (currentDoc === 'Our Team & Vision' || currentDoc === 'About Us') && <About />
      }
    </div>
  );
};

export default Documents;

import React, { lazy, Suspense } from 'react';
import styles from './styles.css';

const Quality = lazy(() => import('./Quality'));
const Consultation = lazy(() => import('./Consultation'));

const Home = () => {
  return (
    <div className='home_container'>
      <div className='cover_photo' alt='cover_photo'>
        <div className='slogan'>
          Where Quality and Comfort Meets Style in Every Window
        </div>
      </div>
      <Consultation />
      <Quality />
    </div>
  );
};

export default Home;

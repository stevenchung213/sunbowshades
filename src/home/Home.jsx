import React, { lazy, Suspense } from 'react';
import styles from './styles.css';

const Quality = lazy(() => import('./quality/Quality'));
const Consultation = lazy(() => import('./consultation/Consultation'));
const Showcase = lazy(() => import('./showcase/Showcase'));

const Home = () => {
  return (
    <div className='home_container'>
      <div className='cover_photo' alt='cover_photo'>
        <div className='slogan'>
          Where Quality and Comfort Meets Style in Every Window
        </div>
      </div>
      <Showcase />
      <Quality />
      <Consultation />
    </div>
  );
};

export default Home;

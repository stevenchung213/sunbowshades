import React, { lazy, Suspense } from 'react';
import Loading from './../shared/Loading/Loading';
import './styles.css';

const Quality = lazy(() => import('./quality/Quality'));
const Consultation = lazy(() => import('./consultation/Consultation'));
const Showcase = lazy(() => import('./showcase/Showcase'));

const Home = ({ isMobile }) => {
  return (
    <main id='home_container'>
      <div className='cover_photo' alt='cover_photo'>
        <div className='slogan'>
          Where Quality and Comfort Meets Style in Every Window
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <Showcase isMobile={isMobile} />
      </Suspense>
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      RESIDENTIAL / COMMERCIAL SECTION NEEDED!
      <Suspense fallback={<Loading />}>
        <Quality isMobile={isMobile} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Consultation isMobile={isMobile} />
      </Suspense>
    </main>
  );
};

export default Home;

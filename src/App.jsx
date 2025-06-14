import React, { useState } from "react";
import { Routes, Route } from "react-router";
import useScreenSize from './shared/hooks/useScreenSize/useScreenSize';
import Navbar from "./navbar/Navbar";
import Catalog from './catalog/Catalog';
import Footer from "./footer/Footer";
import Home from "./home/Home";
import About from './about/About';
import Privacy from "./privacy/Privacy";
import Terms from "./terms/Terms";
import Commercial from "./commercial/Commercial";
import Faqs from "./faq/Faq";
import Contact from './contact/Contact';
import NotFound from './notfound/NotFound';
import './styles.css';

const App = () => {
  const screenSize = useScreenSize();
  const isMobile = screenSize.width < 769;
  // const tablet = screenSize.width > 768 && screenSize.width < 1280;
  // const isDesktop = screenSize.width > 768;

  return (
    <div id='app_container'>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route index element={<Home isMobile={isMobile} />} />
        <Route path='catalog' element={<Catalog isMobile={isMobile} />} />
        <Route path='about' element={<About isMobile={isMobile} />} />
        <Route path='privacy_policy' element={<Privacy isMobile={isMobile} />} />
        <Route path='terms_of_use' element={<Terms isMobile={isMobile} />} />
        <Route path='faqs' element={<Faqs isMobile={isMobile} />} />
        <Route path='commercial' element={<Commercial isMobile={isMobile} />} />
        <Route path='contact' element={<Contact isMobile={isMobile} />} />
        <Route path='*' element={<NotFound isMobile={isMobile} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

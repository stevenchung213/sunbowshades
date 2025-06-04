import React from "react";
import { Routes, Route } from "react-router";
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

  return (
    <div id='app_container'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='about' element={<About />} />
        <Route path='privacy_policy' element={<Privacy />} />
        <Route path='terms_of_use' element={<Terms />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='commercial' element={<Commercial />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

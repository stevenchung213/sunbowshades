import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./navbar/Navbar";
import Catalog from './catalog/Catalog';
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Documents from './documents/Documents';
import About from './documents/about/About';
import Privacy from "./documents/privacy/Privacy";
import Terms from "./documents/terms/Terms";
import Commercial from "./documents/commercial/Commercial";
import Faqs from "./documents/faq/Faq";
import Contact from './contact/Contact';
import NotFound from './notfound/NotFound';

const App = () => {

  return (
    <div id='app_container'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='catalog' element={<Catalog />} />
        {/* <Route path='documents'> */}
        {/* <Route index element={<Documents />} /> */}
        <Route path='about' element={<About />} />
        <Route path='privacy_policy' element={<Privacy />} />
        <Route path='terms_of_use' element={<Terms />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='commercial' element={<Commercial />} />
        {/* </Route> */}
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

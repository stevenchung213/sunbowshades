import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./navbar/Navbar";
import Catalog from './catalog/Catalog';
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Products from "./products/Products";
import Documents from './documents/Documents';
import About from './documents/about/About';
import Privacy from "./documents/privacy/Privacy";
import Terms from "./documents/terms/Terms";
import Commercial from "./documents/commercial/Commercial";
import Faqs from "./documents/faq/Faq";
import Contact from './contact/Contact';

const App = () => {
  const [homePage, setHomePage] = useState(true);
  const [productsPage, setProductsPage] = useState(false);
  const [catalogPage, setCatalogPage] = useState(false);
  const [documentPage, setDocumentPage] = useState(false);
  const [currentDoc, setCurrentDoc] = useState('');

  const handleLinkClick = (page) => {
    if (page === "Home") {
      setHomePage(true);
      setProductsPage(false);
      setCatalogPage(false);
      setDocumentPage(false);
    } else if (page === 'Products') {
      setProductsPage(true);
      setHomePage(false);
      setCatalogPage(false);
      setDocumentPage(false);
    } else if (page === "Catalog") {
      setCatalogPage(true);
      setHomePage(false);
      setProductsPage(false);
      setDocumentPage(false);
    } else if (typeof page === 'object') {
      // use object properties as conditions for rendering document-like pages
      setDocumentPage(true);
      setHomePage(false);
      setProductsPage(false);
      setCatalogPage(false);
      // set state for which type of document
      setCurrentDoc(page.type);
    }

    window.scrollTo(0, 0);
  };

  return (
    <div id='app_container'>
      <Navbar handleLinkClick={handleLinkClick} />
      <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        {/* <Route path='catalog' element={<Catalog />} /> */}
        <Route path='documents'>
          <Route index element={<Documents currentDoc={currentDoc} />} />
          <Route path='about' element={<About />} />
          <Route path='privacy_policy' element={<Privacy />} />
          <Route path='terms_of_use' element={<Terms />} />
          <Route path='faqs' element={<Faqs />} />
          <Route path='commercial' element={<Commercial />} />
          {/* <Route path='' element={} /> */}
          {/* <Route path='' element={} /> */}
          {/* <Route path='' element={} /> */}
        </Route>
        <Route path='contact' element={<Contact />} />
        {/* <main id='view_container'>
          {
            homePage ? <Home /> :
              productsPage ? <Products /> :
                catalogPage ? <Catalog /> :
                  documentPage ? <Documents currentDoc={currentDoc} /> : null
          }
        </main> */}
      </Routes>
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default App;

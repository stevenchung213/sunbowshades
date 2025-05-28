import React from "react";
import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Catalog from './catalog/Catalog';
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Products from "./products/Products";
import About from './documents/about/About';
import Documents from './documents/Documents';

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
  };

  return (
    <div id='app_container'>
      <Navbar handleLinkClick={handleLinkClick} />
      <div id='view_container'>
        {
          homePage ? <Home /> :
            productsPage ? <Products /> :
              catalogPage ? <Catalog /> :
                documentPage ? <Documents currentDoc={currentDoc} /> : null
        }
      </div>
      <Footer handleLinkClick={handleLinkClick} />
    </div>
  );
};

export default App;

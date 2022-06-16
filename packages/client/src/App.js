import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import CategoryPage from './containers/CategoryPage/CategoryPage.Container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

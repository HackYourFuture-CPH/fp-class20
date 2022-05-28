import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navigation } from './components/layout/navigation/Navigation.Components.Layout';

import { AboutUsPage } from './pages/AboutUsPage/AboutUsPage.Container';
import { CategoryPage } from './pages/CategoryPage/CategoryPage.Container';
import { ContactUsPage } from './pages/ContactUsPage/ContactUsPage.Container';
import { LandingPage } from './pages/LandingPage/LandingPage.Container';
import { PageNotFound } from './pages/PageNotFound/PageNotFound.Container';
import { ProductPage } from './pages/ProductPage/ProductPage.Container';

import { Footer } from './components/layout/footer/Footer.Components.Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

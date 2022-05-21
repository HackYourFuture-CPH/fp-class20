import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import { CategoryPage } from './containers/CategoryPage/CategoryPage.Container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFound } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';
import { Navigation } from './components/layout/navigation/Navigation.Components.Layout';
import { NavigationTop } from './components/layout/navigation/NavigationTop.Components.Layout';
import { Footer } from './components/layout/footer/Footer.Components.Layout';
import { FooterDown } from './components/layout/footer/FooterDown.Components.Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationTop />
        <Navigation />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Footer />
      <FooterDown />
    </div>
  );
}

export default App;

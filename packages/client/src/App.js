import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import { CategoryPage } from './containers/CategoryPage/CategoryPage.Container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { FavouritePage } from './containers/FavouritePage/FavouritePage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFoundPage } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';
import Navigation from './components/Navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFoundPage } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';
import Navigation from './components/Navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';
import CategoryPageBud from './containers/CategoryPageBud/CategoryPageBud.Container';
import CategoryPageFruitBerry from './containers/CategoryPageFruitBerry/CategoryPageFruitBerry.Container';
import CategoryPageSeed from './containers/CategoryPageSeed/CategoryPageSeed.Container';
import CategoryPageRootBark from './containers/CategoryPageRootBark/CategoryPageRootBark.Container';
import CategoryPageLeaf from './containers/CategoryPageLeaf/CategoryPageLeaf.Container';

function App() {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category/budFlower" element={<CategoryPageBud />} />
          <Route path="/category/seed" element={<CategoryPageSeed />} />
          <Route
            path="/category/fruitBerry"
            element={<CategoryPageFruitBerry />}
          />
          <Route path="/category/rootBark" element={<CategoryPageRootBark />} />
          <Route path="/category/leaf" element={<CategoryPageLeaf />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

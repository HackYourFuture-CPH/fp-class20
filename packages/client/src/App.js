import React, { createContext, useMemo } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutUsPage } from './containers/AboutUsPage/AboutUsPage.Container';
import CategoryPage from './containers/CategoryPage/CategoryPage.container';
import { ContactUsPage } from './containers/ContactUsPage/ContactUsPage.Container';
import { FavouritePage } from './containers/FavouritePage/FavouritePage.Container';
import { LandingPage } from './containers/LandingPage/LandingPage.Container';
import { PageNotFoundPage } from './containers/PageNotFound/PageNotFound.Container';
import { ProductPage } from './containers/ProductPage/ProductPage.Container';
import { ContactUsFeedbackPage } from './containers/ContactUsPage/ContactUsFeedbackPage.Container';
import Navigation from './components/Navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';
import { SearchedProducts } from './components/SearchedProducts/SearchedProducts';
import PropTypes from 'prop-types';

export const searchContext = createContext();

function App({
  searchedProducts,
  searchedProductIsLoading,
  searchedProductsError,
}) {
  const foo = useMemo(
    () => ({
      foo: searchedProducts,
      searchedProductIsLoading,
      searchedProductsError,
    }),
    [searchedProductIsLoading, searchedProducts, searchedProductsError],
  );

  return (
    <div className="app">
      <Router>
        <Navigation />
        <Routes>
          <searchContext.Provider value={foo}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route
              path="/contact-us-feedback"
              element={<ContactUsFeedbackPage />}
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/SearchedProducts" element={<SearchedProducts />} />
            <Route path="/favorites/:user_id" element={<FavouritePage />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </searchContext.Provider>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

App.propTypes = {
  searchedProducts: PropTypes.node,
  searchedProductIsLoading: PropTypes.bool,
  searchedProductsError: PropTypes.string,
};

App.defaultProps = {
  searchedProducts: [],
  searchedProductIsLoading: false,
  searchedProductsError: null,
};

export default App;

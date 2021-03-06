import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartStateProvider } from './Contexts/CartStateContext';
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
import { Login } from './containers/LoginPage/Login.Container';
import { Signup } from './containers/SignupPage/Signup.Container';
import { SearchedProducts } from './containers/SearchedProducts/SearchedProducts';
import OrderPage from './components/Order-Page/OrderPage.component';

function App() {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <CartStateProvider>
      <div className="app">
        <Router>
          <Navigation signedIn={signedIn} setSignedIn={setSignedIn} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route
              path="/contact-us-feedback"
              element={<ContactUsFeedbackPage />}
            />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/search" element={<SearchedProducts />} />
            <Route path="/favorites/:user_id" element={<FavouritePage />} />
            <Route
              path="/login/:user_id"
              element={<Login signedIn={signedIn} setsignedIn={setSignedIn} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </CartStateProvider>
  );
}

export default App;

import React, { useState } from 'react';
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
import { Login } from './containers/LoginPage/Login.Container';
import { Signup } from './containers/SignupPage/Signup.Container';

function App() {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="app">
      <Router>
        <Navigation ligedIn={logedIn} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route
            path="/contact-us-feedback"
            element={<ContactUsFeedbackPage />}
          />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/favorites/:user_id" element={<FavouritePage />} />
          <Route
            path="/login/:user_id"
            element={<Login logedIn={logedIn} setLogedIn={setLogedIn} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

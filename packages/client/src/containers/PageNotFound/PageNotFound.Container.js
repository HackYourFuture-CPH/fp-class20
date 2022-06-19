import React from 'react';
import './PageNotFound.Style.css';
import { Footer } from '../../components/Footer/Footer.component';
import Navigation from '../../components/Navigation/Navigation.component';
import PageNotFound from '../../components/PageNotFound/PageNoFound.component';

export function PageNotFoundPage() {
  return (
    <div className="page-not-found-container">
      <Navigation className="toggle-button-bottom" />
      <PageNotFound />
      <Footer className="text-big" />
    </div>
  );
}

import React from 'react';

import './ErrorPage.styles.css';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-details">
        <div className="ufo-pic">
          <img src="../assets/images/drawing_ufo.png" alt="error page icon" />
        </div>
        <div className="error-message">
          <h3>404</h3>
          <p>Oooops!</p>
          <p>The page was intercepted by UFO!</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

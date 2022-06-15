import React, { useState, useEffect } from 'react';

import './LoadingPage.styles.css';

function LoadingPage() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      {loading && (
        <div className="loader">
          {}
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
          <div>{}</div>
        </div>
      )}
    </div>
  );
}
export default LoadingPage;

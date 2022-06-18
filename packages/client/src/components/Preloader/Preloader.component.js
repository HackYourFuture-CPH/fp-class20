import React, { useState, useEffect } from 'react';

import './Preloader.styles.css';

function Preloader() {
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
export default Preloader;

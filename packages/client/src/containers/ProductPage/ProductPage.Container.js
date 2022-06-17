import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer.component';
import Navigation from '../../components/Navigation/Navigation.component';
import './ProductPage.Style.css';
import { useParams } from 'react-router-dom';
import { SimilarProducts } from './SimilarProducts';

export const ProductPage = () => {
  const { id = 3 } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        return response.json();
      })
      .then((productTodisplay) => {
        setProduct(productTodisplay[0]);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [id]);

  const handleClick = () => {};

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="product-page-main-container">
      <Navigation className="display" />
      {error ? (
        <p>{error}</p>
      ) : (
        <SimilarProducts product={product} onClick={handleClick} />
      )}
      {/* <Footer className="footer" /> */}
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

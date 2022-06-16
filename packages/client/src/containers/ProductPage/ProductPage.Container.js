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

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => response.json())
      .then((productTodisplay) => {
        setProduct(productTodisplay[0]);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="product-page-main-container">
      <Navigation className="display" />
      <SimilarProducts product={product} />
      <Footer className="footer" />
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

import React, { useEffect, useState } from 'react';
import './ProductPage.Style.css';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';
import { SimilarProducts } from './SimilarProducts';

export const ProductPage = () => {
  const { id = 3 } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${getApiBaseUrl()}/api/products/${id}`)
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

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="product-page-main-container">
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="product-info-main-page">
            <div className="product-category">{product.categoryName}</div>
            <div className="product-title">{product.name}</div>
          </div>
          <ProductCard product={product} className="product-card-container" />
          <SimilarProducts product={product} />
        </>
      )}
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

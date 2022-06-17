import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductPage.Style.css';
import Carousel from '../../components/Carousel/Carousel.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';

export const SimilarProducts = ({ product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState();
  const [isSimilarProductLoading, setisSimilarProductLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [isCategoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/category/${product.categoryId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setSimilarProducts(data);
        setisSimilarProductLoading(false);
      })
      .catch((err) => setError(err));
  }, [product.categoryId]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/category`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('something went wrong');
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setCategoryLoading(false);
      })
      .catch((err) => setError(err));
  }, []);

  if (isSimilarProductLoading || isCategoryLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <div className="product-info-main-page">
        <div className="product-category">
          {
            categories.filter(
              (category) => category.id === product.categoryId,
            )[0].name
          }
        </div>
        <div className="product-title">{product.name}</div>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <ProductCard product={product} className="product-card-container" />
          <h1 className="title-similar-products">Similar products:</h1>
          <Carousel
            key={product.id}
            items={similarProducts.filter((item) => item.id !== product.id)}
            show={3}
            className="carousel"
          />
        </>
      )}
    </>
  );
};

SimilarProducts.propTypes = {
  product: PropTypes.shape({
    categoryId: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
  }),
};

SimilarProducts.defaultProps = {
  product: {},
};

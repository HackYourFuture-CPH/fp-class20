import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductPage.Style.css';
import Carousel from '../../components/Carousel/Carousel.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

export const SimilarProducts = ({ product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState();
  const [isSimilarProductLoading, setisSimilarProductLoading] = useState(true);
  // const [categories, setCategories] = useState([]);
  // const [isCategoryLoading, setCategoryLoading] = useState(true);

  const fetchUrl = async () => {
    const result = await fetch(
      `${getApiBaseUrl()}/api/category/${product.categoryId}`,
    );
    return result;
  };

  useEffect(() => {
    fetchUrl()
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
  });

  // useEffect(() => {
  //   fetch(`${getApiBaseUrl()}/api/category/${product.categoryId}`)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('something went wrong');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setSimilarProducts(data);
  //       setisSimilarProductLoading(false);
  //     })
  //     .catch((err) => setError(err));
  // }, [product.categoryId, similarProducts]);

  if (isSimilarProductLoading) {
    return <div className="App">Loading...</div>;
  }
  return (
    <>
      <div className="product-info-main-page">
        <div className="product-category">{product.categoryName}</div>
        <div className="product-title">{product.name}</div>
      </div>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <ProductCard product={product} className="product-card-container" />
          {similarProducts.length !== 1 && (
            <>
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
      )}
    </>
  );
};

SimilarProducts.propTypes = {
  product: PropTypes.shape({
    categoryId: PropTypes.number,
    name: PropTypes.string,
    id: PropTypes.number,
    categoryName: PropTypes.string,
  }),
};

SimilarProducts.defaultProps = {
  product: {},
};

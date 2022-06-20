import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './ProductPage.Style.css';
import Carousel from '../../components/Carousel/Carousel.component';
import getApiBaseUrl from '../../utils/getApiBaseUrl';

export const SimilarProducts = ({ product }) => {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [error, setError] = useState();
  const [isSimilarProductLoading, setisSimilarProductLoading] = useState(true);
  // const [categories, setCategories] = useState([]);
  // const [isCategoryLoading, setCategoryLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const result = await fetch(
        `${getApiBaseUrl()}/api/products?category=${product.categoryId}`,
      );
      return result;
    };

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
  }, [product.categoryId]);

  if (isSimilarProductLoading) {
    return <div className="App">Loading...</div>;
  }
  return error ? (
    <p>{error}</p>
  ) : (
    similarProducts.length !== 1 && (
      <>
        <h1 className="title-similar-products">Similar products:</h1>
        <Carousel
          key={product.id}
          items={similarProducts.filter((item) => item.id !== product.id)}
          show={3}
          className="carousel"
        />
      </>
    )
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

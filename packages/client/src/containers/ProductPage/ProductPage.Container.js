/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel.component';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import { Footer } from '../../components/Footer/Footer.component';
import Navigation from '../../components/Navigation/Navigation.component';
import './ProductPage.Style.css';

export const ProductPage = () => {
  const [id, setProductId] = useState(null);
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(true);
  const Id = 3;

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${Id}`)
      .then((response) => response.json())
      .then((productTodisplay) => {
        setProduct(productTodisplay[0]);
        setLoading(false);
      });
  }, [id]);

  const fetchSimilarProducts = async () => {
    return fetch(`http://localhost:5000/api/category/${Id}`).then((response) =>
      response.json(),
    );
  };

  const fetchCategories = async () => {
    return fetch(`http://localhost:5000/api/category`).then((response) =>
      response.json(),
    );
  };

  useEffect(() => {
    fetchSimilarProducts()
      .then((data) => {
        setSimilarProducts(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [id]);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [id]);

  console.log(categories);

  if (isLoading || categories.length === 0) {
    return <div className="App">Loading...</div>;
  }
  return (
    <div className="product-page-main-container">
      <Navigation />
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
      <ProductCard product={product} />
      <Carousel items={similarProducts} show={3} />
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel.component';
import { AddProductToCart } from '../../components/ProductComponent/AddProductToCart.component';
import { Footer } from '../../components/Footer/Footer.component';
import Header from '../../components/Navigation/Header/Header.component';
import { BottomNavigation } from '../../components/Bottom-navigation/BottomNavigation.component';
import './ProductPage.Style.css';

export const ProductPage = () => {
  const [id, setProductId] = useState(null);
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const Id = 3;

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
    fetch(`http://localhost:5000/api/products/${Id}`)
      .then((response) => response.json())
      .then((productTodisplay) => setProduct(productTodisplay[0]));
  }, [id]);

  useEffect(() => {
    fetchSimilarProducts()
      .then((data) => setSimilarProducts(data))
      .catch((err) => setError(err));
  }, [id]);

  useEffect(() => {
    fetchCategories()
      .then((data) => setCategories(data))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="product-page-main-container">
      <Header />
      <BottomNavigation />
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
      <AddProductToCart product={product} />
      <Carousel items={similarProducts} show={3} />
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

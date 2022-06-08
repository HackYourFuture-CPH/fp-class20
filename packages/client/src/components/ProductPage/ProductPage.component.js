import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel.component';
import { AddProductToCart } from '../ProductComponent/AddProductToCart.component';
import { Footer } from '../Footer/Footer.component';

export const ProductPage = () => {
  const [id, setProductId] = useState(null);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`api/products/${id}`)
      .then((response) => response.json())
      .then((productTodisplay) => setProduct(productTodisplay));
  }, [id]);
  return (
    <div>
      <AddProductToCart product={product} />
      <Carousel />
      <Footer />
    </div>
  );
};

ProductPage.propTypes = {};

ProductPage.defaultProps = {};

import React, { useState, useEffect } from 'react';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import './ProductPage.Style.css';

export const ProductPage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(`http://localhost:5000/api/products/1`);
    const fetchResult = await result.json();
    setProduct(fetchResult[0]);
    // eslint-disable-next-line no-console
    console.log(fetchResult[0]);
  };

  return (
    <div className="product-page-container">
      <span>Product Page </span>
      <ProductCard product={product} />
    </div>
  );
};

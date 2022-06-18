import React from 'react';
import { ProductCard } from '../../components/ProductComponent/ProductCard.component';
import './ProductPage.Style.css';

export const ProductPage = () => {
  const product = {
    id: 1,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries ',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  };
  return (
    <div className="product-page-container">
      <span>Product Page </span>
      <ProductCard product={product} variant="small" />
    </div>
  );
};

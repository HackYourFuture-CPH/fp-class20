import React from 'react';
import { Product } from './ProductComponent.component';

export default {
  title: 'components/Product',
  component: Product.component,
};

// export const Template = () => <ProductContainer />;

const Template = (props) => <Product {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  // eslint-disable-next-line object-shorthand
  product: {
    id: 1,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description: 'This is the description of juniper berries',
    pictureUrl: 'assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  saveToFavorites: 'save to favorites',
  closeModal: () => {},
};

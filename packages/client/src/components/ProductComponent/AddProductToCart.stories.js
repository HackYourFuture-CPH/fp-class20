import React from 'react';
import { AddProductToCart } from './AddProductToCart.component';

export default {
  title: 'components/Product',
  component: AddProductToCart.component,
};

const Template = (props) => <AddProductToCart {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 1,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  saveToFavorites: 'save to favorites',
  onClose: () => {},
};

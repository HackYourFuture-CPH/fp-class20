import React from 'react';
import ProductListsContainer from './ProductListsContainer.js';

const infoExample = [
  {
    id: 1,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 2,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 3,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 4,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 5,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 6,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 7,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 8,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 9,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 10,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 11,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 12,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 13,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 14,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 15,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 16,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 17,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 18,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 19,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 20,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 21,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 22,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 23,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 24,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 25,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 26,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 27,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 28,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 29,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 30,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 31,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 32,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 33,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 34,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 35,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 36,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 37,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 38,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 39,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 40,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  {
    id: 41,
    size: '250g glass jar',
    price: 350,
    name: 'Juniper Berries',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
];

export default {
  title: 'PaginatedProductList',
  component: ProductListsContainer,
};

const Template = (args) => <ProductListsContainer {...args} />;

export const TenCards = Template.bind({});
TenCards.args = {
  data: infoExample,
  cardPerPage: 10,
};

import React from 'react';
import { ProductImage } from './ProductImage.component';

export default {
  title: 'PProductImage',
  component: ProductImage.component,
};

const Template = (args) => <ProductImage {...args} />;

// 👇 Each story then reuses that template
export const url = Template.bind({});

export const altText = Template.bind({});

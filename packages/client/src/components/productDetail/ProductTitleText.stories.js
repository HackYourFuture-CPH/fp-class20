import React from 'react';
import { ProductTitleText } from './ProductTitleText.component';

export default {
  title: 'Product-Component/detail',
  component: ProductTitleText,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <ProductTitleText {...args} />;

// 👇 Each story then reuses that template
export const heading = Template.bind({});

export const info = Template.bind({});

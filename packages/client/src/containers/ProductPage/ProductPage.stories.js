import React from 'react';
import { ProductPage } from './ProductPage.component';

export default {
  title: 'components/Product',
  component: ProductPage.component,
};

const Template = (args) => <ProductPage {...args} />;
export const Primary = Template.bind({});
Primary.args = {};

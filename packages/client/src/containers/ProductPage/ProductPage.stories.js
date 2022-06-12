import React from 'react';
import { ProductPage } from './ProductPage.Container';

export default {
  title: 'components/ProductPageComtainer',
  component: ProductPage.component,
};

const Template = (args) => <ProductPage {...args} />;
export const Primary = Template.bind({});
Primary.args = {};

import React from 'react';
import { ProductTitleText } from './ProductTitleText.component';

export default {
  title: 'ProductTitleText',
  component: ProductTitleText.component,
};

const Template = (args) => <ProductTitleText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  heading: 'this is heading',
  info: 'this is info',
};

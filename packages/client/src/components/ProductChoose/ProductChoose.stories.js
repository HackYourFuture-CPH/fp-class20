import { number } from 'prop-types';
import React from 'react';
import ProductChoose from './ProductChoose';

export default {
  title: 'ProductChoose',
  component: ProductChoose,
  argTypes: {
    height: { control: number },
    onClick: { action: 'clicked' },
  },
};
const Template = (args) => <ProductChoose {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};
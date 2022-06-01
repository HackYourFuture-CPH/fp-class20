import React from 'react';

import Cart from './Cart.component';

export default {
  title: 'components/Navigation/Top Navigation',
  component: Cart,
};

const Template = (args) => <Cart {...args} />;

export const AddToCart = Template.bind({});
AddToCart.args = {
  label: 'Cart',
};
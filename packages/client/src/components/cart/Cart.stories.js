import React from 'react';

import Cart from '../Cart.component';

export default {
  title: 'Main Header/cart',
  component: Cart,
};

const Template = (args) => <Cart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Cart',
  onClick: () =>
    // eslint-disable-next-line no-console
    console.log('i am clicked,'),
};

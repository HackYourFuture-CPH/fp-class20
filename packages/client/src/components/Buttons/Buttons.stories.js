// Buttons.stories.js|jsx

import React from 'react';

import { Buttons } from './Buttons.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Buttons',
  component: Buttons.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Buttons {...args} />;

// 👇 Each story then reuses that template
export const AddToCart = Template.bind({});
AddToCart.args = {
  addToCard: true,
  label: 'ADD TO CARD',
};

export const Submit = Template.bind({});
Submit.args = {
  submit: true,
  label: 'SUBMIT',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const Shop = Template.bind({});
Shop.args = {
  shop: true,
  label: 'SHOP',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const EditDetails = Template.bind({});
EditDetails.args = {
  editDetails: true,
  label: 'EDIT DETAILS',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ContinueShoppingt = Template.bind({});
ContinueShoppingt.args = {
  continueShopping: true,
  label: 'CONTIBUE SHOPPING',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ReviewOrderDetails = Template.bind({});
ReviewOrderDetails.args = {
  reviewOrderDetails: true,
  label: 'REVIEW ORDER DETAILS',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const Checkout = Template.bind({});
Checkout.args = {
  checkout: true,
  label: 'CHECKOUT',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

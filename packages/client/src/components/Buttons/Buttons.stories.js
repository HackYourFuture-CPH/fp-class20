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
  type: 'addToCart',
  label: 'ADD TO CART',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  label: 'SUBMIT',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const SubmitSecondary = Template.bind({});
SubmitSecondary.args = {
  type: 'submitSecondary',
  label: 'SUBMIT',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const Shop = Template.bind({});
Shop.args = {
  type: 'shop',
  label: 'SHOP',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const EditDetails = Template.bind({});
EditDetails.args = {
  type: 'editDetails',
  label: 'EDIT DETAILS',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ContinueShopping = Template.bind({});
ContinueShopping.args = {
  type: 'continueShopping',
  label: 'CONTINUE SHOPPING',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ContinueShoppingSecondary = Template.bind({});
ContinueShoppingSecondary.args = {
  type: 'continueShoppingSecondary',
  label: 'CONTINUE SHOPPING',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ReviewOrderDetails = Template.bind({});
ReviewOrderDetails.args = {
  type: 'reviewOrderDetails',
  label: 'REVIEW ORDER DETAILS',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const ReviewOrder = Template.bind({});
ReviewOrder.args = {
  type: 'reviewOrder',
  label: 'REVIEW ORDER',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

export const Checkout = Template.bind({});
Checkout.args = {
  type: 'checkout',
  label: 'CHECKOUT',
  // eslint-disable-next-line react/jsx-no-useless-fragment
  icon: <></>,
};

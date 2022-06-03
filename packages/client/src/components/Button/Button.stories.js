// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'components/Button',
  component: Button.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const AddToCart = Template.bind({});
AddToCart.args = {
  type: 'add-to-cart',
  label: 'ADD TO CART',
};

export const Submit = Template.bind({});
Submit.args = {
  type: 'submit',
  label: 'SUBMIT',
  icon: '',
};

export const SubmitSecondary = Template.bind({});
SubmitSecondary.args = {
  type: 'submit-secondary',
  label: 'SUBMIT',
  icon: '',
};

export const Shop = Template.bind({});
Shop.args = {
  type: 'shop',
  label: 'SHOP',
  icon: '',
};

export const EditDetails = Template.bind({});
EditDetails.args = {
  type: 'edit-details',
  label: 'EDIT DETAILS',
  icon: '',
};

export const ContinueShopping = Template.bind({});
ContinueShopping.args = {
  type: 'continue-shopping',
  label: 'CONTINUE SHOPPING',
  icon: '',
};

export const ContinueShoppingSecondary = Template.bind({});
ContinueShoppingSecondary.args = {
  type: 'continue-shopping-secondary',
  label: 'CONTINUE SHOPPING',
  icon: '',
};

export const ReviewOrderDetails = Template.bind({});
ReviewOrderDetails.args = {
  type: 'review-order-details',
  label: 'REVIEW ORDER DETAILS',
  icon: '',
};

export const ReviewOrder = Template.bind({});
ReviewOrder.args = {
  type: 'reviewOrder',
  label: 'REVIEW ORDER',
  icon: '',
};

export const Checkout = Template.bind({});
Checkout.args = {
  type: 'checkout',
  label: 'CHECKOUT',
  icon: '',
};

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  icon: '',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  icon: '',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  icon: '',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  icon: '',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button',
  icon: '',
};

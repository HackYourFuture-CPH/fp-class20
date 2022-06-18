// Preloader.stories.js|jsx

import React from 'react';

import Preloader from './Preloader.component';

export default {
  title: 'Example/Preloader',
  component: Preloader.component,
};

// 👇 We create a “template”
const Template = () => <Preloader />;
// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Preloader',
};

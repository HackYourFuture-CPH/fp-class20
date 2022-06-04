// DropDown.stories.js|jsx

import React from 'react';

import SpiceMenu from './SpiceMenu.component';

export default {
  title: 'Example/Dropdown',
  component: SpiceMenu.component,
};

// 👇 We create a “template”
const Template = () => <SpiceMenu />;
// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Spice',
};

// Button.stories.js|jsx

import React from 'react';

// import { Dropdown } from './Dropdown.component';

import Dropdown from './Dropdown.component';

export default {
  title: 'Example/Dropdown',
  component: Dropdown.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Dropdown {...args} />;

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Spice',
};

// LoadingPage.stories.js|jsx

import React from 'react';

import LoadingPage from './LoadingPage.component';

export default {
  title: 'Example/LoadingPage',
  component: LoadingPage.component,
};

// 👇 We create a “template”
const Template = () => <LoadingPage />;
// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'LoadingPage',
};

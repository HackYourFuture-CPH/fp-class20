import { number } from 'prop-types';
import React from 'react';
import Counter from './Counter';

export default {
  title: 'Buttons/counter',
  component: Counter,
  argTypes: {
    height: { control: number },
    onClick: { action: 'clicked' },
  },
};
const Template = (args) => <Counter {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};

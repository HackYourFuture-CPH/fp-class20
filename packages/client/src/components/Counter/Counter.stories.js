import { number } from 'prop-types';
import React from 'react';
import Counter from './Counter';

export default {
  title: 'counter',
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

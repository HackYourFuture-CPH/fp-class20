import React, { useState } from 'react';
import { OptionsPack } from './OptionsPack.component';

export default {
  title: 'OptionPack/Radio button',
  component: OptionsPack,
};

const Template = (args) => {
  const [select, setSelect] = useState('');

  return <OptionsPack {...args} select={select} setSelect={setSelect} />;
};
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};

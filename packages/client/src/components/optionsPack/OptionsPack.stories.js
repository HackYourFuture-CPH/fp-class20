import React, { useState } from 'react';
import { OptionsPack } from './OptionsPack.component';

export default {
  title: 'OptionPack/Radio button',
  component: OptionsPack,
};

const Template = (args) => {
  const [select, setSelect] = useState('');

  const options = [
    {
      id: 1,
      weight: '250g glass jar',
      price: 'DKK 350',
    },
    {
      id: 2,
      weight: '100g flat pack',
      price: 'DKK 100',
    },
  ];

  return (
    <OptionsPack
      {...args}
      options={options}
      select={select}
      setSelect={setSelect}
    />
  );
};
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};

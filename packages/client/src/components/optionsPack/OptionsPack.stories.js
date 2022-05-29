import React, { useState } from 'react';
import { OptionsPack } from './OptionsPack.component';

export default {
  title: 'OptionPack/Radio button',
  component: OptionsPack,
};

const Template = (args) => {
  const [selectPackage, setSelectPackage] = useState('');

  const options = [
    {
      id: 1,
      weightOne: '250',
      priceOne: '350',
      weightTwo: '100',
      priceTwo: '100',
    },
  ];

  return (
    <OptionsPack
      {...args}
      options={options}
      selectPackage={selectPackage}
      setSelectPackage={setSelectPackage}
    />
  );
};
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
};

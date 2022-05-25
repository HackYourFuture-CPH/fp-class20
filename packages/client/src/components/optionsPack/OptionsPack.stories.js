import { number } from 'prop-types';
import React, { useState } from 'react';
import { OptionsPack } from './OptionsPack.component';

export default {
  title: 'OptionPack/Radio button',
  component: OptionsPack,
};

const Template = (args) => {
  const [firstSelected, setfirstSelected] = useState('DKK 350');
  const [secondSelectedChoice, setsecondSelectedChoise] = useState('DKK 350');

  return (
    <OptionsPack
      {...args}
      price1={firstSelected}
      setfirstSelected={setfirstSelected}
      price2={secondSelectedChoice}
      setsecondSelectedChoise={setsecondSelectedChoise}
    />
  );
};
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};

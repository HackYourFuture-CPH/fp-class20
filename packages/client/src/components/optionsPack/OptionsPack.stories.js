import { number } from 'prop-types';
import React, { useState } from 'react';
import { OptionsPack } from './OptionsPack.component';

export default {
  title: 'OptionPack/Radio button',
  component: OptionsPack,
  argTypes: {
    height: { control: number },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => {
  const [selected, setSelected] = useState(0);
  const price1 = 'DKK 350';
  const price2 = 'DKK 100';

  return (
    <OptionsPack
      {...args}
      price1={price1}
      setSelected={setSelected}
      price2={price2}
    />
  );
};
export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  width: 79,
  height: 37,
};

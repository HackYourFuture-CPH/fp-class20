import React, { useState } from 'react';
import Counter from './Counter';

export default {
  title: 'Buttons/counter',
  component: Counter,
};
const Template = (args) => {
  const [count, setCount] = useState(1);
  return <Counter {...args} count={count} setCount={setCount} />;
};

export const Primary = Template.bind({});

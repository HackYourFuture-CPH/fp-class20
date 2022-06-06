import React from 'react';
import HeaderV2 from './HeaderV2.component';

export default {
  title: 'HeaderV2/header2',
  component: HeaderV2.component,
};

// 👇 We create a “template”
export const HeaderV2Ab = () => <HeaderV2 />;
// 👇 Each story then reuses that template
// export const Primary = HeaderV2Ab.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Spice',
// };

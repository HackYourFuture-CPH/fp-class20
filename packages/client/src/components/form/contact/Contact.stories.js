import React from 'react';

import { Contact } from './Contact.component';

export default {
  label: 'Contact Us',
  component: Contact.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Contact {...args} />;

// 👇 Each story then reuses that template
export const contactForm = Template.bind({});
contactForm.args = {
  text: 'SUBMIT',
  label: ' contact form',
  backgroundColor: 'red',
  // onClick: {()=>onSubmit()}
};

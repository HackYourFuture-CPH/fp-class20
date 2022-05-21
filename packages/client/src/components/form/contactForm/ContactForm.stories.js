import React from 'react';

import { ContactForm } from './ContactForm.component';

export default {
  label: 'Contact Us',
  component: ContactForm,
};

const Template = (args) => <ContactForm {...args} />;

export const ContactFormStandard = Template.bind({});
ContactFormStandard.args = {
  text: 'SUBMIT',
  label: ' contact form',

  handleSubmit: (name, email, message) =>
    // eslint-disable-next-line no-console
    console.log('i am clicked,', name, email, message),
};

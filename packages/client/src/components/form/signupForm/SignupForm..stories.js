import React from 'react';

import { SignupForm } from './SignupForm.component';

export default {
  label: 'Contact Us',
  component: SignupForm,
};

const Template = (args) => <SignupForm {...args} />;

export const SignUpFormStandard = Template.bind({});
SignUpFormStandard.args = {
  text: 'SUBMIT',
  label: ' contact form',

  handleSubmit: (name, email, message) =>
    // eslint-disable-next-line no-console
    console.log('i am clicked,', name, email, message),
};

import React from 'react';
import { ImageContainer } from './ImageContainer.component';

export default {
  title: 'Product-component/ImageContainer',
  component: ImageContainer.component,
};

const Template = (args) => <ImageContainer {...args} />;

// 👇 Each story then reuses that template
export const url = Template.bind({});

export const altText = Template.bind({});

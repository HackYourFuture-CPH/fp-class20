import React from 'react';
import { SaveFavorite } from './SaveFavorite.component';

export default {
  title: 'SaveFavorite',
  component: SaveFavorite.component,
};

const Template = (args) => <SaveFavorite {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'save to favorites',
};

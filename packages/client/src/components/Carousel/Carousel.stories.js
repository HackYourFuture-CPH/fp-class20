import React from 'react';
import Carousel from './Carousel.component';
import { Products } from '../../Helpers/CarouselHelper';

export default {
  title: 'Components/Carousel.component',
  component: Carousel.component,
};

/*eslint-disable */
const Template = (args) => <Carousel {...args} />;
/* eslint-enable */
export const Default = Template.bind({});
Default.args = {
  products: Products,
  coarse: 5,
};

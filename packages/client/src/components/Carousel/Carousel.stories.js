import React from 'react';
import Carousel from './Carousel.component';
import Blackcuminseeds from '../../../public/assets/images/spices_square/black_cumin_seeds.jpeg';
import Blackpepperberries from '../../../public/assets/images/spices_square/black_pepper_berries.jpeg';
import Pinkpeppercorn from '../../../public/assets/images/spices_square/chilipepper_powder.jpeg';
import Chilipepperpowder from '../../../public/assets/images/spices_square/cinnamon_sticks.jpeg';
import Driedbayleaves from '../../../public/assets/images/spices_square/dried_saffron.jpeg';
import Cinnamonsticks from '../../../public/assets/images/spices_square/dried_rosemary.jpeg';
import Saffronpowder from '../../../public/assets/images/spices_square/star_anise.jpeg';

const Products = [
  {
    id: 1,
    name: 'black cumin seeds',
    price: 100,
    picture: Blackcuminseeds,
  },
  {
    id: 2,
    name: 'Pink peppercorn',
    price: 100,
    picture: Pinkpeppercorn,
  },
  {
    id: 3,
    name: 'Black pepper berries',
    price: 100,
    picture: Blackpepperberries,
  },
  {
    id: 4,
    name: 'Chili pepper powder',
    price: 100,
    picture: Chilipepperpowder,
  },
  {
    id: 5,
    name: 'Dried bay leaves',
    price: 100,
    picture: Driedbayleaves,
  },
  {
    id: 6,
    name: 'Cinnamon sticks',
    price: 100,
    picture: Cinnamonsticks,
  },
  {
    id: 7,
    name: 'saffron powder',
    price: 100,
    picture: Saffronpowder,
  },
  {
    id: 1,
    name: 'black cumin seeds',
    price: 100,
    picture: Blackcuminseeds,
  },
  {
    id: 2,
    name: 'Pink peppercorn',
    price: 100,
    picture: Pinkpeppercorn,
  },
  {
    id: 3,
    name: 'Black pepper berries',
    price: 100,
    picture: Blackpepperberries,
  },
  {
    id: 4,
    name: 'Chili pepper powder',
    price: 100,
    picture: Chilipepperpowder,
  },
  {
    id: 5,
    name: 'Dried bay leaves',
    price: 100,
    picture: Driedbayleaves,
  },
  {
    id: 6,
    name: 'Cinnamon sticks',
    price: 100,
    picture: Cinnamonsticks,
  },
  {
    id: 7,
    name: 'saffron powder',
    price: 100,
    picture: Saffronpowder,
  },
  {
    id: 1,
    name: 'black cumin seeds',
    price: 100,
    picture: Blackcuminseeds,
  },
  {
    id: 2,
    name: 'Pink peppercorn',
    price: 100,
    picture: Pinkpeppercorn,
  },
  {
    id: 3,
    name: 'Black pepper berries',
    price: 100,
    picture: Blackpepperberries,
  },
  {
    id: 4,
    name: 'Chili pepper powder',
    price: 100,
    picture: Chilipepperpowder,
  },
  {
    id: 5,
    name: 'Dried bay leaves',
    price: 100,
    picture: Driedbayleaves,
  },
  {
    id: 6,
    name: 'Cinnamon sticks',
    price: 100,
    picture: Cinnamonsticks,
  },
  {
    id: 7,
    name: 'saffron powder',
    price: 100,
    picture: Saffronpowder,
  },
];

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
  show: 3,
};

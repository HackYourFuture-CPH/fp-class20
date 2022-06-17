import React from 'react';
import { ProductCard } from './ProductCard.component';

export default {
  title: 'components/Product',
  component: ProductCard.component,
};

let favoriteStatus = false;
function updateFavoriteStatus(product, isFavorite) {
  favoriteStatus = isFavorite;
}
const Template = (props) => (
  <>
    <ProductCard {...props} />
    <div style={{ display: 'flex', width: '100%' }}>
      <ProductCard
        {...props}
        variant="small"
        isFavorite={favoriteStatus}
        updateFavoriteStatus={updateFavoriteStatus}
      />
      <ProductCard
        {...props}
        variant="small"
        isFavorite={!favoriteStatus}
        updateFavoriteStatus={updateFavoriteStatus}
      />
      <ProductCard
        {...props}
        variant="small"
        isFavorite={!favoriteStatus}
        updateFavoriteStatus={updateFavoriteStatus}
      />
    </div>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  product: {
    id: 1,
    size: '250g glass jar',
    price: 350,
    name: 'Testing a veeery looong name',
    description:
      'Adored by chefs for their clear, sharp scent, juniper berries are essential for marinades and stewing. Add them to your cold gin and tonic. Enjoy !',
    pictureUrl: '../assets/images/spices_square/dried_juniper_berries.jpeg',
  },
  saveToFavorites: 'save to favorites',
  onClose: () => {},
  isFavourite: favoriteStatus,
};

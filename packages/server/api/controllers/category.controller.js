const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategory = async () => {
  return knex('Categories').select();
};

const getProductByCategory = async (category) => {
  const capitalizeCategory =
    category[0].toUpperCase() + category.slice(1).toLowerCase();
  const productByCategory = await knex('Categories')
    .join('Products', 'Categories.id', 'Products.categoryId')
    .where('Categories.name', 'like', `${capitalizeCategory}%`);

  if (productByCategory.length === 0) {
    throw new HttpError('No product under this category', 404);
  }
  return productByCategory;
};

module.exports = {
  getProductByCategory,
  getCategory,
};

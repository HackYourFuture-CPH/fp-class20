const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategory = async () => {
  return knex('Categories').select();
};

const getProducts = async (category, sortby) => {
  const capitalizeCategory =
    category[0].toUpperCase() + category.slice(1).toLowerCase();

  const productByCategory = knex('Categories')
    .join('Products', 'Categories.id', 'Products.categoryId')
    .where('Categories.name', 'like', `${capitalizeCategory}%`);

  if (productByCategory.length === 0) {
    throw new HttpError('No product under this category', 404);
  }

  if ('name' in sortby) {
    productByCategory.orderBy('Products.name', 'asc');
  }

  if ('lowestPrice' in sortby) {
    productByCategory.orderBy('Products.size', 'desc');
  }
  if ('newest' in sortby) {
    productByCategory.orderBy('Products.createdAt', 'asc');
  }
  return productByCategory;
};

const getProductByCategory = async (category, sortby) => {
  const products = await getProducts(category, sortby);
  return products;
};

module.exports = {
  getProductByCategory,
  getCategory,
};

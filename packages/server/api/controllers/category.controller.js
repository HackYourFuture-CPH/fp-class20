const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getCategories = async () => {
  return knex('Categories').select();
};

const getProducts = async (category, sortby) => {
  const productByCategory = knex('Categories')
    .join('Products', 'Categories.id', 'Products.categoryId')
    .where('Categories.id', 'like', `${category}%`);

  if (sortby.sort === 'name') {
    productByCategory.orderBy('Products.name', 'asc');
  }

  if (sortby.sort === 'lowestPrice') {
    productByCategory.orderBy('Products.size', 'desc');
  }
  if (sortby.sort === 'newest') {
    productByCategory.orderBy('Products.createdAt', 'asc');
  }
  return productByCategory;
};

const getProductByCategory = async (category, sortby) => {
  const products = await getProducts(category, sortby);
  if (products.length === 0) {
    throw new HttpError('No product under this category', 404);
  }
  return products;
};

module.exports = {
  getProductByCategory,
  getCategories,
};

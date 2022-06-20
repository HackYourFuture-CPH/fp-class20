const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProductByCategoryId = async (id) => {
  const productByCategory = knex('Categories')
    .select(
      'Products.*',
      'Categories.id as categoryId',
      'Categories.name as categoryName',
    )
    .where('Products.categoryId', '=', `${id}`)
    .join('Products', 'Categories.id', 'Products.categoryId');
  if (productByCategory.length === 0) {
    throw new HttpError('No product under this category', 404);
  }
  return productByCategory;
};

module.exports = {
  getProductByCategoryId,
};

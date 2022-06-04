const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (sortOrder = 'name', pageIndex = 0) => {
  /* return knex('Products')
    .select('name', 'price', 'size', 'pictureUrl') */
  let products = knex('Products').select('name', 'price', 'size', 'pictureUrl');

  if (sortOrder === 'name') {
    products = products.orderBy('name', 'asc');
  }
  if (sortOrder === 'lowestPrice') {
    products = products.orderBy('lowestPrice', 'desc');
  }
  if (sortOrder === 'newest') {
    products = products.orderBy('newest', 'asc');
  }
  const PAGE_SIZE = 10;
  return products.limit(PAGE_SIZE).offset(pageIndex * PAGE_SIZE);
};

const getAllProducts = async (query) => {
  return /* await */ getProducts(query.sortOrder, query.pageIndex);
};

const getProductsByid = async (id) => {
  if (!Number(id)) {
    throw new HttpError('ID input should be a number', 400);
  }

  const productsByid = await knex('Products').select().where({ id });
  if (productsByid.length === 0) {
    throw new HttpError(`${id} is not found`, 404);
  }
  return productsByid;
};

module.exports = {
  getAllProducts,
  getProductsByid,
};
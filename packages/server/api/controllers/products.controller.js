const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (page, sorting) => {
  /* return knex('Products')
    .select('name', 'price', 'size', 'pictureUrl') */
  const products = knex('Products').select(
    'name',
    'price',
    'size',
    'pictureUrl',
  );

  if ('name' in sorting) {
    products.orderBy('name', 'asc');
  }
  if ('lowestPrice' in sorting) {
    products.orderBy('lowestPrice', 'desc');
  }
  if ('newest' in sorting) {
    products.orderBy('newest', 'asc');
  }
  return products.paginate({
    perPage: 10,
    currentPage: page,
  });
};

const getAllProducts = async (page, sorting) => {
  await getProducts(page, sorting);
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

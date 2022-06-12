const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (
  sortOrder = 'name',
  pageIndex = 0,
  nameFilter = '',
) => {
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
  if (nameFilter) {
    products = products.where('name', 'like', `%${nameFilter}%`);
  }
  const PAGE_SIZE = 10;
  return products.limit(PAGE_SIZE).offset(pageIndex * PAGE_SIZE);
};

const getAllProducts = async (query) => {
  if ('name' in query) {
    const nameReg = /^[A-Za-z]*$/;
    if (!nameReg.test(query.name)) {
      throw new HttpError('the data entery is incorrect', 400);
    }
  }
  return getProducts(query.sortOrder, query.pageIndex, query.nameFilter);
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

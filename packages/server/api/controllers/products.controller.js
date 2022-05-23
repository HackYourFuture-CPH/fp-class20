const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getProducts = async (page) => {
  return knex('products').paginate({
    perPage: 10,
    currentPage: page,
  });
};

const getProductsByid = async (id) => {
  if (!Number(id)) {
    throw new HttpError('ID input should be a number', 400);
  }
  try {
    const productsByid = await knex('products').select().where({ id });
    if (productsByid.length === 0) {
      throw new Error(`${id} is not found`, 404);
    }
    return productsByid;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getProducts,
  getProductsByid,
};

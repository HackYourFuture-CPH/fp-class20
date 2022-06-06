const knex = require('../../config/db');
const HttpError = require('../lib/utils/http-error');

const getSearchedProducts = async (name) => {
  const nameReg = /^[A-Za-z]*$/;
  if (!nameReg.test(name)) {
    throw new HttpError('the data entery is incorrect', 400);
  }

  try {
    const searchedProducts = await knex('Products')
      .select('name', 'price', 'size', 'pictureUrl', 'categoryId')
      .where('name', 'like', `%${name}%`);

    if (searchedProducts.length === 0) {
      throw new Error(`the searched item does no exist`, 404);
    }
    return searchedProducts;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getSearchedProducts,
};

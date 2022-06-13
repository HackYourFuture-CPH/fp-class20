const knex = require('../../config/db');
// const HttpError = require('../lib/utils/http-error');

const postFavorites = async (req, a) => {
  const favorites = await knex('Favorites').insert(req, a);
  return favorites;
};

const getFavoritesById = async (id) => {
  const favorites = await knex('Favorites').where({ userId: id });
  return favorites;
};

const getFavorites = async () => {
  const favorites = await knex('Favorites');
  return favorites;
};

module.exports = {
  postFavorites,
  getFavorites,
  getFavoritesById,
};

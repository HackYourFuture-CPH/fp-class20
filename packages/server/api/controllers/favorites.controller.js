const knex = require('../../config/db');

const postFavorites = async (body) => {
  const favorites = await knex('Favorites').insert(body);
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

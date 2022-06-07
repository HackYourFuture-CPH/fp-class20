const path = require('path');
require('dotenv').config();

const { attachPaginate } = require('knex-paginate');

attachPaginate();
/* based on .env */

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.MYSQL_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    pool: { min: 0, max: 7 },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: path.join(__dirname, '/seeds/development'),
    },
  },
  production: {
    client: 'mysql2',
    connection: process.env.CLEARDB_DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds/production',
    },
  },
};

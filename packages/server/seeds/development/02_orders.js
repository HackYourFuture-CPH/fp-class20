/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('Orders').del();
  await knex('Orders').insert([
    { userId: 1, status: 'created', createdAt: knex.fn.now() },
    { userId: 2, status: 'confirmed', createdAt: knex.fn.now() },
    { userId: 3, status: 'payed', createdAt: knex.fn.now() },
    { userId: 4, status: 'created', createdAt: knex.fn.now() },
    { userId: 5, status: 'payed', createdAt: knex.fn.now() },
    { userId: 6, status: 'confirmed', createdAt: knex.fn.now() },
    { userId: 7, status: 'created', createdAt: knex.fn.now() },
    { userId: 8, status: 'confirmed', createdAt: knex.fn.now() },
    { userId: 9, status: 'created', createdAt: knex.fn.now() },
    { userId: 10, status: 'payed', createdAt: knex.fn.now() },
  ]);
};

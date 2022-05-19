/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = async function (knex) {
  await knex('orders').del();
  await knex('orders').insert([
    { user_id: 1, status: 'created', created_at: knex.fn.now() },
    { user_id: 2, status: 'confirmed', created_at: knex.fn.now() },
    { user_id: 3, status: 'payed', created_at: knex.fn.now() },
    { user_id: 4, status: 'created', created_at: knex.fn.now() },
    { user_id: 5, status: 'payed', created_at: knex.fn.now() },
    { user_id: 6, status: 'confirmed', created_at: knex.fn.now() },
    { user_id: 7, status: 'created', created_at: knex.fn.now() },
    { user_id: 8, status: 'confirmed', created_at: knex.fn.now() },
    { user_id: 9, status: 'created', created_at: knex.fn.now() },
    { user_id: 10, status: 'payed', created_at: knex.fn.now() },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    { id: 1, name: 'Crops', created_at: knex.fn.now() },
    { id: 2, name: 'Herbs', created_at: knex.fn.now() },
    { id: 3, name: 'Spices', created_at: knex.fn.now() },
    { id: 3, name: 'Vegetables', created_at: knex.fn.now() },
  ]);
};

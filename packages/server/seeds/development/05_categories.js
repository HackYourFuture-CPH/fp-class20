/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('categories').del();
  await knex('categories').insert([
    { id: 1, name: 'Bud/Flower', created_at: knex.fn.now() },
    { id: 2, name: 'Fruit/Berry', created_at: knex.fn.now() },
    { id: 3, name: 'Seed', created_at: knex.fn.now() },
    { id: 4, name: 'Root/Rhizome/Bark', created_at: knex.fn.now() },
    { id: 5, name: 'Leaf', created_at: knex.fn.now() },
  ]);
};

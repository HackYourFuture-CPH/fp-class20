/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('Catagories').del();
  await knex('Catagories').insert([
    { id: 1, name: 'Bud/Flower', createdAt: knex.fn.now() },
    { id: 2, name: 'Fruit/Berry', createdAt: knex.fn.now() },
    { id: 3, name: 'Seed', createdAt: knex.fn.now() },
    { id: 4, name: 'Root/Rhizome/Bark', createdAt: knex.fn.now() },
    { id: 5, name: 'Leaf', createdAt: knex.fn.now() },
  ]);
};

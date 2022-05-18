/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('order_items').del();
  await knex('order_items').insert([
    { order_items: 1, product_id: 10, quantity: 1 },
    { order_items: 2, product_id: 9, quantity: 2 },
    { order_items: 3, product_id: 8, quantity: 3 },
    { order_items: 4, product_id: 7, quantity: 1 },
    { order_items: 5, product_id: 6, quantity: 2 },
    { order_items: 6, product_id: 5, quantity: 3 },
    { order_items: 7, product_id: 4, quantity: 1 },
    { order_items: 8, product_id: 3, quantity: 2 },
    { order_items: 9, product_id: 2, quantity: 3 },
    { order_items: 10, product_id: 1, quantity: 1 },
  ]);
};

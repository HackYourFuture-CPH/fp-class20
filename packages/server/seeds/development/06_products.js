/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex('products').del();
  await knex('products').insert([
    {
      category_id: 3,
      name: 'caraway',
      price: 50.0,
      color: 'red',
      size: 'm',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/caraway.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 2,
      name: 'Chili pepper Capsicum chinense',
      price: 50.0,
      color: 'yellow',
      size: 'xxl',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/capsicum-chinense.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 2,
      name: 'Chili pepper Capsicum frutescens',
      price: 50.0,
      color: 'red',
      size: 'l',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/Capsicum_frutescens.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 2,
      name: 'Allspice',
      price: 50.0,
      color: 'black',
      size: 'xl',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/allspice.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 3,
      name: 'Cumin',
      price: 50.0,
      color: 'yellow',
      size: 's',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/cumin.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 3,
      name: 'Fenugreek',
      price: 50.0,
      color: 'yellow',
      size: 's',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/fenugreek.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 3,
      name: 'Sichuan pepper',
      price: 50.0,
      color: 'red',
      size: 'm',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/sichuan_pepper.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 2,
      name: 'Thai long pepper',
      price: 50.0,
      color: 'black',
      size: 'l',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/thai-long-pepper.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 5,
      name: 'Pandan',
      price: 50.0,
      color: 'yellow',
      size: 'xxl',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/pandan.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 4,
      name: 'Wasabi',
      price: 50.0,
      color: 'green',
      size: 'xl',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/wasabi.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 2,
      name: 'Black pepper',
      price: 50.0,
      color: 'black',
      size: 's',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/black-pepper.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 3,
      name: 'Grains of Paradise',
      price: 50.0,
      color: 'brown',
      size: 's',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/grains-of-Paradis.jpeg',
      stock_amount: 50,
    },
    {
      category_id: 4,
      name: 'Cinnamon',
      price: 50.0,
      color: 'brown',
      size: 'l',
      status: 'in_stock',
      created_at: knex.fn.now(),
      picture: './spice-pictures/cinnamon.jpeg',
      stock_amount: 50,
    },
  ]);
};

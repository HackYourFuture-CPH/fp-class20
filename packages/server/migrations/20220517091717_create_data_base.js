/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.varchar('full_name').notNullable();
      table.varchar('email').notNullable();
      table.varchar('address').notNullable();
      table.varchar('zipCode').notNullable();
      table.varchar('city').notNullable();
      table.varchar('country').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('catagories', (table) => {
      table.increments();
      table.varchar('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('products', (table) => {
      table.increments();
      table.integer('catagory_id').unsigned();
      table.foreign('catagory_id').references('id').inTable('catagories');
      table.varchar('name').notNullable();
      table.integer('price').notNullable();
      table
        .enum('color', ['red', 'yellow', 'borwns', 'white', 'black'])
        .notNullable();
      table.enum('size', ['s', 'm', 'l', 'xl', 'xxl']).notNullable();
      table
        .enum('status', ['out_of_stock', 'in_stock', 'running_low'])
        .notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.varchar('picture_url').notNullable();
      table.integer('stock_amount');
    })
    .createTable('orders', (table) => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.enum('status', ['created', 'confirmed', 'payed']).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('favorites', (table) => {
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users');
      table.integer('product_id').unsigned();
      table.foreign('product_id').references('id').inTable('products');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('order_items', (table) => {
      table.integer('order_id').unsigned();
      table.foreign('order_id').references('id').inTable('orders');
      table.integer('product_id').unsigned();
      table.foreign('product_id').references('id').inTable('products');
      table.integer('quantity').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('order_items')
    .dropTable('favorites')
    .dropTable('orders')
    .dropTable('products')
    .dropTable('catagories')
    .dropTable('users');
};

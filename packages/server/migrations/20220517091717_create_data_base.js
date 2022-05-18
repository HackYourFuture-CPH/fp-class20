/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments();
      table.varchar('full_name').notNullable();
      table.varchar('email').notNullable();
      table.varchar('address').notNullable();
      table.varchar('zipcode').notNullable();
      table.varchar('city').notNullable();
      table.varchar('country').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('orders', (table) => {
      table.increments();
      table.foreign('user_id').references('id').inTable('users');
      table.enum('status', ['created', 'confirmed', 'payed']).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('favorites', (table) => {
      table.foreign('user_id').references('id').inTable('users');
      table.foreign('product_id').references('id').inTable('products');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('order_items', (table) => {
      table.foreign('order_id').references('id').inTable('orders');
      table.foreign('product_id').references('id').inTable('products');
      table.integer('quantity').notNullable();
    })
    .createTable('catagories', (table) => {
      table.increments();
      table.varchar('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('products', (table) => {
      table.increments();
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
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('users')
    .dropTable('orders')
    .dropTable('favorites')
    .dropTable('order_items')
    .dropTable('catagories')
    .dropTable('products');
};

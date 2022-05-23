/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('Users', (table) => {
      table.increments('');
      table.varchar('fullName').notNullable();
      table.varchar('email').notNullable();
      table.varchar('address').notNullable();
      table.varchar('zipCode').notNullable();
      table.varchar('city').notNullable();
      table.varchar('country').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('Catagories', (table) => {
      table.increments();
      table.varchar('name').notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('Products', (table) => {
      table.increments();
      table.integer('catagoryId').unsigned();
      table.foreign('catagoryId').references('id').inTable('Catagories');
      table.varchar('name').notNullable();
      table.integer('price').notNullable();
      table
        .enum('color', ['red', 'yellow', 'borwns', 'white', 'black'])
        .notNullable();
      table.enum('size', ['s', 'm', 'l', 'xl', 'xxl']).notNullable();
      table
        .enum('status', ['outOfStock', 'inStock', 'runningLow'])
        .notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.varchar('pictureUrl').notNullable();
      table.integer('stockAmount');
    })
    .createTable('Orders', (table) => {
      table.increments();
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('Users');
      table.enum('status', ['created', 'confirmed', 'payed']).notNullable();
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('Favorites', (table) => {
      table.integer('userId').unsigned();
      table.foreign('userId').references('id').inTable('Users');
      table.integer('productId').unsigned();
      table.foreign('productId').references('id').inTable('Products');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('OrderItems', (table) => {
      table.integer('orderId').unsigned();
      table.foreign('orderId').references('id').inTable('Orders');
      table.integer('productId').unsigned();
      table.foreign('productId').references('id').inTable('Products');
      table.integer('quantity').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('OrderItems')
    .dropTable('Favorites')
    .dropTable('Orders')
    .dropTable('Products')
    .dropTable('Catagories')
    .dropTable('Users');
};

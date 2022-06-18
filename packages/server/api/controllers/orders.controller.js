const knex = require('../../config/db');

const getOrders = async () => {
  return knex('Orders')
    .join('Users', 'users.id', 'Orders.userId')
    .join('OrderItems', 'OrderItems.orderId', 'Orders.id')
    .join('Products', 'Products.id', 'OrderItems.productId');
};

const postOrders = async (request) => {
  const orderPost = await knex('orders').insert(request);
  return {
    code: 201,
    status: 'success ',
    message: `Created ${orderPost}`,
  };
};

const getOrderByID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const orderByID = await knex('orders').where('id', Number(id));
  if (orderByID.length === 0) {
    return {
      code: '404',
      status: 'failed',
      error: 'order ID not found',
      message: 'Invalid ID',
    };
  }
  return orderByID;
};

const deleteOrders = async (reqId, body) => {
  const orders = await knex('Orders').where({ productId: reqId }).delete(body);
  return orders;
};

module.exports = {
  getOrders,
  getOrderByID,
  postOrders,
  deleteOrders,
};

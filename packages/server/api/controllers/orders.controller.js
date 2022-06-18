const knex = require('../../config/db');

const getOrders = async () => {
  const orders = await knex('Orders')
    .join('Users', 'users.id', 'Orders.userId')
    .join('OrderItems', 'OrderItems.orderId', 'Orders.id')
    .join('Products', 'Products.id', 'OrderItems.productId');
  return orders;
};

const postOrders = async (request) => {
  const orderPost = await knex('orders').insert(request);
  return orderPost;
};

const getOrderByID = async (id) => {
  if (isNaN(id)) {
    return 'id must contain number';
  }
  const orderByID = await knex('orders').where('id', Number(id));
  // if (orderByID.length === 0) {
  //   return {
  //     code: '404',
  //     status: 'failed',
  //     error: 'order ID not found',
  //     message: 'Invalid ID',
  //   };
  // }
  return orderByID;
};

const deleteOrders = async (reqId, body) => {
  const ordersdel = await knex('Orders')
    .where({ productId: reqId })
    .delete(body);
  return ordersdel;
};

module.exports = {
  getOrders,
  getOrderByID,
  postOrders,
  deleteOrders,
};

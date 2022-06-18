/* TODO: This is an example controller to illustrate a server side controller.
Can be deleted as soon as the first real controller is added. */

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
// const getOrderId = async (id) => {
//   if (!id) {
//     throw new HttpError('Id should be a number', 400);
//   }

//   try {
//     const exampleResources = await knex('exampleResources')
//       .select('exampleResources.id as id', 'title')
//       .where({ id });
//     if (exampleResources.length === 0) {
//       throw new Error(`incorrect entry with the id of ${id}`, 404);
//     }
//     return exampleResources;
//   } catch (error) {
//     return error.message;
//   }
// };
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

// const deleteOrders = async (orderId) => {
//   return knex('Orders').where({ id: orderId }).del();
// };
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

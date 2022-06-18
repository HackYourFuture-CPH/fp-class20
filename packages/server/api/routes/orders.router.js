/* TODO: This is just an example file to illustrate API routing and
documentation. Can be deleted when the first real route is added. */

const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const ordersController = require('../controllers/orders.controller');
// const exampleResourcesController = require('../controllers/exampleResources.controller');

/**
 * @swagger
 * /orders:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get all orders
 *    description:
 *      Will return all orders.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/', async (req, res) => {
  try {
    const result = await ordersController.getOrders(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/ ${error}`,
    });
  }
});

/**
 * @swagger
 * /orders/{ID}:
 *  get:
 *    tags:
 *    - orders
 *    summary: Get orders by ID
 *    description:
 *      Will return single orders with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the orders to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */
router.get('/:id', async (req, res) => {
  try {
    const result = await ordersController.getOrderByID(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get message by id  api/message/:id ${error}`,
    });
  }
});

/**
 * @swagger
 * /orders:
 *  post:
 *    tags:
 *    - orders
 *    summary: Create a orders
 *    description:
 *      Will create a orders.
 *    produces: application/json
 *    parameters:
 *      - in: body
 *        name: orders
 *        description: The orders to create.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *          properties:
 *            title:
 *              type: string
 *    responses:
 *      201:
 *        description: orders created
 *      5XX:
 *        description: Unexpected error.
 */
router.post('/', async (req, res) => {
  try {
    const result = await ordersController.postOrders(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in post message api/message/ ${error}`,
    });
  }
});

/**
 * @swagger
 * /orders/{ID}:
 *  delete:
 *    tags:
 *    - orders
 *    summary: Delete an orders
 *    description:
 *      Will delete a orders with a given ID.
 *    produces: application/json
 *    parameters:
 *      - in: path
 *        name: ID
 *        description: ID of the orders to delete.
 *    responses:
 *      200:
 *        description: orders deleted
 *      5XX:
 *        description: Unexpected error.
 */
router.delete('/:id', (req, res) => {
  ordersController
    .deleteOrders(req.params.id, req)
    .then((result) => {
      // If result is equal to 0, then that means the exampleResource id does not exist
      if (result === 0) {
        res.status(404).send('The order ID you provided does not exist.');
      } else {
        res.json({ success: true });
      }
    })
    // eslint-disable-next-line no-console
    .catch((error) => console.log(error));
});

module.exports = router;

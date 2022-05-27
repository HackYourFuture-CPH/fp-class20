const express = require('express');

const router = express.Router({ mergeParams: true });

const productsController = require('../controllers/products.controller');

/* all products
 */

/**
 * @swagger
 * /Products:
 *  get: All products
 *    tags:
 *    - Products
 *    summary: Get all Products
 *    description:
 *      Will return all Products with a 10 page limit pagination.
 *    produces: application/json
 * parameters:
 *     - in: page
 *       name: query
 *       schema:
 *         type: Query Parameters
 *         description: The page of the product to be paginated
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  const { page } = req.query;
  productsController
    .getProducts(page)
    .then((result) => res.json(result))
    .catch(next);
});

/* products by id
 */

/**
 * @swagger
 * /products/{ID}:
 *  get:
 *    tags:
 *    - Products-ID
 *    summary: Get products by ID
 *    description:
 *      Will return single products with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the product to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', (req, res, next) => {
  productsController
    .getProductsByid(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

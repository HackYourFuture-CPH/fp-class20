const express = require('express');

const router = express.Router({ mergeParams: true });

const favoritesController = require('../controllers/favorites.controller');

/* all favorite products
 */

/**
 * @swagger
 * /favorites:
 *    get: All favorite products
 *    tags:
 *    - Products
 *    summary: Get all favorite Products
 *    description:
 *      Will return all favorite Products.
 *    produces: application/json
 *    parameters:
 *     - in: page
 *       name: query
 *       schema:
 *         type: Query Parameters
 *         description: To get all the favorite products
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  favoritesController
    .getFavorites()
    .then((result) => res.json(result))
    .catch(next);
});

/* favorites product by id
 */

/**
 * @swagger
 * /favorites/{ID}:
 *  get:
 *    tags:
 *    - Products-ID
 *    summary: Get favorite products by ID
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
  favoritesController
    .getFavoritesById(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /favorites:
 *  post:
 *    tags:
 *    - favorites
 *    summary: Post favorite products
 *    description:
 *      Will post single product.
 *    produces: application/json
 *    parameters:
 *     - in: body
 *       name: id
 *       schema:
 *         type: object
 *         required: true
 *         description: save to favorites
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', (req, res, next) => {
  favoritesController
    .postFavorites(req.body)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

const express = require('express');

const router = express.Router({ mergeParams: true });

const searchProduct = require('../controllers/searchProduct.controller');

/**
 * @swagger
 * /searchProduct?name={name}:
 *  get:
 *    tags:
 *    - search product
 *    summary: Search for products by partial name
 *    description:
 *      Will search for products with names that includes the searched phrase.
 *    produces: application/json
 *    parameters:
 *     - in: query
 *       name: name
 *       schema:
 *         type: string
 *         description: Partial name of the product
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 *      404:
 *        description: the searched item does no exist.
 *
 */

router.get('/', (req, res, next) => {
  searchProduct
    .getSearchedProducts(req.query.name)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

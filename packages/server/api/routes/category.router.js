const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const getProductByCategory = require('../controllers/category.controller');

/**
 * @swagger
 * /category:
 *  get:
 *    tags:
 *    - category
 *    summary: Get all categories
 *    description:
 *      Will return all categories.
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', (req, res, next) => {
  getProductByCategory
    .getCategory()
    .then((result) => res.json(result))
    .catch(next);
});

/**
 * @swagger
 * /category/{category}:
 *  get:
 *    tags:
 *    - category
 *    summary: Get products by category name.
 *    description:
 *      Will return all products with a matching category.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: category
 *       schema:
 *         type: string
 *         required: true
 *         description: The spice category name.
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:category', (req, res, next) => {
  getProductByCategory
    .getProductByCategory(req.params.category)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

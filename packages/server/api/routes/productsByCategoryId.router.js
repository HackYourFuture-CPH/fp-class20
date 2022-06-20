const express = require('express');

const router = express.Router({ mergeParams: true });

// controllers
const controller = require('../controllers/productsByCategoryId');

/**
 * @swagger
 * /category/{ID}:
 *  get:
 *    tags:
 *    - category
 *    summary: Get products by category ID.
 *    description: Will return all products with a matching category ID.
 *    produces: application/json
 *    parameters:
 *     - in: path
 *       name: ID
 *       schema:
 *         type: string
 *         required: true
 *         description: The ID of the categoryto get.
 *     - in: query
 *       name: sort
 *       type: string
 *       enum:
 *       - newest
 *       - lowestPrice
 *       - name
 *       default: available
 *       collectionFormat: multi
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', (req, res, next) => {
  controller
    .getProductByCategoryId(req.params.id)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

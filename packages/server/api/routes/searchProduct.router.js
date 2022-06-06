const express = require('express');

const router = express.Router({ mergeParams: true });

const searchProduct = require('../controllers/searchProduct.controller');

router.get('/', (req, res, next) => {
  searchProduct
    .getSearchedProducts(req.query.name)
    .then((result) => res.json(result))
    .catch(next);
});

module.exports = router;

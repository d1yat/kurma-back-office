const express = require('express');
const router = express.Router();
const {
  getProducts
} = require('../controllers/ProductController.js');

router.get('/products', getProducts);

module.exports = router

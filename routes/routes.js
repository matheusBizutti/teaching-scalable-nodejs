const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const productController = require('../controllers/product');

router.get('/auth/sso', authController.getAccess);
router.get('/products', productController.getAll);

module.exports = router;

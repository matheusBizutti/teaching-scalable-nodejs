const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const productController = require('../controllers/product');

router.post('/auth/sso', authController.create);
router.get('/products', productController.getAll);

module.exports = router;

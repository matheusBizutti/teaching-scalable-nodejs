const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const productController = require('../controllers/product');
const authenticate = require('../middlewares/authenticate')

router.post('/auth/sso', authController.create);
router.post('/auth/sso/login', authController.login);
router.get('/products', authenticate, productController.products);
router.post('/products', authenticate, productController.create);
router.delete('/products/:id', authenticate, productController.deleteProduct);

module.exports = router;

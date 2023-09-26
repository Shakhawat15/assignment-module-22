const express = require('express');
const userController = require("../controllers/userController");
const adminController = require("../controllers/adminController");
const subAdminController = require("../controllers/subAdminController");
const postController = require("../controllers/postController");
const customerController = require("../controllers/customerController");
const categoryController = require("../controllers/categoryController");
const orderController = require("../controllers/orderController");
const productController = require("../controllers/productController");
const orderItemController = require("../controllers/order_itemController");
const paymentController = require("../controllers/paymentController");
const shipmentController = require("../controllers/shipmentController");
const cartController = require("../controllers/cartController");
const wishListController = require("../controllers/wishlistController");

const router = express.Router();

// User Controller
router.get('/users', userController.read);
router.post('/user', userController.create);
router.delete('/user/:id', userController.delete);
router.put('/user/:id', userController.update);

// Admin Controller
router.get('/admins', adminController.read);
router.post('/admin', adminController.create);
router.delete('/admin/:id', adminController.delete);
router.put('/admin/:id', adminController.update);

// Sub Admin Controller
router.get('/sub-admins', subAdminController.read);
router.post('/sub-admin', subAdminController.create);
router.delete('/sub-admin/:id', subAdminController.delete);
router.put('/sub-admin/:id', subAdminController.update);

// Post Controller
router.get('/posts', postController.read);
router.post('/post', postController.create);
router.delete('/post/:id', postController.delete);
router.put('/post/:id', postController.update);

// Customer Controller
router.get('/customers', customerController.read);
router.post('/customer', customerController.create);
router.delete('/customer/:id', customerController.delete);
router.put('/customer/:id', customerController.update);

// Category Controller
router.get('/categories', categoryController.read);
router.post('/category', categoryController.create);
router.delete('/category/:id', categoryController.delete);
router.put('/category/:id', categoryController.update);

// Order Controller
router.get('/orders', orderController.read);
router.post('/order', orderController.create);
router.delete('/order/:id', orderController.delete);
router.put('/order/:id', orderController.update);

// Product Controller
router.get('/products', productController.read);
router.post('/product', productController.create);
router.delete('/product/:id', productController.delete);
router.put('/product/:id', productController.update);

// Order Item Controller
router.get('/order-items', orderItemController.read);
router.post('/order-item', orderItemController.create);
router.delete('/order-item/:id', orderItemController.delete);
router.put('/order-item/:id', orderItemController.update);

// Payment Controller
router.get('/payments', paymentController.read);
router.post('/payment', paymentController.create);
router.delete('/payment/:id', paymentController.delete);
router.put('/payment/:id', paymentController.update);

// Shipment Controller
router.get('/shipments', shipmentController.read);
router.post('/shipment', shipmentController.create);
router.delete('/shipment/:id', shipmentController.delete);
router.put('/shipment/:id', shipmentController.update);

// Cart Controller
router.get('/carts', cartController.read);
router.post('/cart', cartController.create);
router.delete('/cart/:id', cartController.delete);
router.put('/cart/:id', cartController.update);

// Wish List Controller
router.get('/wish-lists', wishListController.read);
router.post('/wish-list', wishListController.create);
router.delete('/wish-list/:id', wishListController.delete);
router.put('/wish-list/:id', wishListController.update);
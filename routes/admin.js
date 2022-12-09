const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const jwtAuth = require('../middleware/jwtAuth');
const router = express.Router();

// POST admin sign up
router.post('/signup', adminController.postAdminSignUp);

// POST admin sign in
router.post('/signin', adminController.postAdminSignIn);

// GET all products
router.get('/products', jwtAuth, adminController.adminGetProducts);

// POST search product
router.post('/search', jwtAuth, adminController.adminSearchProduct);

// // GET admin fetch all chat rooms
// router.get('/chatrooms', jwtAuth, adminController.getAllChatRooms);

// // GET room by id
// router.get('/chatrooms/getById', jwtAuth, adminController.getChatRoomId);

// GET fetch clients
router.get('/clients', jwtAuth, adminController.fetchClients);

// GET fetch orders
router.get('/orders', jwtAuth, adminController.fetchOrders);

// POST add new product
router.post('/new-product', jwtAuth, adminController.addNewProduct);

// GET edit product
router.get('/edit-product/:prodId', jwtAuth, adminController.fetchEditProduct);

// POST edit product
router.post('/edit-product/:prodId', jwtAuth, adminController.postEditProduct);

// POST delete product
router.delete('/delete-product/:prodId', jwtAuth, adminController.postDeleteProduct);

module.exports = router;
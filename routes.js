const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const adminController = require('./controllers/adminController');
const listController = require('./controllers/listController');
const itemController = require('./controllers/itemController');

router.get('/', (req, res) => {
  if (!req.user) return authController.loginForm(req, res);
  res.redirect('/lists');
});

router.get('/register', authController.registerForm);
router.post('/register', userController.registerUser, authController.login);
router.get('/login', authController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/lists', authController.isLoggedIn, listController.index);

router.get('/admin', authController.isLoggedIn, adminController.userAdmin);

router.delete('/users', userController.deleteUser);



//
// AJAX API Business

router.get('/API/lists', authController.isLoggedIn, listController.getLists);
router.post('/API/lists', authController.isLoggedIn, listController.save);

router.post('/API/items', authController.isLoggedIn, itemController.save);




module.exports = router;


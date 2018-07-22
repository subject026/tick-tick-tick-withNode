const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const authController = require('./controllers/authController');
const adminController = require('./controllers/adminController');

router.get('/', (req, res) => {
  if (!req.user) return authController.loginForm(req, res);
  res.redirect('/profile');
});

router.get('/register', authController.registerForm);
router.post('/register', userController.registerUser, authController.login);
router.get('/login', authController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/profile', authController.isLoggedIn, userController.profile);

router.get('/admin', authController.isLoggedIn, adminController.userAdmin);

router.delete('/users', userController.deleteUser);


module.exports = router;


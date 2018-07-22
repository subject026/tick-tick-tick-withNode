const passport = require('passport');

exports.loginForm = (req, res) => {
  res.render('login', {title: "Login"});
}
exports.registerForm = (req, res) => {
  res.render('register', {title: "Register"});
}


exports.login = passport.authenticate('local', {
  failureRedirect: '/login',
  failureFlash: 'Failed login',
  successRedirect: '/lists',
  successFlash: 'You\'re logged in!'
})

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
}

exports.isLoggedIn = (req, res, next) => {
  if (!req.user) return res.redirect('/');
  next();
}
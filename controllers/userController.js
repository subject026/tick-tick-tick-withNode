const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.registerUser = async (req, res, next) => {

  // Validate registration form data
  req.checkBody('email', 'You must supply an email address').notEmpty();
  req.checkBody('email', 'Email address is invalid').isEmail();
  req.checkBody('password', 'You must supply a password');
  req.checkBody('passwordConf', 'You must confirm your password').notEmpty();
  req.checkBody('passwordConf', 'Your passwords do notmatch').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    res.render('register', {title: "Register", body: req.body, errors});
    return;
  }

  // Check if email contains word admin
  const checkAdmin = req.body.email.split('@')[0];
  const isAdmin = (checkAdmin.toUpperCase() === 'ADMIN');

  // Create user record on DB
  const user = new User({email: req.body.email, isAdmin});
  try {
    await User.register(user, req.body.password);
  } catch(err) {
    console.log("registration err: ", err.message);
    req.flash('error', err.message);
    res.redirect('/register');
    return;
  }
  console.log('user saved...')
  next();
}


exports.profile = (req, res) => {
  res.render('profile', { currentPage: "profile" });
}

exports.deleteUser = async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.body.id});
  } catch(err) {
    console.log(err.message);
    res.json({error: err});
    return;
  }
  console.log("user deleted!?")
  res.json({error: false, complete: true});
  return;
}